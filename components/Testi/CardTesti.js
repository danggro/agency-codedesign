import Image from "next/image";

export default function CardTesti(props) {
  return (
    <div className="max-w-[500px] px-[45px] py-[43px] bg-[#f5f5f5] shadow-[0px_4px_40px_0_rgba(0,0,0,0.1)] flex-shrink-0 rounded-md">
      <div className="flex items-center gap-4 mb-[31px]">
        <Image src={props.src} alt={props.alt} />
        <div>
          <h5 className="font-bold">{props.name}</h5>
          <p className="text-xs font-medium text-gray-500">{props.from}</p>
        </div>
      </div>
      <p className="text-sm font-medium text-justify">{props.desc}</p>
    </div>
  );
}
