import { useEffect, useState } from "react"
import { getBreedsImages } from "../helpers/getBreedImages";

export const useFetchBreedsImages = (categoryImages) =>{
    const [state, setState] = useState({
        data:[],
        loading:true
    });
    useEffect(() => {
        getBreedsImages(categoryImages).then(urls => {
            setState({
                data:urls,
                loading:false
            })
        });
    },[]);
    return state;
}