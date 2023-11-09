import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Products from './components/products/Products';
import Services from './components/Services/Services';
import About from './components/About/About';
import './components/Home/Home.css'
import HandymanIcon from '@mui/icons-material/Handyman';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton } from '@mui/material';

function App() {

  const navigate = useNavigate();
  return (
    <div className="App">
      <div className='Navbar'>
        <div className='navbar-title'>
          <HandymanIcon sx={{ fontSize: 50 }} />
          <div className='nav-title-section' onClick={() => navigate('/')}>
            <h1 className='navbar-heading'>TOOLS </h1><h3 className='title-subhead'>Engineering Services</h3>
          </div>
        </div>
        <div className='header-contact'>
          <h3><PhoneIcon /> 04652-22542</h3>
          <h3>toolsenggservices@gmail.com</h3>
        </div>
      </div>
      <div className='home-buttons'>
        <button className='home-btn' onClick={() => navigate('/')}>HOME</button>
        <button className='home-btn' onClick={() => navigate('/services')}>SERVICES</button>
        <button className='home-btn' onClick={() => navigate('/products')}>PRODUCTS</button>
        <button className='home-btn' onClick={() => navigate('/about')}>ABOUT US</button>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <div className='footer'>
        <div className='footer-container'>
          <div className='navbar-title'>
            <HandymanIcon sx={{ fontSize: 50 }} />
            <div>
              <h1 className='footer-title'>TOOLS Engineering Services</h1>
            </div>
          </div>
          <div>
            <IconButton className='footer-icons' size="large"><FacebookIcon /></IconButton>
            <IconButton className='footer-icons' size="large"><InstagramIcon /></IconButton>
            <IconButton className='footer-icons' size="large"><TwitterIcon /></IconButton>
            <IconButton className='footer-icons' size="large"><LinkedInIcon /></IconButton>
            <IconButton className='footer-icons' size="large"><YouTubeIcon /></IconButton>
          </div>
        </div>
        <div className='copyright'>
          <p className='copyright-text'>Copyrights (c) 2021  - All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
