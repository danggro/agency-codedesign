import Image from "next/image";
import Container from "../Container";
import HeadSection from "../HeadSection";
import Project1 from "@/public/project/Project-1.png";
import Project2 from "@/public/project/Project-2.png";
import Project3 from "@/public/project/Project-3.png";

export default function SectionProject() {
  return (
    <section className="pt-[191px]">
      <Container>
        <div className="text-center">
          <HeadSection
            section="Featured Project"
            title="The Works We Are Proud Of"
          />
        </div>
      </Container>
      <div className="mt-[73px] w-screen overflow-auto flex gap-[49px]">
        <Image src={Project1} alt="Project1" className="flex-shrink-0" />
        <Image src={Project2} alt="Project1" className="flex-shrink-0" />
        <Image src={Project3} alt="Project1" className="flex-shrink-0" />
      </div>
    </section>
  );
}
