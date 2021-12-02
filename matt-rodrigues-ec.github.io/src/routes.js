import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'

function src() {
  return (
      <BrowserRouter>
        <Routes>
            <Route  path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}

export default src;