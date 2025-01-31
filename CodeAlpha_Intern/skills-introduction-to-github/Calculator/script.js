
document.addEventListener('DOMContentLoaded', () => {
  let showData = document.getElementById('display');
  let buttons = document.querySelectorAll('button');
  let string = '';
  let arr = Array.from(buttons);

  arr.forEach(button => {
    button.addEventListener('click', (e) => {
      if (e.target.innerHTML == 'AC') {
        string = '';
        showData.value = string;
      }
      else if (e.target.innerHTML == 'DEL') {
        string = string.slice(0, -1);
        showData.value = string;
      }
      else if (e.target.innerHTML == '=') {
        try {
          string = eval(string);
          showData.value = string;
        } catch {
          showData.value = 'Error';
        }
      } else {
        string += e.target.innerHTML;
        showData.value = string;
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      try {
        string = eval(string);
        showData.value = string;
      } catch {
        showData.value = 'Error';
      }
    } else if (e.key === 'Escape') {
      string = '';
      showData.value = string;
    } else if (e.key.match(/[0-9+\-*/.]/)) {
      string += e.key;
      showData.value = string;
    }
  });
});















