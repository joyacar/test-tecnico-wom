import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useFetchBreedsImages } from '../hooks/useFetchBreedsImages';
import { BreedsImages } from './BreedsImages';

export const BreedsScreen = () => {
    const {breedId} = useParams();
    const navigate = useNavigate();
    const {data:breeds, loading} = useFetchBreedsImages(breedId);

    const handleReturn = () => {
        navigate(-1);
    }
    return (
        <div>
            <div className='row'>
                <div className='col-9'>
                    <h4>Categoría buscada: {breedId.toString().toLocaleUpperCase()}</h4>
                </div>
                <div className='col-3 '>
                    <button 
                        className="btn btn-outline-info float-end"
                        onClick={handleReturn} >
                            {'< Regresar'}
                    </button>
                </div>
                <div className='col-12 mansory-parents-container mt-2 mb-2'>
                    <div className='masonry-container mt-3 mb-3'>
                        {
                            breeds.map(({name}) => {
                                return <BreedsImages 
                                    key={Math.random()} 
                                    src={name} 
                                    />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
