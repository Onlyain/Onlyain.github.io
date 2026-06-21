(function () {
  // ========== 只在首页运行诗词打字机 ==========
  if (window.location.pathname === '/') {
    var poems = [
      "来去春景，怅然秋心。",
      "日落飞锦绣长河，天地壮我行色。",
      "劲发江潮落，气收秋毫平。",
      "长风破浪会有时，直挂云帆济沧海。",
      "满堂花醉三千客，一剑霜寒十四州。",
      "会当凌绝顶，一览众山小。",
      "日月忽其不淹兮，春与秋其代序。",
      "日月之行，若出其中；星汉灿烂，若出其里。"
    ];

    function initTyped() {
      var el = document.querySelector('#subtitle');
      if (!el) return;
      new Typed(el, {
        strings: poems,
        typeSpeed: 175,
        backSpeed: 100,
        backDelay: 2000,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '_'
      });
    }

    if (window.Typed) {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTyped);
      } else {
        initTyped();
      }
    } else {
      var script = document.createElement('script');
      script.src = 'https://lib.baomitu.com/typed.js/2.0.12/typed.min.js';
      script.onload = function () {
        initTyped();
      };
      document.head.appendChild(script);
    }
  }

  // ========== 加密文章评论隐藏（所有页面生效） ==========
  function hideCommentsIfEncrypted() {
    var comments = document.querySelector('.comments');
    if (!comments) return;

    var inputArea = document.querySelector('.hbe-input');
    if (inputArea) {
      comments.style.display = 'none';
    } else {
      comments.style.display = '';
    }
  }

  hideCommentsIfEncrypted();

  var checkTimer = setInterval(function () {
    var inputArea = document.querySelector('.hbe-input');
    if (!inputArea) {
      var comments = document.querySelector('.comments');
      if (comments) comments.style.display = '';
      clearInterval(checkTimer);
    }
  }, 300);
})();