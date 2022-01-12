

let btnspecs = document.querySelector('.product-specs-btn');
let btndecrip = document.querySelector('.product-descrip-btn');
let btnreviews = document.querySelector('.product-reviews-btn');



let main_specs = document.getElementById('main-specs');
let main_descrip = document.getElementById('main-descrip');
let main_reviews = document.getElementById('main-reviews');


btnspecs.addEventListener("click", ()=> {
    btnspecs.classList.add('clicked');
    btndecrip.classList.remove('clicked');
    btnreviews.classList.remove('clicked');
    main_specs.classList.add('active');
    main_descrip.classList.remove('active');
    main_reviews.classList.remove('active');
});
btndecrip.addEventListener("click", ()=> {
    btnspecs.classList.remove('clicked');
    btndecrip.classList.add('clicked');
    btnreviews.classList.remove('clicked');
    main_specs.classList.remove('active');
    main_descrip.classList.add('active');
    main_reviews.classList.remove('active');
});
btnreviews.addEventListener("click", ()=> {
    btnspecs.classList.remove('clicked');
    btndecrip.classList.remove('clicked');
    btnreviews.classList.add('clicked');
    main_specs.classList.remove('active');
    main_descrip.classList.remove('active');
    main_reviews.classList.add('active');
});
