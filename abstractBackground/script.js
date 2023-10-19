
const ballsCount = 500;
let count = 0;

const main = document.body;
while(count < ballsCount){
    const createElement = document.createElement('i');
    
    let Left = Math.floor(Math.random() * window.innerWidth)

    let delay = Math.random() * -10;
    let duration = Math.random() * 7;

    createElement.style.left = Left + 'px';

    createElement.style.animationDelay = delay + 's';
    createElement.style.animationDuration = 5 + duration + 's';

    main.append(createElement);
    count++;
}

