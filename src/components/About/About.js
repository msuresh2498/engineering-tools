import React from 'react'
import './about.css';
import { CardMedia } from '@mui/material';

const About = () => {
  return (
    <div>
      <div >
        <h1 className='about-heading'>ABOUT US</h1>
      </div>
      <p className='about-text'>High Precision Industry are the renowned manufacturers of Heavy Engineering Machine shops at Kanyakumari, Since 1991 we have carved a niche for quality. Durability, precision both in domestic and international markets. We take pride in being a profound Manufacturer, Supplier, and Exporter of Heavy Engineering Parts, Machined Casting Parts, etc., and have gained huge appreciation from the respective industry.</p>
      <div className='about-section'>
        <div className='about-section2'>
          <h1>We are experienced</h1>
          <p className='about-sec2-para'>Each of our advisors has a long track record that attests to the experience and expertise that they bring to us with growth and performance objectives.</p>
          <h1>We are rigorous</h1>
          <p className='about-sec2-para'>Our hands-on, pragmatic approach seeks to fulfill each company’s specific needs. From diagnoses to implementation, we accompany from different sectors as they meet their business objectives.</p>
          <h1>We are efficient</h1>
          <p className='about-sec2-para'>The satisfaction rates among our clients testify to the fact that our contributions are both real and decisive for the businesses that we assist. In fact, we have been recognized as one of the top-performing accelerators by a committee of venture capital specialists.</p>
        </div>
        <CardMedia
          component="img"
          height="500"
          className='about-images'
          image="https://media.istockphoto.com/id/178918443/photo/robotic-arm-welding.jpg?s=612x612&w=0&k=20&c=pVgGUUMJe0uUgvf9WFaU3Y5xzoLuGHWxcTfYiDBL9Y4="
          alt="Paella dish"
        />
      </div>
      <div className='about-section3'>
        <div>
          <div className='about-vision'>
            <h1>VISION</h1>
            <p>
              TOOLS ENGINEERING INDUSTRY vision is improves our image globally and achieves exponential growth to leadership through world class products and service.
            </p>
          </div>
          <div className='aboout-mission'>
            <h1>MISSION</h1>
            <p>TOOLS ENGINEERING INDUSTRY has the mission remains to strive to produce high quality customized products on a flexible schedule with responsive efficient customer service, delivered in a courteous and energetic manner with reasonable outlay</p>
          </div>
        </div>
        <div className='about-policy'>
          <h1>QUALITY POLICY</h1>
          <p>TOOLS ENGINEERING INDUSTRY is committed to</p>
          <p>- Align the operating environment of the organization & Quality Management System with strategic direction of the organization.</p>
          <p>- Deliver Fabricated & Machined components to our customers with Quality and on time delivery.</p>
          <p>Strive continually to meet the customer requirements and minimize the risks of its operations from all activities at the premises.</p>
          <p>Satisfy with the applicable requirements of its operations in line with standards and practices to continually improve the effectiveness of our Quality Management System.</p>
        </div>
      </div>
      <div>
        <h1>CERTIFICATES</h1>
        <div className='certicate-section'>
          <img src='https://hpvalvesindia.com/img/certificate/1.jpg' className='certifcate-image' alt='certifcate' />
          <img src='https://www.doriane-copar.com/wp-content/uploads/2018/02/certificate.jpg' className='certifcate-image' alt='certifcate' />
          <img src='https://anandengineering.in/wp-content/uploads/2021/05/ISO-Certificate.jpg' className='certifcate-image' alt='certifcate' />
          <img src='https://www.mahashiv.com/images/new_quality-certificate.jpg' className='certifcate-image' alt='certifcate' />
        </div>
      </div>
    </div>
  )
}

export default About