import { useState } from "react";
import { Cards } from "../../../data/data";
import Container from "../container/Container";

const SectionTwo = () => {
    const [card, setCard] = useState(Cards);

    return (
        <Container>
           <div>
            <h2 className="text-center mt-10 text-4xl font-semibold text-[#1f2227]">Shop Collections</h2>
           <div className="flex h-96 justify-around items-center mt-8">
                
                {card.map((item, index) => {
                    return (
                        <div
                            className="relative flex flex-col justify-center items-center rounded-3xl text-amber-300 overflow-hidden cursor-pointer"
                            key={index}
                            style={{
                                width: '360px',
                                height: '360px',
                            }} >
                            
                            <div
                                className="absolute  inset-0 rounded-3xl bg-cover bg-center transition-transform duration-500 ease-in-out hover:scale-125"
                                style={{
                                    backgroundImage: `url(${item.imageUrl})`,
                                    filter: "brightness(0.6)"
                                    
                                }} ></div>

                            
                            <h3 className="text-5xl font-bold z-10">{item.title}</h3>
                            <p className="z-10 font-semibold">{item.description}</p>
                        </div>
                    );
                })}
            </div>
           </div>
           
        </Container>
    );
};

export default SectionTwo;
