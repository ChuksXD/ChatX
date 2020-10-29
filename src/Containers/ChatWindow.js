import React from 'react'
import Header from '../Components/Header'
import Chats from '../Components/Chats'
import MessageInput from './MessageInput'
import store from '../Store'
import _ from 'lodash'
import "./ChatWindow.css"

export default function ChatWindow({activeUserId}) {
    const state = store.getState()
    const activeUser = state.contacts[activeUserId]
    const activeMsgs = state.messages[activeUserId]
    const {typing} = state 
    return (
        <div className="ChatWindow">
            <Header user = {activeUser} />
            <Chats activeUser = {activeUserId} messages = {_.values(activeMsgs)} />
            <MessageInput value = {typing} />
        </div>
    )
}
