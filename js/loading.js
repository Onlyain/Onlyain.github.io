(function () {
  document.documentElement.style.overflow = 'hidden';

  var overlay = document.createElement('div');
  overlay.id = 'curtain-overlay';
  overlay.innerHTML = `
    <div class="curtain-left"></div>
    <div class="curtain-right"></div>
    <div class="curtain-loader">
      <div class="curtain-rings">
        <div class="ring ring-1"></div>
        <div class="ring ring-2"></div>
        <div class="ring ring-3"></div>
      </div>
      <div class="curtain-text">Loading...</div>
    </div>
  `;
  document.body.appendChild(overlay);

  window.addEventListener('load', function () {
    setTimeout(function () {
      overlay.classList.add('open');
      setTimeout(function () {
        document.documentElement.style.overflow = '';
        if (overlay.parentNode) {
          overlay.parentNode.removeChild(overlay);
        }
        var navbar = document.querySelector('.navbar');
        if (navbar) {
          navbar.style.transform = '';
        }
      }, 1000);
    }, 2000);
  });
})();