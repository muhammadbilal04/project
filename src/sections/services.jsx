function Services() {
  const data = [
    {
      img: "/img/box-img-1.png",
      name: "AUTOMATION ALL STARS",
      l1: "Lorem ipsum is placeholder text commonly used",
      l2: "Lorem ipsum is placeholder text commonly used",
    },
    {
      img: "/img/box-img-1.png",
      name: "AI ADVENTURES",
      l1: "Lorem ipsum is placeholder text commonly used",
      l2: "Lorem ipsum is placeholder text commonly used",
    },
    {
      img: "/img/box-img-1.png",
      name: "GLOBAL DREAM TEAM",
      l1: "Lorem ipsum is placeholder text commonly used",
      l2: "Lorem ipsum is placeholder text commonly used",
    },
  ];

  return (
    <>
      <section className="relative bg-gray-50">
        <div className=" mx-auto w-4/5 py-20">
          <h3 className=" text-[25px] leading-tight font-bold text-[#f64fc7]">
            CORE SERVICES
          </h3>
          <h2 className=" text-[45px] leading-tight font-extrabold text-[#222051]">
            We help you...
          </h2>
          <div className="grid gap-10 grid-cols-3 py-20">
            {data.map((box) => (
              <div className="drop-shadow-2xl rounded-2xl bg-white p-10">
                <img src={box.img} alt="" />
                <h3 className="text-[25px] leading-tight font-bold text-[#222051] pb-5">
                  {box.name}
                </h3>
                <ul className="list-disc ">
                  <li className="text-[#f64fc7]">
                    <p className="text-[#222051] font-light text-[22px]">
                      {box.l1}
                    </p>
                  </li>
                  <li className="text-[#f64fc7]">
                    <p className="text-[#222051] font-light text-[22px]">
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
