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
  const smokeParticles = Array.from({length:220}, (_, index) => ({
    phase:(index * .61803398875) % 1,
    drift:Math.sin(index * 2.39),
    curl:index * .71,
    speed:.86 + .24 * Math.cos(index * 1.71)
  }));

  function drawCoinSmoke(context, time) {
    context.fillStyle = '#ffdb9b';
    for (const {phase, drift, curl, speed} of smokeParticles) {
      const age = (phase + time * .19 * speed) % 1;
      const spread = 14 + 30 * age;
      const x = 207 - 206 * age + drift * spread + Math.sin(age * 12 + curl) * spread * .45;
      const y = 472 - 214 * age + Math.cos(age * 10 + curl) * spread * .6;
      context.globalAlpha = .72 * Math.sin(Math.PI * age) * (1 - age * .65);
      context.beginPath();
      context.arc(x, y, 1, 0, Math.PI * 2);
      context.fill();
    }
    context.globalAlpha = 1;
  }

  function drawCoinLayers(context, time) {
    const rise = (1 - Math.cos(time * Math.PI / 3.8)) / 2;
    for (const [lift, radius] of [[13, 70], [28, 65]]) {
      const travel = rise * lift;
      if (travel < 1) continue;
      const y = 477 - travel;
      const shift = rise * lift * .12;
      const x = 208 + shift;
      const rim = context.createLinearGradient(x - radius, y, x + radius, y);
      rim.addColorStop(0, '#704019');
      rim.addColorStop(.28, '#ffd27b');
      rim.addColorStop(.52, '#a45b1e');
      rim.addColorStop(.84, '#ffe199');
      rim.addColorStop(1, '#a86a29');
      const face = context.createLinearGradient(x - radius, y + 14, x + radius, y - 14);
      face.addColorStop(0, '#956124');
      face.addColorStop(.44, '#e8ac55');
      face.addColorStop(.58, '#ffe5a0');
      face.addColorStop(.72, '#ca8d3e');
      face.addColorStop(1, '#edbe70');

      context.globalAlpha = Math.min(1, travel / 4);
      context.beginPath();
      context.ellipse(x, y + 3.5, radius, 16, 0, 0, Math.PI * 2);
      context.fillStyle = rim;
      context.fill();
      context.beginPath();
      context.ellipse(x, y, radius, 16, 0, 0, Math.PI * 2);
      context.fillStyle = face;
      context.fill();
      context.strokeStyle = '#ffdc94';
      context.lineWidth = 1.2;
      context.stroke();
    }
    context.globalAlpha = 1;
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
      bannerContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      bannerContext.clearRect(0, 0, bannerWidth, bannerHeight);
      bannerContext.translate(left, top);
      bannerContext.scale(scale, scale);
      drawCoinSmoke(bannerContext, now / 1000);
      drawCoinLayers(bannerContext, now / 1000);
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
