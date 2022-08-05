import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputEll = document.querySelector('input');
const listEll = document.querySelector('.country-list');
const infoDivEll = document.querySelector('.country-info')
const bodyEll = document.querySelector('body');


const DEBOUNCE_DELAY = 300;


function fetchCountries() {
    fetch('https://restcountries.com/v2/name/united')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(data => {
            // Data handling
        })
        .catch(error => {
            // Error handling
        }, DEBOUNCE_DELAY);
}

// fetchCountries();

bodyEll.addEventListener('click', fetchCountries);

// bodyEll.addEventListener(
//     "scroll",
//     _.debounce((fetchCountries) => {
//         // eventCounter.debounced += 1;
//         // debouncedOutput.textContent = eventCounter.debounced;
//     }, DEBOUNCE_DELAY)
// );