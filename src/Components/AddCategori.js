
import React, {useState}  from "react"
import PropTypes  from "prop-types"

export default function AddCategory({setCategories}){

    const  [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) =>{
        console.log(e)
        setInputValue(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length  > 2){

            //llamado setCategories como callback no necesitamos pasar las categorias
            //cats valor actual  => nuevo valor
            setCategories(cats => [inputValue, ...cats ])
            setInputValue('')
        }
        
    }

    return (
       
        <form onSubmit={ handleSubmit }>
            <input type="text" 
            value={ inputValue} 
            onChange= {handleInputChange}/>
        </form>
      
    )

}

AddCategory.ropTypes = {
    setCategories:PropTypes.func.isRequired
}