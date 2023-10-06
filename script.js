mapboxgl.accessToken = 'pk.eyJ1IjoiM3gzZTEiLCJhIjoiY2xuY3Y4aG9pMG10djJubHEyNjVyeWJhcCJ9.xiZLMHQgiodm7F9m5k-itQ';

navigator.geolocation.getCurrentPosition(successLocation,
    errorLocation, {
        enableHighAccuracy: true
    })

function successLocation(position) {
    setupMap([
        position.coords.longitude, 
        position.coords.latitude
    ])
}
function errorLocation() {
    setupMap([36.8219, 1.2921])
    console.log(errorLocation)
}

function setupMap(center) {
    

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 15
  })
    const nav = new mapboxgl.NavigationControl() 
    map.addControl(nav)
    var directions = new MapboxDirections({accessToken: mapboxgl.accessToken});
    map.addControl(directions, 'top-left');
}