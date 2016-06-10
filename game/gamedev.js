$( document ).ready(function() {
var score=0;
//Your jquery goes here

var snd = new Audio("Sound/gun-gunshot-01.mp3");


var mouseX = 0,
  mouseY = 0;
$(document).mousemove(function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

// cache the selector
var follower = $("#ball");
var xp = 0,
  yp = 0;
var loop = setInterval(function() {
  // change 12 to alter damping, higher is slower
  xp += (mouseX - xp) / 12;
  yp += (mouseY - yp) / 12;
  follower.css({
    left: xp,
    top: yp
  });

}, 30);

$("#toggle").click(function() {
  
 $("#toggle").hide().delay(500).fadeIn();
   score++;
   snd.play();
   $('#points').html(score);
      if (score==10) { window.location.href="congrats.html";} 
 
else {};

}); //end of toggle hide and show

$("#toggle2").click(function() {
  
 $("#toggle2").hide().delay(1000).fadeIn();
   score++;
   $('#points').html(score);
   snd.play();

if (score==10) { window.location.href="congrats.html";} 

else {};

     
}); //end of toggle2 hide and show


if (score==10) { window.location.href="congrats.html";} 

else {};


});//end of game



