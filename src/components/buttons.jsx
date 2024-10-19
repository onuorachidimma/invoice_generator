const Buttons = (props) => {
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
      <div>
        <p>{props.blueLongprompt}</p>
      </div>
      <div>
        <p>{props.whiteLongprompt}</p>
      </div>
    </>
  );
};

export default Buttons;
