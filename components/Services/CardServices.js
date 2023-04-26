export default function CardServices(props) {
  return (
    <div className="bg-[#f5f5f5] px-[22px] pt-[45px] pb-[68px] max-w-[305px] rounded-[6px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] ">
      {props.icon}
      <h4 className="text-black font-bold text-3xl mt-9 mb-[14px]">
        {props.title}
      </h4>
      <p className="font-medium text-justify">{props.desc}</p>
    </div>
  );
}
