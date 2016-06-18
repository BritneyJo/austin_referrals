
$(document).ready(function(){
  $('.read_more').click(function(event){
    event.preventDefault();
    var self = $(this);
    $(this).prev().slideToggle( "slow", function() {
      if (self.hasClass("less")) {
          self.removeClass("less");
          self.html("Read More");
      } else {
          self.addClass("less");
          self.html("Show Less");
      }
    });
  });
});
