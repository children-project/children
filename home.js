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
$( "#lion" ).click(function() {
  $("#secondD").hide(); 
  $('#job').fadeIn('slow', function(){
     $('#job').delay(2000).fadeOut();
   });
  setTimeout(function(){ 
  $("#thirdD").show(); 
},2000);
});

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
	$("#welcome").show(); 
},5000);
})

$("#home").click(function(){
  window.location.href = "file:///C:/Users/HP/OneDrive/Bureau/children%20project/children/home.html";
})

$("#games").click(function(){
  window.location.href = "file:///C:/Users/HP/OneDrive/Bureau/children%20project/children/games.html";
})

$("#stories").click(function(){
  window.location.href = "https://www.freechildrenstories.com/age-3-5";
})


$("#calculate").click(function(){
  $("#photos").hide()
     $('#loader').fadeIn('slow', function(){
     $('#loader').delay(5000).fadeOut(); 
            }); 
setTimeout(function(){ 
  window.location.href = "file:///C:/Users/HP/OneDrive/Bureau/children%20project/children/calcul.html"; 
},5000);
})



$("#images").click(function(){
  $("#photos").hide()
     $('#loader').fadeIn('slow', function(){
     $('#loader').delay(5000).fadeOut(); 
            }); 
setTimeout(function(){ 
  window.location.href = "file:///C:/Users/HP/OneDrive/Bureau/children%20project/children/diffirences.html"; 
},5000);
})



$("#animals").click(function(){
  $("#photos").hide()
     $('#loader').fadeIn('slow', function(){
     $('#loader').delay(5000).fadeOut(); 
            }); 
setTimeout(function(){ 
  window.location.href = "file:///C:/Users/HP/OneDrive/Bureau/children%20project/children/animals.html"; 
},5000);
})

$("#other").click(function(){
  window.location.href = "file:///C:/Users/HP/OneDrive/Bureau/children%20project/children/games.html";
})