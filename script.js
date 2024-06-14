document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('number')) {
                display.textContent += button.textContent;
            } else if (button.classList.contains('operator')) {
                display.textContent += ' ' + button.textContent + ' ';
            } else if (button.classList.contains('clear')) {
                display.textContent = '';
            } else if (button.classList.contains('equal')) {
                display.textContent = eval(display.textContent);
            }
        });
    });
});
