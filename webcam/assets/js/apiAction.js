function apiAction(action, img, label, gallery) {
    return fetch(`https://api.kairos.com/${action}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "app_id": "de8961ac",
                "app_key": "b3c5774797323ebd37f789662517a1f6"
            },
            body: JSON.stringify({
                "image": `${img}`,
                "subject_id": `${label}`,
                "gallery_name": `${gallery}`
            })
        })
        .then(data => {
            return data.json();
        })
        .then(data => {
            console.log(data);
            console.log('Face Enrolled');
            return data;
        })
        .catch(err => {
            console.error(err);
            console.log('Error Enrolling Face');
            return true;
        });
}