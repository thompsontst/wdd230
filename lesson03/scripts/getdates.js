// copyright year
document.querySelector('#year').textContent = new Date().getFullYear();
var date = document.lastModified;
    document.getElementById("lastModified").innerHTML = "Last Date Modified : " + date;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});