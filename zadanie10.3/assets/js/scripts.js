$(function(){
  let carouselList = $("#carousel ul");
  function changeSlide (){
    carouselList.animate({'marginLeft':'-=400'}, 500, movedSlide);
    console.log 
  }
  function moveEverySlide (){
  var firstItem = carouselList.find("li:first");
  var lastItem = carouselList.find("li:last");
  }

});

