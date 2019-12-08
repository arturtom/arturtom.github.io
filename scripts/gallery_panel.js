const inlineImages = document.querySelectorAll("img[class='inline_images']");
const imagesArray = [...inlineImages];
const imagesNumber = 4;
imagesArray.forEach(function(img) {
    img.addEventListener('click', changeBigImg)
})

function changeBigImg(img) {
    var mainImg = document.querySelector('#mainImg');
    var smallImgAttribute = this.getAttribute('src');
    var smallImgNumber = this.getAttribute('nr');
    var bigImgNumber = mainImg.getAttribute('nr');
    var mainImgTarget = document.querySelector('#mainImgTarget');
    mainImg.setAttribute('src', smallImgAttribute);
    mainImg.setAttribute('nr', smallImgNumber);
    mainImgTarget.setAttribute('href', smallImgAttribute);
    var newUnderlineDiv = document.querySelector("div[nr='" + smallImgNumber + "']");
    newUnderlineDiv.style.borderBottom = "1px solid black";
    var oldUnderlineDiv = document.querySelector("div[nr='" + bigImgNumber + "']");
    oldUnderlineDiv.style.borderBottom = "none";
}

/*******************************************************************/
const buttons = document.querySelectorAll(".gallery button");
const buttonsArray = [...buttons];

buttonsArray.forEach(function(button) {
    button.addEventListener('click', changeImg)
})

function changeImg() {
    var className = this.getAttribute('class');
    var direction = className.replace("button ", "").trim();
    if (direction == 'right') {
        setNextImg();
    } else {
        setPreviousImg();
    }
}

function setNextImg() {
    var mainImg = document.querySelector('#mainImg');
    var number = mainImg.getAttribute('nr');
    if (number == imagesNumber) {
        setImg(mainImg, imagesArray[0]);
    } else {
        setImg(mainImg, imagesArray[parseInt(number) + 1]);
    }
}

function setPreviousImg() {
    var mainImg = document.querySelector('#mainImg');
    var number = mainImg.getAttribute('nr');
    if (number == 0) {
        setImg(mainImg, imagesArray[imagesNumber]);
    } else {
        setImg(mainImg, imagesArray[parseInt(number) - 1]);
    }
}

function setImg(mainImg, image) {
    var src = image.getAttribute('src');
    var smallImgNumber = image.getAttribute('nr');
    var bigImgNumber = mainImg.getAttribute('nr');
    var mainImgTarget = document.querySelector('#mainImgTarget');
    mainImgTarget.setAttribute('href', src);
    mainImg.setAttribute('src', src);
    mainImg.setAttribute('nr', smallImgNumber);
    var newUnderlineDiv = document.querySelector("div[nr='" + smallImgNumber + "']");
    newUnderlineDiv.style.borderBottom = "1px solid black";
    var oldUnderlineDiv = document.querySelector("div[nr='" + bigImgNumber + "']");
    oldUnderlineDiv.style.borderBottom = "none";
}