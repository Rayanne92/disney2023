/* Bouton n°1 */

const dropdown = document.querySelector(".zone-04-dropdown");
const btnDrop = document.querySelector(".zone-04-button");


let toggleIndex = 0;

btnDrop.addEventListener('click', () => {

    // console.log(dropdown.scrollHeight);

    if(toggleIndex === 0){
        dropdown.style.height = `${dropdown.scrollHeight}px`;
        toggleIndex++;
    } else {
        dropdown.style.height = `${btnDrop.scrollHeight}px`;
        toggleIndex--;
    }

})

/* Bouton n°2 */

const dropdown2 = document.querySelector("#dropdown-2");
const btnDrop2 = document.querySelector("#button-2");


let toggleIndex2 = 0;

btnDrop2.addEventListener('click', () => {

    // console.log(dropdown.scrollHeight);

    if(toggleIndex === 0){
        dropdown2.style.height = `${dropdown2.scrollHeight}px`;
        toggleIndex++;
    } else {
        dropdown2.style.height = `${btnDrop2.scrollHeight}px`;
        toggleIndex--;
    }

})

/* Bouton n°3 */

const dropdown3 = document.querySelector("#dropdown-3");
const btnDrop3 = document.querySelector("#button-3");


let toggleIndex3 = 0;

btnDrop3.addEventListener('click', () => {

    // console.log(dropdown.scrollHeight);

    if(toggleIndex === 0){
        dropdown3.style.height = `${dropdown3.scrollHeight}px`;
        toggleIndex++;
    } else {
        dropdown3.style.height = `${btnDrop3.scrollHeight}px`;
        toggleIndex--;
    }

})

/* Bouton n°4 */

const dropdown4 = document.querySelector("#dropdown-4");
const btnDrop4 = document.querySelector("#button-4");


let toggleIndex4 = 0;

btnDrop4.addEventListener('click', () => {

    // console.log(dropdown.scrollHeight);

    if(toggleIndex === 0){
        dropdown4.style.height = `${dropdown4.scrollHeight}px`;
        toggleIndex++;
    } else {
        dropdown4.style.height = `${btnDrop4.scrollHeight}px`;
        toggleIndex--;
    }

})

/* Bouton n°5 */

const dropdown5 = document.querySelector("#dropdown-5");
const btnDrop5 = document.querySelector("#button-5");


let toggleIndex5 = 0;

btnDrop5.addEventListener('click', () => {

    // console.log(dropdown.scrollHeight);

    if(toggleIndex === 0){
        dropdown5.style.height = `${dropdown5.scrollHeight}px`;
        toggleIndex++;
    } else {
        dropdown5.style.height = `${btnDrop5.scrollHeight}px`;
        toggleIndex--;
    }

})