import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import validate from '../Form/validateInfo';
import useForm from '../Form/useForm';

const FormSignup = ({ submitForm }) => {

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
					<div
						className="flex pt-10">
						<div
							data-aos="fade-up"

							data-aos-duration="3000"
							className="h-24 border-2 border-black bg-white flex flex-col justify-center ">

							{/*Passenger functionality */}
							<Link to='/RegPassenger'>
								<span className='card' style={{ 'display': 'block' }}>
									<div className="mx-2 my-2 pt-2 flex flex-col items-center">
										<svg
											data-aos="fade-up"

											data-aos-duration="2000"
											width="30"
											height="28"
											viewBox="0 0 40 48"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M12.3045 41.8477H27.07V46.7695H12.3045C5.51243 46.7695 0 41.2571 0 34.465V12.3168H4.92181V34.465C4.92181 38.5501 8.21943 41.8477 12.3045 41.8477ZM15.799 8.404C17.7185 6.48449 17.7185 3.35914 15.799 1.43963C13.8795 -0.479877 10.7542 -0.479877 8.83466 1.43963C6.91515 3.35914 6.91515 6.48449 8.83466 8.404C10.7542 10.3481 13.8549 10.3481 15.799 8.404ZM18.4568 17.2387C18.4568 14.5317 16.242 12.3168 13.535 12.3168H12.3045C9.59754 12.3168 7.38272 14.5317 7.38272 17.2387V32.0041C7.38272 36.0892 10.6803 39.3868 14.7654 39.3868H27.2422L35.8554 48L39.3745 44.4809L26.8977 32.0041H18.4568V17.2387Z"
												fill="black"
											/>
										</svg>
										<h3
											data-aos="fade-up"

											data-aos-duration="1000"
											className="font-sans font-semibold text-center">
											Sign up as <br />Passenger
										</h3>
									</div>
								</span>
							</Link>
						</div>
						<div
							data-aos="fade-up"

							data-aos-duration="3000"
							className="h-24 ml-5 border-2 border-black bg-white flex flex-col justify-center">

							{/*Driver Functionality */}
							<Link to='/RegDriver'>
								<span className='card' style={{ 'display': 'block' }}>
									<div

										className="mx-2 my-2 pt-2 flex flex-col items-center">
										<svg
											data-aos="fade-up"

											data-aos-duration="2000"
											width="42"
											height="28"
											viewBox="0 0 42 48"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M8.96169 4.66602C8.96169 4.0821 14.9822 0 20.96 0C26.9379 0 32.9584 4.08343 32.9584 4.66602C32.9584 6.74573 32.7371 7.97756 32.5504 8.64813C32.4264 9.08807 32.0145 9.33203 31.5572 9.33203H10.3628C9.90556 9.33203 9.49362 9.08807 9.36964 8.64813C9.183 7.97756 8.96169 6.74573 8.96169 4.66602ZM18.9603 3.99944C18.6067 3.99944 18.2676 4.1399 18.0176 4.38991C17.7676 4.63993 17.6272 4.97902 17.6272 5.33259C17.6272 5.68616 17.7676 6.02525 18.0176 6.27527C18.2676 6.52528 18.6067 6.66574 18.9603 6.66574H22.9597C23.3133 6.66574 23.6524 6.52528 23.9024 6.27527C24.1524 6.02525 24.2929 5.68616 24.2929 5.33259C24.2929 4.97902 24.1524 4.63993 23.9024 4.38991C23.6524 4.1399 23.3133 3.99944 22.9597 3.99944H18.9603ZM10.3455 17.6215C5.90612 16.2484 7.02596 13.7954 8.71906 11.9983H33.5716C34.9261 13.7288 35.6526 16.0631 31.5585 17.4602C31.7259 18.9454 31.5792 20.4491 31.128 21.874C30.6769 23.2988 29.9313 24.6129 28.9396 25.731C27.9479 26.8492 26.7323 27.7464 25.3716 28.3646C24.0108 28.9827 22.5354 29.308 21.0409 29.3192C19.5463 29.3305 18.0661 29.0275 16.6963 28.43C15.3264 27.8324 14.0973 26.9536 13.0889 25.8506C12.0805 24.7475 11.3151 23.4448 10.8425 22.0269C10.3699 20.6091 10.2006 19.1077 10.3455 17.6202V17.6215ZM20.5974 18.6641C24.1196 18.6641 26.8499 18.4774 28.9429 18.1521C29.0117 19.2391 28.8578 20.3286 28.4907 21.354C28.1235 22.3793 27.5508 23.3189 26.8077 24.1151C26.0646 24.9113 25.1667 25.5474 24.1691 25.9844C23.1715 26.4213 22.0952 26.6499 21.0061 26.6562C19.917 26.6625 18.8381 26.4463 17.8355 26.0208C16.8329 25.5954 15.9278 24.9697 15.1755 24.1821C14.4233 23.3945 13.8398 22.4616 13.4609 21.4405C13.082 20.4195 12.9155 19.3318 12.9718 18.2441C14.9222 18.5134 17.4218 18.6641 20.5974 18.6641V18.6641ZM32.1811 38.128C30.9752 36.2467 29.3155 34.6989 27.3546 33.6273C25.3936 32.5556 23.1947 31.9945 20.96 31.9955C18.7245 31.9941 16.5245 32.5553 14.5628 33.6275C12.6011 34.6997 10.9408 36.2483 9.73492 38.1307C9.28735 37.4414 8.59999 36.9426 7.80585 36.7309L5.23021 36.0416C4.37651 35.8128 3.46686 35.9324 2.70134 36.3741C1.93581 36.8159 1.37711 37.5437 1.14811 38.3973L0.11359 42.2608C0.000288526 42.6836 -0.0286201 43.1246 0.0285151 43.5585C0.0856504 43.9925 0.227711 44.411 0.446583 44.79C0.665456 45.1691 0.956853 45.5013 1.30414 45.7678C1.65142 46.0342 2.04778 46.2296 2.4706 46.3429L5.0449 47.0335C5.47792 47.1501 5.93006 47.1779 6.37409 47.1151C6.81812 47.0523 7.24484 46.9003 7.62855 46.6682C7.62961 47.0217 7.77108 47.3604 8.02184 47.6097C8.27261 47.8589 8.61212 47.9984 8.96569 47.9973C9.31927 47.9963 9.65794 47.8548 9.9072 47.604C10.1565 47.3533 10.2959 47.0137 10.2948 46.6602V45.327C10.2948 44.8191 10.3308 44.3192 10.3988 43.8299L17.3365 45.6896C17.6586 46.3789 18.1705 46.9621 18.8124 47.3706C19.4542 47.7792 20.1992 47.9962 20.96 47.9962C21.7208 47.9962 22.4659 47.7792 23.1077 47.3706C23.7495 46.9621 24.2615 46.3789 24.5835 45.6896L31.5212 43.8299C31.5892 44.3192 31.6252 44.8191 31.6252 45.327V46.6602C31.6234 47.0137 31.7622 47.3535 32.011 47.6048C32.2597 47.8561 32.5981 47.9982 32.9517 48C33.3053 48.0018 33.6451 47.863 33.8963 47.6142C34.1476 47.3655 34.2897 47.0271 34.2915 46.6735C35.0381 47.1214 35.9606 47.2774 36.8685 47.0335L39.4441 46.3442C39.8669 46.231 40.2633 46.0355 40.6106 45.7691C40.9579 45.5027 41.2493 45.1704 41.4681 44.7914C41.687 44.4123 41.8291 43.9938 41.8862 43.5599C41.9433 43.1259 41.9144 42.6849 41.8011 42.2621L40.7653 38.3987C40.5363 37.545 39.9776 36.8172 39.212 36.3755C38.4465 35.9337 37.5369 35.8141 36.6832 36.043L34.1075 36.7322C33.3152 36.9432 32.629 37.4399 32.1811 38.1267V38.128ZM11.0987 41.2569C11.8189 39.5152 12.9873 37.9953 14.4851 36.8514C15.983 35.7076 17.757 34.9806 19.6269 34.7445V40.2224C19.0294 40.4343 18.4907 40.7849 18.0551 41.2454C17.6194 41.7059 17.2991 42.2631 17.1206 42.8714L11.0987 41.2583V41.2569ZM30.8213 41.2569C30.1011 39.5153 28.9326 37.9954 27.4348 36.8516C25.9369 35.7077 24.163 34.9808 22.2932 34.7445V40.2224C23.4983 40.649 24.4395 41.6355 24.7995 42.8714L30.8213 41.2583V41.2569ZM20.96 45.327C21.3136 45.327 21.6527 45.1866 21.9027 44.9366C22.1527 44.6865 22.2932 44.3474 22.2932 43.9939C22.2932 43.6403 22.1527 43.3012 21.9027 43.0512C21.6527 42.8012 21.3136 42.6607 20.96 42.6607C20.6065 42.6607 20.2674 42.8012 20.0173 43.0512C19.7673 43.3012 19.6269 43.6403 19.6269 43.9939C19.6269 44.3474 19.7673 44.6865 20.0173 44.9366C20.2674 45.1866 20.6065 45.327 20.96 45.327Z"
												fill="black"
											/>
										</svg>
										<h3
											data-aos="fade-up"

											data-aos-duration="1000"
											className="font-sans font-semibold text-center">
											Sign up as <br />Driver
										</h3>
									</div>
								</span>
							</Link>

						</div>

						{/*Business Functionality */}
						<div
							data-aos="fade-up"

							data-aos-duration="3000"
							className="h-24 ml-5 border-2 border-black bg-white flex flex-col justify-center">
							<Link to={'/RegBusiness'}>
								<span className='card' style={{ 'display': 'block' }}>
									<div

										className="mx-2 my-2 pt-2 flex flex-col items-center">
										<svg
											data-aos="fade-up"

											data-aos-duration="2000"
											width="38"
											height="40"
											viewBox="0 0 38 40"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M24 13.3333V0H0V40H10.6667V32H13.3333V40H37.3333V13.3333H24ZM6.66667 34.6667H4V32H6.66667V34.6667ZM6.66667 28H4V25.3333H6.66667V28ZM6.66667 21.3333H4V18.6667H6.66667V21.3333ZM6.66667 14.6667H4V12H6.66667V14.6667ZM6.66667 8H4V5.33333H6.66667V8ZM17.3333 5.33333H20V8H17.3333V5.33333ZM13.3333 28H10.6667V25.3333H13.3333V28ZM13.3333 21.3333H10.6667V18.6667H13.3333V21.3333ZM13.3333 14.6667H10.6667V12H13.3333V14.6667ZM13.3333 8H10.6667V5.33333H13.3333V8ZM20 34.6667H17.3333V32H20V34.6667ZM20 28H17.3333V25.3333H20V28ZM20 21.3333H17.3333V18.6667H20V21.3333ZM20 14.6667H17.3333V12H20V14.6667ZM34.6667 37.3333H24V34.6667H26.6667V32H24V28H26.6667V25.3333H24V21.3333H26.6667V18.6667H24V16H34.6667V37.3333Z"
												fill="black"
											/>
											<path
												d="M29.3334 32H32V34.6667H29.3334V32ZM29.3334 25.3333H32V28H29.3334V25.3333ZM29.3334 18.6667H32V21.3333H29.3334V18.6667Z"
												fill="black"
											/>
										</svg>

										<h3
											data-aos="fade-up"

											data-aos-duration="1000"
											className="font-sans font-semibold text-center">
											Sign up as <br />Business
										</h3>
									</div>
								</span>

							</Link>

						</div>
					</div>

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
									required
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
					src="https://images.unsplash.com/photo-1446694292248-2c2a7e575b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
					alt=""
				/>

				<div className="absolute text-white top-60 ml-10">
					<h1
						data-aos="fade-up"

						data-aos-duration="1000"
						className='font-sans font-bold text-5xl'>Travel in</h1>
					<h1

						data-aos="fade-up"

						data-aos-duration="2000" className='font-sans font-bold text-8xl'>Seconds</h1>
				</div>
			</div>
		</div>
	);
}

export default FormSignup;