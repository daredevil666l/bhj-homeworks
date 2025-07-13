let Items = document.querySelector("#items");

let Loader = document.querySelector(".loader");
let xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);
xhr.send();

xhr.onload = function () {
  Loader.classList.remove("loader_active");
  let response = xhr.response;
  let responseObj;
  responseObj = JSON.parse(response);
  for (let key in responseObj.response.Valute) {

    let divItem = document.createElement("div");
    divItem.className = "item";

    let divCode = document.createElement("div");
    divCode.className = "item__code";

    let divValue = document.createElement("div");
    divValue.className = "item__value";

    let divCurrency = document.createElement("div");
    divCurrency.className = "item__currency";
    divCurrency.innerHTML = "руб.";
    for (let value in responseObj.response.Valute[key]) {
      if (value === "CharCode") {
        divCode.innerHTML = responseObj.response.Valute[key][value];
      } else if (value === "Value") {
        divValue.innerHTML = responseObj.response.Valute[key][value];
      }
    }
    divItem.append(divCode, divValue, divCurrency);
    Items.append(divItem);
  }
};
