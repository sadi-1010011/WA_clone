import React from 'react';
import { useHistory } from 'react-router-dom';
import arrowback from '../static/arrow-left.svg';
import '../styles/app.css';

function Topbar(props) {

    let history = useHistory();

    return(
        <div className="topbar">
                <img src={arrowback} className="arrow-back-icon" alt="go back" onClick={ history.goBack } />
            <p className="topbar-title">{ props.children }</p>
        </div>
    );
}

export default Topbar;