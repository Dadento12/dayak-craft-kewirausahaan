import WhatappsIcon from "../assets/button_icon/icons8-whatsapp-logo-50.svg"
import InstagramIcon from "../assets/button_icon/icons8-instagram.svg"

export default function ContactMe(){
    return(
        <>
            <button><img src={WhatappsIcon} alt="wa-icon"/></button>
            <button><img src={InstagramIcon} alt="instagram-icon"/></button>
            {console.log('Icon from https://icons8.com/icons')}
        </>
    );
}