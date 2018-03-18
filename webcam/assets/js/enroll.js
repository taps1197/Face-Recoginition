const snapBtn = document.querySelector('#clickPic');

snapBtn.addEventListener('click', (e) => {
    e.preventDefault();
    canv.style.display = 'block';
    const image = ctx.drawImage(video, 0, 0, canv.width, canv.height);
    video.pause();

    // Define The Person's ID
    const inputLabel = document.createElement('input');
    inputLabel.setAttribute('type', 'text');
    inputLabel.addEventListener('keydown', async(e) => {
        if (e.keyCode === 13) {
            const response = await apiAction('enroll', canv.toDataURL(), inputLabel.value, 'mygallery');
            if (response.faceid) {
                enrolled = true;
                verify();
            }
            canv.style.display = 'none';
            snapBtn.style.display = 'none';
            document.body.removeChild(inputLabel);
            video.play();
        }
    })

    document.body.appendChild(inputLabel);
})