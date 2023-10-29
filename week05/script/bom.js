const  input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.removeEventListener('click', () => {if (input.value !='')});

const li = document.createElement('li');

const deleteButton = document.createElement(deleteButton);

li.textContent = input.value;

deleteButton.textContent = '❌';

li.append(deleteButton);

deleteButton.addEventListener() ('click', function () {
    list.removeChild('li')
    input.focus();
});

deleteButton.focus();

input.value = '';
