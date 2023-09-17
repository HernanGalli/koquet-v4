document.addEventListener('DOMContentLoaded', function() {

    var sideMenu = document.getElementById('side-menu');
    var nav = document.querySelector('.nav');

    sideMenu.addEventListener('change', function() {
        nav.style.maxHeight = this.checked ? '100%' : '0';
    });

    const productContainers = [...document.querySelectorAll('.product-container')];
    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];   
    productContainers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;
    
        nxtBtn[i].addEventListener('click', () => {
            console.log('Error en el boton');
            item.scrollLeft += containerWidth;
        })
        
        preBtn[i].addEventListener('click', () => {
            console.log('Previous button clicked');
            item.scrollLeft -= containerWidth;
        })
        
    })
    
});
