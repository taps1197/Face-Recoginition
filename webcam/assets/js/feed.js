const video = document.getElementById('vd'),
    canv = document.getElementById('canv'),
    ctx = canv.getContext('2d'),
    enrolled = false;


function cam() {
    navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                width: 500,
                height: 500
            }
        })
        .then(stream => {
            video.src = URL.createObjectURL(stream);
            video.onloadedmetadata = video.play()
        })
        .catch(err => console.error(err));
}

window.onload = cam;