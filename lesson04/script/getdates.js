// copyright year
window.weatherWidgetConfig =  window.weatherWidgetConfig || [];
window.weatherWidgetConfig.push({
	selector:"weatherWidget",
	apiKey:"9SFAGN22N8JVJJZNBU237SNHS", //Sign up for your personal key
	location:"Nigeria, Eket", //
	unitGroup:"metric", 
	forecastDays:2, 
	title:"Weather for Eket", 
	showTitle:true, 
	showConditions:true
});

(function() {
var d = document, s = d.createElement('script');
s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
document.querySelector('#year').textContent = new Date().getFullYear();
var date = document.lastModified;
    document.getElementById("lastModified").innerHTML = "Last Date Modified : " + date;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
