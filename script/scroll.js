// Parallax effect

let plants = document.getElementById('plants');
let shapeFront = document.getElementById('shapeFront');
let shapeBehind = document.getElementById('shapeBehind');
let text = document.getElementById('text');

// create scroll function for parallax

window.addEventListener('scroll', function(){
    let value = window.scrollY; 
    shapeBehind.style.top = value * 0.25 + 'px';
    plants.style.top = value * 0 + 'px';
    shapeFront.style.top = value * 0 + 'px';
    btn.style.top = value * 0.65 + 'px';
    text.style.marginRight = value * 2 + 'px';
    text.style.marginTop = value * 0.5 + 'px';  

})