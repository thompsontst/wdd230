/**
 * Date prototype to get the day as String
 * @returns String
 */
Date.prototype.getDayString = function() {

    // Array with every day of the week as a string
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // Return the proper day as string with today's index (0-6)
    return days[this.getDay()];
}
/** dark mode */
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

/**
 * Date prototype to get the month as String
 * @returns String
 */
Date.prototype.getMonthString = function() {

    // Array with every month
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];
    // Return month as string
    return months[this.getMonth()];
}

/**
 * Returns the same capitalized string
 * @returns Capitalized String
 */
String.prototype.capitalize = function() {
    // split the string by spaces
    let arr = this.split(" ");
    // capitalized array
    let capArr = [];
    // loop through every word
    arr.forEach(word => {
        // capitalize word
        capArr.push(`${word.slice(0, 1).toUpperCase()}${word.slice(1)}`);
    });
    // join array and return
    return capArr.join(" ");
}

document.addEventListener("DOMContentLoaded", () => {

    // Hamburger menu
    const navLinks = document.querySelector(".nav-links");
    const menu = document.querySelector("#menu");
    // Current date paragraph
    const date = document.querySelector("#date-section p");
    // Date object
    const dateObj = new Date();
    // Last modified paragraph
    const lastModified = document.querySelector("#lastModified");
    // Full year paragraph
    const fullYear = document.querySelector("#footer-bottom-content p:first-child");

    // Add event for menu click
    menu.addEventListener("click", () => navLinks.classList.toggle("responsive-menu"));

    // Add current date
   

    // Add last modified
    lastModified.innerText = `Last modified: ${document.lastModified}`;

    // Add full year after © symbol
    const index = fullYear.innerText.indexOf("©");
    const str = fullYear.innerText.slice(0, index + 1).concat(dateObj.getFullYear());
    fullYear.innerText = str.concat(fullYear.innerText.slice(index + 1));

    // Check whether it's Monday or Tuesday to show banner
    const day = dateObj.getDay();
    if(day > 0 && day < 3) { 
    }
});