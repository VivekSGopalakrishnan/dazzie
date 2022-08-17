import React from 'react'
import './Sidenav.css'
import {Link} from 'react-router-dom' 
import { BiGridAlt } from 'react-icons/bi'
import orders from '../assets/icons/orders.svg'
import customers from '../assets/icons/customer.svg'
import pack from '../assets/icons/Package.svg'
import discount from '../assets/icons/Coupon Discount.svg'
import user from '../assets/icons/user.svg'
import settings from '../assets/icons/seettings.svg'
const Sidenav = () => {
    return (
        <div className='container-fluid'>
            <div className='sidenav'>
                <div className='sidenav_icons'>
                <ul className='sidenav_icons_list'>
                    <li className='sidenav_icon_element'><Link to='/'><BiGridAlt style={{ color: '#92929D' }} size={26}/></Link></li>
                    <li className='sidenav_icon_element'><Link to='/orders'><img src={orders} alt ='orders'/></Link></li>
                    <li className='sidenav_icon_element'><Link to='/customers'><img src={customers} alt ='customers'/></Link></li>
                    <li className='sidenav_icon_element'><img src={pack} alt ='pack'/></li>
                    <li className='sidenav_icon_element'><img src={discount} alt ='discount'/></li>
                    <li className='sidenav_icon_element'><img src={user} alt ='user'/></li>
                </ul>
                <div className='settings'>
                    <img src={settings} alt='settings'/>
                   
                </div>
</div>
            </div>
        </div>
    )
}

export default Sidenav