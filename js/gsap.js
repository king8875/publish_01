
gsap.fromTo(".box", {
    x: 500,
    duration : 2,
    opacity : 0.2,
    scale : 3,
    width : 400
},{
    x : 1000,
    scale : 4
});

var tween = gsap.to(".box1", {
    x : 200,
    duration : 4,
    width : 400
})