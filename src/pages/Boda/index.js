import React, {useState} from 'react'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function Boda() {
    const [selectedDate, setselectedDate] = useState(null)
    return (
        <div className='relative'>
            
            <div>
                <div className='flex-container'>
                    {/* Request a car*/}
                    <div className='flex-item-left'>
                        <h1 data-aos="fade-up" data-aos-duration="1000" 
                        class="font-sans font-semibold text-5xl">Get a <span className='secondtext'>Boda</span></h1>
                    </div>
                    
                    {/*Address form */}
                    <div className='flex-item-right'>
                        <form data-aos="fade-up" data-aos-duration="1000" className='form-design' >

                            <div class="mb-1 sm:mb-2">
                                <label className="inline-block mb-1 text-xl font-medium pb-1">Address</label>
                                <input
                                    placeholder="From"
                                    required
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                />
                                <input
                                    placeholder="To"
                                    required
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <h1 className="pt-4 text-xl">Date</h1>
                            <div className = 'cards'>
                                {/*Trip date */}
                                <DatePicker selected = {selectedDate}
                                onChange = {date => setselectedDate (date)}
                                dateFormat = 'dd/MM/yyyy'
                                minDate={new Date()}
                                showYearDropdown
                                scrollableMonthYearDropdown
                                placeholderText='Date'
                                className='board'/>
                            </div>
                            
                            <button type="button" class="text-white bg-blue-700 
						hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
						font-medium  w-full rounded-lg text-sm px-5 py-2.5 text-center 
						mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-8">Confirm
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Boda;