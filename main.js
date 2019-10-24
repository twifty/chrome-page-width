var delta = 10;

if (chrome && chrome.runtime) {
  window.addEventListener('mousewheel', function(e) {
    if (e.altKey) {
      if (e.wheelDelta/120 > 0) {
        adjustWidth(delta);
      }
      else {
        adjustWidth(-delta);
      }
      e.preventDefault();
    }
  }, {passive: false});
}

function adjustWidth(value) {
  var page = document.documentElement;
  var offset = parseInt(value);
  var original = parseInt(page.style.marginLeft) || 0;
  var margin = offset + original;

  if (margin < 0) {
    margin = 0
  }

  page.style.marginLeft = margin + 'px';
  page.style.marginRight = margin + 'px';
}
