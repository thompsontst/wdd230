/*
const  input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {

if(input.value.trim() != "");

    const li = document.createElement('li');

const deleteButton = document.createElement(deleteButton);

li.textContent = input.value;

deleteButton.textContent = '❌';

li.append(deleteButton);

list.append(li);
 });



deleteButton.addEventListener() ('click', function () {
    list.removeChild('li')
    input.focus();
});

deleteButton.focus();

input.value = '';

*/

/**
 * Capitalizes String
 * @returns String
 */
String.prototype.capitalize = function() {
    return this.slice(0, 1).toUpperCase() + this.slice(1);
}

document.addEventListener("DOMContentLoaded", () => {
    // Find the input
    const input = document.querySelector('#favchap');
    // Find button
    const button = document.querySelector("button");
    // Find the main div element
    const list = document.querySelector('#list');
    // Add click event
    button.addEventListener("click", () => {
        // Validate input content
        if(input.value.trim() === "") { return; }
        // Create a div with the class chapter-container class
        let li = document.createElement("li");
        li.classList.add("chapter-container");
        // Create the h4 with the content
        let h4 = document.createElement("h4");
        h4.innerText = input.value.capitalize();
        // Create and add button with delete class
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.textContent = '❌';
        // Add delete event for button
        deleteButton.addEventListener("click", (e) => {
            // Go from target to parent and delete
            e.target.parentElement.remove();
        });
        // Append elements into li
        li.append(...[h4, deleteButton]);
        // Append li
        list.append(li);
        // Clear input
        input.value = "";
        // Set focus
        input.focus();
    });
});
