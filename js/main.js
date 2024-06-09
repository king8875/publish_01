
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

    var progressBar = document.querySelector('#progress');
    progressBar.style.display = 'block';
    progressBar.style.width = scrolled + '%';
  })



  $('.first_portfolio_container').on('mouseleave', function () {
    $('.first_portfolio_container ul').removeClass('visible');
    $('.git_btn').removeClass('visible');

  });

  $('.first_portfolio_container').on('mouseover', function () {
    $('.first_portfolio_container ul').addClass('visible');
    $('.git_btn').addClass('visible');

  });

  $('.second_portfolio_container').on('mouseleave', function () {
    $('.second_portfolio_container ul').removeClass('visible');
    $('.git_btn02').removeClass('visible');
    $('.homepage').removeClass('visible');


  });

  $('.second_portfolio_container').on('mouseover', function () {
    $('.second_portfolio_container ul').addClass('visible');
    $('.git_btn02').addClass('visible');
    $('.homepage').addClass('visible');

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


