let btnmenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')

btnmenu.addEventListener('click', ()=> {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=> {
    menu.classList.remove('abrir-menu')
})