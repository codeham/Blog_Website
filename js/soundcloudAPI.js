/* initialize soundcloud API with key */
SC.initialize({
    client_id: "652dfa695526e53068460556fa0fedc7"
});

$(document).ready(
  /* This is the function that will get executed after the DOM is fully loaded */
  function () {
    /* set user we wish to see trackList for */
    var USER = "protect_ya_neck"
    /* set user name on DOM */
    $("#user").html(USER);


  }
);

