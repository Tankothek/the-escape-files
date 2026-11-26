(() => {
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || !('IntersectionObserver' in window) || !('MutationObserver' in window) ||
      !window.CSS?.supports('clip-path', 'polygon(0 0, 100% 0, 100% 100%, 0 100%)')) return;

  const main = document.querySelector('main');
  const grid = main.querySelector('#grid');
  const headings = main.querySelectorAll(
    '#guideTitle, #weeks .section-head h2, #knowledge .section-head h2, #glossaryTitle, #learnTitle, #learn > h3, #about h2'
  );
  const pending = new Map();
  const nearby = new Set();
  const revealed = new Set();
  let frame = 0;

  function finish(element, remember = true) {
    const item = pending.get(element);
    if (!item) return;
    if (remember && item.key) revealed.add(item.key);
    item.colorLayer?.remove();
    delete element.dataset.coverSweep;
    element.style.removeProperty('--scroll-progress');
    observer.unobserve(element);
    nearby.delete(element);
    pending.delete(element);
  }

  function addColorLayer(element, item) {
    const image = item.image.cloneNode();
    image.classList.add('cover-sweep-color');
    image.setAttribute('aria-hidden', 'true');
    image.alt = '';
    image.draggable = false;
    element.append(image);
    item.colorLayer = image;
  }

  function updateReveal() {
    frame = 0;
    const {clientWidth: width, clientHeight: height} = document.documentElement;
    const compact = width <= 640 || height <= 540;
    const positions = [...nearby].map(element => [element, element.getBoundingClientRect()]);

    for (const [element, bounds] of positions) {
      const item = pending.get(element);
      const distance = item.image
        ? Math.max(64, Math.min(bounds.height * .8, height * .38, compact ? 148 : 250))
        : Math.max(48, Math.min(height * .16, 105));
      const offset = item.image && !compact ? Math.max(0, bounds.left) / width * 44 : 0;
      const progress = Math.min(1, (height - bounds.top - offset) / distance);
      if (progress <= item.progress) continue;
      if (progress >= 1) {
        finish(element);
        continue;
      }
      if (item.image && !item.colorLayer) addColorLayer(element, item);
      item.progress = progress;
      element.style.setProperty('--scroll-progress', progress);
    }
  }

  function scheduleReveal() {
    if (nearby.size && !frame) frame = requestAnimationFrame(updateReveal);
  }

  // Only measure images and headings close to the viewport while scrolling.
  const observer = new IntersectionObserver(entries => {
    for (const {target, isIntersecting} of entries) {
      if (!pending.has(target)) continue;
      if (isIntersecting) nearby.add(target);
      else nearby.delete(target);
    }
    scheduleReveal();
  }, {rootMargin: '0px 0px 80px 0px'});

  function cardItems(nodes) {
    const items = [];
    for (const tile of nodes) {
      if (tile.nodeType !== Node.ELEMENT_NODE) continue;
      const element = tile.querySelector('.cover');
      const image = element?.querySelector('img');
      if (image) items.push({element, tile, image, key: tile.id || 'file:' + element.dataset.open});
    }
    return items;
  }

  function watch(items) {
    if (motion.matches) return;
    const height = document.documentElement.clientHeight;
    const destination = document.getElementById(location.hash.slice(1));

    // Read all positions before changing any styles.
    const toObserve = items.filter(({element, tile, key}) => {
      if (!element.isConnected || pending.has(element) || revealed.has(key)) return false;
      if (element.getBoundingClientRect().top >= height &&
          !tile.contains(destination) && !tile.contains(document.activeElement)) return true;
      if (key) revealed.add(key);
      return false;
    });

    for (const item of toObserve) {
      const {element, image} = item;
      pending.set(element, {...item, progress: 0});
      if (image) element.dataset.coverSweep = '';
      else element.style.setProperty('--scroll-progress', 0);
      observer.observe(element);
    }
  }

  const changes = new MutationObserver(records => {
    const added = [];
    for (const record of records) {
      for (const {element} of cardItems(record.removedNodes)) finish(element, false);
      added.push(...cardItems(record.addedNodes));
    }
    watch(added);
  });
  changes.observe(grid, {childList: true});

  function revealDestination(target) {
    if (!target) return;
    for (const [element, {tile}] of pending) {
      if (tile.contains(target)) finish(element);
    }
  }

  main.addEventListener('focusin', event => revealDestination(event.target));
  window.addEventListener('hashchange', () =>
    revealDestination(document.getElementById(location.hash.slice(1))));
  window.addEventListener('scroll', scheduleReveal, {passive: true});
  window.addEventListener('resize', scheduleReveal);
  motion.addEventListener('change', () => {
    if (motion.matches) for (const element of pending.keys()) finish(element);
  });

  requestAnimationFrame(() => {
    const headingItems = [...headings].map(element => ({element, tile: element}));
    for (const element of headings) element.dataset.scrollLine = '';
    watch([...headingItems, ...cardItems(grid.children)]);
  });
})();
