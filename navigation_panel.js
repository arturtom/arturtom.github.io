var epilobiumImage = document.querySelector('#viewOfEpilobium');
var navigationBar = document.querySelector('#nav');
var nodelistofSubPages = document.querySelectorAll('.main');
var subPages = Array.from(nodelistofSubPages);
var subPageToScroll = new Map();

window.addEventListener('scroll', function() {
    changeNavigationBarBackground();
    changeNavigationBarFont();
    addAnimationClassToStartAnimation();
})

window.addEventListener('load', function() {
    setTimeout(function() {
        setUpSubPageToScrollMapForChangingNavigationColors()
    }, 1000)
})

function addAnimationClassToStartAnimation(id) {
    var scrollValue = window.scrollY;
    var id;
    for (let [k, v] of subPageToScroll) {
        if ((scrollValue + 1) < (v - 400)) {
            id = k;
            break;
        } else {
            continue;
        }
    }
    var subPage = getSubPageFromSubPages(id);
    Array.from(subPage.children).forEach(function(child) {
        addAnimationClassAndChangeDisplayOnBlock(child);
    })
}

function addAnimationClassAndChangeDisplayOnBlock(child) {
    child.classList.add('animation');
    if (child.id == 'tea_article') {
        child.style.display = 'block';
    }
    if (child.id == 'quality_article') {
        Array.from(child.children).forEach(function(childParagraph) {
            childParagraph.style.display = 'inline-flex';
        })
    } else if (child.id == 'goodness_article') {

    } else {
        Array.from(child.children).forEach(function(childParagraph) {
            childParagraph.style.display = 'block';
        })
    }
}

function getSubPageFromSubPages(id) {
    for (i = 0; i < subPages.length; i++) {
        if (subPages[i].id == id) {
            return subPages[i];
        }
    }
}

function changeNavigationBarFont() {
    var scrollValue = window.scrollY;
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
        navigationBar.style.background = 'rgb(154, 156, 150, .9)';
        navigationBar.style.borderBottom = '2px solid darkgoldenrod';
    } else {
        navigationBar.style.background = 'rgb(154, 156, 150, .6)';
        navigationBar.style.borderBottom = 'none';
        navigationBar.style.height = '50px';
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