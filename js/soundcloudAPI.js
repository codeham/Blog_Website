/* initialize soundcloud API with key */
SC.initialize({
<<<<<<< HEAD
=======
    /* This is the sample client_id. you should replace this with your own*/
>>>>>>> 65a0e69239ad327cc3c5c000851ca3a3c3486568
    client_id: "652dfa695526e53068460556fa0fedc7"
});

$(document).ready(
  /* This is the function that will get executed after the DOM is fully loaded */
  function () {
    /* set user we wish to see trackList for */
<<<<<<< HEAD
    var USER = "protect_ya_neck"
    /* set user name on DOM */
    $("#user").html(USER);


=======
    var USER = "dj-faze"
    /* set user name on DOM */
    $("#user").html(USER);
    
    /* Use soundcloud API to get track list */
    SC.get("/users/"+USER+"/tracks", {limit: 100}, function(tracks){
      var trackList = ""
      for (var i = 0; i < tracks.length; i++) {
        /* populate trackList html */
        trackList += tracks[i].title + "<br>";
      }
      $("#status").html(trackList);
    });
>>>>>>> 65a0e69239ad327cc3c5c000851ca3a3c3486568
  }
);

