

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
    ease : "power1",
    duration : 4
});

const tl = gsap.timeline();
tl.from(".section01", { xPercent : 100 })
.from(".section02", {xPercent : 100})
.from(".section03", { yPercent : 100})
.from(".section04", {xPercent : 100})
.from(".section05", { xPercent : 100});

ScrollTrigger.create({
    animation : tl,
    trigger : "#container",
    start : "top top",
    end : "+=4000",
    pin : true,
    scrub : true,
    anticipatePin : 1
});

gsap.to(".box01", {
    scrollTrigger : {
        trigger : ".box01",
        markers : true,
        scrub : 1
    },
    x : 500,
    duration : 3

})


// gsap.to(".box2", {
//     scrollTrigger : {
//         trigger : ".box2",
//         toggleActions : "resume pause reset pause",
//         markers : true,
//         start : "top center"
//     },
//     x : 400,
//     duration : 4
// });

// ScrollTrigger.create({
//     trigger : ".box2",
//     start : "0% 100%",
//     end : "100% 0%",
//     markers : true,

//     onEnter : function() {
//         video.get(0).play()
//         videoBlur.get(0).play()
//     }
// });

// gsap.to(".box2", {
//     scrollTrigger : {
//         trigger : ".box2",
//         markers : true,
//         start : "top center",
//         scrub : true,
//         pin : true
//     },
//     x : 500,
//     duration : 1,
// });
