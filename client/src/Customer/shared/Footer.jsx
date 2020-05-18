import React from 'react'
import fbIcons from '../../assets/icons/fb-icons.png';
import instagramIcons from '../../assets/icons/instagram-icons.png';
import pintrestIcons from '../../assets/icons/pintrest-icons.png';
import twitterIcons from '../../assets/icons/twitter-icons.png';
import youtubeIcons from '../../assets/icons/youtube-icons.png';


export default function Footer() {
    return (
        <footer className="customer-footer">
            <div className="icon-container">
                <img src={fbIcons} alt="Facebook Icon"/>
                <img src={instagramIcons} alt="Instagram Icon" />
                <img src={pintrestIcons} alt="Pintrest Icon" />
                <img src={twitterIcons} alt="Twitter Icon" />
                <img src={youtubeIcons} alt="Youtube Icon" />
            </div>
            <ul className="footer-links">
                <li>About Us</li>
                <li>Food Safety</li>
                <li>Careers</li>
                <li>Suppliers</li>
                <li>Press Inquiries</li>
                <li>Request a Store Credit</li>
                <li>Blog</li>
                <li>Gift Card</li>
                <li>Home</li>
                <li>Your Account</li>
                <li>Help/FAQ</li>
                <li>Contact Us</li>

            </ul>
        </footer>
    )
}
