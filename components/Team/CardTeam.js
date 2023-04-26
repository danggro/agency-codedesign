import Image from "next/image";
import Link from "next/link";
import ItemCard from "./ItemCard";
import Facebook from "./Icon/Facebook";
import Instagram from "./Icon/Instagram";
import Linkedin from "./Icon/Linkedin";

export default function CardTeam(props) {
  return (
    <div className="relative rounded-sm shadow-[0px_4px_40px_0_rgba(0,0,0,0.1)]">
      <Image src={props.src} alt={props.alt} className="rounded-sm" />
      <div className="px-[13px] mt-2 mb-[22px]">
        <h4 className="font-bold">{props.name}</h4>
        <p className="text-[#737373] text-xs font-medium">{props.resp}</p>
      </div>
      <div className="flex absolute gap-[10px] bottom-[55px] right-2">
        <Link target="_blank" href={`http://facebook.com/${props.facebook}`}>
          <ItemCard>
            <Facebook />
          </ItemCard>
        </Link>
        <Link target="_blank" href={`http://instagram.com/${props.instagram}`}>
          <ItemCard>
            <Instagram />
          </ItemCard>
        </Link>
        <Link target="_blank" href={`http://linkedin.com/${props.linkedin}`}>
          <ItemCard>
            <Linkedin />
          </ItemCard>
        </Link>
      </div>
    </div>
  );
}
