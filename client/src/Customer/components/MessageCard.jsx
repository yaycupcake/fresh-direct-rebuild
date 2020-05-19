import React from 'react'
import Message from './Message'
import citrusImg from '../../assets/images/citrus.jpg'
import './MessageCard.scss'

export default function MessageCard() {
    return (
        <div className="MessageCard">
            {/* <div className="imageContainer"> */}
            <img src={citrusImg} alt="citrus" />
            {/* </div> */}
            <Message />
        </div>
    )
}
