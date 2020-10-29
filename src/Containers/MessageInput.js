import React from 'react'
import {setTypingValue, sendMessage} from '../Actions'
import store from '../Store'
import "./MessageInput.css"



const handleSubmit = (e) => {
    e.preventDefault();
    const state = store.getState()
    const { typing, activeUserId } = state
    store.dispatch(sendMessage(typing,activeUserId))

}

export default function MessageInput({value}) {

    function handleChange(e){
        store.dispatch(setTypingValue(e.target.value))
    }
    return (
        <form className="MessageInput" onSubmit={handleSubmit}>
            <input 
            className ="Message__input"
            onChange= {handleChange}
            value = {value}
            placeholder = "write a message"
            />

        </form>
    )
}

