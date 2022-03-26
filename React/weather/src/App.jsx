import React, {useState, useEffect, Fragment} from 'react'
import Header from './components/Header'
import Form from './components/Form'


function App() {

  //form state
  const [search, setSearch] = useState({
      city: '',
      country: '',
  });

  const [consult, setConsult] = useState(false);
  const {city, country} = search

  useEffect(() => {

    const requestAPI = async () => {
      if(consult){
        const appId = '25928ed29d6bb4986eab00049a39e258';
        const url = `api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`
        console.log(url)
        const result = await fetch(url);
        console.log(result)
        const response = await result.json();

        console.log(response);
      }
    }
    requestAPI();

  }, [consult])
  
  return (
    <Fragment>
      <Header 
        title='Weather'
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form 
                search={search}
                setSearch={setSearch}
                setConsult={setConsult}
              />
            </div>
            <div className="col m6 s12">
              2
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
