import React, { useState } from 'react'
import DatePicker from "react-datepicker";

const SearchHotelsForm = () => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [checkIn, checkOut] = dateRange;
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({ adults: 1, children: 0, rooms: 1 });

    const increment = (e) => {
        let name = e.target.name;
        setOptions(prevVal => {
            return { ...prevVal, [name]: prevVal[name] + 1 }
        })
    }



    const decrement = (e) => {
        const { name } = e.target;
        setOptions((curVal) => {
            if (name === "adults" && curVal[name] === 1) {
                return { ...curVal, [name]: curVal[name] }
            } else if (name === "rooms" && curVal[name] === 1) {
                return { ...curVal, [name]: curVal[name] }
            } else if (name === "children" && curVal[name] === 0) {
                return { ...curVal, [name]: curVal[name] };
            } else {
                return { ...curVal, [name]: curVal[name] - 1 }
            }
        })
    }

    const openAndClose = () => {
        setOpenOptions(true)
        if (openOptions) {
            setOpenOptions(false)
        }
    }

    const submitForm = e => {
        e.preventDefault();
        /*
        dispatch the action (e.i.fetch data from the API)
        */
    }
    return (
        <div className='formContainer'>
            <form onSubmit={submitForm} className='searchForm'>
                <div>
                    <input
                        type="text"
                        className='searchSuggestions'
                        placeholder='Search Locations'
                    />
                </div>
                <div className='date'>
                    <DatePicker
                        className='datePicker'
                        selectsRange={true}
                        startDate={checkIn}
                        endDate={checkOut}
                        minDate={new Date()}
                        onChange={(update) => {
                            setDateRange(update);
                        }}
                        placeholderText='checkIn - checkOut Dates'
                        onChangeRaw={e => e.preventDefault()}
                    />
                </div>
                {
                    !openOptions ? (
                        <button type="button" className="openAndClose" onClick={openAndClose}>
                            {options.adults} Adults , {options.children} Children, {options.rooms} Rooms
                        </button>
                    ) : (

                        <div className='options'>
                            <div className='adultsNum category'>
                                <h1>
                                    Adults
                                </h1>
                                <div className='counter'>
                                    <button type='button' name="adults" onClick={(e) => increment(e)}>+</button>
                                    <h3>{options.adults}</h3>
                                    <button type='button' name='adults' onClick={decrement}>-</button>
                                </div>
                            </div>
                            <div className='childrenNum category'>
                                <h1>Children</h1>
                                <div className='counter'>
                                    <button type='button' name="children" onClick={increment}>+</button>
                                    <h3>{options.children}</h3>
                                    <button type='button' name='children' onClick={decrement}>-</button>
                                </div>
                            </div>
                            <div className='roomNum category'>
                                <h1>Rooms</h1>
                                <div className='counter'>
                                    <button type='button' name="rooms" onClick={increment}>+</button>
                                    <h3>{options.rooms}</h3>
                                    <button type='button' name='rooms' onClick={decrement}>-</button>
                                </div>
                            </div>
                            <button type='button' className='done' onClick={openAndClose}>Done</button>
                        </div>
                    )
                }
                <button type="submit" className="btn searchButton">Search </button>
            </form>
        </div>
    )
}

export default SearchHotelsForm
