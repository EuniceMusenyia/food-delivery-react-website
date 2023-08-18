import React from "react";
import './styles.css';
import { Images } from "../Json/json";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBagShopping, } from "@fortawesome/free-solid-svg-icons";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const Body = () => {
    return (
        <div>

            <div className="Home">

                <div>
                    <h1> All Fast Food is <br />
                        Available at Foodle</h1>
                    <p> We Are Just A Click Away When You<br />
                        Crave For Delicious Fast Food</p>
                    <a href=""><button>  <FontAwesomeIcon className="icon" icon={faBagShopping} /> Buy Now</button></a> How to order

                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/Images/sandwich11.png'} alt="sandwich" />

                </div>
            </div>

            {/* Services*************** */}
            <div className="services">
                <div id="servicestxt">
                    <img id="servicesicon" src={process.env.PUBLIC_URL + "Images/fastdeliveryicon.png"} alt="" />
                    <div >
                        <h4>Fast Delivery</h4>
                        <p>The Food Will Be Delivered To <br />
                            Your Home within 1-2 Hours Of
                            Your Ordering</p>
                    </div>
                </div>

                <div id="servicestxt">
                    <img id="servicesicon" src={process.env.PUBLIC_URL + "Images/freshfoodicon.png"} alt="" />
                    <div>
                        <h4>Fresh Food</h4>
                        <p>Your Food Will Be Delivered <br />
                            100% Fresh To Your Home .We
                            Do Not Deliever Stale Food</p>
                    </div>
                </div>

                <div id="servicestxt">
                    <img id="servicesicon" src={process.env.PUBLIC_URL + "Images/deliveryicon.png"} alt="" />
                    <div>
                        <h4>Free Delivery</h4>
                        <p>Your Food delivery Is <br />
                            Absolutely Free. No Cost
                            Just Order and Enjoy</p>
                    </div>
                </div>
            </div>



            {/* categories***************** */}

            <div className="categories">

                <div className="categories-text">
                    <div>
                        <p className="bestcategories">Best <span>Delivered</span> <br />
                            Categories</p>
                    </div>

                    <div>
                        <p className="bestcategories2">Here Are Some Of Our Best Distributed <br />
                            Categories, If You Can Order <br />
                            From Here</p>
                    </div>
                </div>

                <div className="categories-img">
                    <div>
                        <img src={process.env.PUBLIC_URL + '/Images/sandwich11.png'} alt="sandwich" />
                        <h3>Chicken Burger</h3>
                        <p><a href=""> Order Now
                            {/* <FontAwesomeIcon className="icon" icon={faGreaterThan} /> */}
                        </a>

                        </p>
                    </div>

                    <div>
                        <img src={process.env.PUBLIC_URL + '/Images/chicken pizza.jpg'} alt="sandwich" />
                        <h3>Chicken Pizza</h3>
                        <p><a href=""> Order Now
                            {/* <FontAwesomeIcon className="icon" icon={faGreaterThan} /> */}
                        </a>
                        </p>
                    </div>

                    <div>
                        <img src={process.env.PUBLIC_URL + '/Images/french fries.jpg'} alt="sandwich" />
                        <h3>French Fries</h3>
                        <p><a href=""> Order Now
                            {/* <FontAwesomeIcon className="icon" icon={faGreaterThan} /> */}
                        </a></p>
                    </div>
                </div>
            </div>



            {/* ********************* menu*********** */}


            <div className="image">
                {Images.map((imag, id) => (
                    <div className="container" key={id}>
                        {/* <img  src={process.env.PUBLIC_URL + '/Images/foodish3.jpg' */}
                        {/* } alt="product"></img> */}
                        <img src={imag.imgs} />
                        <div className="">
                            <h1>{imag.Images}</h1>
                            <h1>{imag.title}</h1>
                            <p>{imag.ratings}</p>
                            <p>{imag.price}</p>
                            <button>{imag.button}</button>
                            <p>{imag.tag}</p>
                        </div>
                    </div>
                ))}
            </div>


            {/* *********** Offers******** */}

            <div className="offers">
                <div>
                    <img src={process.env.PUBLIC_URL + '/Images/food dish.jpg'} alt="sandwich" />
                </div>

                <div className="offers2">
                    <img className="offerimg" src={process.env.PUBLIC_URL + '/Images/foodish3.jpg'} alt="sandwich" />
                    <img className="offerimg" src={process.env.PUBLIC_URL + '/Images/foodish3.jpg'} alt="sandwich" />


                </div>
            </div>

            {/* *************Footer********* */}





        </div>

    )
}

export default Body;