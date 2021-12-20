// Create hamburger menu

const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

// create function for active on hamburger menu

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

// create scroll for header nav

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
   
    if(scroll_position > 250){
        header.style.backgroundColor = '#5a497a';
    }else{
        header.style.backgroundColor = '#5a497a';
    }
});

// Create function for click on hamburger menu


menu_item.forEach((menu_item) => {
    menu_item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

