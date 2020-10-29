import React from 'react'
import "./Main.css"
import ChatWindow from '../Containers/ChatWindow'
import Empty from './Empty'

function Main({user, activeUserId}) {

    const renderMainContent= () => {
        if (!activeUserId){
            return <Empty user = {user} activeUserId = {activeUserId} />
        }
        else{
            return <ChatWindow activeUserId = {activeUserId} />
        }
    }
    return (
        <main className="Main"> {renderMainContent()}</main>
    )
}




export default Main;