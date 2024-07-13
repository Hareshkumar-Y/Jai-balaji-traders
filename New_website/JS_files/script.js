let menu = document.querySelector('.button')
let navUL = document.querySelector('.menu_bar')

menu.addEventListener('click',()=>{
    navUL.classList.toggle('active')
})