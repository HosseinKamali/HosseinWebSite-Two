import Container from "../container/Container";
import image from "../../assets/image/10.jpg"
const SectionOne = () => {
  return (
    <div className="bg-[#1f2227] mt-20">
 <Container>
      <div className="h-[800px]  flex justify-around items-center">
       
        <div className="text-slate-50">
          <h3 className="text-5xl">
            Zero Waste
            <br />
            Bath Products
          </h3>
          <p className="mt-5 text-lg mb-6">Where quality meets eco-friendly</p>
          <button className="bg-slate-50 text-black rounded-full py-2 px-5 hover:bg-yellow-800 hover:text-slate-50 transition-all">Shop Now</button>
        </div>
        <img src={image} alt="" className="w-[570px] h-[450px]"/>
      </div>
    </Container>
    </div>
   
  );
};

export default SectionOne;
