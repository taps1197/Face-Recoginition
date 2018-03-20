// After enrolling, change the buttons action to verify.
function changeToVerify() {
    snapBtn.removeEventListener('click', enroll, false);
    snapBtn.innerHTML = 'Verify';
    snapBtn.addEventListener('click', verify);
}

// End the session if more than one persons are detected in the image
function unfair() {
    // do the session ending code here
    // CAUTION : This log is not meant for any developers involved in the project ;)
    console.log('Some Fool Is Peeking.');
    let count = 10;
    clearInterval(interval);
    let intruderInterval = setInterval(() => {
        console.log(`You've ${count} seconds to secure the location`);
        count--;
        if (count === 0) {
            clearInterval(intruderInterval);
            //Blow Up The Intruder
        }
    }, 1000);
}

// Capture feed from the webcam
function cam() {
    snapBtn.addEventListener('click', enroll);
    detectButton.addEventListener('click', detect);
    navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                width: 500,
                height: 500
            }
        })
        .then(stream => {
            video.srcObject = stream;
            video.onloadedmetadata = video.play()
        })
        .catch(err => console.error(err));
}

// Send Request to the kairos api
function apiAction(action, img, label, gallery) {
    let bodyData = {
        "image": `${img}`,
    }
    bodyData = action !== 'detect' ? {...bodyData, "subject_id": `${label}`, "gallery_name": `${gallery}` } : bodyData;
    return fetch(`https://api.kairos.com/${action}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "app_id": "de8961ac",
                "app_key": "b3c5774797323ebd37f789662517a1f6"
            },
            body: JSON.stringify(bodyData)
        })
        .then(data => {
            return data.json();
        })
        .then(data => {
            return data;
        })
        .catch(err => {
            return true;
        });
}