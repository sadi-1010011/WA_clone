import { Link } from 'react-router-dom';
import React from 'react';
import Topbar from '../components/Topbar';
import DataRow from '../components/DataRow';
import image from '../static/images/img.jpg';
import iconqrcode from '../static/qrcode.svg';
import '../styles/app.css';

function ProfileView() {
    return(
        <div className="profile-view">
            <span className="extra-icon-wrapper1">
                    <img src={iconqrcode} className="qrcode-icon" />
                </span>
            <div className="profile-wrapper">
                <div className="profile-thumbnail">
                    <img src={image} className="profile-icon" />
                </div>
            </div>
            <div className="profile-info">
                <p className="profileview-username">Sadi</p>
                <span className="profileview-about color-grey">EXPERIENCE LIFE 🥰😘</span>
            </div>
        </div>
    );
}

export default function SettingsScreen() {
    return(
        <div className="main-container">
            <Topbar>Settings</Topbar>
            <Link to="/profile">
                <ProfileView/>
            </Link>
            <DataRow icon_num="3" description="Privacy, security, change number">Account</DataRow>
            <DataRow icon_num="4" description="Theme, wallpapers, chat history">Chats</DataRow>
            <DataRow icon_num="5" description="Message, group & call tones">Notifications</DataRow>
            <DataRow icon_num="6" description="Network usage, auto-download">Storage and data</DataRow>
            <DataRow icon_num="7" description="Help center, contact us, privacy policy">Help</DataRow>
            <DataRow icon_num="8">Invite a friend</DataRow>
            <div className="from-text">
                <p className="text-smaller">from</p>
                <h3 className="me">SADIQ</h3>
            </div>
        </div>
    );
}