import { useState } from "react";
import { icons } from "../../../data/data";
import Container from "../container/Container";

const SectionThree = () => {
  const [icon, setIcon] = useState(icons);
  return (
    <div className="mt-28 h-[850px] bg-gray-200 text-center text-gray-600 pt-10 pb-10">
        <Container>
        <h2 className="text-center text-5xl font-semibold  mb-12">The Re.vert Mission</h2>
      <p className="text-center text-xl ">
        We believe in ethical and smart shopping. All of our products are
        carefully<br/> selected to ensure they align with our core values
      </p>
      <div className="flex justify-around items-center mt-24">
      {icons.map((icon, index) => (
        <div key={index} className="flex flex-col justify-center items-center">
            <div className="rounded-full border-2 border-gray-700 p-4 mb-4">
            <img src={icon.svg} alt="" className="w-14 h-14 p-1"/>
            </div>
         
          <p>{icon.title}</p>
        </div>
      ))}
    </div>
        </Container>
        <div className="w-[60%] mx-auto mt-20 text-base">
        <p>I'm a paragraph. Click here to add your own text and edit me.It’s easy. Just click “Edit Text” or double click me 
        to add your own  content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.
         I’m a great place for you to tell a story and let your users know a little more about you.</p>
         <p className="mt-8">
         This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about
          your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business
           and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
         </p>
        </div>
      
         <button className="bg-yellow-800 rounded-3xl py-3 px-6 mt-12 text-slate-50 hover:bg-slate-100 hover:text-gray-700 transition-all duration-300">Learn More</button>
     
      </div>
  
  );
};

export default SectionThree;
