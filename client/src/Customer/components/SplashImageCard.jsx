import React from 'react'
import foodTable from '../../assets/images/food-table.jpg'
import './SplashImageCard.scss'

export default function SplashImageCard() {
    return (
        <div className="SplashImageCard"  >
            <img src={foodTable} alt="food table" />
            <div>
                <h3> The April List</h3>
            </div>
            {/* <SplashImage /> */}
        </div>
    )
}
