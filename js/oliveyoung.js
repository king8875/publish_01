


$('.store').mouseover(function () {
    $('.store_pop').css('visibility', 'visible');
    $('#arrow').css('transform', 'rotate(180deg)')
});
$('.store').mouseleave(function () {
    $('.store_pop').css('visibility', 'hidden');
    $('#arrow').css('transform', 'rotate(0deg)')
});

$('.delivery').mouseover(function() {
    $('.delivery_pop').css('visibility', 'visible');
});
$('.delivery').mouseleave(function() {
    $('.delivery_pop').css('visibility', 'hidden');
});


const categoryList = $('.main_category_list li');
const categoryList_a = $('.main_category_list a');

const main = $('.main_category_list').children('li');
const mainList = $('.main_category_list');

mainList.on('mouseover', 'li', function(event) {
    $(this).addClass('selected');
});
mainList.on('mouseleave', 'li', function(event) {
    $(this).removeClass('selected');
});




$(document).ready(function() {
    const slide_track = $('.slide_track');
    const slideWidth = $('.slide_item').width();
    let currentIdx = 0;
    
    const good = $('.slide_item').length;
    console.log(good);
    
    $('.next_btn').click(function() {
        if(currentIdx < $('.slide_item').length - 1 ) {
            currentIdx++;
            updateSlider();
        }
    })

    $('pre_btn').click(function() {
        if(currentIdx > 0) {
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

$('.sub_btn_item02').on('click', function() {
    $('.sub_wrap').css('transform', 'translateX(-1020px)');
    $('.sub_btn_item02').addClass('active');
    $('.sub_btn_item01').removeClass('active');
    $('.sub_btn_item03').removeClass('active');
});
$('.sub_btn_item01').on('click', function() {
    $('.sub_wrap').css('transform', 'translateX(0px)');
    $('.sub_btn_item01').addClass('active');
    $('.sub_btn_item02').removeClass('active');
    $('.sub_btn_item03').removeClass('active');
});
$('.sub_btn_item03').on('click', function() {
    $('.sub_wrap').css('transform', 'translateX(-2040px)');
    $('.sub_btn_item03').addClass('active');
    $('.sub_btn_item02').removeClass('active');
    $('.sub_btn_item01').removeClass('active');
})







