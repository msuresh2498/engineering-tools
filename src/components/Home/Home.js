import React from 'react'
import './Home.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='Home'>


            <div className='home-introduction'>
                <div>
                    <h2 className='intro-text'>
                        High quality, competitively priced equipment and components for the heavy engineering sector. We take the hassle out of managing your manufacturing supply chain by doing it for you.
                    </h2>
                    <button className='home-product-btn' onClick={() => navigate('/products')}>PRODUCTS</button>
                </div>
            </div>
            <div>
                <h1 className='home-welcome-heading'>Welcome to TOOLS Engineering Services</h1>
                <p className='home-welcome-para'>High Precision Industry are the renowned manufacturers of Heavy Engineering Machine shops at Coimbatore, Since 1991 we have carved a niche for quality. Durability, precision both in domestic and international markets. We take pride in being a profound Manufacturer, Supplier, and Exporter of Heavy Engineering Parts, Machined Casting Parts, etc., and have gained huge appreciation from the respective industry.</p>
            </div>
            <div className='home-cards'>
                <div className='home-card'>
                    <img src='https://sansera.in/wp-content/uploads/2021/04/Engineering-Excellence-2.png' alt='card img' />
                    <h1>32+</h1>
                    <p>Years of engineering excellence</p>
                </div>
                <div className='home-card'>
                    <img src='https://sansera.in/wp-content/uploads/2021/04/Manufacturing-facilities-2.png' alt='card img' />
                    <h1>16+</h1>
                    <p>State of art manufacturing facilities</p>
                </div>
                <div className='home-card'>
                    <img src='https://sansera.in/wp-content/uploads/2021/04/Manpower-2.png' alt='card img' />
                    <h1>8000+</h1>
                    <p>Workforce</p>
                </div>
                <div className='home-card'>
                    <img src='https://sansera.in/wp-content/uploads/2021/05/Badge1-1.png' alt='card img' />
                    <h1>TOP-NOTCH</h1>
                    <p>Manufacturer of connecting rods & gaer shifters in india</p>
                </div>
            </div>
            <div>
                <div className='product-heading'>
                    <h1>OUR </h1> <h1 className='prd-heading2'>PRODUCTS</h1>
                </div>
                <Carousel responsive={responsive} className='products-list'>
                    <Card className='product-card'>
                        <CardMedia
                            component="img"
                            height="250"
                            image="https://www.dombor.com/wp-content/uploads/2023/02/3-Way-Ball-Valve.jpg"
                            alt="Paella dish"
                        />
                        <h4>3 Way Ball Valve Manufacturer</h4>
                    </Card>
                    <Card className='product-card'>
                        <CardMedia
                            component="img"
                            height="250"
                            image="https://5.imimg.com/data5/DV/WH/DJ/SELLER-57715294/10-inch-cast-iron-sluice-valve.jpg"
                            alt="Paella dish"
                        />
                        <h4>10 inch Valves</h4>
                    </Card>
                    <Card className='product-card'>
                        <CardMedia
                            component="img"
                            height="250"
                            image="https://qrcvalves.com/wp-content/uploads/2022/10/valve-dsi.webp"
                            alt="Paella dish"
                        />
                        <h4>Bonnets for Valves</h4>
                    </Card>
                    <Card className='product-card'>
                        <CardMedia
                            component="img"
                            height="250"
                            image="https://img.jeawincdn.com/resource/upfiles/161/images/news/pump-housing-pic.jpg"
                            alt="Paella dish"
                        />
                        <h4>Pump Housing</h4>
                    </Card>
                    <Card className='product-card'>
                        <CardMedia
                            component="img"
                            height="250"
                            image="https://5.imimg.com/data5/IM/HS/DI/SELLER-3017522/industrial-bearing-cover.jpeg"
                            alt="Paella dish"
                        />
                        <h4>Bearing Cover</h4>
                    </Card>

                </Carousel>;
            </div>
            <div>
                <div className='product-heading'>
                    <h1>GET IN </h1> <h1 className='prd-heading2'>TOUCH</h1>
                </div>
                <div className='contact-container'>
                    <div className='contact-section'>
                        <input type='text' placeholder='NAME' className="filled-basic" />
                        <input type='text' placeholder='EMAIL' className="filled-basic" />
                        <input type='text' placeholder='PHONE NO' className="filled-basic" />
                    </div>
                    <div className='contact-section2'>
                        <textarea rows="2" cols="60" name="text" className='contact-msg' placeholder="MESSAGE"></textarea>
                        <button className='contact-btn'>Send</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home