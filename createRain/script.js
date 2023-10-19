const allCountLines = 800;
let counter = 0;
const body = document.body;
while (counter < allCountLines) {
    const element = document.createElement('i');
    let left = Math.floor(Math.random() * window.innerWidth);
    let width =  Math.floor(Math.random() * 7);
    let duration = Math.random() * 5;
    let delay = Math.random() * -10;

    element.style.width = width + 'px';
    element.style.left = left + 'px';
    element.style.animationDelay = delay + 's';
    element.style.animationDuration = 1 + duration + 's';
    body.appendChild(element)
    counter++;
}