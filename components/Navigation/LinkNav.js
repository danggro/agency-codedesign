export default function LinkNav(props) {
  return (
    <li>
      <a
        href={props.href}
        className="text-2xl font-semibold leading-8 text-black hover:underline"
      >
        {props.children}
      </a>
    </li>
  );
}
