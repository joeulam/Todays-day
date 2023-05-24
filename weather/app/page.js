import Image from 'next/image'





import "../public/globals.css"
export default function Home() {
  return (
    <>
      <main>
        <head>
          <title>Weather</title>
        </head>
        <body>
          <h1 id="temp">Temperature</h1>
          <h2 id="location">Location</h2>
        </body>
        
      </main>
      
     

    

    
    </>
  )
}


export async function getStaticProps(){
  const reponse = await fetch("")
  const data = await reponse.json()
  
}