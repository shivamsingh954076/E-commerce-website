import React from 'react'

const Fmcg = () => {
  return (
    <>
    <section className="main-heading">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          
           <div className="lg:py-16">
              <article className="space-y-4 text-gray-600">
                <div className="max-w-3xl">
                  <div className="flex justify-end">
                    <img className="h-24" src="/assets/images/fmcgicon.png" alt="" />
                  <img src="/assets/images/Fmcg.png" alt="" />
                  </div>
                </div>
                <p className="sub-paragraph">
                Ramaera FMCG industry has
                <p> commenced an extensive range of</p>
                <p> FMCG to make your days more than</p>
                <p>ordinary. We plan to offer you nothing</p>
                <p> less than the best</p>
                </p>
                <button className="secdonary-button ">Read more</button>

              </article>

            </div>
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <img
              alt="Fmcg Gif"
              src="/assets/images/animationfmcg.gif"
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

export default Fmcg
