$(document).ready(function(){
  
  $(".fa-search").click(function(){
    $(".container1, .input, .fa-search").toggleClass("active");
    $("input[type='text']").focus();
  });
  
});