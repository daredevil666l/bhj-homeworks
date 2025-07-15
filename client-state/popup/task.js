document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('subscribe-modal');
    const closeButton = document.querySelector('.modal__close');
    const cookieName = 'modalClosed';
    
    // Функция для получения значения cookie по имени
    function getCookie(name) {
        const value = "; " + document.cookie;
        const parts = value.split("; " + name + "=");
        if (parts.length === 2) {
            return parts.pop().split(";").shift();
        }
        return null;
    }
    
    // Функция для установки cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }
    
    // Функция для показа модального окна
    function showModal() {
        modal.classList.add('modal_active');
    }
    
    // Функция для скрытия модального окна
    function hideModal() {
        modal.classList.remove('modal_active');
    }
    
    // Проверяем наличие cookie при загрузке страницы
    function checkAndShowModal() {
        const modalStatus = getCookie(cookieName);
        
        // Если cookie нет (окно ещё не закрывалось), показываем модальное окно
        if (!modalStatus) {
            showModal();
        }
    }
    
    // Обработчик закрытия модального окна
    function handleModalClose() {
        // Скрываем модальное окно
        hideModal();
        
        // Устанавливаем cookie на длительный срок (365 дней)
        setCookie(cookieName, 'true', 365);
    }
    
    // Инициализация при загрузке страницы
    checkAndShowModal();
    
    // Добавляем обработчик события на кнопку закрытия
    if (closeButton) {
        closeButton.addEventListener('click', handleModalClose);
    }
    
    // Дополнительно: закрытие модального окна при клике на фон
    modal.addEventListener('click', function(event) {
        // Проверяем, что клик был именно по фону модального окна, а не по содержимому
        if (event.target === modal) {
            handleModalClose();
        }
    });
});
