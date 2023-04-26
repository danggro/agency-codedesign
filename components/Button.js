export default function Button(props) {
  const variants = {
    small: "px-[31px] py-[22px]",
    large: "px-[76px] py-[26px]",
  };
  const pickedVariant = variants[props.variant];
  return (
    <button
      className={`font-semibold text-black text-xl leading-7 bg-primary  rounded-[10px] border border-primary hover:bg-transparent hover:text-primary flex-shrink-0 ${pickedVariant}`}
    >
      {props.children}
    </button>
  );
}
