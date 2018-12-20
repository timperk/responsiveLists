// Add classes on mobile viewports //

(function($) {
  var $window = $(window),
    $content = $("#content"),
    $content2 = $("#content2"),
    $header = $("#toggle"),
    $header2 = $("#toggle2");

  $window.resize(function resize() {
    if ($window.width() < 568) {
      return $content.addClass('mobile'), $content2.addClass('mobile'), $header.addClass('header-mobile'), $header2.addClass('header-mobile');
    }

    $content.removeClass('mobile');
    $content2.removeClass('mobile');
    $header.removeClass('header-mobile');
    $header2.removeClass('header-mobile');
    $('#content, #content2').removeAttr("style");
  }).trigger('resize');
})(jQuery);

// Toggle sections //

$("#toggle").click(function() {
  $("#content.mobile").slideToggle('fast');
    
  $('#toggle .arrow').toggleClass("flipped");    
    
  $("#content2.mobile").hide();
  return false;
});

$("#toggle2").click(function() {
  $("#content2.mobile").slideToggle('fast');
    
  $('#toggle2 .arrow').toggleClass("flipped"); 
    
  $("#content.mobile").hide();
  return false;
});
