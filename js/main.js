// 유튜브 iframe api를 비동기로 로드합니다.
let tag = document.createElement('script');
// console.log(tag)

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
        playerVars: {
            autoplay: true, 
            loop: true, 
            playlist: 'Puzm22AAn_A' 
        },
        events: {
        'onReady': function(e){
           e.target.mute() 
        }, 
        }
    });
}
