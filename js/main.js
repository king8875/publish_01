import Lenis from '@studio-freight/lenis';

const lenis = new Lenis();

lenis.on('scroll', (e) => {
  console.log(e)
});

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
};

requestAnimationFrame(raf);











$('.search-btn').on('click', function () {
  alert('해당 폰트를 찾을 수 없습니다.')
});

