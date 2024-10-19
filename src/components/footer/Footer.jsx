
import TopFooter from "../topFooter/TopFooter";
import { navbar } from "../../../data/data";
import { footerproduct } from "../../../data/data";
import { footer } from "../../../data/data";
import { useState } from "react";
import Container from "../container/Container";
import SosialMedia from "../sosialMedia/SosialMedia";

const Footer = () => {
const [fnavbar,setFNavbar]=useState(navbar)
const [fproduct,setFProduct]=useState(footerproduct)
const [footerItem,setFooterItem]=useState(footer)

  return (
    <div className="bg-[#e8e59b] h-auto">
      <TopFooter />
      
      <Container>
      <div className="flex justify-between items-center mt-16 max-sm:flex-col">
          <div className="max-sm:mb-10 w-[40%] flex flex-col justify-center items-center">
           <div>
           <h3 className="text-5xl mb-5">
              Stay inspired and
              <br /> eco-conscious
            </h3>
            <p>
              Receive the latest trends and tips on eco-friendly design,
              <br /> sustainable living, zero waste and eco-conscious practices.
            </p>
           </div>
            <div className="flex flex-col items-start mt-10">
              <label htmlFor="">Email</label>
              <input type="email" className="mb-5 w-[400px] py-2 px-2 outline-none bg-[#e8e59b] border-b-[1px] border-black focus:bg-[#cdcb8e]"/>
              <div className="flex justify-between items-center  w-[400px] mt-5">
              <input type="checkbox" />
              <span>Yes, subscribe me to your newsletter.</span>
              <button className=" py-2 px-6 rounded-3xl border-[1px] border-gray-800 text-xl">Submit</button>
              </div>
             
            </div>
          </div>
          <div className="flex w-[40%] justify-center">
            <ul className="mr-10">
              {
                fnavbar.map((item,index)=>(
                  <li key={index} className="mt-3">{item}</li>
                ))
              }
            </ul>
            <ul className="mr-10">
              {
                fproduct.map((item,index)=>(
                  <li key={index} className="mt-3">
                    {item}
                  </li>
                ))
              }
            </ul>
            <ul>
              {
                footerItem.map((item,index)=>(
                  <li key={index} className="mt-3">{item}</li>
                ))
              }
            </ul>
          </div>
        </div>
      
      </Container>
      <hr className="h-[2px] w-full bg-gray-800 mt-7 mb-3 " />
      <SosialMedia/>
     </div>
      
    
  );
};

export default Footer;
