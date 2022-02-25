import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BreedsList } from '../components/BreedsList'
import { BreedsScreen } from '../components/BreedsScreen'
import 'animate.css';
import '../app.css';
export const AppRouter = () => {
  return (
    <BrowserRouter>
        <div className="container">
          <h1>app para leer y mostrar razas de perritos :D </h1>
          <hr/>
          <Routes>
              <Route  path="/*" element={<BreedsList />} />
              <Route  path="breeds/:breedId" element={<BreedsScreen />} />
          </Routes>
        </div>
    </BrowserRouter>
  )
}
