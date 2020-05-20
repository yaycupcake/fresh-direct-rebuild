import React from 'react'
import Message from '../Message/Message'
// import citrusImg from '../../assets/images/citrus.jpg'
import './MessageCard.scss'

export default function MessageCard(props) {
    return (
        <div className="MessageCard">
            {/* <div className="imageContainer"> */}
            <img src={props.img} alt={props.alt} />
            {/* </div> */}
            <Message title={props.title} message={props.message}/>
        </div>
    )
}
