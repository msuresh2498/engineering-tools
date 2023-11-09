import React from 'react'
import './products.css'
import { Card, CardMedia } from '@mui/material'

const Products = () => {

  const products = [
    {
      id: 1,
      name: "3 Way Ball Valve Manufacturer",
      image: "https://www.dombor.com/wp-content/uploads/2023/02/3-Way-Ball-Valve.jpg",
      description: "A three-way ball valve has three ports or openings that are connected to piping or tubing for gas or fluid flow (media) to pass through. These ports are usually described as one inlet and two outlet ports or one outlet and two inlet ports depending upon the flow direction through the valve.",
    },
    {
      id: 2,
      name: "10 inch Valves",
      image: "https://5.imimg.com/data5/DV/WH/DJ/SELLER-57715294/10-inch-cast-iron-sluice-valve.jpg",
      description: "10 Inch ball valves are desiged in trunnion ball valve, which has a mechanical means of anchoring the ball at the top and the bot-tom, this design is the standard design applied.",
    },
    {
      id: 3,
      name: "Bonnets for Valves",
      image: "https://qrcvalves.com/wp-content/uploads/2022/10/valve-dsi.webp",
      description: "A valve bonnet covers the opening on top of a valve body. As a pressure-retaining part of a valve, the bonnet and its connection to the body are exposed to the operating fluid. As a result, they must withstand the operating pressure and corrosive effects of the fluid.",
    },
    {
      id: 4,
      name: "Pump Housing",
      image: "https://img.jeawincdn.com/resource/upfiles/161/images/news/pump-housing-pic.jpg",
      description: "The pump housing isolates the pumped fluid medium from the atmosphere to prevent leakage and maintain pressure. For centrifugal pumps, the requirements for the pump casing are relatively high. For example, the sealing of the pump casing should be good, and the pump casing should have sufficient strength and rigidity.",
    },
    {
      id: 5,
      name: "Bearing Cover",
      image: "https://5.imimg.com/data5/IM/HS/DI/SELLER-3017522/industrial-bearing-cover.jpeg",
      description: "A bearing cap is a removable disk that prevents unwanted particles from entering into the place where the bearings are contained. To replace main bearings, remove the bearing cap and take out the worn lower shell. You should remove the main bearing cap and pull the oil seal out.",
    },
    {
      id: 6,
      name: "Crankshaft Assembly",
      image: "https://m.media-amazon.com/images/I/613BfPdzMqL._AC_UF1000,1000_QL80_.jpg",
      description: "Crankshaft is a shaft which can transform the reciprocating motion of piston to rotary motion of flywheel. Crankshaft is connected piston through piston connecting rod at one end and flywheel at the other end. Crankshaft assembly contains crankshaft and bearings to reduce stress coming from the motion of the piston.",
    },
    {
      id: 7,
      name: "Balancer Shaft",
      image: "https://blog.ktm.com/wp-content/uploads/2017/03/2-stroke_Counter-balancer-shaft.jpg",
      description: "Balance shafts are used in internal combustion engines to reduce or eliminate the free mass forces of a reciprocating engine to reduce operating noise and vibration. For this purpose, imbalances (eccentric with respect to a rotation axis arranged weights) attached to the balance shaft.",
    }
  ]
  return (
    <div>
      <div className='heading-container'>
        <h2 className='products-heading'>TOOLS Engineering Industry provide end to end precision manufacturing solutions for all heavy engineering industries at Kanyakumari.</h2>
        <p className='products-para'>We are expertise in providing a wide range of Customized Precision components
          for Heavy engineering industries as per our client’s specifications.
          Our objective is to manufacture the products and attain the fullest satisfaction from our
          clients in terms of quality and are available at affordable prices. We maintain a pace with
          both national and international market demands as our qualified professionals
          who are well versed in the newest technology advancement and are products are in
          compliance with the industry norms. All our precision products are known for their sturdiness, reliability, and durability which function smoothly and accurately.</p>
      </div>
      <div>
        <div className='product-heading'>
          <h1>OUR </h1> <h1 className='prd-heading2'>PRODUCTS</h1>
        </div>
        <div className='card-container'>
          {
            products.map((product) => (
              <Card className='card-products'>
                <CardMedia
                  component="img"
                  height="350"
                  image={product.image}
                  alt="Paella dish"
                />
                <h4>{product.name}</h4>
                <p className='product-des'>{product.description}</p>
              </Card>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Products