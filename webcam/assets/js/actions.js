// enroll faces
function enroll() {
    canv.style.display = 'block';
    const image = ctx.drawImage(video, 0, 0, canv.width, canv.height);
    video.pause();

    // Define The Person's ID
    const inputLabel = document.createElement('input');
    inputLabel.setAttribute('type', 'text');
    inputLabel.addEventListener('keydown', async(e) => {
        if (e.keyCode === 13) {
            console.log('enrolling...');
            const response = await apiAction('enroll', canv.toDataURL(), inputLabel.value, 'mygallery');
            if (response.faceid) {
                enrolled = true;
                console.log('enrolled face');
                verify();
            }
            canv.style.display = 'none';
            document.body.removeChild(inputLabel);
            video.play();
            changeToVerify();
        }
    })

    document.body.appendChild(inputLabel);
}

// detect faces
function detect() {
    clearInterval(interval);
    (async() => {
        console.log('detecting...');
        ctx.drawImage(video, 0, 0, canv.width, canv.height);
        const response = await apiAction('detect', canv.toDataURL());
        console.log(response);
        console.log(response.images[0].faces.length);

        if (response.images[0].faces.length > 1) unfair();
    })()
    interval = setInterval(detect, 5000)
}

// verify faces
function verify() {
    clearInterval(interval);
    (async() => {
        console.log('verifying...');
        ctx.drawImage(video, 0, 0, canv.width, canv.height);
        const response = await apiAction('verify', canv.toDataURL(), 'Anubhav', 'mygallery');
        if (response.images[0].transaction.confidence >= 0.7) console.log('Verified!');
        else console.log('Intruder Alert!!!');
    })()
    interval = setInterval(verify, 5000)
}

// recognize faces
function recognize() {
    // face recognition
    // const response = await apiAction('recognize',canv.toDataURL(),null,'mygallery');
}