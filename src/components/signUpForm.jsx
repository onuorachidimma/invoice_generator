import GoogleFacebookSigninButtons from "./googleFacebookSignIn";
import SignUpSignInHeader from "./SignInSignUpHeader";

const SignUpForm = ({ children }) => {
  return (
    <>
      <div className="w-[65%] mx-auto">
        <form className="" action="">
          {children}
        </form>
      </div>
    </>
  );
};
export default SignUpForm;
