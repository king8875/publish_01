
$(document).ready(function () {

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
      $('.nav-box span').css('color', '#eee');
      $('.side_bar.visible').addClass('black');
    }




  })



  $('.main-background').on('mouseleave', function () {
    $('.main-background ul').removeClass('visible');
    $('.btn_con').removeClass('visible');

  });

  $('.main-background').on('mouseover', function () {
    $('.main-background ul').addClass('visible');
    $('.btn_con').addClass('visible');

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


})



// $.ajax({
//   type: 'GET',
//   url: 'https://codingapple1.github.io/hello.txt'
// }).done(function (결과) {
//   console.log('gogogogo');
// });

// $.get('https://codingapple1.github.io/hello.txt').done(function (결과) {
//   console.log(결과)
// })


// var imgloading = new Promise(function (성공, 실패) {
//   var img = document.querySelector('#test');
//   img.addEventListener('load', function () {
//     성공();
//   });
//   img.addEventListener('error', function () {
//     실패();
//   });
// });

// imgloading.then(function () {
//   console.log('good');
// }).catch(function () {
//   console.log('bad')
// });


