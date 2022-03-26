import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import NewsList from './components/NewsList'


function App() {

  const [category, setCategory] = useState('');
  const [news, setNews] = useState([]);

  useEffect( () => {
    const fetchAPI = async () => {
      const key = '1adb96eb1e3945219bd000a45499d5a8'
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=${key}`
    
      const response = await fetch(url);
      const result = await response.json();

      setNews(result.articles);
    
    }
    fetchAPI();

  }, [category])

  return (
    <Fragment>
      <Header 
        title='News Browser'
      />

      <div className="container white">
        <Form 
          setCategory={setCategory}
        />

      <NewsList 
        news={news}
      />

      </div>
    </Fragment>

  )
}

export default App
