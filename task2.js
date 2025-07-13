const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let input = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const key = button.dataset.key;

    if (key === 'C') {
      input = '';
    } else if (key === '←') {
      input = input.slice(0, -1);
    } else if (key === '=') {
      try {
        input = eval(input).toString();
      } catch {
        input = 'Error';
      }
    } else {
      input += key;
    }

    display.value = input;
  });
});

// Keyboard support
document.addEventListener('keydown', e => {
  const validKeys = '0123456789+-*/.=';
  if (validKeys.includes(e.key)) {
    input += e.key === '=' ? '' : e.key;
    if (e.key === '=') {
      try {
        input = eval(input).toString();
      } catch {
        input = 'Error';
      }
    }
    display.value = input;
  } else if (e.key === 'Backspace') {
    input = input.slice(0, -1);
    display.value = input;
  } else if (e.key === 'Enter') {
    try {
      input = eval(input).toString();
    } catch {
      input = 'Error';
    }
    display.value = input;
  } else if (e.key.toLowerCase() === 'c') {
    input = '';
    display.value = input;
  }
});
