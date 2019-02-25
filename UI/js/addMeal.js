var modal_1 = document.querySelector(".modal-1");

var trigger_1 = document.querySelector(".trigger-1");
var closeButton_1 = document.querySelector(".close-button-1");

function toggleModal() {
    modal_1.classList.toggle("show-modal-1");
}

function windowOnClick(event) {
    if (event.target === modal_1) {
        toggleModal();
    }
}
trigger_1.addEventListener("click", toggleModal);
closeButton_1.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


var modal_2 = document.querySelector(".modal-2");

var trigger_2 = document.querySelector(".trigger-2");
var closeButton_2 = document.querySelector(".close-button-2");

function toggleModal() {
    modal_2.classList.toggle("show-modal-2");
}

function windowOnClick(event) {
    if (event.target === modal_2) {
        toggleModal();
    }
}

trigger_2.addEventListener("click", toggleModal);
closeButton_2.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


var modal_3 = document.querySelector(".modal-3");

var trigger_3 = document.querySelector(".trigger-3");
var closeButton_3 = document.querySelector(".close-button-3");

function toggleModal() {
    modal_3.classList.toggle("show-modal-3");
}

function windowOnClick(event) {
    if (event.target === modal_3) {
        toggleModal();
    }
}

trigger_3.addEventListener("click", toggleModal);
closeButton_3.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);



var modal_4 = document.querySelector(".modal-4");

var trigger_4 = document.querySelector(".trigger-4");
var closeButton_4 = document.querySelector(".close-button-4");

function toggleModal() {
    modal_4.classList.toggle("show-modal-4");
}

function windowOnClick(event) {
    if (event.target === modal_4) {
        toggleModal();
    }
}

trigger_4.addEventListener("click", toggleModal);
closeButton_4.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


