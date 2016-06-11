<script src="https://connect.soundcloud.com/sdk/sdk-3.1.2.js"></script>
<script>
SC.initialize({
  client_id: '652dfa695526e53068460556fa0fedc7'
});

var track_url = 'http://soundcloud.com/forss/flickermood';
SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
  console.log('oEmbed response: ', oEmbed);
});
</script>