import { useInView } from "react-intersection-observer";
import imageOne from "../../assets/image/8.jpg";
import Container from "../container/Container";

const Header = () => {
  const { ref: one, inView: imageOnein } = useInView();

  const { ref: two, inView: imageTwoin } = useInView();

  return (
    <Container>
      <div
        className="w-full h-screen max-sm:h-[80vh] bg-cover bg-fixed flex flex-col justify-center items-center "
        style={{
          backgroundImage: `url(${imageOne})`,
          backgroundPosition: "center",
        }}
      >
        <h1 className=" text-[280px] font-semibold text-amber-200 leading-[300px] max-sm:text-7xl">
          Re.vert
        </h1>
        <h2 className="text-2xl font-semibold text-amber-200 mb-5 max-sm:text-lg">
          Home Essentials for Sustainable Living
        </h2>
        <button className="bg-slate-50 text-black rounded-full py-2 px-5 hover:bg-yellow-800 hover:text-slate-50 transition-all">
          Shop Now
        </button>
      </div>
    </Container>
  );
};

export default Header;
