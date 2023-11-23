import Btn from "./button";

function Header() {
    return (
      <>
        <section className="bg-[#dfd0ed] py-5 w-full flex justify-center items-center">
            <div className=" w-3/5">
                <img width="200px" src="img\logo.png" alt="" />
            </div>
            <div className="w-1/4 flex justify-center items-center">
                <button className="font-bold px-5 border-r-2 border-black">SERVICES</button>
                <button className="font-bold px-5 ">SOLUTIONS</button>
                <Btn>FREE CONSULT</Btn>
            </div>
        </section>
      </>
    );
  }

  export default Header;