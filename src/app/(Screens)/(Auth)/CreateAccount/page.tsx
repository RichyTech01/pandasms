import NavBar from "@/components/LandingPage/NavBar";
import Footer from "@/components/Footer";
import CreateAccountInterface from "@/components/Auth/CreateAccountInterface";

const CreateAccount = () => {
    return ( 
        <div className="flex flex-col min-h-screen">
            <NavBar />

            <div className="flex-grow">
                <CreateAccountInterface />
            </div>

            <Footer />
        </div>
    );
}

export default CreateAccount;
