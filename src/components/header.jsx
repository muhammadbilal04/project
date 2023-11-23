import Button2 from "../components/button";


function Header() {
    return (
      <>
        <section className="bg-[#dfd0ed] py-5 w-full lg:px-0 px-6 ">
          <div className="flex justify-between items-center lg:w-4/5 mx-auto">
          <div className="">
                <img className="lg:w-[200px] w-[100px]" src="img\logo.png" alt="" />
            </div>
            <div className=" flex justify-center items-center">
                <button className="font-bold lg:text-lg text-sm px-2 lg:px-5 border-r-2 border-black">SERVICES</button>
                <button className="font-bold lg:text-lg text-sm px-2 lg:px-5 ">SOLUTIONS</button>
                <div className="lg:block hidden">
                <Button2 size="sm">FREE CONSULT</Button2>
                </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  export default Header;