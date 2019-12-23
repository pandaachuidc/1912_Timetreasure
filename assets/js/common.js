$(document).ready(function() {
  //大於0(第2個之後的tab_content li)都隱藏
  $(".igdtTextAfter").hide();

  // $(".igdtText").click(function() {
  //   $(".igdtText")
  //     .eq($(this).index())
  //     .fadeOut();
  //   $(".igdtTextAfter")
  //     .eq($(this).index())
  //     .fadeIn();
  //   //把所有的tab_content li隱藏
  // });




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

});



