window.onkeydown = function( event ) {
  if ( event.keyCode === 27 ) {
    // find close button and click
    document.querySelector(".aui-iconfont-close-dialog").click();
  }
};
