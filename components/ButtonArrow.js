import Arrow from "./Arrow";

export default function ButtonArrow(props) {
  return (
    <div className="flex justify-end mt-[33px] ">
      <button
        onClick={props.left}
        className="w-[54px] h-[52px] bg-[#f5f5f5] grid place-items-center text-gray-500 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] hover:border-primary border border-[#f5f5f5] hover:text-primary"
      >
        <Arrow />
      </button>
      <button
        onClick={props.right}
        className="w-[54px] h-[52px] grid place-items-center bg-primary border border-primary shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] hover:bg-[#f5f5f5] hover:text-primary"
      >
        <div className="rotate-180">
          <Arrow />
        </div>
      </button>
    </div>
  );
}
