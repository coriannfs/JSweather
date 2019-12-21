window.addEventListener('load', ()=> {
  //using an arrow function to shorten code
  //this code runs when the winodw loads c:
  let long;
  let lat;
  let tempDesc = document.querySelector('.desc');
  let tempDeg = document.querySelector('.degree');
  let locTimezone = document.querySelector('.timezone');
  let tempSpan = document.querySelector('.h2temp span');

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = 'https://cors-anywhere.herokuapp.com/';
      const api = `${proxy}https://api.darksky.net/forecast/7c2d38468d046eff1187a97d9f41b25b/${lat},${long}`;

      fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(data =>{
          console.log(data);
          const {temperature, summary, icon} = data.currently; //this is a shorthand! instead of thing.thingie.anotherthing, you can do {anotherthing} to access it from thing c:
          //set DOM elements from api
          tempDeg.textContent = Math.floor(temperature);
          tempDesc.textContent = summary;
          locTimezone.textContent = data.timezone;

          //Set icon
          setIcons(icon, document.querySelector('.icon'));

          //change of Celsius if you want ADD TO A function
          tempDeg.addEventListener('click', () => {
            if (tempSpan.textContent === "F"){
              tempSpan.textContent = "C";
              tempDeg.textContent = Math.floor(temperature - 32 * (5/9));
            } else {
              tempSpan.textContent = "F";
              tempDeg.textContent = Math.floor(temperature);
            }

          });
        });
    });
  }

  function setIcons(icon, iconID) {
    const skycons = new Skycons({color: "white"});
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
  }
});
