import React from 'react';
import { Link } from 'react-router-dom';
function SignIn() {
	return (
		<div className="flex-1 flex h-[100vh]">
			<div className="flex-[0.5px] bg-white">
				<div className="flex flex-col justify-center ml-20">
					<h1
						data-aos="fade-up"

						data-aos-duration="1000"
						className="text-black text-4xl pt-8 font-sans font-bold ">Sign In</h1>
					<div
						data-aos="fade-up"

						data-aos-duration="3000"
						className="w-[500px] pt-10">
						<div className="mb-1 sm:mb-2">
							<label className="inline-block mb-1 text-x font-medium pb-2">First Name</label>
							<input
								placeholder="First Name"
								required
								type="text"
								className="flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
							/>
						</div>
						<div className="mb-1 sm:mb-2">
							<label className="inline-block mb-1 text-x font-medium pb-2">Last Name</label>
							<input
								placeholder="Last Name"
								required
								type="text"
								className="flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
							/>
						</div>
						<div className="mb-1 sm:mb-2">
							<label className="inline-block mb-1 text-x font-medium pb-2">Email Address</label>
							<input
								placeholder="Email Address"
								required
								type="text"
								className="flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
							/>
						</div>
						<div className="mt-4 mb-2 sm:mb-4 pt-5 ">
							<Link to='/'>
								<span className='card' style={{ 'display': 'block' }}>
									<button
										type="button"
										class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  w-full rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
									>
										Continue
									</button>
								</span>
							</Link>
						</div>
						<div className="flex items-center">
							<Link to='/Signup'>
								<span className='card' style={{ 'display': 'block' }}>
									<h1 className='font-sans font-semibold text-sm text-black'>Don't have an account? Sign up</h1>
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className=" relative flex-[0.5px] bg-black ">

				<img
					className=" inset-0 opacity-60 object-cover h-[100vh]"
					src='./first.jpeg'
					alt=""
				/>
			</div>
		</div>
	);
}


export default SignIn;