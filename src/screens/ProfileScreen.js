import { useState } from 'react';
import Topbar from '../components/Topbar.js';
import Profilepic from '../components/Profilepic.js';
import DataRow from '../components/DataRow.js';
import '../styles/app.css';

export default function ProfileScreen() {

    // hardcoded text values..
    let [username, setUsername] = useState('Sadi'); // 'username'
    let [about, setAbout] = useState('EXPERIENCE LIFE 🥰😘'); // 'Hey there! I am using WhatsApp'
    let [phone, setPhone] = useState('+91 6238998062'); // '0987654321'
    
    return(
        <div className="main-container">
            <Topbar>Profile</Topbar>
            <Profilepic />
            <DataRow name="Name" icon_num="0" editable="true" description="This is not your username or pin. This name will be visible to your WhatsApp contacts.">{ username }</DataRow>
            <DataRow name="About" icon_num="1" editable="true">{ about }</DataRow>
            <DataRow name="Phone" icon_num="2"> { phone }</DataRow>
        </div>
    );
}