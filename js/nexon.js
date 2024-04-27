window.addEventListener('scroll', function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //현재 스크롤 위치
    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight; //전체 스크롤 값
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight; //
    var scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
    var navContainer = document.querySelector('header');
    console.log(scrollTop);
    if (scrollTop >= 100) {
        navContainer.style.backgroundColor = 'white';
        // navContainer.addEventListener('mouseenter', function () {
        //     this.style.backgroundColor = 'white';
        // });
    } else if (scrollTop <= 90) {
        navContainer.style.backgroundColor = 'transparent';

    };
});
var navContainer = document.querySelector('header');

navContainer.addEventListener('mouseenter', function () {
    if (document.documentElement.scrollTop >= 100 ) {
        this.style.backgroundColor = 'white';

    }
});




// $(window).on('scroll', function() {
//     var scroll = $(window).scrollTop();
//     console.log(scroll);
// })




$('.sec04_item01').mouseover(function() {
    $('.sec04_main_img_01 img').css('transform', 'scale(1.1)');
});
$('.sec04_item01').mouseleave(function() {
    $('.sec04_main_img_01 img').css('transform', 'scale(1)');
});

$('.sec04_item02').mouseover(function() {
    $('.sec04_main_img_02 img').css('transform', 'scale(1.1)');
});
$('.sec04_item02').mouseleave(function() {
    $('.sec04_main_img_02 img').css('transform', 'scale(1)');
});

$('.sec04_item03').mouseover(function() {
    $('.sec04_main_img_03 img').css('transform', 'scale(1.1)');
});
$('.sec04_item03').mouseleave(function() {
    $('.sec04_main_img_03 img').css('transform', 'scale(1)');
});


const tabItem = document.querySelectorAll('.tab_item');
const tabContent = document.querySelectorAll('.tab_content');

tabItem.forEach((item, index) => {
    item.addEventListener('click', function(e) {
        e.preventDefault();

        tabContent.forEach((content) => {
            content.classList.remove('active');
        });
        tabItem.forEach((content) => {
            content.classList.remove('active');
        });

        tabItem[index].classList.add('active');
        tabContent[index].classList.add('active');
    });
});