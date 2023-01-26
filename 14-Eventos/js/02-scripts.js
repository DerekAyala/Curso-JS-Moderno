const nav = document.querySelector('.navegacion');

nav.addEventListener('mouseout', () => {
    console.log('salgo en nav');
})

nav.addEventListener('mouseenter', () => {
    console.log('entro en nav');
})