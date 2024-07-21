// $(document).ready(function() {
//     const $sections = $('section');
//     let currentSectionIndex = 0;
//     let isScrolling = false;

// const { response } = require("express");

//     function scrollToSection(index) {
//         if (isScrolling) return;
//         isScrolling = true;
//         $('html, body').animate({
//             scrollTop: $sections.eq(index).offset().top
//         }, 800, function() {
//             isScrolling = false;
//         });
//     }

//     $(window).on('wheel', function(event) {
//         if (event.originalEvent.deltaY > 0) {
//             if (currentSectionIndex < $sections.length - 1) {
//                 currentSectionIndex++;
//                 scrollToSection(currentSectionIndex);
//             }
//         } else {
//             if (currentSectionIndex > 0 ) {
//                 currentSectionIndex--;
//                 scrollToSection(currentSectionIndex);
//             }
//         }

//     });
// });

$(document).ready(function() {
    const sec04Img = $('.sec04_top_ul li')
    sec04Img.on('mouseover', function() {
        $(this).find('.sec04_img_con').css('transform', 'scale(1.05)');
    });
    sec04Img.on('mouseleave', function() {
        $(this).find('.sec04_img_con').css('transform', 'scale(1)');
    });
});