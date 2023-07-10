let counter = 0;
const counterElement = document.getElementById('counter');

setInterval(() => {
    counter++;
    counterElement.textContent = counter;
}, 1000);