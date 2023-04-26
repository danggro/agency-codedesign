import Link from "next/link";

export default function Sosmed(props) {
  return (
    <li className="w-[35px] h-[35px] rounded-full bg-white text-primary hover:text-[#262626] flex items-center justify-center pt-[1px]">
      <Link target="_blank" href={`https://${props.sosmed}.com`}>
        {props.icon}
      </Link>
    </li>
  );
}
