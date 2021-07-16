import React from 'react'
import './Footer.css'
import logo from '../../Assets/logo.png'

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <img src={logo} className="logo" alt="logo" />   
                    </div>
                    <div className="col-md-2">
                        <h5>Company</h5>
                        <ul>
                            <li>About</li>
                            <li>Jobs</li>
                            <li>For Record</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                    <h5>Communities</h5>
                        <ul>
                            <li>For Artist</li>
                            <li>Developers</li>
                            <li>Advertising</li>
                            <li>Investors</li>
                            <li>Vendors</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                    <h5>Useful Links</h5>
                        <ul>
                            <li>Support</li>
                            <li>Web Player</li>
                            <li>Free mobile app</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                    
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <ul className="flex">
                            <li>Legal</li>
                            <li>Privacy center</li>
                            <li>Privacy Policy</li>
                            <li>Cookies</li>
                            <li>About ads</li>
                            <li>additional CA privacy disclosure</li>
                        </ul>
                    </div>
                    <div className="col-md-2 text-right">
                        usa <br />
                        Pivacy policy
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
