import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Home } from 'src/core/home';
import { importAndInit } from 'src/core/routing';
import { LoadingRoute } from 'src/common/components';
import './App.css';

const About = importAndInit(() => import('src/features/about'), () => {
  console.log('About loaded');
});

export const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav>

      <hr />

      <main>
        <React.Suspense fallback={<LoadingRoute />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </React.Suspense>
      </main>
    </BrowserRouter>
  );
};
