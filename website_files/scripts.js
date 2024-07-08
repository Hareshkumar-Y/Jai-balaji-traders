let menu = document.querySelector('.hamburger input')
let navUL = document.querySelector('.List001')
let sections = document.querySelectorAll('section') // Use querySelectorAll to get all sections

menu.addEventListener('click',()=>{
    navUL.classList.toggle('active')
})



// Get all nav links
const navLinks = document.querySelectorAll('nav a');

// Add an event listener to each nav link
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // Prevent default link behavior
    e.preventDefault();

    // Get the target section ID
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    // Add a smooth scrolling effect
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  });
});

// Add an event listener to each nav link
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // Prevent default link behavior
    e.preventDefault();

    // Get the target section ID
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    // Add a smooth scrolling effect
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'mooth'
    });

    // Highlight the nav link
    navLinks.forEach((navLink) => navLink.classList.remove('active'));
    link.classList.add('active');
  });
});

// Add an event listener to the window scroll event
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop - 200 && scrollPosition <= sectionTop + 200) {
      navLinks.forEach((link) => {
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });
});