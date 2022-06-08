import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import validate from '../Form/validateInfo';
import useForm from '../Form/useForm';

const FormDrive = ({ submitForm }) => {

	const { handleChange, handleSubmit, values, errors } = useForm(
		submitForm,
		validate
	);

	return (
		<div className="flex-1 flex h-[100vh]">
			<div className="flex-[0.5px] bg-white">
				<div className="flex flex-col justify-center ml-20">
					<h1
						data-aos="fade-up"

						data-aos-duration="1000"
						className="text-black text-4xl pt-8 font-sans font-bold ">Sign Up</h1>

					{/*Form*/}
					<div
						data-aos="fade-up"

						data-aos-duration="3000"
						className="w-[500px] pt-10">
						<form onSubmit={handleSubmit} className='form' noValidate>

							{/*Username div */}

							<div className="mb-1 sm:mb-2">
								<input
									placeholder="Username"
									type="text"
									className="flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
									value={values.username}
									onChange={handleChange}
								/>
								{errors.username && <p>{errors.username}</p>}
							</div>

							{/*Email div */}
							<div className="mb-1 sm:mb-2">
								<input
									placeholder="Email"
									type="text"
									className="flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
									value={values.email}
									onChange={handleChange}
								/>
								{errors.email && <p>{errors.email}</p>}
							</div>

							{/*Password div */}
							<div className="mb-1 sm:mb-2">
								<input
									placeholder="Password"
									type="password"
									value={values.password}
									onChange={handleChange}
									className="flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
								/>
								{errors.password && <p>{errors.password}</p>}
							</div>

							{/*Confirm Password */}
							<div className="mb-1 sm:mb-2">
								<input
									placeholder="Confirm Password"
									required
									type="password"
									value={values.password2}
									onChange={handleChange}
									className="flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
								/>
								{errors.password2 && <p>{errors.password2}</p>}
							</div>


							{/*Button */}
							<div className="mt-4 mb-2 sm:mb-4 pt-5 ">
								<button
									type="submit"
									class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  w-full rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>
									Continue
								</button>
							</div>

							{/*Text*/}
							<div className="flex items-center">
								<Link to='/SignIn'>
									<span className='card' style={{ 'display': 'block' }}>
										<h1 className='font-sans font-semibold text-sm text-black'>Already have an account? Sign In</h1>
									</span>
								</Link>
							</div>
						</form>

					</div>
				</div>
			</div>
			<div className=" relative flex-[0.5px] bg-black ">

				<img
					className=" inset-0 opacity-60 object-cover h-[100vh]"
					src='./less_time.jpeg'
					alt=""
				/>
			</div>
		</div>
	);
}

export default FormDrive;