// Trasformate i 3 array con i dati, in un un unico array di oggetti
// ogni oggetto corrisponderà ad una slide e conterrà 3 proprietà: l’immagine, il titolo e la descrizione

const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },

    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        description: 'Lorem ipsum',
    },

    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },

    {
        image: 'img/04.jpg',
        title: 'Germania',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    },

    {
        image: 'img/05.jpg',
        title: 'Paradise',
        description: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    },
]
console.log(slides);

const thumbnailsContainer = document.querySelector(".thumbnails-container");
const slideWrapper = document.querySelector('.slide-wrapper');
const imgInfo = document.querySelector('.img-info');


// generate l ’html delle slide ciclando questo array e recuperando le informazioni necessarie della proprietà dei singoli oggetti.
for(let i = 0; i < slides.length; i++){ 
    //salvo le proprietà delle posizione corrente in delle costanti
    const image = slides[i].image;
    const title = slides[i].title;
    const description = slides[i].description;

    // creo l'elemento html e lo inserisco nel rispoettivo container html
    const thumbnail = `<img class="thumbnail" src="${image}">`;
    thumbnailsContainer.innerHTML += `${thumbnail}`;
    console.log(thumbnail);

    const imgSlide = ` <img class="slide" src="${image}">`;
    slideWrapper.innerHTML += `${imgSlide}`;
    console.log(slideWrapper);

    const imgTitle = `<h3 class="img-title">${title}</h3>`;
    const imgText = `<p class="img-text">${description}</p>`;
    imgInfo.innerHTML += `${imgTitle} ${imgText}`;
    console.log(imgTitle,imgText,imgInfo);
}
