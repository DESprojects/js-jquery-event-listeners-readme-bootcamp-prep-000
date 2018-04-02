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
    console.log(e.which);
    if(e.which == 103){
      alert('G');
    };
  });
}

function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.');
  })
}
$(document).ready(function(){

getIt();
frameIt();
pressIt();
submitIt();
// call functions here

});
