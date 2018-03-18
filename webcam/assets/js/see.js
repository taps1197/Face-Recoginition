var request = new XMLHttpRequest();

request.open('POST', 'https://api.kairos.com/gallery/list_all');

request.setRequestHeader('app_id', '7bad4f1e');
request.setRequestHeader('app_key', 'd2327a207d61c6298b49b33692f476e4');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
