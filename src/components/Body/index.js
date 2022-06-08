import React from 'react'

function Body() {
  return (
    <section class="w-full bg-black">
      <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
        <div class="flex w-full mx-auto text-left">
          <div class="relative inline-flex items-center mx-auto align-middle">
            <div class="text-center">
              <h1 class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-white md:text-5xl lg:text-6xl lg:max-w-7xl">
                Business Looking to Expand?
              </h1>
              <h1 class="max-w-5xl mt-8 text-2xl font-bold leading-none tracking-tighter text-white md:text-5xl lg:text-6xl lg:max-w-7xl">
                We got you covered.
              </h1>

              <div class="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                <div class=" rounded-lg mt-8 sm:mt-0">
                  <button class="items-center block px-5 py-4 text-base font-bold  text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Find out more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Body