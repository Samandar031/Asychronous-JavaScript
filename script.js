'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const request = new XMLHttpRequest();

// 1.konvertcha ochish ro'yhatlarni olvolamiz
request.open('GET', 'https://restcountries.com/v2/name/china');

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
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
});
