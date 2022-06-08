import React from 'react';
import Footer from '../../components/Footer'

function Partner() {
	return (
		<div>
			<div>
				<section>
					<img
						className="inset-0 object-cover w-full h-[500px]"
						src="./about_img.jpeg"
						alt="" />

					<div className="absolute top-0 mt-32 items-center justify-between text-white flex sm:flex">
						<div className="items-center ml-20 ">
							<h3
								data-aos="fade-up"

								data-aos-duration="1000"
								className="font-sans font-bold text-6xl mt-5">Create your company </h3>
							<h3
								data-aos="fade-up"

								data-aos-duration="2000"
								className="font-sans font-semibold text-4xl mt-5">profile today.</h3>
						</div>

						<div className="w-full max-w-xl xl:px-8 xl:w-5/12 opacity-90 ">
							<div className="bg-black rounded shadow-x p-7 sm:p-10">
								<form
									data-aos="fade-up"

									data-aos-duration="1000"
								>

									<div className="mb-1 sm:mb-2">
										<label className="inline-block mb-1 text-xl font-medium pb-2">Enter email to get started</label>
										<input
											placeholder="Email"
											required
											type="text"
											className="flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
										/>
									</div>

									<div className="mt-4 mb-2 sm:mb-4 pt-5 ">
										<button
											type="button"
											class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  w-full rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
										>
											Confirm
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>

				</section>
			</div>
			<Footer />

		</div>



	);
}
export default Partner;