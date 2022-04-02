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

let ex = document.querySelector('.ex');

let set = new Set([]);

let boshqa;
let c = 1;
let one;
let two;
// console.log(boshqa);
let d = [];
let cc = [];

const getCountry = function (country) {
  const request = new XMLHttpRequest();

  // 1.konvertcha ochish ro'yhatlarni olvolamiz
  request.open('GET', `https://restcountries.com/v2/name/${country}`);

  // 2.bu xatni yuboryapmiz
  request.send();
  let html;

  // 3.barcha ma'lumotlar to'liqligicha yaratilgandan keyin ishlaydi
  request.addEventListener('load', function () {
    // 4.kelayotgan arrayni obyekt qilib olishimiz kk
    const [data] = JSON.parse(request.responseText);
    // console.log(data);

    html = `  
    <article class="country" id="${boshqa}">
    <div class="ex"><i class="fa-solid fa-xmark"></i></div>
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
// console.log(ex);
getCountry('uzbekistan');

// ex.addEventListener('click', function () {
//   // e.preventDefault();
//   ex.style.backgroundColor = 'red';
// });

countriesContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('ex')) {
    e.target.closest('.country').remove();
    set.delete(e.target.closest('.country').id);
    [...d] = set;
    local();
  }
});

getLocal();

btnInput.addEventListener('click', function (e) {
  e.preventDefault();

  boshqa = input.value;
  // obj = boshqa.toLowerCase();
  // getCountry(boshqa);

  if (!d.includes(boshqa)) {
    d.push(boshqa);
    getCountry(boshqa);
    local();
    set.add(boshqa);
  } else {
    alert('Bor bu yerda');
  }

  // two = JSON.parse(localStorage.getItem('arr'));
  input.value = '';
});

let local = () => {
  localStorage.setItem('arr', JSON.stringify(d));
};

function getLocal() {
  let data = JSON.parse(localStorage.getItem('arr'));
  d = data;
  d.forEach(element => {
    getCountry(element);
  });
}
