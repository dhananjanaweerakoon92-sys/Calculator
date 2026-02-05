let display = document.getElementById('display');
let currentValue = '';
let previousValue = '';
let operation = '';

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    let buttonValue = button.textContent;
    
    if (buttonValue === 'C') {
      currentValue = '';
      previousValue = '';
      operation = '';
      display.value = '';
    } else if (buttonValue === 'del') {
      currentValue = currentValue.slice(0, -1);
      display.value = currentValue;
    } else if (['+', '-', '*', '/'].includes(buttonValue)) {
      previousValue = currentValue;
      operation = buttonValue;
      currentValue = '';
    } else if (buttonValue === '=') {
      let result = eval(`${previousValue} ${operation} ${currentValue}`);
      display.value = result;
      currentValue = result;
      previousValue = '';
      operation = '';
    } else {
      currentValue += buttonValue;
      display.value = currentValue;
    }
  });
});
