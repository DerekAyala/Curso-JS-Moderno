
window.addEventListener('scroll',() => {
    // const scrollPX = window.scrollY;

    // console.log(scrollPX);

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    if(ubicacion.top < 100) {
        console.log('elemento visible');
    } else {
        console.log('elemento no visible');
    }
})

