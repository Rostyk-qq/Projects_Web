window.addEventListener('load', loadWindow);

function loadWindow(){
    document.documentElement.classList.add('loaded');


    const menu = document.querySelector('.menu');
    let styledElement;
    if(menu){
        styledElement = document.querySelector('.menu__line-container span');
        const menuItem =  menu.querySelector('.menu__item._active');

        menuItem ? setStyles(menuItem) : null;
        menu.addEventListener('click', createStyle)
    }
    function createStyle(e){
        const target = e.target;

        if()
    }
    
    function setStyles(menuItem){
        menuItem.classList.add('_active');
        styledElement.style.cssText = `
            height: ${menuItem.offsetHeight}px;
            top: ${menuItem.offsetTop}px;
            background-color: ${menuItem.dataset.colorEffect};
        `
    }
}

