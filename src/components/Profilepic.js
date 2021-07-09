import React from 'react';
import image from '../static/images/img.jpg';
import iconcamera from '../static/camera.svg';
import '../styles/app.css';

function Profilepic() {
    return(
        <div className="profilearea">
            <div className="pic-container">
                <div className="subwrapper">
                    <img src={image} alt="profile image"></img>
                </div>
                <div id="uploadpic">
                    <label htmlFor="upload" className="uploadlabel">
                        <input type="file" id="upload"/>
                        <img src={iconcamera} className="camera-icon" />
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Profilepic;