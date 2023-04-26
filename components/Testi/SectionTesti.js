import { useState } from "react";
import HeadSection from "../HeadSection";
import CardTesti from "./CardTesti";
import Testi1 from "@/public/testi/testi-1.png";
import Testi2 from "@/public/testi/testi-2.png";
import Testi3 from "@/public/testi/testi-3.png";
import ButtonArrow from "../ButtonArrow";
import Container from "../Container";

export default function SectionTesti() {
  const [curr, setCurr] = useState(1);
  const arr = [0, 1, 2];

  const next = () => {
    setCurr((curr) => (curr == arr.length - 1 ? 0 : curr + 1));
  };
  const prev = () => {
    setCurr((curr) => (curr == 0 ? arr.length - 1 : curr - 1));
  };
  return (
    <section className="pt-[66px]">
      <div className="text-center mb-[104px]">
        <HeadSection section="Testimonial" title="What Our Client's Say" />
        <p className="text-lg mt-[10px]">
          Nunc lacus lacus, sit amet accumsan est pulvinar non. Praesent
          tristique enim lorem.
        </p>
      </div>
      <div
        className="gap-[85px] ml-[456px] flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${curr * 58}%)` }}
      >
        <CardTesti
          name="Albert Flores"
          from="Mc Donald's"
          src={Testi1}
          alt="Testi1"
          desc="Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet congue consequat. In posuere, nunc sit amet laoreet blandit, urna sapien imperdiet lectus, et molestie sem tortor quis dui."
        />
        <CardTesti
          name="Theresa Webb"
          from="L'Oréal"
          src={Testi2}
          alt="Testi2"
          desc="Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet congue consequat. In posuere, nunc sit amet laoreet blandit, urna sapien imperdiet lectus, et molestie sem tortor quis dui."
        />
        <CardTesti
          name="Dianne Russell"
          from="Starbucks"
          src={Testi3}
          alt="Testi3"
          desc="Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet congue consequat. In posuere, nunc sit amet laoreet blandit, urna sapien imperdiet lectus, et molestie sem tortor quis dui."
        />
      </div>
      <Container>
        <div className="mt-[50px]">
          <ButtonArrow left={prev} right={next} />
        </div>
      </Container>
    </section>
  );
}
