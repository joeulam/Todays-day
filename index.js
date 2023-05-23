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
  xhr.open('GET', "https://api.open-meteo.com/v1/forecast?latitude="+lat+"&longitude="+lng+"&hourly=temperature_2m&temperature_unit=fahrenheit&windspeed_unit=mph");
  xhr.send();
  xhr.onreadystatechange = processRequestTemp;
  xhr.addEventListener("readystatechange", processRequestTemp, false);
  function processRequestTemp(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        console.log(response);
        h = ((response.hourly.temperature_2m))
        const d = new Date();
        let hour = d.getHours();
        console.log(h)
        temp.innerHTML = Math.round(h[hour])
      }
        return;
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