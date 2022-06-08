import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <footer class="p-4 bg-black  shadow md:px-6 md:py-8 dark:bg-gray-800">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com" class="flex items-center mb-4 sm:mb-0">
                        <img src="./logo.png" class="mr-3 h-8" alt="Seconds Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Seconds</span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to="/about" class="mr-4 hover:underline md:mr-6">About</Link>
                        </li>
                        <li>
                            <Link to="/privacy" class="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/license" class="mr-4 hover:underline md:mr-6 ">Licensing</Link>
                        </li>
                        <li>
                            <Link to="/contact" class="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" class="hover:underline">Seconds™</a>. All Rights Reserved.
                </span>
            </footer>
        </div>
    )
}

export default Footer