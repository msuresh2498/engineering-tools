import React from 'react';
import './services.css';
import { CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Services = () => {

  const navigate = useNavigate();
  return (
    <div>
      <div className='service-container'>
        <div className='quality-section'>
          <h1 className='quality-head'>Quality Assurance</h1>
          <p className='quality-para'>
            We understand our customers’ need for a consistent and reliable supply of components. Our Quality Assurance methods therefore focus on three main areas. Testing, Statistical Process Control and Quality Management System to ISO 9001:2015.
          </p>
          <button className='quality-btn' onClick={() => navigate('/about')}>MAKE ENQUIRY</button>
        </div>
      </div>

      <div className='wind-container'>
        <div className='wind-section'>
          <h1>WIND SECTOR INDUSTRY</h1>
          <p>
            The wind sector industries, mostly rely on precision manufacturers for their products, thus we ensure to manufacture our products with the highest level of quality and durability, sturdiness and deliver all our products within a given time frame. We make tailored solutions for our clients as per their specifications to attain the fullest satisfaction from our clients. With our team of experts and the newest technologies, we manufacture our products as per the industry standards.
          </p>
        </div>
        <CardMedia
          component="img"
          height="350"
          className='service-images'
          image="https://w0.peakpx.com/wallpaper/849/273/HD-wallpaper-wind-farm-alternative-energy-sources-electrics-concepts-electricity-concepts-green-energy.jpg"
          alt="Paella dish"
        />
      </div>

      <div className='wind-container'>
        <CardMedia
          component="img"
          className='service-images'
          height="350"
          image="https://img.freepik.com/premium-photo/excavator-construction-site_33835-1337.jpg"
          alt="Paella dish"
        />
        <div className='wind-section'>
          <h1>HEAVY ENGINEERING INDUSTRY</h1>
          <p>
            We are expertise in providing a wide range of Customized Precision components for Heavy engineering industries as per our client’s specifications. Our objective is to manufacture the products and attain the fullest satisfaction from our clients in terms of quality and are available at affordable prices. We maintain a pace with both national and international market demands as our qualified professionals who are well versed in the newest technology advancement and are products are in compliance with the industry norms. All our precision products are known for their sturdiness, reliability, and durability which function smoothly and accurately.
          </p>
        </div>
      </div>
      <div className='wind-container'>
        <div className='wind-section'>
          <h1>OIL & GAS</h1>
          <p>
            Our Precision fabrication capabilities and our expert professional gives finished results that will exceed your expectations and improve your applications, every time, Thus, We consistently produce reliable and unique solutions for our clients as per their specifications and ensure to provide well-equipped precision components for oil and gas industries for its operation to run smoothly and effectively. All our precision components are manufactured with state of the art technologies and as per the industry standards and all our precision parts are high performing, integrated into the high speed, heavy volume, and leads to a corrosive free environment.
          </p>
        </div>
        <CardMedia
          component="img"
          height="350"
          className='service-images'
          image="https://media.istockphoto.com/id/178403736/photo/oil-gas-processing-plant.jpg?s=612x612&w=0&k=20&c=HZd6dKujf5AgICe1je875vq97WH8PJk8ahGl0FefS5U="
          alt="Paella dish"
        />
      </div>

    </div>
  )
}

export default Services