
import AuthNavBar from "@/components/Auth/AuthNavBar";
import Footer from "@/components/Footer";
import SignInInterface from "@/components/Auth/signInInterface";


const SignIn = () => {
    return ( 
        <div className="flex flex-col min-h-screen ">
            <AuthNavBar />

            <div className="flex-grow">
              <SignInInterface/>
            </div>

            <Footer />
        </div>
     );
}
 
export default SignIn;