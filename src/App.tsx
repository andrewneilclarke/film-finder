import './App.css';
import { useEffect, useState } from 'react'
import Header from './Header';
import FilmSearch from './FilmSearch';

function App() {

  return (

    <div className="App">
      <Header />
      <FilmSearch />
    </div>

  );
}

export default App;
