function slideShowPrev(){
    alert('prev slide')
}

function slideShowNext(){
    var currentElem = document.getElementsByClassName('slide_1')[0].dataset.currentElem;
    var nextElem = currentElem + 1;
    var imageHeight = document.getElementsByClassName('left-content-img')[0].clientHeight;
    var images = document.getElementsByClassName('img-slider');
    for(var i = 0; i < images.length; i++){
        images[i].style.transform = "translateY(-"+ imageHeight * (nextElem)+"px)";
    }
    for(var i = 0; i < document.getElementsByClassName('slide_1').length; i++){
        document.getElementsByClassName('slide_1')[i].dataset.currentElem = nextElem;
    }
}