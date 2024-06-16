const btnshow = document.querySelector('#showvideo');
const btnclose = document.querySelector('#closevideo');
const elvideo = document.querySelector('.cont__ElFuturo');

const mostrar = ()=>{
    elvideo.classList.remove('mostrar-video') 

}

const cerrar = ()=>{
        elvideo.classList.add('mostrar-video')

}

btnshow.addEventListener('click', mostrar)
btnclose.addEventListener('click', cerrar)