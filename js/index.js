'use strict';

const images = [
    {'url':'./img/Ayanokoji.jpeg'},
    {'url':'./img/Hirata.jpeg'},
    { 'url':'./img/Sudo.jpeg'},
    { 'url':'./img/Karuizawa.jpeg'},
    {'url':'./img/Kushida.jpeg'},
    {'url':'./img/Sakura.jpeg'},
]

const containerItems = document.querySelector('#container-items')

const loadImages = (images, container) => {
    images.forEach (image => {
        container.innerHTML += `
        <div class='item'>
        <img src='${image.url}'
        </div>
        `
    })
}

loadImages(images, containerItems);

let items = document.querySelectorAll('.item');
let nomes = document.querySelector('#nomes');

const previous = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0]);
    items = document.querySelectorAll('.item');
    switch(nomes.textContent){
        case 'Hirata':
            nomes.textContent = 'Ayanokoji';
            break;
        case 'Ayanokoji':
            nomes.textContent = 'Sakura';
            break;
        case 'Sakura':
            nomes.textContent = 'Kushida';
            break;
        case 'Kushida':
            nomes.textContent = 'Karuizawa';
            break;
        case 'Karuizawa':
            nomes.textContent = 'Sudo';
            break;
        case 'Sudo':
            nomes.textContent = 'Hirata';
            break;
    }
}

const next = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
    switch(nomes.textContent){
        case 'Hirata':
            nomes.textContent = 'Sudo';
            break;
        case 'Sudo':
            nomes.textContent = 'Karuizawa';
            break;
        case 'Karuizawa':
            nomes.textContent = 'Kushida';
            break;
        case 'Kushida':
            nomes.textContent = 'Sakura';
            break;
        case 'Sakura':
            nomes.textContent = 'Ayanokoji';
            break;
        case 'Ayanokoji':
            nomes.textContent = 'Hirata';
            break;
    }
}

const troca = document.querySelector('#nomes');

document.querySelector('#previous').addEventListener('click', previous);

document.querySelector('#previous').addEventListener('click', () => {
    troca.classList.add("delay");
    setTimeout(() => {troca.classList.remove("delay")}, 1100);
});

document.querySelector('#next').addEventListener('click', next);

document.querySelector('#next').addEventListener('click', () => {
    troca.classList.add("delayreverse");
    setTimeout(() => {troca.classList.remove("delayreverse")}, 1100);
});