function loadAPI(){
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
tag.async = true;
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

var player;

function onYouTubeIframeAPIReady(){
	player = new YT.Player('video_player', {
  	width: 600,
    height: 400,
    videoId: 'GtiryiMZp50', //To change video
    PlayerVars: {'rel': 0},
    events: {
      'onStateChange': onPlayerStateChange
    }
	});
}

function onPlayerStateChange(event){
  if (event.data == YT.PlayerState.ENDED){
    $('html, body').animate({scrollTop: $(".test_section").offset().top}, 1900);
    }
}
