// Functional component rfc <tab>

import React from 'react'

export default function Header() {
   //Works like render does
    return (
        <div>
            <h1 style={headerStyle}>TodoList</h1>
        </div>
    )
}
const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}