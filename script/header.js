// Start scrolling 

const menu_item = document.querySelectorAll('header ul li a');
    document.addEventListener('scroll', () => {
            var scroll_position = window.scrollY;
            if(scroll_position > 500){
                header.style.backgroundColor = '#5a497a';
            }else{
                header.style.backgroundColor = 'transparent';
            }
    
        });

let plants = document.getElementById('plants');
let shapeFront = document.getElementById('shapeFront');
let shapeBehind = document.getElementById('shapeBehind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY; 
    shapeBehind.style.top = value * 0.25 + 'px';
    plants.style.top = value * 0 + 'px';
    shapeFront.style.top = value * 0 + 'px';
    text.style.marginRight = value * 2 + 'px';
    text.style.marginTop = value * 0.5 + 'px';
    header.style.top = value * 1 + 'px';
    btn.style.top = value * 1 + 'px';

})

//End scrolling