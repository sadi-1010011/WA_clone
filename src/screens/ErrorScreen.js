import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/app.css';

export default function ErrorScreen() {
    return(
        <>
            <h1 className="text-center">ERROR SCREEN</h1>
            <Link to="/profile" className="color-white">Profile Screen</Link>
        </>
    );
}