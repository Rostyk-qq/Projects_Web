window.addEventListener('load', loadWindow);

function loadWindow(){
    document.documentElement.classList.add('loaded');


    const menu = document.querySelector('.menu');
    let styledElement;
    if(menu){
        styledElement = document.querySelector('.menu__line-container span');
        const menuItem =  menu.querySelector('.menu__item._active');

        menuItem ? setStyles(menuItem) : null;
    }
    function setStyles(menuItem){
        menuItem.classList.add('_active');
        styledElement.style.cssText = `
            height: ${menuItem.offsetHeight}px;

        `
    }
}

