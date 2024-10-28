import NavBar from "../components/navbar";
import Footer from "../components/footer";
import SignUpSignInImages from "../components/signUpin-images";
import { SignUpSvg, SignInSvg } from "../assets/images/svg";
import { Link } from "react-router-dom";
import { SignInSiggnUpButtons } from "../components/buttons";
import SignUpSignInHeader from "../components/SignInSignUpHeader";
// import Buttons from "../components/buttons";
import GoogleFacebookSigninButtons from "../components/googleFacebookSignIn";
import SignUpForm from "../components/signUpForm";

const SignUp = () => {
  return (
    <>
      <div className="bg-[#FAFAFA]">
        <NavBar />

        <div className="flex mx-auto w-[80%] p-2  mt-[75px]">
          <div className="hidden xl:block w-[20%]">
            <SignUpSignInImages signUpSignInImages={SignUpSvg} />
          </div>

          <div className=" mx-auto xl:mx-0 md:w-[90%] xl:w-[70%] mb-10">
            <SignUpForm>
              <div className="text-center mb-[20px] ">
                <SignUpSignInHeader header="Sign Up" />
                <GoogleFacebookSigninButtons facebookGoogleSignupButtonBg="#BEEFD6" />

                <fieldset className="border border-[#BABFC5] border-b-0 border-l-0 border-r-0">
                  <legend className="p-[4px] text-[#82868C]">Or</legend>
                </fieldset>
              </div>
              <div className=" ">
                <div className="">
                  <div className="flex flex-wrap md:flex-nowrap justify-between ">
                    <div className="w-[100%] md:w-[48%] mb-4">
                      <label className="pb-0.05 block" htmlFor="name">
                        Name
                      </label>
                      <input
                        className="block w-[100%] bg-transparent border h-11 rounded-lg border-[#BABFC5]"
                        type="text"
                      />
                    </div>

                    <div className="w-[100%] md:w-[48%] mb-4">
                      <label className="pb-0.05 block" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="block w-[100%] bg-transparent border h-11 rounded-lg border-[#BABFC5]"
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="pb-0.05 block" htmlFor="password">
                      Password{" "}
                      <input
                        className="block w-[100%] bg-transparent border h-11 rounded-lg border-[#BABFC5]"
                        type="password"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <p className="mb-6 mt-6">
                  I agree to
                  <Link className="text-[#005BAC]" to="#">
                    {" "}
                    terms & conditions
                  </Link>
                </p>
                <div className="text-center ">
                  <SignInSiggnUpButtons
                    blueLongprompt="Sign up"
                    question="Do you already have an account?"
                    pageName="Log in"
                    route="/login"
                  />
                </div>
              </div>
            </SignUpForm>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default SignUp;
