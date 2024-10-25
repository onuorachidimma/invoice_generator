import NavBar from "../components/navbar";
import Footer from "../components/footer";
import SignUpSignInImages from "../components/signUpin-images";
import { SignUpSvg, SignInSvg } from "../assets/images/svg";
// import SignUpSignInHeader from "../components/SignInSignUpHeader";
// import Buttons from "../components/buttons";
// import GoogleFacebookSigninButtons from "../components/googleFacebookSignIn";
import SignUpForm from "../components/signUpForm";

const SignUp = () => {
  return (
    <>
      <div>
        <NavBar />

        <div className="flex mx-auto w-[80%] p-2  mt-[75px]">
          <div className="hidden lg:block w-[20%]">
            <SignUpSignInImages signUpSignInImages={SignUpSvg} />
          </div>

          <div className=" w-[70%] mb-10">
            <SignUpForm />
            
            
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default SignUp;
