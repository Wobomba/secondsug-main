import React from 'react';
import Footer from '../../components/Footer'

function About() {
    return (
        <div class='sm:bg-yellow-300 md:bg-green-300 lg:bg-pink-300 xl:bg-blue-300 2xl:bg-red-300'>
            <div class='max-w-md mx-auto'>
                <div>
                    <section>
                        <img
                            className="inset-0 object-cover w-full h-[500px]"
                            src="./about_img.jpeg"
                            alt=""
                        />

                        {/* Page name */}
                        <div className='absolute top-0 mt-32 items-center justify-between text-white flex sm:flex'>
                            <div className="items-center ml-20">
                                <h1
                                    data-aos="fade-up"

                                    data-aos-duration="1000"

                                    className="font-sans font-bold text-7xl">About</h1>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Content_info */}

                <div className="bg-white h-[100vh] flex-1 flex items-center">
                    <div
                        data-aos="fade-left"

                        data-aos-duration="1000"
                        className="flex-[0.5px] ml-10">
                        <img

                            className="insert-0 w-full h-[550px] "
                            src="./appui.jpeg"
                            alt=""
                        />
                    </div>
                    <div className="flex-[0.5px] text-black pl-10">
                        <p
                            data-aos="fade-up"

                            data-aos-duration="1000"
                            className="font-sans text-xl pt-4">
                            Seconds is a technology provider that operates and designs a mobile platform matching drivers to passengers on the go.
                        </p>
                    </div>
                </div>

                <div className="bg-white h-[50vh] flex-1 flex items-center">
                    <div className="flex-[0.5px] text-black pl-10">
                        <p
                            data-aos="fade-up"

                            data-aos-duration="1000"
                            className="font-sans text-xl pt-4">
                            Seconds is demonetizing mobility to build technology solutions that transform people in Africa, customer solutions that everyone aspires to use and that enable people and businesses to grow.{' '}
                        </p>
                    </div>
                    <div
                        data-aos="fade-left"

                        data-aos-duration="1000"
                        className="flex-[0.5px] ml-10">
                        <img

                            className="insert-0 w-full h-[550px] "
                            src="./build_bridge.jpeg"
                            alt=""
                        />
                    </div>
                </div>

                {/* About information */}
                <div>
                    <section className='section text-center'>
                        <div className='container'>
                            <div className="bg-white h-[100vh] flex-1 flex items-center">
                                <div className='col-md 4 text-left mx-auto'>
                                    <h2 className='font-bold  text-center text-4xl'>Vision</h2>
                                    <p className='text-xl text-left'>
                                        Mobility that is open and enabled by people.
                                    </p>
                                </div>
                                <div className='col-md 4 text-center mx-auto'>
                                    <h6 className='font-bold mx-auto text-4xl'>Mission</h6>
                                    <p className='text-xl text-center'>
                                        To connect, empower, and impact lives.
                                    </p>
                                </div>
                                <div className='col-md 4  text-right mx-auto'>
                                    <h6 className='font-bold text-center text-4xl'>Statement</h6>
                                    <p className='text-xl text-right'>
                                        A world where anyone anywhere can transform their lives
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <Footer />

            </div>

        </div>




    );
}
export default About;