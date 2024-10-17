import image from "../../assets/image/11.jpg";
import Container from "../container/Container";

const SectionFour = () => {
  return (
    <Container>
        <div className="flex justify-center items-center h-[600px] mt-36 rounded-3xl mb-36">

        <div className="flex justify-center flex-col items-center relative overflow-hidden w-[90%] h-[700px] rounded-3xl">
        <div
          style={{ backgroundImage: `url(${image})`,
          filter: "brightness(0.6)" }}
          className="inset-0  absolute bg-cover w-full h-full bg-center flex justify-center items-center rounded-3xl cursor-pointer transition-transform duration-700 ease-in-out hover:scale-110 "
        >
            </div>
          
            <p className="text-3xl z-20 text-amber-200">Happening Now</p>
            <h2 className="text-9xl max-sm:text-5xl font-bold mt-10 mb-10 z-20 text-amber-200">Weekend Sale</h2>
            <button className="z-20 bg-amber-200 rounded-3xl py-3 px-6 mt-12 text-black hover:bg-slate-100 hover:text-gray-700 transition-all duration-300">Learn More</button>
          
        
      </div>
        </div>
    
    </Container>
  );
};

export default SectionFour;
