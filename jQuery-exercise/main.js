/*  hovering over pokemon image, provided with id tag #image-hover to link
/*   "this" for the object we are hovering over
/*   increasing image width/height to show a hover over affect
/*   after hovering over you want image to go back in size so you need to provide another function that returns it back to smaller
*/ 

$(function() {
    $('#image-hover').hover(function() {
        $(this).width(1.25 * $(this).width());
        $(this).height(1.25 * $(this).hegiht());
    }, function(){
        $(this).width(0.8 * $(this).width());
        $(this).height(0.8 * $(this).hegiht());
    });
});

$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'whos-britney.mp3');
    
    $(".button-box").click(function() {
        $(".bye-britney").fadeOut(8000);
    },
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false)
    );

    $('#play').click(function() {
        audioElement.play();
    });

    $('#pause').click(function() {
        audioElement.pause();
    }) 
});

