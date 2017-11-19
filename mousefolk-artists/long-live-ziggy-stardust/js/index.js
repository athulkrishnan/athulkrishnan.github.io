$(document).ready(function() {
  var polys = $('#Bowie *'),
      replay = $('#replay');
  $('#Bowie').css('opacity', '1');
  $('#loader').css("opacity", "0");
  
  FadeBowie();
  replay.on('click', FadeBowie);
  
  function FadeBowie(){
    replay.attr("disabled", true).toggleClass('hidden');
    setTimeout(enableReplay, 12000);

    TweenMax.staggerFrom(polys, .4, {
      scaleY: 0,
      scaleX: 0,
      alpha: 0,
      transformOrigin: '-400% 50%'
    }, .01, Lazarus());
  }

  function Lazarus() {
    $('.quote').css('opacity', '1').css('margin-top', '0px');
  }
  function enableReplay(){
    replay.css('display', 'block')
      .removeAttr('disabled')
      .toggleClass('hidden');
  }
});