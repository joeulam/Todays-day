var x = document.getElementById("location");
var temp = document.getElementById("temperature");

document.addEventListener("load", getLocation());

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }


  function success(pos){
    const crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  coordinate = [crd.latitude,crd.longitude]
  getCity(coordinate)
  getTemp(coordinate)
}
function getTemp(coordinates){
  var xhr = new XMLHttpRequest();
  var lat = coordinates[0];
  var lng = coordinates[1];
  xhr.open('GET', "https://api.weather.gov/points/"+lat+","+lng+"");
  xhr.send();
  xhr.onreadystatechange = processRequestTemp;
  xhr.addEventListener("readystatechange", processRequestTemp, false);
  function processRequestTemp(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        console.log(response);
        forecastLink = toString(response.properties.forecast)
        h = ((response.properties.forecast))
        console.log(h)
        xhr = new XMLHttpRequest();
        xhr.open('GET', ""+h+"");
        xhr.send();
        xhr.onreadystatechange = processRequestTemps;
        xhr.addEventListener("readystatechange", processRequestTemps, false);
        function processRequestTemps(e){
        if (xhr.readyState == 4 && xhr.status == 200) {
          var response = JSON.parse(xhr.responseText);
          console.log(response);
          console.log(response.properties.periods[0].temperature);

          document.getElementById("temperature").innerHTML = (response.properties.periods[0].temperature)
          return;
        }
      }
        temp.innerHTML = response
        return;
    }
  }
}



  function getCity(coordinates) {
    var xhr = new XMLHttpRequest();
    var lat = coordinates[0];
    var lng = coordinates[1];
  
    // Paste your LocationIQ token below.
    xhr.open('GET', "https://us1.locationiq.com/v1/reverse.php?key=pk.495483f503e16834a4ff3b2f5157164e&lat=" +
    lat + "&lon=" + lng + "&format=json", true);
    xhr.send();
    xhr.onreadystatechange = processRequest;
    xhr.addEventListener("readystatechange", processRequest, false);

    function processRequest(e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            var city = response.address.city;
            console.log(response);
            x.innerHTML = city
            return;
        }
    }
  }