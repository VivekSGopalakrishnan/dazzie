import React from 'react'
import './Navbar.css'
import notification from '../assets/icons/Notification Bell.svg'
const Navbar = () => {
    return (
        <div className='container-fluid'>
            <div className='navbar'>
                <div className='title'>
                    <div className='pic'></div>
                    <div className='title_name'>Dazzie</div>
                </div>
                <div className='user'>
                    <div className='notification'><img src={notification} alt='notification'></img></div>
                    <div className='pic_1'></div>
                    <div className='user_name'>Sumanto
                        <div className='position'>Cashier</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar