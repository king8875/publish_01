
$(document).ready(function () {

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".portfolio_title", {
    xPercent: -50,
    duration: 10,
    ease: "none",
    repeat: -1
  });

  gsap.to(".text01", {
    scrollTrigger: {
      trigger: ".text01",
      scrub: 1,
      start: "bottom center"

    },
    x: 200,
    duration: 1
  });

  gsap.to(".text02", {
    scrollTrigger: {
      trigger: ".text02",
      scrub: 1,
      start: "bottom center"

    },
    x: -200,
    duration: 1
  });

  gsap.to(".scroll", {
    opacity: 0,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });

  gsap.to(".about_item_content01", {
    scrollTrigger: {
      trigger: ".about_item_content01",
      scrub: true,
      markers: true,
      start: "top bottom",
      end: "center center",
    },
    xPercent: 51,

    duration: 5,
    ease: "power1.inOut"
  });

  gsap.to(".about_item_content02", {
    scrollTrigger: {
      trigger: ".about_item_content02",
      scrub: true,
      markers: true,
      start: "top bottom",
      end: "center center",
    },
    xPercent: -51,

    duration: 5,
    ease: "power1.inOut"
  });



  // loading 기능
  const loading_page = $('#load');

  loading_page.css('visibility', 'hidden');


  const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 5000
    },

    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets'
    },
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    }
  })

  window.addEventListener('scroll', function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //현재 스크롤 위치
    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight; //전체 스크롤 값
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight; //
    var scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;

    console.log(scrollTop);

    var progressBar = document.querySelector('#progress');
    progressBar.style.display = 'block';
    progressBar.style.width = scrolled + '%';

    if (scrollTop > 800) {
      $('.nav-container').addClass('nav_bar_white');
      $('.nav-box span').css('color', 'black');

    } else if (scrollTop < 800) {
      $('.nav-container').removeClass('nav_bar_white');
      $('.nav-box span').css('color', '#fff');


      $('.side_bar.visible').addClass('black');

    }

  });



  $('.main-background').on('mouseleave', function () {
    $('.main-background ul').removeClass('visible');
    $('.btn_con').removeClass('visible');
    $('.portfolio_content').removeClass('visible');


  });

  $('.main-background').on('mouseover', function () {
    $('.main-background ul').addClass('visible');
    $('.btn_con').addClass('visible');
    $('.portfolio_content').addClass('visible');

  });

  $('.menu_icon').off('click').on('click', function () {
    $('.side_bar').toggleClass('visible');
  });


  const contents = document.querySelectorAll('.scroll_content');

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, options);

  contents.forEach((content) => {
    observer.observe(content);
  });

});




