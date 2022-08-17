import React from 'react'
import './Orders.css'
import {AiOutlineArrowUp} from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
import { OrdersTable, OrdersCardData } from '../orders/OrdersTable'

const Orders = () => {
    return (
        <div className='orders'>
            <div className='orders_data'>
                <div className='orders_cards'>
                    <div className='orders_card_data'>
                        {OrdersCardData.map((item, index) => {
                            return (<div className='data_element'>
                                <div className='name' key={index}>{item.name}</div>
                                <div className='amt' key={index}>{item.amt}</div>
                                <div className='percentage' key={index}><AiOutlineArrowUp /> <br />{item.percentage}</div>
                            </div>)
                        })}
                    </div>
                    <div className='order_list'>
                        <section className='orders_table'>
                            <div className='orders_title'>Latest Orders</div>
                            <div className='table_element'>
                                <table className='order_table'>
                                    <thead>
                                        <tr className='table_row'>
                                            <th>No</th>
                                            <th>item</th>
                                            <th>quantity</th>
                                            <th>Revenue</th>
                                            <th>Net Profit</th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        {OrdersTable.map((item, index) => {
                                            return (
                                                <tr className='table_data'>
                                                    <td className='order_table_element'>{item.no}</td>
                                                    <td className='order_table_element'>{item.item}</td>
                                                    <td className='order_table_element'>{item.quantity}</td>
                                                    <td className='order_table_element'>{item.revenue}</td>
                                                    <td className='order_table_element'>{item.netprofit}</td>


                                                </tr>
                                            )
                                        })}

                                    </tbody>

                                </table>

                            </div>
                        </section>
                        <section className='list_table'>
                            <div className='items_table'>
                                <div className='item_sold'>
                                    <div className='item_sold_title'>
                                        Item Sold
                                        <button className='best_sellers'>Best Sellers <BsChevronDown color='#5541D7' size={16}/> </button>
                                    </div>
                                    
                                    <table className='item_sold_table'>
                                        <tbody>

                                            {OrdersTable.map((item) => {
                                                return (
                                                    <tr className='table_data'>
                                                        <div className='item_image'></div>
                                                        <td className='item_item'>{item.item}</td>
                                                        <td className='item_quantity'>{item.quantity}</td>


                                                    </tr>
                                                )
                                            })}

                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders