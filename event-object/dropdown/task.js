const dropdowns = document.querySelectorAll('.card');

dropdowns.forEach(dropdown => {
  const dropdownValue = dropdown.querySelector('.dropdown__value');
  const dropdownList = dropdown.querySelector('.dropdown__list');
  const dropdownLinks = dropdown.querySelectorAll('.dropdown__link');

  // Обработчик клика по значению выпадающего списка
  dropdownValue.addEventListener('click', () => {
    console.log('Нажат список');
    dropdownList.classList.toggle('dropdown__list_active');
  });

  // Обработчики для каждой ссылки в текущем выпадающем списке
  dropdownLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      dropdownValue.textContent = link.textContent;
      dropdownList.classList.remove('dropdown__list_active');
    });
  });
});
