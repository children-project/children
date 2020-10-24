var score =0 ;

    
$('.cercles1').click(function(){
    $('.cercles1').css('opacity','1')
    score++
    x(score)
})

$('.cercles2').click(function(){
    $('.cercles2').css('opacity','1')
    score++
    x(score)
})
$('.cercles3').click(function(){
    $('.cercles3').css('opacity','1')
   score++ 
   x(score)
})

$('.cercles4').click(function(){
    $('.cercles4').css('opacity','1')
   score++ 
   x(score)
})
$('.cercles5').click(function(){
    $('.cercles5').css('opacity','1')
  score++ 
  x(score)
})
function x(score){
    if(score===5){
        $('#div').hide("slow")
         $('#welcome').show("slow")
        console.log(score)
    }
}
x(score)

$("#home").click(function(){
  window.location.href = "file:///C:/Users/HP/OneDrive/Bureau/children%20project/children/home.html";
})

$("#games").click(function(){
  window.location.href = "file:///C:/Users/HP/OneDrive/Bureau/children%20project/children/games.html";
})

$("#stories").click(function(){
  window.location.href = "https://www.freechildrenstories.com/age-3-5";
})

$("#other").click(function(){
  window.location.href = "file:///C:/Users/HP/OneDrive/Bureau/children%20project/children/games.html";
})