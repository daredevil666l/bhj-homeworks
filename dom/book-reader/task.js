// контейнер управления размером шрифта
const fontSizeControl = document.querySelector('.book__control_font-size');

// клики на элементах управления
fontSizeControl.addEventListener('click', function(e) {
    e.preventDefault();
    const target = e.target.closest('.font-size');
    
    if (!target) return;
    
    // Удаляем активный класс у всех элементов
    this.querySelectorAll('.font-size').forEach(item => {
        item.classList.remove('font-size_active');
    });
    
    // Добавляем активный класс выбранному элементу
    target.classList.add('font-size_active');
    
    // Получаем выбранный размер
    const size = target.dataset.size;
    const book = document.getElementById('book');
    
    // Обновляем классы книги
    book.classList.remove('book_fs-small', 'book_fs-big');
    if (size) {
        book.classList.add(`book_fs-${size}`);
    }
});
