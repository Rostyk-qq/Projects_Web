
window.addEventListener('load', windowLoad);

function windowLoad(e) {
    document.documentElement.classList.add('loaded');

    const menu = document.querySelector('ul.menu');
    let menuActiveElement;

    if(menu)
    menu.onclick = e => {

    }
}