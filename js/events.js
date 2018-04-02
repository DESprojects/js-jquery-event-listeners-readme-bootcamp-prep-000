//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('Hey!');
  })
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
  });
}

function pressIt(){
  $('#typing').on('keydown', function(e){
    if(e.which === 103){
      alert('G');
    };
  });
}

$(document).ready(function(){

getIt();
frameIt();
pressIt();
// call functions here

});
