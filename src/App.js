import { useState } from 'react';
import './App.css';

const GIFS = [
  'https://media0.giphy.com/media/uEfZWPFl4cwFuxeUt7/giphy.gif?cid=ecf05e47ij5vrv6jvyoi66plefaumle2rogg4atj4wpdzw83&ep=v1_gifs_gifId&rid=giphy.gif&ct=g',
  'https://media2.giphy.com/media/LEoirCu9tBtIXAakxN/giphy.gif?cid=ecf05e477sjewxa60mdnefyetglazdl7swr4e379rmm9fkew&ep=v1_gifs_related&rid=giphy.gif&ct=g'
]

const DIFERENTS_GIFS = [
  'https://media4.giphy.com/media/4rftPhywAd24ZbLFSU/giphy.webp',
  'https://media1.giphy.com/media/S8DcNuvt1FUy31LUH6/giphy.webp',
  'https://media4.giphy.com/media/X5p8ANnYSerdA6KHsw/giphy.webp'
]

function App() {
  //Cambia de un estado a otro (useState está por defecto en el array GIFS, 
  //al usar setGifs se pasa el array DIFERENTS_GIFS a useState)
  const [gifs, setGifs] = useState(GIFS)

  return (
    <div className="App">
      <section className="App-header">
        {
          //Recorre el array de GIFTS y cada elemento lo deja en singleGif
          gifs.map(singleGif => <img src={singleGif} />)
        }

        {
          //Al dar clic en el botón este renderiza los gifs del array DIFERENTS_GIFS
        }
        <button onClick={() => setGifs(DIFERENTS_GIFS)}>Cambiar Gifs</button>
      </section>
    </div>
  );
}

export default App;
