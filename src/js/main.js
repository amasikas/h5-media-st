$(function(){
  var canvas = $('#superman');
  var _canvas = canvas.get(0);
  var context = _canvas.getContext('2d');
  var vW = 1500;
  var vH = 700;
  canvas.attr({
    width: vW,
    height: vH
  });
  context.fillStyle = 'red';
  context.fillStyle = 'rgba(255,255,0,0.5)';
  $(document).on('click', '#pl', function() {
    $('#vv')[0].play();
    begin();
  });
  $(document).on('click', '#bigboom', function() {
    let go = 9000;
    while(go>0){
      console.log(go);
      go --;
    }
  });
  function begin(){
    if($('#vv')[0].paused) {
      return ;
    } else {
      context.clearRect(0, 0, vW, vH);
      context.drawImage($('#vv')[0], 0, 0, vW, vH, 0, 0, vW, vH);
      window.requestAnimationFrame(begin);
    }
  }

});
