import Container from "../Container";
import HeadSection from "../HeadSection";
import CardPricing from "./CardPricing";
import ItemCard from "./ItemCard";

export default function SectionPricing() {
  return (
    <section className="pt-[191px]">
      <Container>
        <div className="w-6/12 mx-auto text-center">
          <HeadSection
            section="Pricing Plan"
            title="The Best Solutions for Our Clietns"
          />
          <p className="mt-3 text-lg">
            Fusce dignissim blandit justo, eget elementum risus tristique. Nunc
            lacus lacus, sit amet accumsan est pulvinar non. Praesent tristique
            enim lorem.
          </p>
        </div>
        <div className="mt-[87px] flex gap-[84px]">
          <CardPricing cat="Save Plan" price="19">
            <ItemCard>SEO Audits</ItemCard>
            <ItemCard>UI/UX Audits</ItemCard>
            <ItemCard>Management Site</ItemCard>
          </CardPricing>
          <CardPricing cat="Super Plan" price="79">
            <ItemCard>SEO Audits</ItemCard>
            <ItemCard>UI/UX Audits</ItemCard>
            <ItemCard>Management Site</ItemCard>
            <ItemCard>Free Prototype UI/UX</ItemCard>
            <ItemCard>Support 24x7 Day</ItemCard>
          </CardPricing>
          <CardPricing cat="Expert Plan" price="99">
            <ItemCard>SEO Audits</ItemCard>
            <ItemCard>UI/UX Audits</ItemCard>
            <ItemCard>Management Site</ItemCard>
            <ItemCard>Free Prototype UI/UX</ItemCard>
            <ItemCard>1 Free Build Dev Apps</ItemCard>
            <ItemCard>Support 24x7 Day</ItemCard>
          </CardPricing>
        </div>
      </Container>
    </section>
  );
}
