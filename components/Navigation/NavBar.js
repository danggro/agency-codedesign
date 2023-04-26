import Button from "../Button";
import Container from "../Container";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";

export default function NavBar() {
  return (
    <nav className="mb-[143px]">
      <Container>
        <div className="flex justify-between pt-[51px] items-center">
          <NavLogo />
          <NavLink />
          <Button variant="small">Get Started</Button>
        </div>
      </Container>
    </nav>
  );
}
