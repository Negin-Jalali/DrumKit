let $ = document;
let keys = $.querySelectorAll('.key')

window.addEventListener('keydown', function(e){
    const audio = $.querySelector(`audio[data-key='${e.keyCode}']`);
    if(!audio) return;

    audio.currentTime = 0
    audio.play()

    const div = $.querySelector(`.key[data-key='${e.keyCode}']`);
    div.classList.add('playing')
});

keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
});

function removeTransition(e){
    if(e.propertyName !== "transform") return;
    console.log(e);
    this.classList.remove('playing')
}