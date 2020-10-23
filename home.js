function play(url) {
  new Audio(url).play();
}

$( "#horse" ).click(function() {
 $("#firstD").hide();
$('#try').fadeIn('slow', function(){
     $('#try').delay(2000).fadeOut();
   });
setTimeout(function(){ 
	$("#firstD").show(); 
},2000);
});


$( "#tom" ).click(function() {
 $("#firstD").hide();
$('#try').fadeIn('slow', function(){
     $('#try').delay(2000).fadeOut();
   });
setTimeout(function(){ 
	$("#firstD").show(); 
},2000);
});

$( "#elephant" ).click(function() {
  $("#firstD").hide(); 
  $('#job').fadeIn('slow', function(){
     $('#job').delay(2000).fadeOut();
   });
  setTimeout(function(){ 
	$("#secondD").show(); 
},2990);
});



function play2(url) {
  new Audio(url).play();
}
$( "#dog" ).click(function() {
 $("#secondD").hide();
$('#try2').fadeIn('slow', function(){
     $('#try2').delay(2000).fadeOut();
   });
setTimeout(function(){ 
	$("#secondD").show(); 
},2000);
});


$( "#monkey" ).click(function() {
 $("#secondD").hide();
$('#try2').fadeIn('slow', function(){
     $('#try2').delay(2000).fadeOut();
   });
setTimeout(function(){ 
	$("#secondD").show(); 
},2000);
});
$("#lion").click(function(){
	$("#secondD").hide();
	$("#thirdD").show()
})

function play3(url) {
  new Audio(url).play();
}
$( "#cheep" ).click(function() {
 $("#thirdD").hide();
$('#try3').fadeIn('slow', function(){
     $('#try3').delay(2000).fadeOut();
   });
setTimeout(function(){ 
	$("#thirdD").show(); 
},2000);
});

$( "#bird" ).click(function() {
 $("#thirdD").hide();
$('#try3').fadeIn('slow', function(){
     $('#try3').delay(2000).fadeOut();
   });
setTimeout(function(){ 
	$("#thirdD").show(); 
},2000);
});

$("#cock").click(function(){
	$("#thirdD").hide()
     $('#loader').fadeIn('slow', function(){
     $('#loader').delay(5000).fadeOut(); 
            });
        $("#great").hide(); 
setTimeout(function(){ 
	$("#great").show(); 
},5000);
})

