/////////Отримання значень із HTMl

const fahrenheitInput = document.querySelector('#fahrenheit');
const celsiusInput = document.querySelector('#celsius');
const section = document.querySelector('.first-section');
const inputs = document.querySelectorAll('input');
const subtitle = document.querySelector('h2');

/////////Видалення placeholder при фокусі
inputs.forEach(function (input) {
  input.addEventListener('focus', function () {
    input.removeAttribute('placeholder');
  });
});

/////////Функція для переведення у цельсій
function fahrenheitHandler(event) {
  if (fahrenheitInput.value === '451') {
    section.style.background = 'url(./img/fire.gif) center/cover no-repeat';
    subtitle.textContent =
      'There are worse crimes than burning books. One of them is not reading them';
    subtitle.style.color = 'white';
    celsiusInput.value = ((fahrenheitInput.value - 32) * (5 / 9)).toFixed(2);
    setTimeout(function () {
      section.style.background = 'var(--bg-color)';
      subtitle.textContent = 'Are you ready for a Math Fever?';
      subtitle.style.color = '#8b0000';
    }, 3000); // подія при введені числа 451
  }

  celsiusInput.value = ((fahrenheitInput.value - 32) * (5 / 9)).toFixed(2);

  if (fahrenheitInput.value === '') {
    celsiusInput.value = ''; // Очищаємо другий інпут, якщо перший порожній
    fahrenheitInput.setAttribute('placeholder', 'fahrenheit');
  }
}

/////////Функція для переведення у фаренгейт
function celsiusHandler(event) {
  fahrenheitInput.value = (celsiusInput.value * (9 / 5) + 32).toFixed(2);
  if (celsiusInput.value === '') {
    fahrenheitInput.value = ''; // Очищаємо перший інпут, якщо другий порожній
    celsiusInput.setAttribute('placeholder', 'celsius');
  }
}

/////////Слухачі подій для інпутів
fahrenheitInput.addEventListener('input', fahrenheitHandler);
celsiusInput.addEventListener('input', celsiusHandler);
