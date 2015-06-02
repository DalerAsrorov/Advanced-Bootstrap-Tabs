// Code goes here


/*$(document).ready(function() {
  $('.tr-el').hide();
  $('.messages').click(function() {
    if ($('.tr-el').is(':hidden')) {
      $('.tr-el').slideDown();
    } else {
      $('.tr-el').slideUp();
    }
  });
});*/

$('.collapse').on('show.bs.collapse', function () {
    $('.collapse.in').collapse('hide');
});
$(document).ready(function() {
  $('.accordion-btn').click(function(e) {
    e.preventDefault();
    $('.arrowGreen').toggleClass('rotate90');
  });
});




//
// This only line code describes to bind datatable functionalities like searching, sorting and paging to our table.
// Here 'myTable' is the ID of our table
//
 

$(document).ready(function(){
    $('#myTable').dataTable();
});
