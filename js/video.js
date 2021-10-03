const video = document.querySelector('video');
console.log(video);
document.querySelector('#play').onclick = function() {
    video.play();
    this.style.opacity = 0;
}