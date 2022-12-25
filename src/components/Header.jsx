import React from "react";

const Header = () => {
  return (
    <>
      <section className="main-heading1">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8  ">
          <div className="mx-auto w-full text-center">
            <img src="/assets/images/Main Heading.png" alt="Main Heading" />
           <div className="nav-section">
           </div>
            <p className="mt-4 text-gray-900 sub-paragraph">
              We are aiming to be a part of the major industrialisation drive in India and embarking our presence in every significant industrial domain including IT.
            </p>
            <p className="mt-4 text-gray-900  sub-paragraph">
              drive in India and embarking our presence in every significant industrial domain including IT.
            </p>
            <p className="mt-4 text-gray-900  sub-paragraph">
              industrial domain including IT.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt="Tech gif"
                src="/assets/images/animationtech.gif"
                className="absolute inset-0 h-full w-full object-cover"/>
            </div>
            <div className="lg:py-16 ">
              <article className="space-y-4 text-gray-600 text-right">
                <div className="max-w-3xl">
                  <div className="flex justify-end">
                    <img src="/assets/images/technology.png" alt="" />
                    <img className="h-20" src="/assets/images/techicon.png" alt="" />

                  </div>
                </div>
                <div className=" sub-paragraph">
                <p >
                  We believe in innovation and excellence hence ,
                  <p className=" sub-paragraph">  our approach in the field of technology is</p>
                  <p className=" sub-paragraph"> focused to relish incredible customer experience</p>
                  <p>and stabilising business models for tomorrow.</p>
                </p>
                </div>
                <button className="secdonary-button ">Read more</button>
                

              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
