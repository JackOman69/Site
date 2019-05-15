$(document).ready(function(){
  
  $(".fa-search").click(function(){
    $(".container1, .input").toggleClass("active");
    $("input[type='text']").focus();
  });
  
});