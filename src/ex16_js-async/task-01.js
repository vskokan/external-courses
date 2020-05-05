function myFetch(URL, method) {
    let xhr = new XMLHttpRequest();

    xhr.open(method, URL, true);
    if (method === 'GET') {
        xhr.send()
    } else {
        let formData = new FormData();
        xhr.send(formData);
    }
    xhr.onload = function() {
        if (xhr.status !== 200) {
            console.log(`Error ${xhr.status}:${xhr.statusText}`);
        } else {
            console.log('Success!');
        }
    }
    xhr.onerror = function() {
        console.log(`Failed to load`);
    }
    
    return undefined;
}

module.exports = myFetch;