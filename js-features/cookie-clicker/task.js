cookie = document.getElementById("cookie");

cookie.onclick = clickOnCookie;
counter = document.getElementById("clicker__counter");

let intCounter = Number(counter.textContent);
console.log(intCounter);

let pressedEven = false;

let lastPress = false;

function clickOnCookie() {
  let actualPress = new Date();
  console.log("Нажато", actualPress);
  console.log("печенька нажата");
  intCounter += 1;
  counter.textContent = String(intCounter);
  if (pressedEven === false) {
    pressedEven = true;
    cookie.width = 150;
  } else {
    pressedEven = false;
    cookie.width = 200;
  }
  if (lastPress != false) {
    console.log(actualPress - lastPress);
    document.getElementById("clicker__intensive__counter").textContent =
      (1 / ((actualPress - lastPress) / 1000)).toFixed(2);
  }
  lastPress = actualPress;
}
