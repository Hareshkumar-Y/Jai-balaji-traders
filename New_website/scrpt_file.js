let menu = document.querySelector('.button')
let navUL = document.querySelector('.menu_bar')
let navBar = document.querySelector('nav')


menu.addEventListener('click', () => {
    if (navUL.classList.contains('active_links')) {
        navUL.classList.remove('active_links')
        navUL.classList.add('inactive_links')
        navBar.classList.remove('active_nav')
        navBar.classList.add('inactive_nav')
    } else {
        navUL.classList.remove('inactive_links')
        navUL.classList.add('active_links')
        navBar.classList.remove('inactive_nav')
        navBar.classList.add('active_nav')
    }
})

document.addEventListener('click', (e) => {
  if (!navUL.contains(e.target) && !menu.contains(e.target)) {
    if (navUL.classList.contains('active_links')) {
      navUL.classList.remove('active_links')
      navUL.classList.add('inactive_links')
      navBar.classList.remove('active_nav')
      navBar.classList.add('inactive_nav')
    }
  }
})

navUL.addEventListener('animationend', () => {
    if (navUL.classList.contains('inactive_links')) {
        navUL.classList.remove('inactive_links')
    }
})

navBar.addEventListener('animationend', () => {
    if (navBar.classList.contains('inactive_nav')) {
        navBar.classList.remove('inactive_nav')
    }
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
      top: targetSection.offsetTop-70 ,
      behavior: 'smooth'
    });

    navUL.classList.remove('active_links')
    navUL.classList.add('inactive_links')
    navBar.classList.remove('active_nav')
    navBar.classList.add('inactive_nav')


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