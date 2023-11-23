import Btn from "../components/button";
import Btn2 from "../components/button2";

function Business() {

    return (
        <>
            <section className="relative bg-gray-50">
                <div className=" mx-auto w-4/5 py-20">

                    <h2 className=" text-[45px] lg:w-4/6  mx-auto text-center leading-tight font-extrabold text-[#222051]">
                        Not sure how to utiize automation or AI in your business?
                    </h2>
                    <div className="lg:flex gap-5 justify-center items-center py-10">
                         <div className="drop-shadow-2xl lg:w-1/2 rounded-2xl bg-white p-16">
                        <img className=" mx-auto rounded-2xl p-5 mb-5 w-full" src="/img/box-img-5.png" alt="" />
                        {/* <h3 className="text-[25px] text-center leading-tight font-bold text-[#222051] pb-5">
                            dsfsdfs
                        </h3> */}
                        <Btn2 >VIEW SOME SOLUTION EXAMPLES</Btn2>
                    </div>
                        <h2 className=" text-[45px] md:py-5 lg:py-0 text-center leading-tight font-extrabold text-[#222051]">
                            OR
                        </h2>
                        <div className="drop-shadow-2xl rounded-2xl lg:w-1/2 bg-white p-16">
                            <img className="b mx-auto rounded-2xl p-5 mb-5 w-full" src="/img/box-img-4.png" alt="" />
                            <h3 className="text-[28px] w-4/6 mx-auto text-center leading-tight font-bold text-[#222051] pb-5">
                                We'll jump in to your business and find the gaps
                            </h3>
                            <Btn2 >BOOK YOUR FREE AUTOMATION & AI AUDIT</Btn2>
                        </div></div>
                </div>
            </section>
        </>
    );
}

export default Business;
