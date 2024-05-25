


$('.store').mouseover(function () {
    $('.store_pop').css('visibility', 'visible');
    $('#arrow').css('transform', 'rotate(180deg)')
});
$('.store').mouseleave(function () {
    $('.store_pop').css('visibility', 'hidden');
    $('#arrow').css('transform', 'rotate(0deg)')
});

$('.delivery').mouseover(function () {
    $('.delivery_pop').css('visibility', 'visible');
});
$('.delivery').mouseleave(function () {
    $('.delivery_pop').css('visibility', 'hidden');
});


const categoryList = $('.main_category_list li');
const categoryList_a = $('.main_category_list a');

const main = $('.main_category_list').children('li');
const mainList = $('.main_category_list');

mainList.on('mouseover', 'li', function (event) {
    $(this).addClass('selected');
});
mainList.on('mouseleave', 'li', function (event) {
    $(this).removeClass('selected');
});




$(document).ready(function () {
    const slide_track = $('.slide_track');
    const slideWidth = $('.slide_item').width();
    let currentIdx = 0;

    const good = $('.slide_item').length;
    console.log(good);

    $('.next_btn').click(function () {
        if (currentIdx < $('.slide_item').length - 1) {
            currentIdx++;
            updateSlider();
        }
    })

    $('pre_btn').click(function () {
        if (currentIdx > 0) {
            currentIdx--;
            updateSlider();

        }
    })
    function updateSlider() {
        slide_track.css('transform', 'translateX(' + (-slideWidth * currentIdx) + 'px)');
    }
});


$('#slide_btn02').on('click', function () {
    $('.slide_track01').css('transform', 'translateX(-1029px)');
    $('.only_olive_btn_item01').removeClass('active');
    $('.only_olive_btn_item02').addClass('active');


});
$('#slide_btn01').on('click', function () {
    $('.slide_track01').css('transform', 'translateX(0px)');
    $('.only_olive_btn_item02').removeClass('active');
    $('.only_olive_btn_item01').addClass('active');
});

$('.sub_btn_item02').on('click', function () {
    $('.sub_wrap').css('transform', 'translateX(-1020px)');
    $('.sub_btn_item02').addClass('active');
    $('.sub_btn_item01').removeClass('active');
    $('.sub_btn_item03').removeClass('active');
});
$('.sub_btn_item01').on('click', function () {
    $('.sub_wrap').css('transform', 'translateX(0px)');
    $('.sub_btn_item01').addClass('active');
    $('.sub_btn_item02').removeClass('active');
    $('.sub_btn_item03').removeClass('active');
});
$('.sub_btn_item03').on('click', function () {
    $('.sub_wrap').css('transform', 'translateX(-2040px)');
    $('.sub_btn_item03').addClass('active');
    $('.sub_btn_item02').removeClass('active');
    $('.sub_btn_item01').removeClass('active');
})







var num = 1;

$('.btn_box').on('click', function () {
    console.log(num);

    if (num == 1) {
        $('.today_update_ul').css('transform', 'translateX(-1020px)');
        $('.num02').html(num + 1);
        num = num + 1;
        return num;
    };
    if (num == 2) {
        $('.today_update_ul').css('transform', 'translateX(-2040px)');
        $('.num02').html(num + 1);
        num = num + 1;
        return num;
    };
    if (num == 3) {
        $('.today_update_ul').css('transform', 'translateX(0px)');
        $('.num02').html('1');
        num = 1;
        return num;
    };
});


for (let i = 0; i < 10; i++) {
    $('.tab_btn').eq(i).on('click', function () {
        $('.tab_btn').removeClass('active');
        $('.tab_btn').eq(i).addClass('active');


    })

};



$(document).ready(function () {
    for (let i = 0; i < 10; i++) {
        $('.tab_btn').eq(i).on('click', function () {
            $('.main_brand').css('transform', `translateX(calc(-1020px * ${i}))`);
        });
    }
});


$(document).ready(function () {
    const sliderWrap = $('.main_brand');
    const slider = document.querySelectorAll('.brand_img');
    const sliderBtnPrev = document.querySelector('#brand_pre');
    const sliderBtnNext = document.querySelector('#brand_next');
    let currentIndex = 0;
    const slideWidth = 1020; // 각 슬라이드의 너비

    sliderBtnNext.addEventListener('click', function () {
        if (currentIndex < slider.length - 1) {
            currentIndex++;
            sliderWrap.css('transform', `translateX(-${slideWidth * currentIndex}px)`);
        }

    });

    sliderBtnPrev.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            sliderWrap.css('transform', `translateX(-${slideWidth * currentIndex}px)`);
        }
    });
});




$(document).ready(function () {
    const sliderUl = $('.live_item_ul_left');
    const sliderLi = $('.live_itemli');
    const sliderLiSec = $('.live_area_list');

    const slideHeight = 236;
    let liveCurrentIndex = 0;

    setInterval(function () {
        liveCurrentIndex++;
        if (liveCurrentIndex >= sliderLi.length) {
            liveCurrentIndex = 0;
        }
        sliderUl.css('transform', `translateY(-${slideHeight * liveCurrentIndex}px)`);

        sliderLiSec.removeClass('live_area_item_list_active');
        sliderLiSec.eq(liveCurrentIndex).addClass('live_area_item_list_active');

    }, 3000);
});