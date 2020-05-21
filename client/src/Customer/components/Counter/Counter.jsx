import React from 'react'

/*
  Counter (Reusable)
  Must pass down quantity and setQuantity as props
*/

export default function Counter({quantity, setQuantity}) {
  const updateQuantity = (event) => {
    const plusMinus = event.target.className.split('-')[1]
    if (plusMinus === 'minus' && quantity >= 2) {
      setQuantity(quantity - 1)
    } else if (plusMinus === 'plus') {
      setQuantity(quantity + 1)
    }
  }
  return (
    <div className='counter'>
      <button className="counter-minus" onClick={updateQuantity}>-</button>
      <input type="text" value={quantity} readOnly/>
      <button className="counter-plus" onClick={updateQuantity}>+</button>
    </div>
  )
}
