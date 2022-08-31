
const button = document.querySelector('.submit-btn')
const inputValue = document.querySelector('.city')
const cityName = document.querySelector('.name')
const weatherTemperature = document.querySelector('.temp')
const weatherDescription = document.querySelector('.desc')


button.addEventListener('click', async function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=3265874a2c77ae4a04bb96236a642d2f')
.then(response => response.json())
.then(data => {
    const nameOfCity = data['name'];
    const temperatureValue = KtoC(data['main']['temp']);
    const descValue = data['weather'][0]['description'];

    cityName.innerHTML = nameOfCity;
    weatherTemperature.innerHTML = ` <h1 class="temp"><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /><br> ${temperatureValue}°C</h1> `;
    weatherDescription.innerHTML = descValue;
})


.catch(err => alert("Can't find City Information"))
})

function KtoC(K) {
    return (K - 273.15).toFixed(2);   
}