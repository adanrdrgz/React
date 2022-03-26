import React, { useState, useEffect, Fragment } from 'react'
import Form from './components/Form'
import axios from 'axios';
import Song from './components/Song'
import Info from './components/Info'


function App() {

  const [lyricsQuery, setLyricsQuery] = useState({});
  const [lyrics, setLyrics] = useState('');
  const [info, setInfo] = useState({});


  useEffect(() => {
    if(Object.keys(lyricsQuery).length === 0) return;
    
    const fetchLyricsAPI = async () => {

      const {artist, song} = lyricsQuery; 

      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`
      const url2 = `https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`
      
      const [lyrics, info] = await Promise.all([
        axios(url),
        axios(url2)
      ]);
 
      setLyrics(lyrics.data.lyrics);
      setInfo(info.data.artists[0]);    
      
    }

    fetchLyricsAPI();

  }, [lyricsQuery, info])


  return (
    <Fragment>
      <Form 
        setLyricsQuery={setLyricsQuery}
      />

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Info 
              info={info}
            />
          </div>

          <div className="col-md-6">
            <Song 
              lyrics={lyrics}
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
