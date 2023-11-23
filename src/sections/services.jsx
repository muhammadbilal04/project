function Services() {
    const data = [
      {
        img: "/img/box-img-1.png",
        name: "AUTOMATION ALL STARS",
        l1: "Lorem ipsum is placeholder text commonly used",
        l2: "Lorem ipsum is placeholder text commonly used",
      },
      {
        img: "/img/box-img-2.png",
        name: "AI ADVENTURES",
        l1: "Lorem ipsum is placeholder text commonly used",
        l2: "Lorem ipsum is placeholder text commonly used",
      },
      {
        img: "/img/box-img-3.png",
        name: "GLOBAL DREAM TEAM",
        l1: "Lorem ipsum is placeholder text commonly used",
        l2: "Lorem ipsum is placeholder text commonly used",
      },
    ];
  
    return (
      <>
        <section className="relative bg-gray-50">
          <div className=" mx-auto lg:w-4/5 w-11/12 lg:py-20 py-5">
            <h3 className="lg:text-[25px]  text-[20px] leading-tight text-center lg:text-left font-bold text-[#f64fc7]">
              CORE SERVICES
            </h3>
            <h2 className=" lg:text-[45px] text-[30px] leading-tight text-center lg:text-left  font-extrabold text-[#222051]">
              We help you...
            </h2>
            <div className="grid gap-10 grid-cols-1 lg:grid-cols-3 lg:py-20 py-5">
              {data.map((box) => (
                <div className="drop-shadow-2xl rounded-2xl bg-white p-10">
                  <img className="bg-[#e2dce8]  rounded-2xl p-5 mb-5 w-full" src={box.img} alt="" />
                  <h3 className="lg:text-[28px]  text-[20px]  leading-tight font-extrabold text-[#222051] pb-5">
                    {box.name}
                  </h3>
                  <ul className="list-disc pl-5 ">
                    <li className="text-[#f64fc7] text-[20px]">
                      <p className="text-[#222051] font-light lg:text-[20px] text-[16px]">
                        {box.l1}
                      </p>
                    </li>
                    <li className="text-[#f64fc7] text-[20px]">
                      <p className="text-[#222051] font-light lg:text-[20px] text-[16px]">
                        {box.l2}
                      </p>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default Services;
  