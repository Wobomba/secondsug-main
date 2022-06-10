import React from 'react';
import Footer from '../../components/Footer'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function About() {
    return (
        <div class="relative">
            <div class='flex-container1'>
                <div class='flex-item-right1'>
                    {/*About background */}
                    <img className='inset-0 object-cover w-[1366px] h-[450px]' src='./city.jpg' alt='' />
                    <div className='absolute top-0 mt-20 items-center justify-between text-white'>
                        <div className='items-center ml-20'>
                            <h1 data-aos='fade-up' data-aos-duration='1000' className='font-sans font-bold text-7xl'>About us</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex-container1'>
                <div className='flex-item-left1'>
                    <p className='about_text'>Seconds is a technology provider that operates and designs a mobile platform matching drivers to passengers on the go.</p>
                    <p className='content_text'>Seconds is demonetizing mobility to build technology solutions that transform people in Africa, customer solutions that everyone aspires to use and that enables people and businesses to grow.</p>
                    {/*Mission */}
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
                            <Typography>Read our mission</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                To connect, empower, and impact lives.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/*Vision */}
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
                            <Typography >Read our vision</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Mobility that is open and enabled by people.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/*Statement */}
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
                            <Typography >Read our statement</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                A world where anyone anywherecan transform their lives.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default About;