if (document.querySelector('[this-button]')){
  document.documentElement.addEventListener('mouseover', ActivateEffect);
  document.documentElement.addEventListener('mouseout', ActivateEffect);
  document.documentElement.addEventListener('mousemove', ActivateEffect);

  let effectBody, effectColor, effectSize;

  function ActivateEffect(e){
    if (e.target.closest('.button')){
      const button = e.target.closest('.button')
      if (e.type === 'mouseover'){
        button.insertAdjacentHTML('beforeend', `
            <div class="effect__field">
                <div class="color__effect"></div>
            </div>
        `)

        effectBody = document.querySelector('.effect__field');
        effectColor = document.querySelector('.color__effect');
        effectSize = Math.min(button.offsetWidth, button.offsetHeight);

        effectBody.style.width = effectBody.style.height = `${effectSize / 2}px`
        effectColor.style.height = `${effectBody.offsetHeight}px`
        effectColor.style.width = `${effectBody.offsetWidth}px`
      }
      if (e.type === 'mouseout'){
        effectBody ? effectBody.remove() : null
      }
      if (e.type === 'mousemove'){
        effectBody.style.top = `${e.pageY - (button.getBoundingClientRect().top - scrollY) - effectSize / 4}px`
        effectBody.style.left = `${e.pageX - (button.getBoundingClientRect().left - scrollX) - effectSize / 4}px`
        let color = Math.random() * 360

        effectColor.style.filter = `hue-rotate(${color}deg)`
        let styleDuration = getComputedStyle(effectColor).animationDuration
        effectColor.style.setProperty('animationDuration', styleDuration + 5 + 's')
      }
    }
  }
}