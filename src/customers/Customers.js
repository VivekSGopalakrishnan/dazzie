import React from 'react'
import './Customers.css'
import search from '../assets/icons/SEARCH.svg'
import filter from '../assets/icons/filter.svg'
import threedots from '../assets/icons/threedots.svg'
import { CustomerTable } from '../customers/CustomerContent'

const Customers = () => {
    return (
        <div className='orders'>
            <div className='order_list'>
                <section className='orders_table'>
                    <div className='orders_title'>Customers</div>
                    <div className='customer_search'>
                    <div className='search-bar'><button type="submit" class="searchButton">
                    <img src={search} alt='search'></img></button>
                    <input type="text" className='search' placeholder="Search Here ..."></input> 
                    <button className='customer_filters'><img src={filter} alt='filter'></img></button>
                    <button className='customer_filters'><img src={threedots} alt='threedots'></img></button>
                    </div>
                    </div>
                    <div className='table_element'>
                        <table className='customer_table'>
                            <thead>
                                <tr className='table_row'>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Join Date</th>
                                    <th>Total Visit</th>
                                    <th>Purchased Items</th>
                                    <th>Total Spend</th>
                                </tr>
                            </thead>

                            <tbody>

                                {CustomerTable.map((item, index) => {
                                    return (
                                        <tr className='table_data'>
                                            <td className='customer_table_element'>{item.id}</td>
                                            <td className='customer_table_element'>{item.namme}</td>
                                            <td className='customer_table_element'>{item.joindata}</td>
                                            <td className='customer_table_element'>{item.totalvisit}</td>
                                            <td className='customer_table_element'>{item.purchaseditems}<br/><button className='seedetails'>See Details</button></td>
                                            <td className='customer_table_element'>{item.totalspend}</td>


                                        </tr>
                                    )
                                })}

                            </tbody>

                        </table>

                    </div>
                </section>
            </div>
        </div>

    )
}

export default Customers