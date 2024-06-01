


$(document).ready(function () {
  
  window.addEventListener('scroll', function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //현재 스크롤 위치
    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight; //전체 스크롤 값
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight; //
    var scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;

    var progressBar = document.querySelector('#progress');
    progressBar.style.display = 'block';
    progressBar.style.width = scrolled + '%';
  })
})



