//array immagini
let images = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp'
]

//variabile contenitore slide
let slidebar = document.querySelector('.slidebar');

//variabile contenuto sidebar
let slidebar_content = '';

//ciclo for
for(let i=0; i<images.length; i++) {
    
    //variabile immagine array
    let current_image=images[i];
    slidebar_content += `<div class="slide"><img src="${current_image}"></div>`
}

slidebar.innerHTML = slidebar_content;

//variabile contenitore immagini
let all_img = document.getElementsByClassName('slide');

//variabile immagine iniziale
let active_img = 0

all_img[active_img].classList.add('active');

//variabile bottone prev
let prev_button = document.querySelector('.prev');

//variabile bottone next
let next_button = document.querySelector('.next');

//funzione click
next_button.addEventListener('click', function(){
    //active
    all_img[active_img].classList.remove('active');
    active_img= (active_img + 1) % images.length;
    all_img[active_img].classList.add('active')
    //filter
    all_img_small[active_img_small].classList.remove('filter');
    active_img_small= (active_img_small + 1) % images.length;
    all_img_small[active_img_small].classList.add('filter')
})

prev_button.addEventListener('click', function(){
    //active
    all_img[active_img].classList.remove('active');
    active_img= (active_img - 1 + images.length) % images.length;
    all_img[active_img].classList.add('active')
    //filter
    all_img_small[active_img_small].classList.remove('filter');
    active_img_small= (active_img_small - 1 + images.length) % images.length;
    all_img_small[active_img_small].classList.add('filter')
})

//variabile contenitore slide small
let slidebar_small = document.querySelector('.slidebar_small');

//variabile contenuto sidebar small
let slidebar_small_content = '';

//ciclo for
for(let i=0; i<images.length; i++) {
    
    //variabile immagine small array
    let current_image_small=images[i];
    slidebar_small_content += `<div class="slide_small"><img src="${current_image_small}"></div>`
}

slidebar_small.innerHTML = slidebar_small_content;

//variabile contenitore immagini small
let all_img_small = document.getElementsByClassName('slide_small');

//variabile immagine iniziale
let active_img_small = 0

//variabile filter
all_img_small[active_img_small].classList.add('filter');
