window.addEventListener('load', ()=> {
  //using an arrow function to shorten code
  //this code runs when the winodw loads c:
  let long;
  let lat;

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = ``;
    })
  } else {
    h1.textContent = "This feature needs geolocation to work. :)"
  }
})
