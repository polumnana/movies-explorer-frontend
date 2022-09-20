import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './AboutMe/AboutMe';
import AboutProject from './AboutProject/AboutProject';
import Footer from './Footer/Footer';
import NotFound from './NotFound/NotFound';
import Portfolio from './Portfolio/Portfolio';
import Promo from './Promo/Promo';
import Techs from './Techs/Techs';

function App() {
  return (
    <div className="App">
      <div className='page'>
        <Routes>
          <Route path='/' element={<Footer />} />
          <Route path='/techs' element={<Techs />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/aboutproject' element={<AboutProject />} />
          <Route path='/promo' element={<Promo />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
              


    </div>
  );
}

export default App;
