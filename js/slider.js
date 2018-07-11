"USE STRICT";
class Slideshow {
  /**
   * @param {string} selector
   */
  constructor(selector){
    this.container = document.querySelector(selector);
    if(this.container === null){
      throw new Error("L'élément " + selector + " n'existe pas");
    }
    this.images = Array.prototype.slice.call(this.container.querySelectorAll('.img-slider'));
    this.textes = Array.prototype.slice.call(this.container.querySelectorAll('.right-content-item'));
    this.currentElemId = 0;
    this.btnPrevSlide = this.container.querySelectorAll('[data-slide-role~="btn-prev-slide"]')[0];
    this.btnNextSlide = this.container.querySelectorAll('[data-slide-role~="btn-next-slide"]')[0];
    this.btnNextSlide.addEventListener('click', this.slideShowNext.bind(this));
    this.btnPrevSlide.addEventListener('click', this.slideShowPrev.bind(this));
    this.resizeTextContainer();
  }
  resizeTextContainer(){
    var width = this.container.querySelector('.right-content-slideshow-wrap').clientWidth;
    this.container.querySelector('.right-content-slideshow-wrap').style.width = (width * this.images.length)
  }
  slideShowPrev(){
    var prevElem = (Number(this.currentElemId) - 1) < 0 ? this.images.length - 1 : Number(this.currentElemId) - 1;
    var imageHeight = this.container.getElementsByClassName('left-content-img')[0].clientHeight;
    var textsHeight = this.container.querySelector('.right-content-slideshow-wrap').clientHeight;
    for(var i = 0; i < this.images.length; i++){
      this.images[i].style.transform = "translateY(-"+ imageHeight * (prevElem)+"px)";
      this.textes[i].style.transform = "translateY(-"+ textsHeight  * (prevElem) +"px";
    }
    this.currentElemId = prevElem;
  }
  slideShowNext(){
    var nextElem = (Number(this.currentElemId) + 1 > (this.images.length - 1)) ? 0 : Number(this.currentElemId) + 1;
    var imageHeight = this.container.getElementsByClassName('left-content-img')[0].clientHeight;
    var textsHeight = this.container.querySelector('.right-content-slideshow-wrap').clientHeight;
    for(var i = 0; i < this.images.length; i++){
      this.images[i].style.transform = "translateY(-"+ imageHeight * (nextElem)+"px)";
      this.textes[i].style.transform = "translateY(-"+ textsHeight  * (nextElem) +"px";
    }
    this.currentElemId = nextElem;
  }
}
new Slideshow('#troupes');
new Slideshow('#events');
