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

        if(target.closest('.menu__item')){
            const targetElement = target.closest('.menu__item');
            const activeElement = menu.closest('.menu__item._active');

            if(!targetElement.classList.contains('_active')){
                activeElement ? activeElement.classList.remove('_active') : null;
            }
            setStyles(targetElement);
            e.preventDefault();
        }
    }
    
    function setStyles(menuItem){
        menuItem.classList.add('_active');
        styledElement.style.cssText = `
            height: ${menuItem.offsetHeight}px;
            top: ${menuItem.offsetTop}px;
            background-color: ${menuItem.dataset.colorEffect};
            transition: all 1s ease;
        `
    }
}

