import React, {useEffect, useState} from 'react'
import './App.css';

const url = 'https://api.giphy.com/v1/gifs/search?api_key=8p9OsjDE3c9wTbtERSn3Gv6ZL8aR7fPO&q=panda&limit=10&offset=0&rating=g&lang=en'

function App() {
  const [gifs, setGifs] = useState()

  useEffect(() => {
    console.log('Actualizando los gifs')
    fetch(url)
      .then(res => res.json())
      .then(response => {
        const {data} = response
        const gifs = data.map(image => image.images.downsized_medium.url)
        setGifs(gifs)
      })
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif} />)
        }
      </section>
    </div>
  );
}

export default App;
