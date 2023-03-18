import React, { useState } from 'react'
import DatePicker from "react-datepicker";

const SearchHotelsForm = () => {
    const [options, setOptions] = useState({ adults: 1, children: 0, rooms: 1 });
    const [dateRange, setDateRange] = useState([null, null]);
    const [checkIn, checkOut] = dateRange;

    const increment = (e) => {
        let name = e.target.name;
        setOptions(prevVal => {
            return { ...prevVal, [name]: prevVal[name] + 1 }
        })
    }


    const submitForm = e => {
        e.preventDefault();
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
                        onInput={e => (e.target.value = !!e.target.value && Math.abs(e.target.value) >= 0 ? Math.abs(e.target.value) : null)}
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
                </div>
                <button type="submit" className="btn searchButton">Search </button>
            </form>
        </div>
    )
}

export default SearchHotelsForm