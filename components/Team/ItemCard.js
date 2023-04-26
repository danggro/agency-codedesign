export default function ItemCard(props) {
  return (
    <div className="grid bg-white text-[#404040] hover:text-primary place-items-center w-[30px] h-[30px] rounded-full">
      {props.children}
    </div>
  );
}
