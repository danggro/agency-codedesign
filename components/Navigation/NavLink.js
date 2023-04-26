import LinkNav from "./LinkNav";

export default function NavLink() {
  return (
    <ul className="flex gap-[61px]">
      <LinkNav href="#Home">Home</LinkNav>
      <LinkNav href="#Services">Services</LinkNav>
      <LinkNav href="#About">About</LinkNav>
      <LinkNav href="#Blog">Blog</LinkNav>
      <LinkNav href="#Contact">Contact</LinkNav>
    </ul>
  );
}
