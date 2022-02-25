import { useEffect, useState } from "react"
import { getBreeds } from "../helpers/getBreeds";

export const useFetchBreeds = () =>{
    const [state, setState] = useState({
        data:[],
        loading:true
    });
    useEffect(() => {
        getBreeds().then(imgs => {
            setState({
                data:imgs,
                loading:false
            })
        });
    },[]);
    return state;
}