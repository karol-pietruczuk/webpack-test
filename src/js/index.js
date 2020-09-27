import '../scss/main.scss';
import moment from 'moment';

//alert('You are programmmer');
//console.log('ajajaaj');
/*
const firstName = "Karol";
const age = 32;
console.log(`Siema, mam na imię ${firstName} i mam ${age} lata`);
alert(
  "Hej, mam na imię " +
    firstName +
    " i witam Cię serdecznie na mojej stronie domowej :)"
);
*/
/*
const jsText = document.querySelector('.js-notes__descrption-js');
jsText.innerHTML = 'Java Script jest super :)';
*/
/*
const welcomeFunction = {
  name: "Karol",
  age: 25,
  welcome: () => {
    alert("Hej, mam na imię " + welcomeFunction.name + " i witam Cię :)")
  },
}

welcomeFunction.welcome();
*/

const hamburger = document.querySelector('.menu--button--js');

hamburger.addEventListener('click', () => {
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--open');
})

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')
const startOfDay = moment().startOf('day').fromNow();

const timePlaceholder = document.querySelector('.time--js');

timePlaceholder.innerHTML = startOfDay;