import Navbar from "../../components/navbar/Navbar";
import SectionOne from "../../components/sectionOne/SectionOne";
import SectionTwo from "../../components/sectionTwo/SectionTwo";
import SliderProducts from "../../components/slider/Slider";
import Header from "../../components/header/Header";
import SectionThree from "../../components/sectionThree/SectionThree";
import SectionFour from "../../components/sectionFour/SectionFour";
import Footer from "../../components/footer/Footer";




const Home = () => {
    return ( 
        <>
        <Navbar/>
        <Header/>
        <SliderProducts/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <Footer/>
        </>
     );
}
 
export default Home;