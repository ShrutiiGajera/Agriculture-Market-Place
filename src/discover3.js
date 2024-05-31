import './css/discover.css'
import logo from './images/logo.png'
import dis12 from './images/dis12.png'
import ListItem from './images/ListItem.png'
import { Link, useNavigate } from 'react-router-dom';


function Discover3() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/shop', { replace: true });
    };

    return (
        <>
            <div className="sec-container6" id='top'>
                <h1 style={{ paddingTop: 150, paddingLeft: 150, fontSize: 120, color: '#fff' }}>Fresh & Natural <br />
                    Product in  <br />Our Store</h1>
            </div>
            <br /><br /><br />
            <div className='fresh'>
                <p className='dis11'> <span style={{ color: '#D3CCE3' }}>Fresh & Natural</span> <br /> Product in Our Store</p>
                <p style={{ color: '#fff', fontSize: 20, paddingLeft: 550 }}>Drawings can followed improved out sociable not. Earnestly so do instantly pretended.</p>
                <button className="btn4" onClick={handleClick}>
                    Order Now
                </button>
            </div>

            <div className="card-last">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col" >
                            <img src={dis12} alt="images" className='disimg2' />
                        </div>
                        <div className="col" style={{ backgroundColor: '#4BAF47' }}>
                            <div className="card-body">  <br />
                                <p className="b2"> Healthy life with fresh products</p>
                                <p>Eat a balanced diet that contains important nutrients. One must include more fresh fruits and
                                    green vegetables in the diet. Refrain from eating junk food. Stay away from foods that contain
                                    large amounts of salt or sugar.</p>
                                <p className="b1"><img src={ListItem} alt='img' /> Biodynamic food </p>
                                <p className="b1"><img src={ListItem} alt='img' /> Organic gardening </p>
                                <p className="b1"><img src={ListItem} alt='img' /> Organic food certification </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <br/>
                <br/>
            </div>



            <div className="pg-footer">
                <footer className="footer">
                    <svg class="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
                        <path class="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
                    </svg>
                    <div class="footer-content">
                        <div class="footer-content-column">
                            <div class="footer-logo">
                                <img src={logo} className='agri' alt='image' />
                            </div>
                            <div class="footer-menu">
                                <h2 class="footer-menu-name"> Get Started</h2>
                                <ul id="menu-get-started" class="footer-menu-list">
                                    <li class="menu-item menu-item-type-post_type menu-item-object-product">
                                        <a href="#">Start</a>
                                    </li>
                                    <li class="menu-item menu-item-type-post_type menu-item-object-product">
                                        <a href="#">Documentation</a>
                                    </li>
                                    <li class="menu-item menu-item-type-post_type menu-item-object-product">
                                        <a href="#">Installation</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer-content-column">
                            <div class="footer-menu">
                                <h2 class="footer-menu-name"> Company</h2>
                                <ul id="menu-company" class="footer-menu-list">
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="#">Contact</a>
                                    </li>
                                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                                        <a href="#">News</a>
                                    </li>
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="#">Careers</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="footer-menu">
                                <h2 class="footer-menu-name"> Legal</h2>
                                <ul id="menu-legal" class="footer-menu-list">
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                                        <a href="#">Privacy Notice</a>
                                    </li>
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="#">Terms of Use</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer-content-column">
                            <div class="footer-menu">
                                <h2 class="footer-menu-name"> Quick Links</h2>
                                <ul id="menu-quick-links" class="footer-menu-list">
                                    <li class="menu-item menu-item-type-custom menu-item-object-custom">
                                        <a target="_blank" rel="noopener noreferrer" href="#">Support Center</a>
                                    </li>
                                    <li class="menu-item menu-item-type-custom menu-item-object-custom">
                                        <a target="_blank" rel="noopener noreferrer" href="#">Service Status</a>
                                    </li>
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="#">Security</a>
                                    </li>
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="#">Blog</a>
                                    </li>
                                    <li class="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                                        <a href="#">Customers</a></li>
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="#">Reviews</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer-content-column">
                            <div class="footer-call-to-action">
                                <h2 class="footer-call-to-action-title" style={{ color: 'black' }}> Let's Chat</h2>
                                <p class="footer-call-to-action-description"> Have a support question?</p>
                                <a class="footer-call-to-action-button button" href="#" target="_self"> Get in Touch </a>
                            </div>
                            <div class="footer-call-to-action">
                                <h2 class="footer-call-to-action-title" style={{ color: 'black' }}> You Call Us</h2>
                                <p class="footer-call-to-action-link-wrapper"> <a class="footer-call-to-action-link" href="tel:+91 XXXXX XXXXX" target="_self">+91 XXXXX XXXXX </a></p>
                            </div>
                        </div>
                        <div class="footer-social-links"> <svg class="footer-social-amoeba-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 54">
                            <path class="footer-social-amoeba-path" d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"></path>
                        </svg>
                            <a class="footer-social-link linkedin" href="#" target="_blank">
                                <span class="hidden-link-text">Linkedin</span>
                            </a>
                            <a class="footer-social-link twitter" href="#" target="_blank">
                                <span class="hidden-link-text">Twitter</span>
                            </a>
                            <a class="footer-social-link youtube" href="#" target="_blank">
                                <span class="hidden-link-text">Youtube</span>

                            </a>
                            <a class="footer-social-link github" href="#" target="_blank">
                                <span class="hidden-link-text">Github</span>
                            </a>
                        </div>
                    </div>
                    <div class="footer-copyright">
                        <div class="footer-copyright-wrapper">
                            <p class="footer-copyright-text">
                                <a class="footer-copyright-link" href="#" target="_self"> ©️2024. | Designed By: Neharika Sabhaya,Gajera Shruti,Butani Ami. | All rights reserved. </a>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
           
        </>
    )
}
export default Discover3;