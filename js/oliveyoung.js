


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


var pre_btn = $('.pre_btn');
var slide_track = $('.slide_track');

$(document).ready(function() {
    const slide_track = $('.slide_track');
    const slideWidth = $('.slide_item').width();
    let currentIdx = 0;
    
    $('.pre_btn').click(function() {
        if(currentIdx < $('.slide_item').length - 1 ) {
            currentIdx++;
            updateSlider();
        }
    })

    $('prev').click(function() {
        if(currentIdx > 0) {
            currentIdx--;
            updateSlider();

        }
    })
    function updateSlider() {
        slide_track.css('transform', 'translateX(' + (-slideWidth * currentIdx) + 'px)');
    }
});






