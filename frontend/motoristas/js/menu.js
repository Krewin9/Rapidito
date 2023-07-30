const menuIcon = document.querySelector('.fa-bars')
const menu = document.querySelector('.menu-navegacion')


menuIcon.addEventListener('click', ()=>{
    menu.classList.toggle("show-menu")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('show-menu') 
        && e.target != menu && e.target != menuIcon){
        menu.classList.toggle("show-menu")
    }
})