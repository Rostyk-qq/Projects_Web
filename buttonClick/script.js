const mainElement = document.querySelector('.btn');
mainElement.addEventListener('click', (e) => {
    if (!mainElement) return;

    const element = document.createElement('div');
    const diameter = Math.max(mainElement.clientWidth, mainElement.clientHeight);
    const radius = Math.floor(diameter / 2);

    element.style.width = element.style.height = `${radius / 2}px`;
    element.style.top = `${e.pageY - (mainElement.getBoundingClientRect().top - scrollY) - (radius / 4)}px`;
    element.style.left = `${e.pageX - (mainElement.getBoundingClientRect().left - scrollX) - (radius / 4)}px`;
    
    element.classList.add('ring')
    mainElement.appendChild(element)
    
    const time = AnimationDuration()
   
    setTimeout(() => {
        element.remove()
    }, time)
    

    function AnimationDuration() {
        const getTime = getComputedStyle(element).animationDuration
        return getTime.includes('ms') ? Number(getTime) : Number(getTime.replace('s' , '') * 1000)
    }
    const color = Math.floor(Math.random() * 360);
    element.style.filter = `hue-rotate(${color}deg)`
})