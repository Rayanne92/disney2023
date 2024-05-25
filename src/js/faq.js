const toggleBtn1 = document.getElementById('question1_toggle');
const toggleBtn2 = document.getElementById('question2_toggle');
const toggleBtn3 = document.getElementById('question3_toggle');
const toggleBtn4 = document.getElementById('question4_toggle');
const toggleBtn5 = document.getElementById('question5_toggle');

const plus1 = document.getElementById('plus1');
const plus2 = document.getElementById('plus2');
const plus3 = document.getElementById('plus3');
const plus4 = document.getElementById('plus4');
const plus5 = document.getElementById('plus5');

const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');
const text3 = document.querySelector('.text3');
const text4 = document.querySelector('.text4');
const text5 = document.querySelector('.text5');


toggleBtn1.addEventListener('click', () => {
    text1.classList.toggle('show');
    if (text1.classList.contains('show')) {
        plus1.textContent = '–';
    } else {
        plus1.textContent = '+';
    }
});

toggleBtn2.addEventListener('click', () => {
    text2.classList.toggle('show');
    if (text2.classList.contains('show')) {
        plus2.textContent = '–';
    } else {
        plus2.textContent = '+';
    }
});

toggleBtn3.addEventListener('click', () => {
    text3.classList.toggle('show');
    if (text3.classList.contains('show')) {
        plus3.textContent = '–';
    } else {
        plus3.textContent = '+';
    }
});

toggleBtn4.addEventListener('click', () => {
    text4.classList.toggle('show');
    if (text4.classList.contains('show')) {
        plus4.textContent = '–';
    } else {
        plus4.textContent = '+';
    }
});

toggleBtn5.addEventListener('click', () => {
    text5.classList.toggle('show');
    if (text5.classList.contains('show')) {
        plus5.textContent = '–';
    } else {
        plus5.textContent = '+';
    }
});
