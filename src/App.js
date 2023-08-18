import { useEffect, useState } from 'react';
import './App.css';

const apiUrl = 'https://ai-weather-by-meteosource.p.rapidapi.com/hourly?place_id=temuco&timezone=auto&language=es&units=auto'; //Obtiene los datos desde la API
const options = {                                                                                                              //Le pasa las credenciales para consumir la API
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '25d9ee2d37msh5bba4fb65ba123cp17b0a8jsn171927139a21',
		'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
	}
};


function App() {
  //Cambia de un estado a otro (useState está por defecto en el array GIFS, 
  //al usar setGifs se pasa el array DIFERENTS_GIFS a useState)
  const [gifs, setGifs] = useState([])

  
  useEffect(function () {                           //Se ejecuta cada que cambia el useState (cada que se vuelve a renderizar algo)

    fetch(apiUrl, options)                          // Hacer una solicitud a la URL apiUrl con las opciones definidas en options
      .then(res => res.json())
      .then(response => {
        const hourlyData = response.hourly.data     // Accedes al array 'data' dentro de 'hourly'
        const tempPerHours = hourlyData.map(entry => entry.temperature)

        console.log(tempPerHours)
      })
      .catch(error => {
        console.error(error)                        // Manejar cualquier error que ocurra durante la solicitud o el procesamiento
      })
  }, 
  [])

  return (
    <div className="App">
      <section className="App-header">
        {
          //Recorre el array de GIFTS y cada elemento lo deja en singleGif
          gifs.map(singleGif => <img src={singleGif} />)
        }

      </section>
    </div>
  );
}

export default App;
