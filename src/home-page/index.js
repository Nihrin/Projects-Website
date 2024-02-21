import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './home-page.css';

import Header from './header.js';
import Selector from './selector.js';
import AllWebsites from '../websites';

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
          <Route path="/website/:URL" element={<Selector />} />
          <Route path="*" element={<div>404 page not found</div>}/>
        </Routes>
        <footer>
          The code for this project can be found on <a href="https://github.com/Nihrin/JPEG-Compressor">GitHub</a>.
        </footer>
      </div>
    </Router>
  );
}

export default Home;