



import "../public/globals.css"
export default function Home(posts) {
  
    
  return (
    <>
        <head>
          <title>Weather</title>
        </head>
        

          return(
        <body>
          <h1 id="temp">{posts}</h1>
          <h2 id="location">Location</h2>
        </body>
        
      
     

    
          )

    </>
  )
}
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
  return coordinate
}




  

export async function getStaticProps(){
  location = getLocation()
  const reponse = await fetch("https://api.open-meteo.com/v1/forecast?latitude="+location[0]+"&longitude="+location[1]+"&hourly=temperature_2m&temperature_unit=fahrenheit&windspeed_unit=mph")
  const data = await reponse.json()
  h = ((data.hourly.temperature_2m))
  const d = new Date();
  let hour = d.getHours();
  console.log(h)
  finaltemp = Math.round(h[hour])
  const Lresponse = await fetch("https://us1.locationiq.com/v1/reverse.php?key=pk.495483f503e16834a4ff3b2f5157164e&lat="+location[0] + "&lon=" + location[1] + "&format=json")
  const Ldata = await Lresponse.json()
  city = Ldata.address.city;

  return{
    props:{
      data: finaltemp,
    }
  }
}