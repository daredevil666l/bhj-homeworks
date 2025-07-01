function startRotator(rotator) {
    const cases = rotator.querySelectorAll('.rotator__case');
    let currentIndex = 0;
    
    setInterval(() => {
        // Снимаем активный класс с текущего элемента
        cases[currentIndex].classList.remove('rotator__case_active');
        
        // Переходим к следующему элементу (с зацикливанием)
        currentIndex = (currentIndex + 1) % cases.length;
        
        // Устанавливаем активный класс новому элементу
        cases[currentIndex].classList.add('rotator__case_active');
    }, 1000);
}

// Запускаем все ротаторы на странице
document.querySelectorAll('.rotator').forEach(rotator => {
    startRotator(rotator);
});
