export default function ItemCard(props) {
  return (
    <li className="flex justify-center gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="#FACC15"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M5 13l4 4L19 7"
        ></path>
      </svg>
      <span className="text-xl font-medium">{props.children}</span>
    </li>
  );
}
