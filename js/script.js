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
    if(active_img<(images.length - 1)){
        all_img[active_img].classList.remove('active');
        active_img++;
        all_img[active_img].classList.add('active')
    }
})

prev_button.addEventListener('click', function(){
    if(active_img>0){
        all_img[active_img].classList.remove('active');
        active_img--;
        all_img[active_img].classList.add('active')
    }
})