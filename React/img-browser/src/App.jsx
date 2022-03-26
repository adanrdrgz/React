import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import ImgList from './components/ImgList';

function App() {

  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    
    const fetchAPI = async () => {
      if(query === '') return;

      const imgPerPage = 30;
      const key = '25635984-020d60bf71d03df2e5f415e4b'
      const url = `https://pixabay.com/api/?key=${key}&q=${query}&per_page=${imgPerPage}&page=${currentPage}`
  
      const response = await fetch(url);
      const result = await response.json();

      setImages(result.hits);

      //total pages 
      const tp = Math.ceil(result.totalHits / imgPerPage)
      setTotalPages(tp);

      // reset view to top
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior: 'smooth'})
    }
  
    fetchAPI();

  }, [query, currentPage])

  const previousPage = () => {
    const newCurrentPage = currentPage - 1;

    if(newCurrentPage === 0) return;

    setCurrentPage(newCurrentPage);
    
  }

  const nextPage = () => {
    const newCurrentPage = currentPage + 1;

    if (newCurrentPage > totalPages) return;
    
    setCurrentPage(newCurrentPage);

  }

  return (

    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Image Browser</p>

        <Form
          setQuery={setQuery}
        />

      </div>

      <div className="row justify-content-center">
        <ImgList 
          images={images}
        />

        {( currentPage === 1) ? null : 
        <button
          type="button"
          className="btn btn-info mr-1"
          onClick={previousPage}
        >&laquo; Previous 
        </button>}

        {(currentPage === totalPages)? null :
        <button
          type="button"
          className="btn btn-info "
          onClick={nextPage}
        >Next &raquo;
        </button>}


      </div>
    </div>
  )
}

export default App
