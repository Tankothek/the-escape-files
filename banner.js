const bannerCanvas = document.querySelector('.hero-scene');
const bannerContext = bannerCanvas.getContext('2d');
const smokeCanvas = document.querySelector('.hero-smoke');
const smokeContext = smokeCanvas.getContext('2d');
const bannerMotion = matchMedia('(prefers-reduced-motion: reduce)');
const narrowBanner = matchMedia('(max-width:640px)');

if (bannerContext) {
  // Artwork coordinates correspond to the original 2:1 banner.
  const artWidth = 1200;
  const artHeight = 600;
  let bannerWidth = 0;
  let bannerHeight = 0;
  let pixelRatio = 1;
  let bannerVisible = false;
  let bannerFrame;
  let lastFrame = -Infinity;
  const artwork = new Image();
  artwork.src = 'escapehub-token-hero.jpg';
  const plume = document.createElement('canvas');
  const plumeWidth = 368;
  const plumeTop = 226;
  const plumeHeight = 226;
  plume.width = plumeWidth;
  plume.height = plumeHeight;
  const plumeContext = plume.getContext('2d');
  const rightFade = plumeContext.createLinearGradient(270, 0, plumeWidth, 0);
  rightFade.addColorStop(0, '#000');
  rightFade.addColorStop(1, 'transparent');
  const verticalFade = plumeContext.createLinearGradient(0, 0, 0, plumeHeight);
  verticalFade.addColorStop(0, 'transparent');
  verticalFade.addColorStop(.1, '#000');
  verticalFade.addColorStop(.84, '#000');
  verticalFade.addColorStop(1, 'transparent');

  function drawCoinSmoke(context, time) {
    if (!artwork.naturalWidth) return;
    const sourceScale = artwork.naturalWidth / artWidth;
    plumeContext.clearRect(0, 0, plumeWidth, plumeHeight);
    for (let row = 0; row < plumeHeight; row++) {
      const y = plumeTop + row;
      const lift = 1 - row / plumeHeight;
      const shift = lift * (4 * Math.sin(y * .058 - time * 2.1) + 2.5 * Math.sin(y * .11 - time * 3));
      const sourceY = y * sourceScale;
      if (shift > 0) {
        plumeContext.drawImage(artwork, 0, sourceY, sourceScale, sourceScale, 0, row, shift, 1);
      }
      plumeContext.drawImage(artwork, 0, sourceY, (plumeWidth + 8) * sourceScale, sourceScale,
        shift, row, plumeWidth + 8, 1);
    }
    plumeContext.globalCompositeOperation = 'destination-in';
    plumeContext.fillStyle = rightFade;
    plumeContext.fillRect(0, 0, plumeWidth, plumeHeight);
    plumeContext.fillStyle = verticalFade;
    plumeContext.fillRect(0, 0, plumeWidth, plumeHeight);
    plumeContext.globalCompositeOperation = 'source-over';
    context.drawImage(plume, 0, plumeTop);
  }

  function drawRisingChart(context, time) {
    // The four corners follow the phone screen’s perspective.
    const point = (x, y) => [
      1016 + 111 * x - 34 * y,
      359 - 7 * x + 74 * y + 9 * x * y
    ];
    context.save();
    context.beginPath();
    context.moveTo(...point(0, 0));
    for (const corner of [[1, 0], [1, 1], [0, 1]]) context.lineTo(...point(...corner));
    context.closePath();
    context.clip();
    context.fillStyle = '#071824';
    context.fillRect(975, 350, 155, 90);
    context.lineWidth = .65;
    context.strokeStyle = '#143547';
    for (const row of [.2, .4, .6, .8]) {
      context.beginPath();
      context.moveTo(...point(0, row));
      context.lineTo(...point(1, row));
      context.stroke();
    }

    const advance = time * 2.25;
    const offset = advance % 1;
    const sample = Math.floor(advance);
    const slot = 1 / 18;
    const price = (index, x) => .77 - x * .53
      + Math.sin(index * 1.42) * .055 + Math.sin(index * .54) * .081 + Math.sin(index * 2.3) * .018;
    for (let index = 0; index <= 19; index++) {
      const x = (index - offset) * slot;
      const open = price(sample + index, x);
      const close = price(sample + index + 1, x + slot);
      const high = Math.min(open, close) - .035;
      const low = Math.max(open, close) + .04;
      const color = close < open ? '#4aee9b' : '#ff6f83';
      const halfWidth = slot * .29;
      const bodyEnd = Math.abs(close - open) < .018
        ? open + (close < open ? -.018 : .018) : close;
      context.strokeStyle = context.fillStyle = color;
      context.lineWidth = 1.25;
      context.beginPath();
      context.moveTo(...point(x, high));
      context.lineTo(...point(x, low));
      context.stroke();
      context.beginPath();
      context.moveTo(...point(x - halfWidth, open));
      context.lineTo(...point(x + halfWidth, open));
      context.lineTo(...point(x + halfWidth, bodyEnd));
      context.lineTo(...point(x - halfWidth, bodyEnd));
      context.closePath();
      context.fill();
    }
    context.restore();
  }

  function animateBanner(now) {
    bannerFrame = undefined;
    if (bannerMotion.matches || !bannerVisible || document.hidden) return;
    if (now - lastFrame >= 30 && bannerWidth && bannerHeight) {
      lastFrame = now;
      const scale = narrowBanner.matches ? bannerWidth / artWidth
        : Math.max(bannerWidth / artWidth, bannerHeight / artHeight);
      const left = (bannerWidth - artWidth * scale) / 2;
      const top = (bannerHeight - artHeight * scale) * (narrowBanner.matches ? 1 : .96);
      for (const [context, draw] of [[smokeContext, drawCoinSmoke], [bannerContext, drawRisingChart]]) {
        if (!context) continue;
        context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        context.clearRect(0, 0, bannerWidth, bannerHeight);
        context.translate(left, top);
        context.scale(scale, scale);
        draw(context, now / 1000);
      }
    }
    bannerFrame = requestAnimationFrame(animateBanner);
  }

  function syncBanner() {
    if (bannerFrame !== undefined) cancelAnimationFrame(bannerFrame);
    bannerFrame = undefined;
    if (!bannerMotion.matches && bannerVisible && !document.hidden) {
      bannerFrame = requestAnimationFrame(animateBanner);
    }
  }

  new ResizeObserver(([entry]) => {
    ({width:bannerWidth, height:bannerHeight} = entry.contentRect);
    pixelRatio = Math.min(devicePixelRatio || 1, 2);
    for (const canvas of [bannerCanvas, smokeCanvas]) {
      canvas.width = Math.round(bannerWidth * pixelRatio);
      canvas.height = Math.round(bannerHeight * pixelRatio);
    }
  }).observe(bannerCanvas);
  new IntersectionObserver(([entry]) => {
    bannerVisible = entry.isIntersecting;
    syncBanner();
  }).observe(bannerCanvas);
  bannerMotion.addEventListener('change', syncBanner);
  document.addEventListener('visibilitychange', syncBanner);
}
