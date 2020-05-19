import React, { useState } from 'react'

 const ShoppingList= ({ saveShoppingList }) => {
     const [value, setValue]= useState('')

    return (
      
        <form onSubmit={(e) =>{
            e.preventDefault()
            saveShoppingList(value)

        }}>
            <textarea 
            placeholder='Add Item'
            onChange={(e) => {
            setValue(e.target.value)
            }} 
            value={value}/>
            
        </form>
        
    )
}
export default ShoppingList