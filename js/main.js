// Set startpicture and a variabel for next
var sliderInt = 1;
var sliderNext = 2;

$(document).ready(function(){
  $("#slider>img#1").fadeIn(300);
  startSlider();
});

function startSlider(){
  var count = $("#slider>img").length;
  var loop = setInterval(function(){
    $("#slider>img").fadeOut(300);
    $("#slider>img#"+sliderNext).fadeIn(300);
    sliderInt = sliderNext;
    sliderNext = sliderNext+1;
  },3000);

}
// 5:54 youtube vid: https://www.youtube.com/watch?v=z277ZUHNnnE
