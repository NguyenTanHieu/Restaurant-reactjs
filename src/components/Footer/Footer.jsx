import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
       <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga vero quibusdam in exercitationem deleniti recusandae neque magni quidem, nemo architecto totam voluptas voluptates cupiditate explicabo. Incidunt consectetur officia dolore excepturi!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
             <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
             </ul>   
        </div>
        <div className="footer-content-right">
             <h2>GET IN TOUCH</h2>
             <ul>
                <li>Phone:0827932939</li>
                <li>Email:HieuKen2507@gmail.com</li>
             </ul>
        </div>
       </div>
       <hr />
       <p className="footer-copyright">Copyright 2024 @ Hieuken2507@gmail.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
