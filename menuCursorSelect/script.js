const getAll = document.querySelectorAll('[data-all-menu]');

getAll.length ? menuEffects() : null;

function menuEffects() {
    getAll.forEach(li => {
        const a = li.querySelectorAll('a');
        const effectSpeed = li.dataset.allMenu ? li.dataset.allMenu : 150;
        a.length ? effectsCreate(a, effectSpeed) : null;
    })

    function effectsCreate(linksCollection, effectSpeed) {

        const transformTop = 'transform: translateY(-100.5%);';
        const transformBottom = 'transform: translateY(100.5%);';
        const transition = `transition: transform ${effectSpeed}ms ease;`
        const transformStartPosition =  'transform: translateY(0%);';

        linksCollection.forEach(a => {
            a.insertAdjacentHTML('beforeend',             
                `
                    <span style='transform: translateY(100.5%);' class='text__container'>
                        <span style='transform: translateY(-100.5%);' class='text'>${a.textContent}</span>
                    </span>
                `
            );
            a.onmouseenter = a.onmouseleave = createEffect
        })

        function createEffect(e) {
            const target = e.target;
            const container = target.querySelector('.text__container');
            const text = target.querySelector('.text');

            const containerEnterPart = target.offsetHeight / 2;
            const mousePosition = e.pageY - (target.getBoundingClientRect().top - scrollY);
            

            if(e.type === 'mouseenter'){
                container.style.cssText = mousePosition > containerEnterPart ? transformBottom : transformTop;
                text.style.cssText = mousePosition > containerEnterPart ? transformTop : transformBottom;

                setTimeout(() => {
                    container.style.cssText = transformStartPosition + transition;
                    text.style.cssText = transformStartPosition + transition;
                }, 5)
            }
            if(e.type === 'mouseleave'){
                container.style.cssText = mousePosition > containerEnterPart ? transformBottom + transition : transformTop + transition;
                text.style.cssText = mousePosition > containerEnterPart ? transformTop + transition : transformBottom + transition;
            }
        }
    }   
}