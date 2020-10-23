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
    if(score===2){
        $('#dif').hide("slow")
        console.log(score)
    }
}
x(score)