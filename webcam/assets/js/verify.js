function verify() {
    setInterval(() => {
        (async() => {
            console.log('verifying...');
            ctx.drawImage(video, 0, 0, canv.width, canv.height);
            const response = await apiAction('verify', canv.toDataURL(), 'Anubhav', 'mygallery');
            if (response.images[0].transaction.confidence >= 0.7) console.log('Verified!');
            else console.log('Intruder Alert!!!');
        })()
    }, 5000)
}