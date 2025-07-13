document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const fileInput = document.getElementById("file");
  const progress = document.getElementById("progress");
  const sendButton = document.getElementById("send");
  const fileNameDisplay = document.querySelector(".input__wrapper-desc");

  fileInput.addEventListener("change", function () {
    if (fileInput.files.length > 0) {
      fileNameDisplay.textContent = fileInput.files[0].name;
    } else {
      fileNameDisplay.textContent = "Имя файла...";
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let file = fileInput.files[0];
    if (!file) {
      alert("Пожалуйста, выберите файл для загрузки");
      return;
    }

    let formData = new FormData();
    formData.append("file", file);

    let xhr = new XMLHttpRequest();

    xhr.upload.addEventListener("progress", function (e) {
      if (e.lengthComputable) {
        let percentComplete = e.loaded / e.total;
        progress.value = percentComplete;
        console.log(`Загружено: ${Math.round(percentComplete * 100)}%`);
      }
    });

    xhr.upload.addEventListener("loadstart", function () {
      progress.value = 0;
      sendButton.disabled = true;
      sendButton.textContent = "Загрузка...";
    });

    xhr.addEventListener("load", function () {
      if (xhr.status === 200 || xhr.status === 201) {
        progress.value = 1;
        alert("Файл успешно загружен!");
        console.log("Ответ сервера:", xhr.responseText);
      } else {
        alert("Ошибка при загрузке файла");
        console.error("Ошибка:", xhr.status, xhr.statusText);
      }
      sendButton.disabled = false;
      sendButton.textContent = "Отправить";
    });

    xhr.addEventListener("error", function () {
      alert("Произошла ошибка при загрузке файла");
      progress.value = 0;
      sendButton.disabled = false;
      sendButton.textContent = "Отправить";
    });

    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    xhr.send(formData);
  });
});
