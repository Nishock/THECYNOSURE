var navLinks= document.getElementById("navLinks");

function showmenu(){
    navLinks.style.right="0";
}   
function hidemenu(){
    navLinks.style.right="-200px";
}
$(document).ready(function() {
    setTimeout(function() {
      $('#container').addClass('loaded');
      if ($('#container').hasClass('loaded')) {
        $('#preloader').delay(9000).queue(function() {
          $(this).remove();
        });}
    }, 3000);});

// document.addEventListener('contextmenu', event => event.preventDefault());