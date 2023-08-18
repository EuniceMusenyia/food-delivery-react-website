import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest,
    faInstagram,
    faTwitter,
    faFacebook
    } from '@fortawesome/free-brands-svg-icons'; 
import './footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <ul>
                    <li><h3>Foodish</h3></li>
                    <li>Continue Foodish 2023 all rights reserved</li>
                    <li><h3>Follow Us On</h3></li>
                    <li> 
                   <FontAwesomeIcon className="icon" icon={faPinterest} />
                   <FontAwesomeIcon className="icon" icon={faInstagram} />
                   <FontAwesomeIcon className="icon" icon={faTwitter} />
                   <FontAwesomeIcon className="icon" icon={faFacebook} />
                   </li>
 
                </ul>

                <ul>
                   <li><h3>Menu</h3></li>
                   <li><a href="">Home</a></li>
                   <li><a href="">Offers</a></li>
                   <li><a href="">Service</a></li>
                   <li><a href="">About Us</a></li>

                </ul>

                <ul>
                   <li><h3>Information</h3></li>
                   <li><a href="">Menu</a></li>
                   <li><a href="">Quality</a></li>
                   <li><a href="">Make a Choice</a></li>
                   <li><a href="">Salad With Vegetable</a></li>
                   <li><a href="">Fast Delivery</a></li>
                   <li><a href="">Subscribe</a></li>

                </ul>

                <ul>
                   <li><h3>Contact</h3></li>
                   <li><a href="">+123 456 789</a></li>
                   <li><a href="">Explore</a></li>
                   <li><a href="">info@foodish.com</a></li>
                   <li><a href="">Salad With Vegetable</a></li>
                   <li><a href="">1245, New York, USA</a></li>
                   <li><a href="">Subscribe</a></li>

                </ul>
            </div>
        </div>
    )
}
export default Footer;