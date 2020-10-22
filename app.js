//Selectors
const toggleBg = document.querySelector('.toggle-bg');
const toggleBtn = document.querySelector('.toggle-btn');
//basic pricing
const monthlyPrice = document.querySelector('.monthly-price');
const annualPrice = document.querySelector('.annual-price');
//professional pricing
const monthlyPrice2 = document.querySelector('.monthly-price2');
const annualPrice2 = document.querySelector('.annual-price2');
//Master pricing
const monthlyPrice3 = document.querySelector('.monthly-price3');
const annualPrice3= document.querySelector('.annual-price3');

//Event Listeners
toggleBg.addEventListener('click', toggleClickHandler);

//function
function toggleClickHandler(e){
    toggleBtn.classList.toggle('togglePrice');
    //basic price toggle
    monthlyPrice.classList.toggle('hidden');
    annualPrice.classList.toggle('displayBlock');
    //professional price toggle
    monthlyPrice2.classList.toggle('hidden');
    annualPrice2.classList.toggle('displayBlock');
    //master price toggle
    monthlyPrice3.classList.toggle('hidden');
    annualPrice3.classList.toggle('displayBlock'); 
}