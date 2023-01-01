window.addEventListener('load', () => {
    let long;
    let lat;
    let temp_description = document.querySelector('.temp-desc');
    let deg = document.querySelector('.degree');
    let timezone = document.querySelector('.location-timezone');
    const temp_section = document.querySelector('.degree-section');
    const temp_span = document.querySelector('.degree-section span');

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
                    // console.log(data);
                    let temp = Math.round(data.main.temp);
                    deg.textContent = temp;
                    temp_description.textContent = data.weather[0].description;
                    timezone.textContent = data.name;

                    // Set Icons
                    setIcons(data.weather[0].icon, document.querySelector('.icon'));

                    // Change temperature to Celsius/Fahrenheit
                    temp_section.addEventListener('click', () => {
                        if(temp_span.textContent === "C") {
                            temp_span.textContent = "F";
                            deg.textContent = Math.round((data.main.temp * 9/5) + 32);
                        } else {
                            temp_span.textContent = "C";
                            deg.textContent = temp;
                        }
                    });
                });
        });
    } else{
        h1.textContent = "Hey, this is not working because you don't have geolocation enabled on your browser."
    }

    function setIcons(icon, iconID) {
        iconID.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png">`;
        return iconID;
    }

});