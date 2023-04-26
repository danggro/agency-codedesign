import Container from "../Container";
import Dropbox from "./Logo/Dropbox";
import Google from "./Logo/Google";
import Shopify from "./Logo/Shopify";
import Slack from "./Logo/Slack";

export default function SectionPartner() {
  return (
    <section className="mt-[90px]">
      <Container>
        <div className="flex items-center justify-between">
          <div className="text-center">
            <h2 className="text-5xl font-extrabold text-primary">100 +</h2>
            <h4 className="mt-[14px] font-semibold text-2xl text-gray-600">
              Trusted Companies
            </h4>
          </div>
          <div className="flex items-center gap-[76px]">
            <Dropbox />
            <Google />
            <Slack />
            <Shopify />
          </div>
        </div>
      </Container>
    </section>
  );
}
