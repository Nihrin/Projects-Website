import './App.css';
import Header from './main-page/header.js';
import Movie from './movies/movie.js';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header title="Great App" subtitle="Should make more of these" />    
        <Movie />
      </div>
    </div>
  );
}

export default App;
