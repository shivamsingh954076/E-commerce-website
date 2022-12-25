import React from 'react'

const Packaging = () => {
    return (
        <>
            <section className="main-heading">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 ">
                    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                            <img
                                alt="packing gif"
                                src="/assets/images/animationpacking.gif"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                        <div className="lg:py-16">
                            <article className="space-y-4 text-gray-600 text-right">
                                <div className="max-w-3xl">
                                    <div className="flex">
                                        <img src="/assets/images/Packaging industry.png" alt="Packaging industry" />
                                        <img className="h-20" src="/assets/images/packagingicon.png" alt="" />

                                    </div>
                                </div>
                                <p className="sub-paragraph"> We believe in innovation and excellence hence ,
                                    <p> our approach in the field of technology is</p>
                                    <p> focused to relish incredible customer experience</p>
                                    <p>and stabilising business models for tomorrow.</p>
                                </p>
                                <button className="secdonary-button ">Read more</button>


                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Packaging
