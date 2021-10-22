
export const getGif = async ( category ) => {
   
    const api_key = 'jXj89Vj2vGWUawJwfiIrNacH5UKL4cHA'
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${api_key}`

    const resp = await fetch(url)
    const data = await resp.json()
   
    console.log(data.data)
    
    const gifs = data.data.map( img => {
        return{
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    })
    console.log(gifs);
    return gifs;
}