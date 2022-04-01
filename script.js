"use strict";

let a;
navigator.geolocation.getCurrentPosition(function (e) {
  a = e;
});

console.log(a);
