const navLink = document.querySelector('.nav-link');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => { 
    if (navLink.style.display === 'none') {
        navLink.style.display = 'flex';
    } else { 
        navLink.style.display = 'none';
    }
})