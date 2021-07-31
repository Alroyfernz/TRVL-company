import React from 'react'
import { FaTrain } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Button } from '../Button'
import "./Footer.css"
import {GrFacebook} from 'react-icons/gr'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitterSquare} from 'react-icons/fa'
function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best vaction deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubcribe at any time.
                </p>
                <div className="input-areas">
                    <form >
                        <input type="email" className="foot-input" name="email" placeholder="Your Email"/>
                        <Button to='/'
                        buttonStyle='btn--outline'>Subscribe </Button>
                    </form>
                </div>
            </section>
            {/* <div className="footer-links">
                <div className="footer-links-wrapper">
                    <div className="footer-link-items">
                        <h2>About us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div>

                <div className="footer-links-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div>

                <div className="footer-links-wrapper">
                    <div className="footer-link-items">
                        <h2>videos</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div>
               

            </div> */}
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            TRVL <FaTrain/>
                        </Link>
                    </div>
                    <small className="website-right">TRVL @ 2021</small>
                    <div className="social-icons">
                        <Link  to='/' target="_blank" className="social-icon-link">
                            <GrFacebook/>
                        </Link>

                        <Link  to='/' target="_blank" className="social-icon-link">
                            <FiInstagram/>
                        </Link>

                        <Link  to='/' target="_blank" className="social-icon-link">
                           <FaTwitterSquare/>
                        </Link>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
