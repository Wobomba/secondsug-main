import React, { useState } from 'react';
import Footer from '../../components/Footer'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


function Ride() {

    const [selectedDate, setselectedDate] = useState(null)

    return (
        <div class='sm:bg-yellow-300 md:bg-green-300 lg:bg-pink-300 xl:bg-blue-300 2xl:bg-red-300'>
            <div>
                <div class='flex-container'>
                    {/*Request a car */}
                    <div className='flex-item-left'>
                        <h1 data-aos="fade-up"
                            data-aos-duration="1000"
                            class="font-sans font-semibold text-5xl">Get a car</h1>
                    </div>

                    {/*Address Form */}
                    <div className='flex-item-right'>
                        <label className="inline-block 
                        mb-1 text-xl font-medium pb-1">Address</label>

                        <input placeholder="From" required type="text"
                            className="flex-grow w-full h-12 px-4 text-black 
                        font-medium  mb-2 transition duration-200 bg-white 
                        border border-gray-300 rounded shadow-sm 
                        appearance-none focus:border-deep-purple-accent-400 
                        focus:outline-none focus:shadow-outline" />

                        <input placeholder="To" required type="text"
                            className="flex-grow w-full h-12 px-4 text-black 
                         font-medium  mb-2 transition duration-200 bg-white 
                         border border-gray-300 rounded shadow-sm appearance-none 
                         focus:border-deep-purple-accent-400 focus:outline-none
                          focus:shadow-outline" />

                    </div>
                </div>

                <div className='flex-container'>
                      {/* Trip date */}
                      <div className='flex-item-right' data-aos = 'fade-up' data-aos-duration = '1000'>
                        <DatePicker selected={selectedDate}
                            onChange={date => setselectedDate(date)}
                            dateFormat='dd/MM/yyyy'
                            minDate={new Date()}
                            showYearDropdown
                            scrollableMonthYearDropdown
                            placeholderText='Date' 
                            className='board'/>
                    </div>

                    {/*Trip Text */}

                    <div className='flex-item-left'>
                        <h1 data-aos="fade-up"
                            data-aos-duration="1000"
                            class="font-sans font-semibold text-5xl">Calendar</h1>
                    </div>                    

                </div>
            </div>
        </div>
    );
}
export default Ride;