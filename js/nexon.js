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




