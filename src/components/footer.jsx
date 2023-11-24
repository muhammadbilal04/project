import Button2 from "../components/button";
import Btn from "../components/button";

function Footer() {
  return (
    <>
      <img className="w-full -mt-44" src="/img/top-footer-bg.png" alt="" />
      <section className="relative pt-44 bg-[#dfd0ed]">
        <div className="px-[5%] lg:px-[10%] py-10 w-[100%] ">
          <img className="w-1/4 mx-auto mb-12" src="img\logo.png" alt="" />

          <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h2 className=" text-lg leading-normal mb-5 lg:mb-10  font-extrabold text-[#222051]">
                INFORMATION
              </h2>
              <div className="flex gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="bg-white rounded-full px-2 w-9 h-9"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <p className="text-xl text-[#222051] mb-2">123-456-7890</p>
              </div>
              <div className="flex gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="bg-white rounded-full px-2 w-9 h-9"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <p className="text-xl text-[#222051] mb-2">
                  info@yourdomain.com
                </p>
              </div>
              <div className="flex gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="bg-white rounded-full px-2 w-10 h-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <p className="text-xl text-[#222051] mb-2">
                  708 Main St, Houstonn, Tx77002
                </p>
              </div>
            </div>
            <div>
              <h2 className=" text-lg leading-normal mb-5 lg:mb-10 font-extrabold text-[#222051]">
                QUICK LINKS
              </h2>

              <p className="text-xl text-[#222051] mb-2">Home</p>
              <p className="text-xl text-[#222051] mb-2">Services</p>
              <p className="text-xl text-[#222051] mb-2">Solutions</p>
              <p className="text-xl text-[#222051] mb-2">Free Consult</p>
              <p className="text-xl text-[#222051] mb-2">Contact Us</p>
            </div>
            <div>
              <h2 className=" text-lg leading-normal mb-5 lg:mb-10  font-extrabold text-[#222051]">
                LEGAL INFO
              </h2>
              <p className="text-xl text-[#222051] mb-2">Terms & Conditions</p>
              <p className="text-xl text-[#222051] mb-2">Privacy Policy</p>
            </div>

            <div>
              <h2 className=" text-lg leading-normal mb-5 lg:mb-10  font-extrabold text-[#222051]">
                SUBSCRIBE OUR NEWSLETTER
              </h2>
              <p className="text-xl text-[#222051] mb-2">
                Sign up to recieve updates, access exclusive offers and more
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <Button2 size="lg" type="submit" className="w-auto px-5 py-1">
                  Subscribe
                </Button2>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pb-2">
          <p className="text-xl text-[#222051] text-center">
            Copyright© 2023 All Rights Reserved.
          </p>
        </div>

        <img className="w-full " src="/img/b-footer-bg.png" alt="" />
      </section>
    </>
  );
}

export default Footer;
