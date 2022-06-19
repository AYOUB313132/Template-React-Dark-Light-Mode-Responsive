/* ================== Add Toggle Menu ================== */

let btnMenu = document.getElementById('menu-toggle')
let navItems = document.getElementById('nav-items')

btnMenu.addEventListener('click', function (){
    navItems.classList.toggle('active')
})

/* ================== Change Color Theme ================== */

let darkColor = document.getElementById('dark-color')
let lightColor = document.getElementById('light-color')

darkColor.addEventListener('click', function(){
    document.body.classList.add('dark-mode')
    this.style.display ='none'
    lightColor.style.display = 'block'
})

lightColor.addEventListener('click', function(){
    document.body.classList.remove('dark-mode')
    this.style.display ='none'
    darkColor.style.display = 'block'
})