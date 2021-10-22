import React, { useState } from "react";
import AddCategory from "./Components/AddCategori";
import GifGrid from "./Components/GifGrid";
export default function  GifExpertApp (){

    const [categories, setCategories] = useState(['Star Wars']);
    

    return (
        <>
          <h2>Gifexpert </h2>
          <hr />
          <AddCategory setCategories= {setCategories} />
          <ol>
          {
            categories.map(cat => <GifGrid key={cat} category= {cat}/>)
          }
          </ol>
        </>
    )
  }
  