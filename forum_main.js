// Получаем все элементы с классом "approval-link"
var approvalLinks = document.querySelectorAll('#approval-link');

// Добавляем обработчик события для каждого элемента
approvalLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    // Проверяем, если у элемента уже есть класс "approved", то прекращаем выполнение функции
    if (this.classList.contains('approved')) {
      return;
    }

    // Добавляем класс "approved" к элементу
    this.classList.add('approved');

    // Получаем текущее значение
    var currentCount = parseInt(this.querySelector('span').innerText.split(':')[1]);

    // Увеличиваем значение на 1
    var newCount = currentCount + 1;

    // Обновляем текстовое содержимое
    this.querySelector('span').innerText = 'Одобрений: ' + newCount;
  });
});