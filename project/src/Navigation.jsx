import React from 'react';
import Week from './Week'

const Navigation = () => {
    return (
        <>

            <ul className="table-header ">
                <li className=' item-header-time'>
                    <span className='item-header__time'>gtp</span>
                </li>
                <li className='item-header'>
                    <Week />
                    <span className=' month-day '>21</span>
                </li>
                <li className='item-header'>
                    <Week />
                    <span className=' month-day '>22</span>
                </li>
                <li className='item-header'>
                    <Week />
                    <span className=' month-day active '>23</span>
                </li>
                <li className='item-header'>
                    <Week />
                    <span className=' month-day '>24</span>
                </li>
                <li className='item-header'>
                    <Week />
                    <span className=' month-day '>25</span>
                </li>
                <li className='item-header'>
                    <Week />
                    <span className=' month-day '>26</span>
                </li>
                <li className='item-header'>
                    <Week />
                    <span className=' month-day '>27</span>
                </li>
            </ul>

        </>
    )
}
export default Navigation