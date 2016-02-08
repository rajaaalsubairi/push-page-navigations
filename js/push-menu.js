// Needs latest version of jQuery to run

//$(function() {
  //$('body').removeClass('noscript');

  //$('.toggle-btn, .close-btn').click(function() {
   // toggleNav();
  //});
//});

//function toggleNav() {
//  if ($('.site-wrapper').attr('data-state') == 'slide-closed') {
//    // Display Nav when closed
//    $('.site-wrapper').attr('data-state', 'slide-open');
//  } else {
//    // Hide Nav when open
//    $('.site-wrapper').attr('data-state', 'slide-closed');
//  }
//}

$(function() {
    $('body').removeClass('noscript');
    
    $('.toggle-btn, .close-btn').click(function() {
        toggleNav();
    });
    
});

function toggleNav(){
    if ($('.site-wrapper').attr('data-state')== 'slide-closed') {
        //show nav when closed
        $('.site-wrapper').attr('data-state', 'slide-open');
    }else{
        //hide nav when open 
        //show nav when closed
        $('.site-wrapper').attr('data-state', 'slide-closed');
    }
}