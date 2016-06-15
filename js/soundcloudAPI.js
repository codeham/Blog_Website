 $(document).ready(function() {
  var widget = SC.Widget(document.getElementById('soundcloud_widget'));
  widget.bind(SC.Widget.Events.READY, function() {
  console.log('Ready...');
  });
     $('#play_pause_button').click(function() {
       widget.toggle();
     });
     $('#next_button').click(function() {
       widget.next();
     });
     $('#prev_button').click(function() {
       widget.prev();
     }); 
  });
  