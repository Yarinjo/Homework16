$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    dots: true,
    items: 1,

})


const bookDoctor = document.querySelector('.specialist__button');
console.log(bookDoctor);

const bookDoctorContent = bookDoctor.innerHTML;
console.log(bookDoctorContent);

const booked = document.createElement('div');
console.log(booked);

booked.innerHTML = `YOO BOOKED THIS <span>DOCTOR</span>`;


function doctorWasBooked(e) {
  bookDoctor.prepend(booked);
}
bookDoctor.addEventListener('click', doctorWasBooked);

const mainForm = document.forms.main;
console.log(mainForm);

const mainFormInput = mainForm.nameInput;
console.log(mainFormInput.value);

const mainFormInputValue = mainForm.nameInput.value;
console.log(mainFormInputValue.value);

const subcribeButton = document.querySelector('.join-form__btn');
console.log(subcribeButton);




function sendMail(e) {
  console.log(mainFormInput.value);
  mainForm.after(divForMail);
}
subcribeButton.addEventListener('click', sendMail);

const divForMail = document.createElement('div');
divForMail.innerHTML = `<p class="button__p">You was subscribed on us, <span class="span_green">Thanks!</span> <br>
We will send you all news on youre email: ${mainFormInputValue}</p>`;
console.log(divForMail);

mainForm.addEventListener('submit', function(event) {
  console.log('Form is sending ...');
})