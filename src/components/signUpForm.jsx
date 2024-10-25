import GoogleFacebookSigninButtons from "./googleFacebookSignIn";
import SignUpSignInHeader from "./SignInSignUpHeader";
import { Link } from "react-router-dom";
import { SignInSiggnUpButtons } from "./buttons";
const SignUpForm = () => {
  return (
    <>
      <div className="w-[65%] mx-auto">
        <form className="" action="">
          <div className="text-center mb-[20px] ">
            <SignUpSignInHeader header="Sign Up" />
            <GoogleFacebookSigninButtons facebookGoogleSignupButtonBg="#BEEFD6" />

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
        </form>
      </div>
    </>
  );
};
export default SignUpForm;
