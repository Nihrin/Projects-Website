import './home-page.css';
import Header from './header.js';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllWebsites from './all-websites.js';

function Home() {
  const [allWebsites, setAllWebsites] = useState([]);

  useEffect(() => {
    const fetchWebsites = async () => {
      const rsp = await fetch("/websites.json");
      const websites = await rsp.json();
      setAllWebsites(websites);
    };
    fetchWebsites();
  }, []);

  return (
    <Router>
      <div className='container Home'>
        <Header title="Projects website for Nihrin" />

        <Routes>
          <Route path="/" element={<AllWebsites websites={allWebsites} />}/>
        </Routes>

        <footer>
          The code for this project can be found on <a href="https://github.com/Nihrin/JPEG-Compressor">GitHub</a>.
        </footer>
      </div>
    </Router>
  );
}

export default Home;
