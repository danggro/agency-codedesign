import { useState } from "react";
import Container from "../Container";
import HeadSection from "../HeadSection";
import CardTeam from "./CardTeam";
import Team1 from "@/public/team/team-member-1.png";
import Team2 from "@/public/team/team-member-2.png";
import Team3 from "@/public/team/team-member-3.png";
import ButtonArrow from "../ButtonArrow";

export default function SectionTeam() {
  const [curr, setCurr] = useState(0);
  const arr = [0, 1, 2, 3, 4];

  const next = () => {
    setCurr((curr) => (curr == arr.length - 1 ? 0 : curr + 1));
  };
  const prev = () => {
    setCurr((curr) => (curr == 0 ? arr.length - 1 : curr - 1));
  };

  return (
    <section className="pt-[147px]">
      <Container>
        <div className="flex gap-[63px]">
          <div className="max-w-[406px] mt-[35px] flex-shrink-0">
            <HeadSection section="Team Work" title="Our Professional Team" />
            <p className="text-lg text-justify w-10/12 mt-[33px]">
              Fusce dignissim blandit justo, eget elementum risus tristique.
              Nunc lacus lacus, sit amet accumsan est pulvinar non.
            </p>
          </div>
          <div className="flex-shrink-0 pb-10 pl-10 overflow-hidden">
            <div
              className="flex gap-[60px] transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${curr * 21}%)` }}
            >
              <CardTeam
                src={Team1}
                alt="Team1"
                name="Wade Warren"
                resp="Marketing SEO Specialist"
                facebook="wadewarren"
                instagram="wadewarren"
                linkedin="wadewarren"
              />
              <CardTeam
                src={Team2}
                alt="Team2"
                name="Robert Fox"
                resp="Professional UI UX Designer"
                facebook="robertfox"
                instagram="robertfox"
                linkedin="robertfox"
              />
              <CardTeam
                src={Team3}
                alt="Team3"
                name="Jenny Wilson"
                resp="Product Manager & Web Designer"
                facebook="jennywilson"
                instagram="jennywilson"
                linkedin="jennywilson"
              />
              <CardTeam
                src={Team1}
                alt="Team1"
                name="Wade Warren"
                resp="Marketing SEO Specialist"
                facebook="wadewarren"
                instagram="wadewarren"
                linkedin="wadewarren"
              />
              <CardTeam
                src={Team2}
                alt="Team2"
                name="Robert Fox"
                resp="Professional UI UX Designer"
                facebook="robertfox"
                instagram="robertfox"
                linkedin="robertfox"
              />
            </div>
          </div>
        </div>

        <ButtonArrow left={prev} right={next} />
      </Container>
    </section>
  );
}
