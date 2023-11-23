import Btn from "../components/button";

function Contact() {

    return (
        <>

            <section className="relative  z-10">
                <div className=" mx-auto w-9/12 py-20">
                    <div className="lg:flex gap-5 justify-center  drop-shadow-2xl bg-white rounded-3xl px-12 py-10 ">
                        <img className=" mx-auto rounded-2xl p-5 mb-5 lg:w-1/2" src="/img/box-img-6.png" alt="" />
                        <div className="lg:w-1/2">
                            <h2 className=" text-[45px] leading-tight font-extrabold text-[#222051]">
                                Contact Us
                            </h2>
                            <h3 className="text-[18px] leading-tight text-[#222051] pb-5">
                                PLease feel Free to contact us today to learn more about how our expert services
                            </h3>
                            <form action="">

                                <div className="flex flex-col mb-4">
                                    <label className="mb-3 text-sm leading-none text-gray-800">Full name</label>
                                    <input type="name" placeholder="Enter first name" className="w-full bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded-full border-gray-200" />
                                </div>

                                <div className="flex flex-col mb-4">
                                    <label className="mb-3 text-sm leading-none text-gray-800">Email Address</label>
                                    <input type="email" placeholder="Enter email Address" className="w-full bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded-full border-gray-200" />
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label className="mb-3 text-sm leading-none text-gray-800">Phone number</label>
                                    <input type="number" placeholder="Enter phone number" className="w-full bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded-full border-gray-200" />
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label className="mb-3 text-sm leading-none text-gray-800">Message</label>

                                    <textarea
                                        className="resize-none w-full h-[100px] bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded-3xl border-gray-200 px-4 py-4  outline-none "
                                        placeholder="Start typing here ..."
                                    />
                                </div>
                                <Btn>SUBMIT</Btn>

                            </form>

                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}

export default Contact;
