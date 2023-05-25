import "../public/globals.css";

export default function Home({ props }) {
  const temperature = props?.Temp;

  return (
    <>
      <head>
        <title>Weather</title>
      </head>
        <body>
          <h1 id="temp">{temperature}</h1>
          <h2 id="location">Location</h2>
        </body>
    </>
  );
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function success(pos) {
  const crd = pos.coords;
  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  const coordinate = [crd.latitude, crd.longitude];
  return coordinate;
}

export async function getStaticProps() {
  const location = getLocation();
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${location[0]}&longitude=${location[1]}&hourly=temperature_2m&temperature_unit=fahrenheit&windspeed_unit=mph`
  );
  const data = await response.json();
  const hourlyTemperature = data.hourly.temperature_2m;
  const d = new Date();
  const hour = d.getHours();
  console.log(hourlyTemperature);
  const finaltemp = Math.round(hourlyTemperature[hour]);
  const locationResponse = await fetch(
    `https://us1.locationiq.com/v1/reverse.php?key=pk.495483f503e16834a4ff3b2f5157164e&lat=${location[0]}&lon=${location[1]}&format=json`
  );
  const locationData = await locationResponse.json();
  const city = locationData.address.city;

  return {
    props: {
      data:{Temp:finaltemp,City:city}
    },
  };
}
