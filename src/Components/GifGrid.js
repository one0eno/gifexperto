
import GifGridItem from './GifGridItem'

import { useFetchGifs } from '../Hooks/useFetchGifs'

export default function GifGrid({category}){

    
    const {data, loading} = useFetchGifs(category);

    //const [images, setImages] = useState([]);
    // useEffect(() => {
      
    //     getGif(category)
    //     .then(setImages);
        
    //     return () => {
    //         //CLEAN
    //     };
    // }, [category]);

    return (

        <>
            
            <h4 className="animate__animated animate__fadeIn">{ loading ? `Cargando ${category}`:<h3>{ category}</h3>}</h4>
            <div className="card-grid">
            
                {
                    data.map( image => {
                        return <GifGridItem  key={image.id} id={image.id} title={image.title} url={image.url} />
                    })
                }
            </div>  
        </>
    )
} 


