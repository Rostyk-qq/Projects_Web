
window.addEventListener('load', windowLoad);

function windowLoad(e) {
    document.documentElement.classList.add('loaded');

    const menu = document.querySelector('ul.menu');
    let menuActiveElement;

    if(menu){
        menuActiveElement = document.querySelector('.container__line .line')
        const menuActiveItem = menu.querySelector('.menu__list')
        
        menuActiveItem ? setStyles(menuActiveItem) : null;
        menuActiveItem.addEventListener('click', effectCreate)
    }
        // function effectCreate(e){
        //     if (!e.target.classList.contains('menu__list')) return;
        // }
    }

    function setStyles(menuActiveItem) {
        menuActiveItem.classList.add()
        menuActiveElement.styles.cssText = `
            height: ${menuActiveItem.offsetHeight}px;
            top: ${menuActiveItem.offsetTop}px;
            background-color: ${menuActiveItem.dataset.activeColor};
        `
    }
}