$(function(){
  let carouselList = $("#carousel ul");
  function changeSlide (){
  carouselList.animate({'marginLeft':'-=400'}, 500, moveEverySlide);
  }
  setInterval(changeSlide, 3000);

  function moveEverySlide (){
  let firstItem = carouselList.find("li:first");
  let lastItem = carouselList.find("li:last");
  lastItem.after(firstItem)  
  carouselList.css({marginLeft:0});
}
});

