import React from 'react';
import '../styles/footer.css'

const Footer = () => {
    return (
        <footer>
            <div className = "container">
                <p> &copy; NBU exchange rates {new Date().getFullYear()} <span>powered by React</span>  </p>
            </div>
        </footer>
    )
}

export default Footer;