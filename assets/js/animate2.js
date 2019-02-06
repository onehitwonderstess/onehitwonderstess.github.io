var animateHTML2 = function() {
  var elems;
  var windowHeight;
  function init() {
    elems = document.querySelectorAll('.hidden2');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace(
          'hidden2',
          'fade2'
        );
      }
    }
  }
  return {
    init: init
  };
};
