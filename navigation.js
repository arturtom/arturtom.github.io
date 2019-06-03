var epilobiumImage = document.querySelector('#viewOfEpilobium');

var navigationBar = document.querySelector('#nav');

window.addEventListener('scroll', function() {
    var y = window.scrollY;
    if (y >= epilobiumImage.clientHeight) {
        navigationBar.style.background = 'rgb(154, 156, 150, 1)';
    } else {
        navigationBar.style.background = 'rgb(154, 156, 150, .6)';
    }
})