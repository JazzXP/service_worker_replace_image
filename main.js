if (navigator.serviceWorker) {
    navigator.serviceWorker.register('service_worker.js', {
        scope: '/'
    });
}

function onNext(elem) {
    const img = document.createElement('img');
    img.src = 'images/test.png'
    document
        .getElementById(elem)
        .appendChild(img);
}