import Button from "../Button";

export default function CardPricing(props) {
  return (
    <div className="w-4/12 py-12 text-center flex flex-col bg-[#f5f5f5] shadow-[0px_4px_40px_0_rgba(0,0,0,0.1)] ">
      <div className="space-y-[27px] mb-[25px] ">
        <h4 className="text-3xl font-bold">{props.cat}</h4>
        <h3 className="text-6xl font-bold">${props.price}</h3>
        <ul>{props.children}</ul>
      </div>
      <div className="flex items-end justify-center flex-shrink-0 grow">
        <Button variant="large">Buy Now</Button>
      </div>
    </div>
  );
}
