// Functional component rfc <tab>
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
   //Works like render does
    return (
        <div style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle}  to="/about">About</Link>
        </div>
    )
}
const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'underline'
}