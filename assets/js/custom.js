$(document).ready(function(){
    $(".toggle").click(function(){
        $("body").addClass("menuToggle");
    });
    $(".close, .nav-link").click(function(){
    $("body").removeClass("menuToggle");
    });
});

// $('.moreless-button').click(function() {
//     $('.moretext').slideToggle();
//     if ($('.moreless-button').text() == "Read Less") {
//       $(this).text("Read More")
//     } else {
//       $(this).text("Read Less")
//     }
//   });


  $('.moreless-button').click(function() {
    var $this = $(this);
    var $moreText = $this.closest('.luxury-text').find('.moretext');
  
    $moreText.slideToggle();
    if ($this.text() == "Read Less") {
      $this.text("Read More");
    } else {
      $this.text("Read Less");
    }
  });