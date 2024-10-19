import { useInView } from "react-intersection-observer";
import Container from "../container/Container";

const Header = () => {
  const { ref: one, inView: imageOnein } = useInView();
  const { ref: two, inView: imageTwoin } = useInView();

  const imageOne =
    "https://nurmecosmetics.com/wp-content/uploads/2021/02/10-reasons-to-love-bar-soap.jpg";

  return (
    <div className="relative inset-0 h-screen">
      {/* Background Image Div */}
      <div
        className="absolute bg-fixed bg-cover h-full w-full max-sm:h-[80vh] flex justify-center items-center"
        style={{
          backgroundImage: `url(${imageOne})`,
          backgroundPosition: "center",
          filter: "brightness(0.6)",
        }}
      ></div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-20">
        <h1 className="text-[280px] font-semibold text-amber-200 leading-[300px] max-sm:text-7xl text-center">
          Re.vert
        </h1>
        <h2 className="text-2xl font-semibold text-amber-200 mb-5 max-sm:text-lg text-center">
          Home Essentials for Sustainable Living
        </h2>
        <button className="bg-slate-50 text-black rounded-full py-2 px-5 hover:bg-yellow-800 hover:text-slate-50 transition-all">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Header;
