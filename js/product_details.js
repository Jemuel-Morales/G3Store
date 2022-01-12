const hoverimg = document.querySelectorAll('.inner-img');
const mainhoverimg = document.querySelector('.imghover-container');

window.addEventListener('DOMContentLoaded', () => {
    hoverimg[0].parentElement.classList.add('active');
});

hoverimg.forEach((image) => {
    image.addEventListener('mouseover', () => {
        mainhoverimg.querySelector('img').src = image.src;
        resetActiveImg();
        image.parentElement.classList.add('active');
    });
});

function resetActiveImg() {
    hoverimg.forEach((img) =>{
        img.parentElement.classList.remove('active');
    });
}