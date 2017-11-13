$(function(){
  let carouselList = $("#carousel ul");
  setInterval(changeSlide, 3000); //every 3 seconds, it performs a function to change the slide
  carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
  let firstItem = carouselList.find("li:first");
  let lastItem = carouselList.find("li:last");
  lastItem.after(firstItem)
  carouselList.css({marginLeft:0}
});
