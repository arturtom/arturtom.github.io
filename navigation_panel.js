var epilobiumImage = document.querySelector('#viewOfEpilobium');
var navigationBar = document.querySelector('#nav');
var nodelistofSubPages = document.querySelectorAll('.main');
var subPages = Array.from(nodelistofSubPages);
var subPageToScroll = new Map();

window.addEventListener('scroll', function() {
    changeNavigationBarBackground();
    changeNavigationBarFont();
})

window.addEventListener('load', function() {
    setTimeout(function() { setUpSubPageToScrollMapForChangingNavigationColors() }, 1000)
})

function changeNavigationBarFont() {
    var scrollValue = window.scrollY;
    console.log(scrollValue);
    var id;
    for (let [k, v] of subPageToScroll) {
        if ((scrollValue + 1) < v) {
            id = k;
            break;
        } else {
            continue;
        }
    }
    navigationSubPageOptions.forEach(function(el) {
        el.style.fontSize = '1rem';
        el.style.fontWeight = 'normal';
    })
    var elementInNavigationToChange = document.querySelector('#nav_' + id);
    elementInNavigationToChange.style.fontSize = '1.3rem';
    elementInNavigationToChange.style.fontWeight = 'bold';
}

function changeNavigationBarBackground() {
    var scrollValue = window.scrollY;
    if (scrollValue >= epilobiumImage.clientHeight) {
        navigationBar.style.background = 'rgb(154, 156, 150, 1)';
    } else {
        navigationBar.style.background = 'rgb(154, 156, 150, .6)';
    }
}

function subPagesHeightSum(heightValueArray) {
    var accumulatedHeigth = 0;
    heightValueArray.forEach((height) => {
        accumulatedHeigth += height;
    })
    return accumulatedHeigth;
}

function setUpSubPageToScrollMapForChangingNavigationColors() {
    var heightValueArray = [];
    subPages.forEach(function(subPage) {
        var subPageParameters = subPage.getBoundingClientRect();
        console.log(subPageParameters.height)
        heightValueArray.push(subPageParameters.height)
        subPageToScroll.set(subPage.id, subPagesHeightSum(heightValueArray));
    })
}






var navigationSubPageOptions = document.querySelectorAll("#navigation-list a");

/*navigationSubPageOptions.forEach(function(subPage) {
    subPage.addEventListener('click', function() {
        navigationSubPageOptions.forEach(function(el) {
            el.style.fontSize = '1rem';
            el.style.fontWeight = 'normal';
        })
        this.style.fontSize = '1.3rem';
        this.style.fontWeight = 'bold';
    })
})*/