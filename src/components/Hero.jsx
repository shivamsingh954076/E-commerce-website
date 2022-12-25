import React from "react";

const Hero = () => {
  return (
    <>


      <div className="isolate bg-white navbar main-section">
        <div className="px-6 pt-6 lg:px-8">
          <div>
            <nav
              className="flex h-9 items-center grid grid-cols-12 gap-2"
              aria-label="Global"
            >
              <div className="flex lg:min-w-0 lg:flex-1 col-span-2" aria-label="Global">
                <a href="#" className="-m-2.5 p-2.5">
                  <img className="h-24" src="/assets/images/logo ramaera 1.png" />
                </a>
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:gap-x-12 col-span-10 navbar-main">
                <a
                  href="#"
                  className="font-semibold text-gray-900 hover:text-gray-900"
                >
                  Home
                </a>
                <div className="relative">
                  <a type="button" className="text-gray-500 group inline-flex items-center rounded-md  text-base font-medium hover:text-white-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" aria-expanded="false">
                    <span> Our Industries</span>
                    <svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </div>
                <div className="relative">
                  <a type="button" className="text-gray-500 group inline-flex items-center rounded-md  text-base font-medium hover:text-white-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" aria-expanded="false">
                    <span> Our Companies</span>
                    <svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </div>
                <a
                  href="#"
                  className="font-semibold text-gray-900 hover:text-gray-900"
                >
                  Career
                </a>
                <a
                  href="#"
                  className="font-semibold text-gray-900 hover:text-gray-900"
                >
                  Contact
                </a>
                <svg className="h-6 w-8 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </nav>

            <div role="dialog" aria-modal="true">
              <div focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              </div>
            </div>
          </div>
        </div>
        <main>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto pb-32 sm:pt-48 sm:pb-40">
              <div className=" grid grid-cols-12 gap-2">
                <div className="col-span-3">
                  <div className="social">
                    <a href="#twitter" className="social-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="none" viewBox="0 0 20 16">
                        <path fill="#F2C855" d="M6.038 16c7.246 0 11.208-6.155 11.208-11.492 0-.175-.003-.35-.011-.523A8.127 8.127 0 0 0 19.2 1.894a7.702 7.702 0 0 1-2.262.636A4.038 4.038 0 0 0 18.67.296c-.773.47-1.62.802-2.501.98A3.89 3.89 0 0 0 13.293 0c-2.175 0-3.94 1.809-3.94 4.039 0 .317.035.625.103.92C6.182 4.792 3.28 3.184 1.336.74a4.107 4.107 0 0 0-.533 2.03c0 1.402.695 2.639 1.753 3.363a3.837 3.837 0 0 1-1.784-.505v.051c0 1.956 1.357 3.59 3.16 3.96a3.853 3.853 0 0 1-1.78.069c.502 1.605 1.956 2.773 3.68 2.805A7.78 7.78 0 0 1 0 14.185 10.951 10.951 0 0 0 6.038 16" />
                      </svg>
                    </a>
                    <a href="#fb" className="social-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" fill="none" viewBox="0 0 11 20">
                        <path fill="#F2C855" d="m10.009 11.249.555-3.618h-3.47V5.284c0-.99.484-1.955 2.04-1.955h1.577V.244S9.28 0 7.907 0c-2.858 0-4.73 1.733-4.73 4.871v2.76H0v3.618h3.178V20h3.91v-8.751h2.92Z" />
                      </svg>
                    </a>
                    <a href="#youtube" className="social-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" fill="none" viewBox="0 0 18 14">
                        <path fill="#F2C855" d="m9.37 13.043-3.6-.066c-1.166-.023-2.334.023-3.477-.215C.554 12.407.43 10.666.303 9.205a24.955 24.955 0 0 1 .225-6.181c.19-1.143.934-1.825 2.086-1.899C6.5.855 10.413.888 14.29 1.013c.41.012.822.075 1.226.147 1.994.349 2.042 2.322 2.172 3.984a22.587 22.587 0 0 1-.172 5.032c-.198 1.38-.576 2.538-2.172 2.65-2 .146-3.953.263-5.957.226 0-.009-.012-.009-.018-.009ZM7.254 9.55c1.506-.865 2.984-1.716 4.482-2.575-1.51-.865-2.984-1.716-4.482-2.575v5.15Z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="col-span-6">
                  <div>
                    <div className="mx-auto w-full text-center">
                      <img src="/assets/images/Ramaera Industries.png" alt="Ramaera Industries" />
                      <p className="mt-1 text-lg leading-8 text-gray-600 sm:text-center main-paragraph">An incredible multi-industrial approach oriented towards financial independence, customer focus and serving the best quality to the people.</p>
                    </div>
                    <div className="mt-6 flex gap-x-4 sm:justify-center">
                      <button className="button-primary"> Expoler more</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>
    </>
  );
};

export default Hero;
