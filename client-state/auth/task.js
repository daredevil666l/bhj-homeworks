document.addEventListener('DOMContentLoaded', function() {
    const signinForm = document.getElementById('signin__form');
    const signinBlock = document.getElementById('signin');
    const welcomeBlock = document.getElementById('welcome');
    const userIdSpan = document.getElementById('user_id');
    const signinBtn = document.getElementById('signin__btn');
    
    const API_URL = 'https://students.netoservices.ru/nestjs-backend/auth';
    const USER_ID_KEY = 'user_id';
    
    // Функция для показа формы входа
    function showSigninForm() {
        signinBlock.classList.add('signin_active');
        welcomeBlock.classList.remove('welcome_active');
    }
    
    // Функция для показа приветствия
    function showWelcome(userId) {
        userIdSpan.textContent = userId;
        welcomeBlock.classList.add('welcome_active');
        signinBlock.classList.remove('signin_active');
    }
    
    // Функция для показа сообщения об ошибке
    function showError(message) {
        // Удаляем предыдущие сообщения об ошибке
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Создаем новое сообщение об ошибке
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.color = 'red';
        errorDiv.style.margin = '10px 0';
        
        // Вставляем сообщение после формы
        signinForm.appendChild(errorDiv);
        
        // Автоматически удаляем сообщение через 3 секунды
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.remove();
            }
        }, 3000);
    }
    
    // Функция для отправки данных авторизации
    async function submitLogin(formData) {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                body: formData
            });
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            return data;
            
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
    
    // Функция для сохранения user_id в localStorage
    function saveUserId(userId) {
        localStorage.setItem(USER_ID_KEY, userId);
    }
    
    // Функция для получения user_id из localStorage
    function getUserId() {
        return localStorage.getItem(USER_ID_KEY);
    }
    
    // Функция для удаления user_id из localStorage (для logout)
    function removeUserId() {
        localStorage.removeItem(USER_ID_KEY);
    }
    
    // Проверка авторизации при загрузке страницы
    function checkAuthOnLoad() {
        const savedUserId = getUserId();
        
        if (savedUserId) {
            // Пользователь уже авторизован, показываем приветствие
            showWelcome(savedUserId);
        } else {
            // Пользователь не авторизован, показываем форму входа
            showSigninForm();
        }
    }
    
    // Обработчик отправки формы
    signinForm.addEventListener('submit', async function(event) {
        event.preventDefault(); // Предотвращаем стандартную отправку формы
        
        // Отключаем кнопку во время обработки
        signinBtn.disabled = true;
        signinBtn.textContent = 'Входим...';
        
        try {
            // Собираем данные формы
            const formData = new FormData(signinForm);
            
            // Отправляем запрос
            const response = await submitLogin(formData);
            
            if (response.success) {
                // Успешная авторизация
                const userId = response.user_id;
                
                // Сохраняем user_id в localStorage
                saveUserId(userId);
                
                // Показываем приветствие
                showWelcome(userId);
                
                // Очищаем форму
                signinForm.reset();
                
            } else {
                // Неуспешная авторизация
                showError('Неверный логин/пароль');
            }
            
        } catch (error) {
            // Ошибка сети или сервера
            showError('Ошибка соединения. Попробуйте позже.');
        } finally {
            // Включаем кнопку обратно
            signinBtn.disabled = false;
            signinBtn.textContent = 'Войти';
        }
    });
    
    // Дополнительная функция для выхода (logout)
    function logout() {
        removeUserId();
        showSigninForm();
    }
    
    // Инициализация при загрузке страницы
    checkAuthOnLoad();
    
    // Опционально: добавляем кнопку выхода
    const logoutBtn = document.createElement('button');
    logoutBtn.textContent = 'Выйти';
    logoutBtn.style.marginLeft = '10px';
    logoutBtn.addEventListener('click', logout);
    welcomeBlock.appendChild(logoutBtn);
});
