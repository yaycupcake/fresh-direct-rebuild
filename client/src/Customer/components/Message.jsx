import React from 'react'
import './Message.scss'

export default function Message(props) {
    return (
        <div className="Message">
            <h3> {props.title}</h3>
             <p> {props.message}</p>
            <a href="#">Read More</a>

        </div>
    )
}
