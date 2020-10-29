import React from 'react'
import "./Header.css"
export default function Header({user}) {
    const {name, status} = user
    return (
        <div className="Header">
            <h1 className="Header__name">{name}</h1>
            <p className="Header__status">{status}</p>
        </div>
    )
}
