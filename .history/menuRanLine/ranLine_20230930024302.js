
window.addEventListener('load', windowLoad);

function windowLoad(e) {
    document.documentElement.classList.add('loaded');

    const menu = document.querySelector('ul.menu');
    let menuActiveElement;

    if(menu){
        menuActiveElement = document.querySelector('.container__line .line')
        const menuActiveItem = menu.querySelector('.menu__list._active')
        
        menuActiveItem ? setStyles(menuActiveItem) : null;
    }

    function setStyles(menuActiveItem) {
        menuActiveItem.classList.add('_active');
        menuActiveElement.styles.cssText = `
            height: ${menuActiveItem.offsetHeight}px;
            top: ${menuActiveItem.offsetTop}px;
            background-color: ${menuActiveItem.dataset.dataActiveColor};
        `
    }
}