var imageBS = document.querySelectorAll('.bags-pics');
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');

function openModal() {

    backdrop.style.display = 'block';
    modal.style.display = 'block';
}

function closeModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}

for(var i=0; i < imageBS.length; i++) {
    imageBS[i].addEventListener('click', openModal);
}

backdrop.addEventListener('click', closeModal);









