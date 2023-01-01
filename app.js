window.addEventListener('load', () => {
    let long;
    let lat;

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current&appid=7f100b0d1ea84720407f39442fc962cf`;
            
        });
    } else{
        h1.textContent = "Hey, this is not working because you don't have geolocation enabled on your browser."
    }
});