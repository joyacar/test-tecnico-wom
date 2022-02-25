import React from 'react'
import { useFetchBreeds } from '../hooks/useFetchBreeds';
import { BreedsCard } from './BreedsCard';

export const BreedsList = () => {
    const {data:breeds, loading} = useFetchBreeds();
    return (
      <>
          {loading && <p>Cargando...</p>}
          <div className='row rows-cols-1 row-cols-md-4 g-3 animate__animated animate__fadeIn'>
              {
                  breeds.map(({name}) => {
                    return <BreedsCard 
                      key={name} 
                      name={name} />
                  })
              }
            </div>
      </>
  )
}