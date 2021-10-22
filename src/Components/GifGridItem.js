import React  from "react"
import PropTypes  from "prop-types"

export default function GifGridItem ({url, title, id})
{

    return(
    <>
            
            <div className="card animate__animated animate__fadeIn">
                <img src={url} alt={title} />
                <p>{title}</p>
            </div>
            
    </>

    )
}

GifGridItem.propsTypes = {
    url:PropTypes.string.isRequired,
    id:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
}