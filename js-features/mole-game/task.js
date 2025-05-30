let holes = document.getElementsByClassName("hole");

function checkHoles() {
  for (i = 0; i < holes.length; i += 1) {
    if (holes[i].classList.contains("hole_has-mole")) {
      holes[i].onclick = trueClick;
    } else {
      holes[i].onclick = falseClick;
    }
  }
  checkWin();
  checkLoose();
}
function trueClick() {
  document.getElementById("dead").textContent =
    Number(document.getElementById("dead").textContent) + 1;
}

function falseClick() {
  document.getElementById("lost").textContent =
    Number(document.getElementById("lost").textContent) + 1;
}

function checkWin() {
  if (Number(document.getElementById("dead").textContent) === 10) {
    alert("Победа");
    document.getElementById("lost").textContent = 0;
    document.getElementById("dead").textContent = 0;
  }
}

function checkLoose() {
  if (Number(document.getElementById("lost").textContent) === 5) {
    alert("Проигрыш");
    document.getElementById("lost").textContent = 0;
    document.getElementById("dead").textContent = 0;
  }
}

setInterval(checkHoles, 10);
