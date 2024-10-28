import { Link } from "react-router-dom";
export const Buttons = (props) => {
  return (
    <>
      <div className="flex">
        <div className="flex gap-2">
          <button
            className="border border-[#005BAC] text-[#005BAC] rounded p-3 w-[115px] hover:bg-gray-100"
            type="button"
          >
            {props.whiteShortButton}
          </button>

          <button
            className="border border-[#005BAC] text-[white] bg-[#005BAC] rounded p-3 w-[115px] "
            type="button"
          >
            {props.blueShortButton}
          </button>
        </div>
      </div>
    </>
  );
};

export const SignInSiggnUpButtons = (props) => {
  return (
    <>
      <div className="bg-[#00417A] rounded mb-8">
        <button
          className=" text-[white] rounded p-3 w-[100%] "
          type="submit"
        >
          {props.blueLongprompt}
        </button>
      </div>
      <div>
        <p>{props.question} <Link className="text-[#005BAC]" to={props.route}>{props.pageName}</Link></p>
      </div>
    </>
  );
};
