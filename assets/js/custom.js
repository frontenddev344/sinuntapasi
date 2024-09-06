$(document).ready(function(){
    $(".toggle").click(function(){
        $("body").addClass("menuToggle");
    });
    $(".close, .nav-link").click(function(){
    $("body").removeClass("menuToggle");
    });
});

const header = document.querySelector(".site-header");
const toggleClass = "header-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});



  $('.moreless-button').click(function() {
    var $this = $(this);
    var $moreText = $this.closest('.luxury-text').find('.moretext');
  
    $moreText.slideToggle();
    if ($this.text() == "Lue Vähemmän") {
      $this.text("Lue lisää");
    } else {
      $this.text("Lue Vähemmän");
    }
  });

  AOS.init({
    duration: 1200,
  })
  