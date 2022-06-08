import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from '@material-ui/pickers'

function Ride() {

    const [selectedDate, setSelectedDate] = React.useState(
        new Date("2020-09-11T12:00:00")
    )

    const handleDateChange = (date) => {
        setSelectedDate(date)
    }

    return (
        <div>
            <div className='flex-container'>
                {/*Request a car */}
                <div>
                    {/*Ride Text */}
                    <div className='flex-item-left'>
                        <h1 data-aos="fade-up" 
                        data-aos-duration="1000"
                        class="font-sans font-semibold text-5xl">Request a car</h1>
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


                {/*Trip Date */}
                <div className = 'flex-item-right'>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify='space-around'>
                            <KeyboardDatePicker
                                disableToolbar
                                variant='inline'
                                format='mm/dd/yyyy'
                                margin='normal'
                                id='date-picker'
                                label='Date'
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date'
                                }} />

                            <KeyboardTimePicker
                            margin = 'normal'
                            id = 'time-picker'
                            label = 'Time'
                            vale = {selectedDate}
                            onChange = {handleDateChange}
                            KeyboardButtonProps = {{
                                'aria-label':'change date'
                            }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                </div>

                {/*Calendar Text */}
                <div>
                     <div className='flex-item-left'>
                        <h1 data-aos="fade-up" data-aos-duration="1000" class="font-sans font-semibold text-5xl">Date</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Ride;


