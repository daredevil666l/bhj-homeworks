function checkElementsVisibility() {
    const revealElements = document.querySelectorAll('.reveal');
    
    revealElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect();
        
        const windowHeight = window.innerHeight;
        
        // Проверяем, находится ли элемент в области видимости, элемент считается видимым, если:  - его верхняя граница выше нижней границы окна (elementPosition.top < windowHeight)  - его нижняя граница ниже верхней границы окна (elementPosition.bottom > 0)
        const isVisible = elementPosition.top < windowHeight && elementPosition.bottom > 0;
        
        // Если элемент видим и у него ещё нет класса 'reveal_active'
        if (isVisible && !element.classList.contains('reveal_active')) {
            element.classList.add('reveal_active');
        }
    });
}

window.addEventListener('scroll', checkElementsVisibility);

document.addEventListener('DOMContentLoaded', checkElementsVisibility);
