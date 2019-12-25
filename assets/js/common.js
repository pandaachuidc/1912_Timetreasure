$(document).ready(function() {
  // $(".igdtText").click(function() {
  //   $(this).fadeOut();
  //   $(this)
  //     .next(".igdtTextAfter")
  //     .addClass("on")
  //     .fadeIn();
  // });

  if ($(window).width() <= 750) {
    $(".igdtWrap").click(function() {
      $(this).toggleClass("on");
      
    });
  }

  // $(".igdtText").hover(
  //   function() {
  //     $(this).fadeOut();
  //     $(this)
  //       .next(".igdtTextAfter")
  //       .addClass("on")
  //       .fadeIn();
  //   },
  //   function() {
  //     $(this).fadeIn();
  //     $(this)
  //       .next(".igdtTextAfter")
  //       .removeClass("on")
  //       .fadeOut();
  //   }
  // );

  // mainMenu START
  $(".navigation_trigger").on("click", function() {
    $(".navigation_trigger").addClass("nav_in");
    $(".nav_cover").addClass("nav_in");
    $(".contents_nav").addClass("nav_in");
    $(".nav_close").addClass("nav_in");
    $(".nav_list").addClass("nav_in");
    $(".menu").addClass("nav_in");
    $("body").addClass("fixed");
    return false;
  });
  $(".nav_close").on("click", function() {
    $(".navigation_trigger").removeClass("nav_in");
    $(".nav_cover").removeClass("nav_in");
    $(".contents_nav").removeClass("nav_in");
    $(".nav_close").removeClass("nav_in");
    $(".nav_list").removeClass("nav_in");
    $(".menu").removeClass("nav_in");
    $("body").removeClass("fixed");
    return false;
  });
  $(".nav_list a").on("click", function() {
    $(".navigation_trigger").removeClass("nav_in");
    $(".nav_cover").removeClass("nav_in");
    $(".contents_nav").removeClass("nav_in");
    $(".nav_close").removeClass("nav_in");
    $(".nav_list").removeClass("nav_in");
    $(".menu").removeClass("nav_in");
    $("body").removeClass("fixed");
  });

  $(".parallax-window").parallax({
    imageSrc: "assets/images/tree_pc.jpg"
  });

  $(".owl-carousel")
    .on("initialized.owl.carousel changed.owl.carousel", function(e) {
      if (!e.namespace) {
        return;
      }
      var carousel = e.relatedTarget;
      var cnum = carousel.relative(carousel.current());
      $(".btns a").removeClass("on");
      $(".btns a")
        .eq(cnum)
        .addClass("on");
      $(".btns").removeClass("bg00 bg01 bg02 bg03 bg04 bg05 bg06 bg07");
      $(".btns").addClass("bg0" + cnum);
    })
    .owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      autoplay: true,
      nav: true,
      navText: [
        "<img src='assets/images/leftArrow.png'>",
        "<img src='assets/images/rightArrow.png'>"
      ]
    });
  var owldata = $(".owl-carousel").data("owl.carousel");
  $(".btns a").on("click", function() {
    var num = $(this).index();
    owldata.to(num);
    return false;
  });
  // mainMenu END

  //   table START
  $(".locationSelect select").on("change", function() {
    $(".locationResult .result").removeClass("on");
    if ($(this).val() == "01") {
      $(".locationResult .result")
        .eq(0)
        .addClass("on");
    } else if ($(this).val() == "02") {
      $(".locationResult .result")
        .eq(1)
        .addClass("on");
    } else if ($(this).val() == "03") {
      $(".locationResult .result")
        .eq(2)
        .addClass("on");
    } else if ($(this).val() == "04") {
      $(".locationResult .result")
        .eq(3)
        .addClass("on");
    } else if ($(this).val() == "05") {
      $(".locationResult .result")
        .eq(4)
        .addClass("on");
    } else if ($(this).val() == "06") {
      $(".locationResult .result")
        .eq(5)
        .addClass("on");
    } else if ($(this).val() == "07") {
      $(".locationResult .result")
        .eq(6)
        .addClass("on");
    } else if ($(this).val() == "08") {
      $(".locationResult .result")
        .eq(7)
        .addClass("on");
    } else if ($(this).val() == "09") {
      $(".locationResult .result")
        .eq(8)
        .addClass("on");
    } else if ($(this).val() == "10") {
      $(".locationResult .result")
        .eq(9)
        .addClass("on");
    } else if ($(this).val() == "11") {
      $(".locationResult .result")
        .eq(10)
        .addClass("on");
    } else if ($(this).val() == "12") {
      $(".locationResult .result")
        .eq(11)
        .addClass("on");
    } else if ($(this).val() == "13") {
      $(".locationResult .result")
        .eq(12)
        .addClass("on");
    } else if ($(this).val() == "14") {
      $(".locationResult .result")
        .eq(13)
        .addClass("on");
    } else if ($(this).val() == "15") {
      $(".locationResult .result")
        .eq(14)
        .addClass("on");
    }
    return false;
  });

  $(".gotopBtn").on("click", function() {
    $("html, body").animate(
      {
        scrollTop: $(".time-kv").offset().top - 100
      },
      700
    );
    return false;
  });
  //   table END

  //   animate START
  AOS.init({
    duration: 1200,
    useClassNames: true,
    initClassName: false,
    animatedClassName: "animated"
  });
  //   animate END
});
