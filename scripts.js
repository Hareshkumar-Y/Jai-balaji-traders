let menu = document.querySelector('.hamburger input')
let navUL = document.querySelector('.List001')
let sections = document.querySelectorAll('section') // Use querySelectorAll to get all sections

menu.addEventListener('click',()=>{
    navUL.classList.toggle('active')
})

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = window.scrollY;
        let height = sec.offsetHeight - 150;
        let id = sec.getAttribute('id')

        if (top >= sec.offsetTop && top < (sec.offsetTop + height)) {
            let navLinks = navUL.querySelectorAll('li') // Get all li elements inside navUL
            navLinks.forEach((link) => {
                link.classList.remove('active');
            document.querySelector('nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });
};