import Button2 from "../components/button";

function Banner() {
    return (
      <>
        <section className="relative bg-gray-50">
          <img className="w-full " src="img\banner.png" alt="" />
            <div className="absolute top-1/4 lg:left-40 left-10 w-1/3 ">
              <h1 className=" lg:text-[80px] leading-none font-extrabold text-[#222051]">TRANSFORM</h1>
              <h1 className=" lg:text-[65px] leading-tight font-extrabold text-[#222051]">YOUR BUSINESS</h1>
              <p className="lg:text-4xl  text-[#222051] mb-5">Lorem ipsum dolor sit consectetur adipiscing elit eiusmod tempor </p>
              <Button2 size="sm">GET STARTED</Button2>
            </div>
        </section>
      </>
    );
  }

  export default Banner;