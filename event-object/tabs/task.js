document.addEventListener('click', (event) => {
  // Проверяем, что клик был по вкладке
  if (event.target.classList.contains('tab')) {
    const clickedTab = event.target;
    const tabContainer = clickedTab.closest('.tab__navigation');
    const tabs = tabContainer.querySelectorAll('.tab');
    const tabContents = tabContainer.parentElement.querySelectorAll('.tab__content');
    
    // Находим индекс нажатой вкладки
    const tabIndex = Array.from(tabs).indexOf(clickedTab);
    
    // Убираем активные классы
    tabs.forEach(tab => tab.classList.remove('tab_active'));
    tabContents.forEach(content => content.classList.remove('tab__content_active'));
    
    // Активируем выбранную вкладку и контент
    clickedTab.classList.add('tab_active');
    tabContents[tabIndex].classList.add('tab__content_active');
  }
});
