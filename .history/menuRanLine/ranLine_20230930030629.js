
window.addEventListener('load', windowLoad);

function windowLoad(e) {
    document.documentElement.classList.add('loaded');

    const menu = document.querySelector('ul.menu');
    let menuActiveElement;

    if(menu){
        menuActiveElement = document.querySelector('.container__line .line')
        const menuActiveItem = menu.querySelector('.menu__list._active')
        
        menuActiveItem ? setStyles(menuActiveItem) : null;
        menu.addEventListener('click', effectCreate)
    }
    function effectCreate(e){
        const target = e.target;
        
        if(target.closest('.menu__list')){
            const getItem = target.closest('.menu__list');
            const getItemActive = menu.closest('.menu__list._active');

            if(!getItem.classList.contains('_active')){
                getItemActive ? getItemActive.classList.remove('_active') : null;
            }
            setStyles(getItem)
            e.preventDefault();
        }
    }
    function setStyles(menuActiveItem) {
        menuActiveItem.classList.add('_active')
        menuActiveElement.style.cssText = `
            height: ${menuActiveItem.offsetHeight}px;
            top: ${menuActiveItem.offsetTop}px;
            background-color: ${menuActiveItem.dataset.activeColor};
            background-color: ${menuActiveItem.dataset.activeColor};
        `
    }
}