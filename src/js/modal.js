'use strict'

const $ = document.querySelector.bind(document);

const user = $("#login-btn");
const modal = $(".modal");
const closeUser = $(".close-btn");


user.onclick = () => {
     modal.classList.add('open');
}

closeUser.onclick = () => {
     modal.classList.remove('open');
}

const checkOut = $(".check-out");
const modalPayment = $(".payment-method");
const closePay = $(".close-pay");
const pay = $(".pay");

checkOut.onclick = () => {
     modalPayment.classList.add('open');
}

closePay.onclick = () => {
     modalPayment.classList.remove('open');
}

pay.onclick = () => {
     modalPayment.classList.remove('open');
}