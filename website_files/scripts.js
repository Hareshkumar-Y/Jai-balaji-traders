let menu = document.querySelector('.hamburger input')
let navUL = document.querySelector('.List001')
let sections = document.querySelectorAll('section') // Use querySelectorAll to get all sections

menu.addEventListener('click',()=>{
    navUL.classList.toggle('active')
})

window.onscroll = () => {
    console.log('Scrolling...');
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = window.scrollY;
        let height = sec.offsetHeight - 150;
        let id = sec.getAttribute('id')

        console.log(`Section ${id} offsetTop: ${sec.offsetTop}, height: ${height}`);

        if (top >= sec.offsetTop && top < (sec.offsetTop + height)) {
            console.log(`Section ${id} is in viewport`);
            let navLinks = navUL.querySelectorAll('li') // Get all li elements inside navUL
            navLinks.forEach((link) => {
                link.classList.remove('active');
                console.log(`Removing active class from link ${link.textContent}`);
                let navLink = document.querySelector('nav a[href*=' + id + ']');
                console.log(`Found nav link with href*=${id}: ${navLink}`);
                navLink.classList.add('active');
                console.log(`Added active class to nav link ${navLink.textContent}`);
            })
        } else {
            console.log(`Section ${id} is not in viewport`);
        }
    });
};