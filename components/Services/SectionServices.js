import Button from "../Button";
import Container from "../Container";
import CardServices from "./CardServices";
import Brand from "./Icon/Brand";
import Design from "./Icon/Design";
import Marketing from "./Icon/Marketing";
import WebDeveloper from "./Icon/WebDeveloper";

export default function SectionServices() {
  return (
    <section id="Services">
      <Container>
        <div className="flex justify-between">
          <div className="w-5/12 mt-[110px]">
            <h4 className="text-3xl font-bold text-primary">Our Services</h4>
            <h1 className="font-bold text-[60px] leading-[60px] mt-6 mb-[60px]">
              We Create Best Digital Products
            </h1>
            <p className="text-3xl text-justify">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className="mt-[149px]">
              <Button variant="large">Contact Us</Button>
            </div>
          </div>
          <div className="flex flex-wrap justify-between w-6/12 ">
            <div className="space-y-[72px]">
              <CardServices
                icon={<Design />}
                title="UX/UI Design"
                desc="Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              />
              <CardServices
                icon={<WebDeveloper />}
                title="Web Developer"
                desc="Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              />
            </div>
            <div className="space-y-[72px] mt-[72px]">
              <CardServices
                icon={<Marketing />}
                title="Marketing & SEO"
                desc="Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              />
              <CardServices
                icon={<Brand />}
                title="Brand Identity"
                desc="Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
