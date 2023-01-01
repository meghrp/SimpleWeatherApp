window.addEventListener('load', () => {
    let long;
    let lat;
    let temp_description = document.querySelector('.temp-desc');
    let deg = document.querySelector('.degree');
    let timezone = document.querySelector('.location-timezone');

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=7f100b0d1ea84720407f39442fc962cf`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    deg.textContent = Math.round(data.main.temp);
                    temp_description.textContent = data.weather[0].description;
                    timezone.textContent = data.name;
                });
        });
    } else{
        h1.textContent = "Hey, this is not working because you don't have geolocation enabled on your browser."
    }

    

});