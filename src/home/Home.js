import React from 'react'
import search from '../assets/icons/SEARCH.svg'
import './Home.css'
import { HomeContent_Food, HomeContent_Drinks, HomeContent_Snaks, HomeContent_Packages } from './Homecontent'
const Home = () => {
    return (
        <div className='container-fluid'>
            <div className='home'>
                <div className='search-bar'><button type="submit" className="searchButton">
                    <img src={search} alt='search'></img></button>
                    <input type="text" className='search' placeholder="Search Here ..."></input></div>
                <div className='homenav'>
                    <ul className='homenav_item'>
                        <li className='homenav_element'><a href='/'>All</a></li>
                        <li className='homenav_element'><a href='#food'>Food</a></li>
                        <li className='homenav_element'><a href='#drinks'>Drinks</a></li>
                        <li className='homenav_element'><a href='#snacks'>Snacks</a></li>
                        <li className='homenav_element'><a href='#packages'>Packages</a></li>
                    </ul>
                </div>
                <div className='all' id='all'>
                    <div className='food' id='food'>
                        <div className='item-title'>Food</div>
                        <div className='all-item'>
                            {HomeContent_Food.map((item, index) => {
                                return (
                                    <div className='card'>
                                        <div className='card-element'>
                                            <div className='img'></div>
                                            <div key={index} className="name">{item.name}</div>
                                            <div key={index} className="amount">{item.amount}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className='drinks' id='drinks'>
                        <div className='item-title'>Drinks</div>
                        <div className='all-item'>
                            {HomeContent_Drinks.map((item, index) => {
                                return (
                                    <div className='card'>
                                        <div className='card-element'>
                                            <div className='img'></div>
                                            <div key={index} className="name">{item.name}</div>
                                            <div key={index} className="amount">{item.amount}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className='snacks' id='snacks'>

                        <div className='item-title'>Snacks</div>
                        <div className='all-item'>
                            {HomeContent_Snaks.map((item, index) => {
                                return (
                                    <div className='card'>
                                        <div className='card-element'>
                                            <div className='img'></div>
                                            <div key={index} className="name">{item.name}</div>
                                            <div key={index} className="amount">{item.amount}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className='packages' id='packages'>

                        <div className='item-title'>Packages</div>
                        <div className='all-item'>
                            {HomeContent_Packages.map((item, index) => {
                                return (
                                    <div className='card'>
                                        <div className='card-element'>
                                            <div className='img'></div>
                                            <div key={index} className="name">{item.name}</div>
                                            <div key={index} className="amount">{item.amount}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Home