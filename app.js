let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let backButton = document.getElementById('back');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');

nextButton.oneclick = function(){
  showSlider('next');
}
prevButton.oneclick = function(){
  showSlider('prev');
}
const showSlider = (type) =>{
    let items = document.querySelectorAll('.carousel .list .item');
    if(tyoe === 'next'){
      listHTML.appendChild(item[0]);
      carousel.classList.add('next');
    }
}