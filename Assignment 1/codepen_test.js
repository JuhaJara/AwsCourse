var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://3c8p742yh1.execute-api.us-east-2.amazonaws.com/dev/store-data');
xhr.onreadystatechange = function(event) {
    console.log(event.target.response);
};

xhr.send();