import './css/discover.css'
import logo from './images/logo.png'
import dis1 from './images/dis1.png'
import dis2 from './images/dis2.png'
import dis3 from './images/dis3.png'
import dis4 from './images/dis4.png'
import dis5 from './images/dis5.png'
import dis6 from './images/dis6.png'
import dis7 from './images/dis7.png'
import dis8 from './images/dis8.png'
import dis9 from './images/dis9.png'

import { useEffect } from 'react';

function Discover() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
    }, []); // Empty dependency array to run the effect only once when component mounts

    return (
        <>
            <div className="sec-container4" id='top'>
                <h1 style={{ paddingTop: 100, paddingLeft: 150, fontSize: 100, color: '#111D75' }}>Natural Products <br /> For Lovers of <br /> Healthy Organic <br /> Food</h1>
            </div>
            <div className="offer">
                <h2 className='ourrr'>our services</h2>
                <p className="what">What We Offer</p><br />
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card2">
                            <img src={dis1} alt='img' />
                            <div className="card-body">
                                <h5 className="card-title2">Agriculture Products</h5>
                                <p className="card-text">Buy Agricultural Products and Machinery Online at BigHaat. We Offering broad range of Seeds, Plant Nutrition, Plant Protection and Agri Implements.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card2">
                            <img src={dis2} alt='img' />
                            <div className="card-body">
                                <h5 className="card-title2">Organic Products</h5>
                                <p className="card-text">Organic products are grown under a system of agriculture without the use of chemical fertilizers and pesticides with an environmentally and socially responsible approach.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card2">
                            <img src={dis3} alt='img' />
                            <div className="card-body">
                                <h5 className="card-title2">Dairy Products</h5>
                                <p className="card-text">Dairy products include common grocery store food around the world such as yogurt, cheese, milk and butter. A facility that produces dairy products is a dairy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="card-last">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col">
                            <img src={dis4} alt="images" className='disimg' />
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <p className="b2"> Agriculture & Organic Product Farm</p>
                                <p>There are many variations of passages of ipsum available but the
                                    majority have suffered alteration in some form by injected humor or
                                    random word which don’t look even. Comparison new ham melancholy.</p>
                                <p className='m'>25M</p>
                                <h6 className='grow'>Growth Tonns <br />
                                    of Harvest</h6>
                                <p className="b1"><img src={dis5} alt='img' /> 100% Guaranteed Organic Product </p>
                                <p className="b1"><img src={dis6} alt='img' /> Top-Quality Foods Production </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offer">
                <h2 className='ourrr'>What we do</h2>
                <p className="what">Currently we are <br/> selling organic food</p><br />
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card2">
                            <img src={dis7} className='dcimg' alt='img' />
                            <div className="card-body">
                                <h5 className="card-title2">Agriculture</h5>
                                <p className="card-text">Seeing rather her you not esteem men settle
                                    genius excuse. Deal say over means age from.
                                    Comparison new melancholy son devonshire
                                    to the dispatched.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card2">
                            <img src={dis8} className='dcimg' alt='img' />
                            <div className="card-body">
                                <h5 className="card-title2">Fresh</h5>
                                <p className="card-text">Perming rather her you not esteem men settle
                                    genius excuse. Deal say over means age from.
                                    Comparison new melancholy son devonshire
                                    to the dispatched.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card2">
                            <img src={dis9} className='dcimg' alt='img' />
                            <div className="card-body">
                                <h5 className="card-title2">Dairy</h5>
                                <p className="card-text">Seeing rather her you not esteem men settle
                                    genius excuse. Deal say over means age from.
                                    Comparison new melancholy son devonshire
                                    to the dispatched.</p>
                            </div>
                        </div>
                    </div>
                </div>
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
export default Discover;
