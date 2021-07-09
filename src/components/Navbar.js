import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// icons & png
import iconback from '../static/back.png';
import icontripledot from '../static/tripledot.png' ;
import iconsearch from '../static/search.png' ;
import iconcamera from '../static/camera.svg' ;
// my scripts & styles
import NavbarOptionsToggle, { checkislink } from '../scripts/NavbarOptionsToggle';
import MoveCurrentTab from '../scripts/MoveCurrentTab';
import SearchAllChat, { SearchClose } from '../scripts/SearchAllChat';
import '../styles/app.css';


function NavbarMenu() {
    return(
        <div className="navbarmenu">
            <div className="menu-camera-wrapper" onClick={ () => MoveCurrentTab(0) }>
                <img src={iconcamera} className="menu-camera-icon" alt="cam" />
            </div>
            <span onClick={ () => MoveCurrentTab(1) }>chats</span>
            <span onClick={ () => MoveCurrentTab(2) }>status</span>
            <span onClick={ () => MoveCurrentTab(3) }>calls</span>
        </div>
    );
}


function Navbar() {

    let [searchvalue, setSearchvalue] = useState('');

    return(
        <div className="navbar">
            <div className="nav-subwrapper">
                <h3 className="main-title color-grey">WhatsApp</h3>
                <div className="main-icons-wrapper">
                    {/* SEARCH OPTION */}
                    <div id="searchAllchat">
                        <div className="iconback-container">
                            <img src={ iconback } onClick={ () => SearchClose() } />
                        </div>
                        <input className="searchAllinput"
                                type="text"
                                placeholder="search.."
                                onChange={ (event) => setSearchvalue(event.value) } value={ searchvalue }
                        />
                    </div>
                    <img src={iconsearch} onClick={ () => SearchAllChat() } />
                    <img src={icontripledot} onClick={ () => NavbarOptionsToggle() } />
                    <div className="tripledot-options-container" tabIndex="0" onBlur={ (event) => checkislink(event) } >
                        <p className="main-options">New group</p>
                        <p className="main-options">New broadcast</p>
                        <p className="main-options">WhatsApp web</p>
                        <p className="main-options">Starred messages</p>
                        <p className="main-options">Payments</p>
                        <Link to="/settings" className="color-white" data-islink="true">
                            <p className="main-options">Settings</p>
                        </Link>
                    </div>
                </div>
            </div>
            <NavbarMenu />
            <hr id="navbar_current_menu" color="#00AF9C" align="right" />
        </div>
    );
}

export default Navbar;