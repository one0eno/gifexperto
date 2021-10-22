import { useState, useEffect } from "react";
import { getGif } from "../Helpers/GetGif";

 export const  useFetchGifs  = ( category )  =>
{
   const [state, setState] = useState({
       data:[],
       loading:true
   })

    useEffect(() => {
        getGif(category)
            .then(imgs => {

                setTimeout(() => {
                    setState({
                        data:imgs, 
                        loading:false
                    })

                },3000)
                

            })
            //.then(imgs => setImages(imgs) )
    
    }, [ category ]);


    return state;
}

