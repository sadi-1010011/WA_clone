import React from 'react';
import iconauther from '../static/auther.png';
import iconinfo from '../static/info.png';
import iconphone from '../static/phone.png';
import iconpen from '../static/pen.png';
import iconaccount from '../static/account.png';
import iconchats from '../static/chats.png';
import iconnotifications from '../static/notifications.png';
import iconstorage from '../static/storage.png';
import iconhelp from '../static/help.png';
import iconcontacts from '../static/contacts.png';

import '../styles/app.css';

function DataRow(props) {
    // To make this comp reusable import all 3 icons and use needed one each time;

    let icons = [iconauther, iconinfo, iconphone, iconaccount, iconchats, iconnotifications, iconstorage, iconhelp, iconcontacts];
    const iconpath = icons[String(props.icon_num)];
    const editable = <span className="extra-icon-wrapper"><img src={iconpen} /></span>;

    return(
        <div className="data-row">
            <div className="contact-icon-wrapper">
                <img src={iconpath} className="data-icon" alt="icon" />
            </div>
            <div className="textdata-container">
                { props.editable && editable }
                <span className="text-smaller color-grey">{ props.name }</span>
                <p className="data-value">{ props.children }</p>
                { props.description && <span className="text-smaller color-grey">{ props.description }</span> }
            </div>
        </div>
    );
}

export default DataRow;