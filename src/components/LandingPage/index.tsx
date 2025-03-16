import NavBar from "./NavBar";
import Hero from "./Hero";
import HowToUseService from "./HowToUseService";
import FeedBackSection from "./FeedBackSection";
import SuccessfulClient from "./SuccessfulClient";
import FaqSec from "./FaqSec";
import PaymentMethod from "./PaymentMethod";
import ReferalProgram from "./ReferalProgram";
import JoinOurCommunity from "./JoinOurCommunity";
import Footer from "@/components/Footer";


const LandingPage = () => {
    return ( 
        <div>
            <NavBar />
            <Hero />
            <HowToUseService />
            <FeedBackSection />
            <SuccessfulClient />
            <FaqSec />
            <PaymentMethod />
            <ReferalProgram />
            <JoinOurCommunity />
            <Footer/>
        </div>
     );
}
 
export default LandingPage;