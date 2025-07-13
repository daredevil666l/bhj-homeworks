let xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();

xhr.onload = function () {
  let response = xhr.response;
  response = JSON.parse(response);
  console.log(response.data);
  let question = response.data.title;
  let answers = [];
  console.log(response.data.answers.length);


  for (let value of response.data.answers) {
    console.log(value)
    answers.push(value)
}


  let poll_title = document.querySelector(".poll__title");
  let poll__answers = document.querySelector(".poll__answers");

  poll_title.innerHTML = question;

  for (answer of answers) {
    console.log(answer);
    let poll__answer = document.createElement("button");
    poll__answer.classList.add("poll__answer");
    poll__answer.innerHTML = answer;
    poll__answer.addEventListener('click', ()=>{alert('Спасибо, ваш голос засчитан!')})
    poll__answers.append(poll__answer);
  }
};
