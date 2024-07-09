$(document).ready(function () {//시작

  $(".logo-wrap .ham-wrap").click(function () {
    $(this).toggleClass('active');
    $("nav").slideToggle('show');
  });

  gsap.registerPlugin(ScrollTrigger) // 스크롤 트리거 등록

  const ani6 = gsap.timeline();
  ani6.to(".main-txt", { scale: 50, duration: 3, autoAlpha: 1, })
    .to(".main-txt", { autoAlpha: 0, })

  ScrollTrigger.create({
    animation: ani6,
    trigger: "#main-visual",
    start: "top top",
    end: "+=2000",
    scrub: 1,
    pin: true,
    anticipatePin: 1,
    markers: false
  });
});//끝

$(document).ready(function () {//시작

  gsap.registerPlugin(ScrollTrigger); //news 스크롤트리거 시작

  ScrollTrigger.matchMedia({
    "(min-width: 768px)": function () {

      let list = gsap.utils.toArray('.work ul li');
      let scrollTween = gsap.to(list, {
        xPercent: -100 * (list.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '.work',
          pin: true,
          pinSpacing: false,
          scrub: 1,
          strat: 'center center',
          end: '+=1000 top',
          markers: false
        }
      })
    }
  })

  var swiper = new Swiper(".product-list", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: { //768px 이상
        slidesPerView: 2,
        spaceBetween: 20
      },
      1200: {//1200 
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
});//끝

$(document).ready(function () {//시작

  $(".mgnb > li").click(function () {

    if ($(window).width() < 767) {
      if ($(this).children(".depth2").css("display") == "block") {
        $(this).children(".depth2").slideUp();
        $(this).children(".arr").find("span").removeClass("move");
      } else {
        $(".depth2").stop().slideUp();
        $(this).children(".depth2").slideDown();
        $(".arr span").removeClass("move");
        $(this).children(".arr").find("span").addClass("move");
      };
    }

  });
});//끝
