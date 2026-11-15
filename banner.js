const bannerCanvas = document.querySelector('.hero-scene');
const bannerContext = bannerCanvas.getContext('2d');
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
      bannerContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      bannerContext.clearRect(0, 0, bannerWidth, bannerHeight);
      bannerContext.translate(left, top);
      bannerContext.scale(scale, scale);
      drawRisingChart(bannerContext, now / 1000);
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
    bannerCanvas.width = Math.round(bannerWidth * pixelRatio);
    bannerCanvas.height = Math.round(bannerHeight * pixelRatio);
  }).observe(bannerCanvas);
  new IntersectionObserver(([entry]) => {
    bannerVisible = entry.isIntersecting;
    syncBanner();
  }).observe(bannerCanvas);
  bannerMotion.addEventListener('change', syncBanner);
  document.addEventListener('visibilitychange', syncBanner);
}
