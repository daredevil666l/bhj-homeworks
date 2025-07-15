document.addEventListener('DOMContentLoaded', function() {
    const editor = document.getElementById('editor');
    const storageKey = 'textEditor';
    
    // Восстанавливаем содержимое из localStorage при загрузке страницы
    function loadFromStorage() {
        const savedText = localStorage.getItem(storageKey);
        if (savedText !== null) {
            editor.value = savedText;
        }
    }
    
    // Сохраняем содержимое в localStorage
    function saveToStorage() {
        localStorage.setItem(storageKey, editor.value);
    }
    
    // Очищаем содержимое редактора и localStorage
    function clearEditor() {
        editor.value = '';
        localStorage.removeItem(storageKey);
        editor.focus(); // Возвращаем фокус на текстовое поле
    }
    
    // Загружаем сохранённый текст при инициализации
    loadFromStorage();
    
    // Сохраняем при каждом изменении содержимого
    editor.addEventListener('input', saveToStorage);
    
    // Добавляем кнопку очистки (повышенный уровень сложности)
    const clearButton = document.createElement('button');
    clearButton.textContent = 'Очистить содержимое';
    clearButton.className = 'clear-button';
    clearButton.addEventListener('click', clearEditor);
    
    // Вставляем кнопку после textarea
    editor.parentNode.appendChild(clearButton);
});
