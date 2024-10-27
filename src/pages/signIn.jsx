import NavBar from "../components/navbar";
import Footer from "../components/footer";
import SignUpSignInImages from "../components/signUpin-images";
import { SignInSvg } from "../assets/images/svg";
import { Link } from "react-router-dom";
import { SignInSiggnUpButtons } from "../components/buttons";
import SignUpForm from "../components/signUpForm";
import GoogleFacebookSigninButtons from "../components/googleFacebookSignIn";
import SignUpSignInHeader from "../components/SignInSignUpHeader";

const SignUp = () => {
  return (
    <>
      <div className="bg-[#FAFAFA]">
        <NavBar />

        <div className="flex mx-auto w-[80%] p-2  mt-[75px] ">
          <div className="hidden lg:block w-[20%]">
            <SignUpSignInImages signUpSignInImages={SignInSvg} />
          </div>

          <div className=" w-[70%] mb-10">
            <SignUpForm>
              <div className="text-center mb-[20px] ">
                <SignUpSignInHeader header="Sign In" />
                <GoogleFacebookSigninButtons facebookGoogleSignupButtonBg="#EAFAF1" />

                <fieldset className="border border-[#BABFC5] border-b-0 border-l-0 border-r-0">
                  <legend className="p-[4px] text-[#82868C]">Or</legend>
                </fieldset>
              </div>
              <div>
                <div className="">
                  <div className="flex justify-between">
                    <div className="w-[48%] mb-4">
                      <label className="pb-0.05 block" htmlFor="name">
                        Name
                      </label>
                      <input
                        className="block w-[100%] bg-transparent border h-11 rounded-lg border-[#BABFC5]"
                        type="text"
                      />
                    </div>

                    <div className="w-[45%] mb-4">
                      <label className="pb-0.05 block" htmlFor="password">
                        Password
                      </label>
                      <input
                        className="block w-[100%] bg-transparent border h-11 rounded-lg border-[#BABFC5]"
                        type="password"
                      />
                    </div>
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
                    blueLongprompt="Sign In"
                    question="Don't have an account?"
                    pageName="Sign up"
                    route="/"
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
