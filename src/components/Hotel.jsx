import React from 'react'

const Hotel = () => {
  return (
    <>
      <section className="main-heading">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">

            <div className="lg:py-16">
              <article className="space-y-4 text-gray-600">
                <div className="max-w-3xl">
                  <div className="flex justify-end">
                  <img className="h-24" src="/assets/images/hotelicon.png" alt="" />
                  <img src="/assets/images/heading.png" alt="" />
                  </div>
                </div>
                <p className="sub-paragraph">
                  Introducing capsule hotels in places of
                  <p> extreme need such as examination</p>
                  <p> centres and hospitals to provide</p>
                  <p>comfortable and convenient</p>
                  <p> accommodation at pocket friendly</p>
                  <p> prices .</p>
                </p>
                <button className="secdonary-button ">Read more</button>
                
              
              </article>
            </div>
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt="Party"
                src="/assets/images/animationhotel.gif"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="text-center">
        </div>
      </section>
    </>
  )
}

export default Hotel
