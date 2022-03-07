import './App.css';
import Header from './Header';
import FilmSearch from './FilmSearch';

function App() {

  let serverURL;

  fetch(".netlify/functions/api")
    .then(response => response.json())
    .then(json => {
      serverURL = json.api;
    })

  return (

    <div className="App">
      <Header />
      <FilmSearch />
    </div>

  );
}

export default App;
