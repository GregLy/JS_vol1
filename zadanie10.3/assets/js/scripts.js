$(function(){
  let carouselList = $("#carousel ul");
  setInterval(changeSlide, 3000); //every 3 seconds, it performs a function to change the slide
  carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
  var firstItem = carouselList.find("li:first");
  var lastItem = carouselList.find("li:last");
});

$(function(){
  lastItem.after(firstItem)
  carouselList.css({marginLeft:0}
});
