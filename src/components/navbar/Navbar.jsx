import { AiFillWeiboSquare } from "react-icons/ai";
import Container from "../container/Container";

const Navbar = () => {
  const navbar = [
    "Home",
    "Shop All",
    "Our Mission",
    "Contact",
    "FAQ",
  ];
  return (
    <Container>
      <div className="flex justify-between items-center h-[85px] ">
        <div className="flex items-center">
          <AiFillWeiboSquare size={50} />
          <div>
          <p className="text-lg line-clamp-2">Relaxing</p>
          <p className="text-sm">massage relaxing</p>
          
          </div>
          
        </div>
       <div className="flex items-center w-[50%] justify-end ">
       <ul className="flex justify-between items-center rounded-full py-3 px-6 w-[75%] max-sm:hidden">
          {navbar.map((item, index) => (
            <li key={index} className="  hover:text-sky-700 cursor-pointer">{item}</li>
          ))}
        </ul>
        <button className="bg-sky-800 text-slate-50 py-[10px] px-7 rounded-full ml-5 hover:bg-slate-50 hover:text-black transition-all duration-200">
          Login
        </button>
       </div>
      </div>
    </Container>
  );
};

export default Navbar;
