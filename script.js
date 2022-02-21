const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

let activeIndex = 0; // creo un indice che mi serve per spostare la classe active incrementando o decrementando l'indice - lo inizializzo a zero per partire dalla prima slide

// Creo un ciclo for per la lunghezza dell'array e ad ogni giro dentro l'array:
// - creo un elemento <img> e dentro a ogni img vado ad inserire una delle immagini che recupero usando l'indice dentro array items 
// - ogni elemento img va inserito dentro al container delle thumbnail
for(let i = 0; i < items.length; i++){
    console.log(i);

    // metodo per creare un elemento html usando createElement
    const imgElement = document.createElement('img');
    //inserisco il dentro all'elemento img l'immagine che dentro l'array items è nella posizione i del ciclo
    imgElement.src = items[i];
    // assegno la classe thumbnail all'elemento img che ho creato
    imgElement.classList.add('thumbnail');
    console.log(imgElement);
    // mi salvo in una variabile il container delle thumbnails che in html ha la classe thumbnails-container
    const thumbnailsContainer = document.querySelector(".thumbnails-container");
    console.log(thumbnailsContainer);
    // dentro inserisco l'elemento <img> con dentro le immagini dell'array che ho creato prima e per farlo uso appen()
    // Devo usare append () con document.createElement perchè sto creando un elemento html vero e proprio
    thumbnailsContainer.append(imgElement);

    // --> Altro modo per creare un elemento html dal js (lo uso per le immagini grani dello slider):
    // creo una variabile in cui ci inserisco il tag <img> con già la classe e dentro l'immagine dell'array item nella posizione i
    const imgSlide = ` <img class="slide" src="${items[i]}">`; // in questo modo creo una stringa e non un elemento html vero e proprio
    console.log(imgSlide);
    // recupero il wrapper delle slide dall'html
    const slideWrapper = document.querySelector('.slide-wrapper');
    // dentro inserisco l'elemento <img> con dentro le immagini dell'array usando .innerHTML +=
    // devo usare .innerHTML += perché con il metodo dei backtick ho creato una stringa e non un elemento html vero e proprio quindi sto effettivamente concatenando del testo
    slideWrapper.innerHTML += `${imgSlide}`;

    //Creare un titotlo e un <p> poi li inserisco dentro all'elemento html .img-info
    const imgTitle = `<h3 class="img-title">${title[i]}</h3>`;
    const imgText = `<p class="img-text">${text[i]}</p>`;
    const imgInfo = document.querySelector('.img-info');
    imgInfo.innerHTML += `${imgTitle} ${imgText}`;
    console.log(imgTitle,imgText,imgInfo);
    
}

// salvo l'array delle thumbnail, delle slide e delle info
const thumbnail = [...document.getElementsByClassName("thumbnail")]; // const thumbnail = document.getElementsByClassName("thumbnail"); se avessi fatto così mi ritornava una lista di nodi
const slide = [...document.getElementsByClassName("slide")];
const slideTitle = [...document.getElementsByClassName("img-title")];
const slideText = [...document.getElementsByClassName("img-text")];
console.log(thumbnail, slide, slideTitle, slideText);

// imposto la thumbnail, la slide e le info attive in base all'indice di partenza
thumbnail[activeIndex].classList.add('active'); // Se avessi fatto imgElement.classlist.add("active"); così non funziona perché imgElement é una stringa quindi mi sono creata l'array per prenderne gli elementi
slide[activeIndex].classList.add('active-slide');
slideTitle[activeIndex].classList.add('active-slide');
slideText[activeIndex].classList.add('active-slide');
console.log(thumbnail[activeIndex], slide[activeIndex],slideTitle[activeIndex],slideText[activeIndex]);

// al click sui bottoni mi sposto su o giù di una immagine
const btnUp = document.getElementById('btn-up');
console.log(btnUp);

const btnDown = document.getElementById('btn-down');
console.log(btnUp);  

btnUp.addEventListener('click', function(){
    console.log('vai sù');

    // devo togliere la classe active dalla slide e dalla thumbnail correnti
    slide[activeIndex].classList.remove('active-slide');
    slideTitle[activeIndex].classList.remove('active-slide');
    slideText[activeIndex].classList.remove('active-slide');
    thumbnail[activeIndex].classList.remove('active');
    console.log(thumbnail[activeIndex], slide[activeIndex], slideTitle[activeIndex]);
    
    if ( activeIndex > 0){ 
    //decremento l'activeIndex per stabilire la nuova thumbnail e la nuova slide corrente
        activeIndex --;
    // la prima immagine ha indice 0 quindi in questo if dico che se clicco sul pulsante su' e l'indice è minore di 0 non posso più diminuire l'indice, quindi non andrò oltre la prima immagine
    } else { 
    // se l'indice diventa < 0 allora assegno all'indice la lunghezza dell'array - 1 (in questo caso 4) così l'indice si sposterà sull'immagine che dentro l'array è nella posizione corrispondente ovvero quella che ho messo per ultima in basso [array è lungo 5 ma l'ultima pozione è 4 perchè si parte a contare da 0]
        activeIndex = items.length - 1;
    // in questo modo riesco ad andare oltre alla prima immagine ripartendo dall'ultima in basso
    }
    
    // devo aggiungere la classe active dalla slide e dalla thumbnail correnti
    slide[activeIndex].classList.add('active-slide');
    slideTitle[activeIndex].classList.add('active-slide');
    slideText[activeIndex].classList.add('active-slide');
    thumbnail[activeIndex].classList.add('active');
    console.log(thumbnail[activeIndex], slide[activeIndex], slideTitle[activeIndex]);
})

btnDown.addEventListener('click', function(){
    console.log('vai giù');
    
    slide[activeIndex].classList.remove('active-slide');
    slideTitle[activeIndex].classList.remove('active-slide');
    slideText[activeIndex].classList.remove('active-slide');
    thumbnail[activeIndex].classList.remove('active');
    console.log(activeIndex)
    
    if (activeIndex < items.length - 1){ 
    // se l'indice è minore della lunghezza dell'array - 1 (ovvero minore delle posibili posizione dentro l'array, in questo caso 4) allora incremento l'indice
        activeIndex ++;
    } else{
    // se l'indice diventa maggiore della lunghezza dell'array - 1 allora lo faccio ritornare a zero, ovvero alla posizione dell'aray in cui è l'immagine che ho messo per prima i alto
        activeIndex = 0;
    }
    
    slide[activeIndex].classList.add('active-slide');
    slideTitle[activeIndex].classList.add('active-slide');
    slideText[activeIndex].classList.add('active-slide');
    thumbnail[activeIndex].classList.add('active');

})

