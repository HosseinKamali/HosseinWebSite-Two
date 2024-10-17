import Container from "../container/Container";
import image from "../../assets/image/10.jpg"
const SectionOne = () => {
  return (
    <div className="bg-[#1f2227] sm:mt-20 h-[800px]  sm:flex sm:justify-center sm:items-center ">
 <Container>
      <div className=" flex justify-around items-center max-sm:block ">
       
        <div className="text-slate-50 text-center max-sm:mb-10 max-sm:pt-20 ">
          <h3 className="text-5xl">
            Zero Waste Bath <br/> Products
          </h3>
          <p className="mt-5 text-lg mb-6">Where quality meets eco-friendly</p>
          <button className="bg-slate-50 text-black rounded-full py-2 px-5 mb-16 hover:bg-yellow-800 hover:text-slate-50 transition-all">Shop Now</button>
        </div>
        <div className="max-sm:flex max-sm:justify-center max-sm:items-center">
        <img src={image} alt="" className="w-[570px] h-[450px] max-sm:w-[400px] max-sm:h-[300px] rounded-3xl"/>
        </div>
       
      </div>
    </Container>
    </div>
   
  );
};

export default SectionOne;
