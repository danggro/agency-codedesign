import Link from "next/link";

export default function CardBlog(props) {
  return (
    <Link href={props.href} className="flex-shrink-0 min-w-[412px] pb-10 ">
      <div
        className="text-center grid bg-no-repeat shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]  rounded-md place-items-center h-[350px] text-white  "
        style={{
          backgroundImage: `url(/blog/${props.src})`,
          backgroundSize: "contain",
        }}
      >
        <div className="space-y-[7px]">
          <h5 className="text-xl font-bold">{props.title}</h5>
          <div className="flex items-center justify-center text-sm font-medium text-center">
            {props.subCat}
            <div className="w-[7px] h-[7px]"></div>
            {props.mainCat}
          </div>
          <p className="text-xs ">{props.date}</p>
        </div>
      </div>
    </Link>
  );
}
