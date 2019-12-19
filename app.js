window.addEventListener('load', ()=> {
  //using an arrow function to shorten code
  //this code runs when the winodw loads c:
  let long;
  let lat;

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `https://api.darksky.net/forecast/7c2d38468d046eff1187a97d9f41b25b/${lat},${long}`;
    });

  fetch(api)
    .then(response =>{
        return response.json();
    })
    .then(data =>{
      console.log(data);
    });
  }
});
