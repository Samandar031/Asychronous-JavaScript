'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const request = new XMLHttpRequest();

// // 1.konvertcha ochish ro'yhatlarni olvolamiz
// request.open('GET', 'https://restcountries.com/v2/all');

// // 2.bu xatni yuboryapmiz
// request.send();

// // 3.barcha ma'lumotlar to'liqligicha yaratilgandan keyin ishlaydi
// request.addEventListener('load', function () {
//   // 4.kelayotgan arrayni obyekt qilib olishimiz kk
//   const [data] = JSON.parse(request.responseText);
//   console.log(data);

//   let html = `
//     <article class="country">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       data.population / 1000000
//     ).toFixed(1)}</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${
//           data.currencies ? data.currencies[0].code : data.currencie
//         }</p>
//         </div>
//         </article>
//         `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// });

let input = document.querySelector('.search_input');
let btnInput = document.querySelector('.input_btn');

let boshqa;
let c = 1;
// console.log(boshqa);

btnInput.addEventListener('click', function (e) {
  e.preventDefault();

  boshqa = input.value;
  getCountry(boshqa);

  input.value = '';
});

const getCountry = function (country) {
  const request = new XMLHttpRequest();

  // 1.konvertcha ochish ro'yhatlarni olvolamiz
  request.open('GET', `https://restcountries.com/v2/name/${country}`);

  // 2.bu xatni yuboryapmiz
  request.send();

  // 3.barcha ma'lumotlar to'liqligicha yaratilgandan keyin ishlaydi
  request.addEventListener('load', function () {
    // 4.kelayotgan arrayni obyekt qilib olishimiz kk
    const [data] = JSON.parse(request.responseText);
    console.log(data);

    let html = `  
    <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      data.population / 1000000
    ).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${
          data.currencies ? data.currencies[0].code : data.currencie
        }</p>
        </div>
        </article>
        `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountry('uzbekistan');
getCountry('usa');
getCountry('china');
