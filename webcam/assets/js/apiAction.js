function apiAction(action, img, label, gallery) {
    const bodyData = {
        "image":`${img}`,
    }
    bodyData = action !== 'detect' ? { ...bodyData, "subject_id":`${label}`, "gallery_name":`${gallery}`} : bodyData;
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
