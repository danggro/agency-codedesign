import { useState } from "react";
import ButtonArrow from "../ButtonArrow";
import Container from "../Container";
import HeadSection from "../HeadSection";
import CardBlog from "./CardBlog";

export default function SectionBlog() {
  const [curr, setCurr] = useState(1);
  const arr = [0, 1, 2, 3, 4, 5];

  const next = () => {
    setCurr((curr) => (curr == arr.length - 1 ? 0 : curr + 1));
  };
  const prev = () => {
    setCurr((curr) => (curr == 0 ? arr.length - 1 : curr - 1));
  };
  return (
    <section id="Blog" className="pt-[76px] ">
      <Container>
        <div className="text-center">
          <HeadSection section="Blog" title="Recent Blog Daily" />
        </div>
        <div className="overflow-x-hidden">
          <div
            className="mt-[130px] transition-all duration-500 ease-out gap-5 flex justify-between"
            style={{ transform: `translateX(-${curr * 33.5}%)` }}
          >
            <CardBlog
              href="/"
              src="blog-1.png"
              alt="Blog1"
              title="Protection From Harvesters"
              subCat="UI UX Kits"
              mainCat="Graphic Templates"
              date="26 Desember 2021"
            />
            <CardBlog
              href="/"
              src="blog-2.png"
              alt="Blog2"
              title="Drive Booking Order"
              subCat="Mobile UI Kit"
              mainCat="Graphic Templates"
              date="26 Desember 2021"
            />
            <CardBlog
              href="/"
              src="blog-3.png"
              alt="Blog3"
              title="Music Tracker Online"
              subCat="Music UI Kit"
              mainCat="Graphic Templates"
              date="26 Desember 2021"
            />
            <CardBlog
              href="/"
              src="blog-2.png"
              alt="Blog3"
              title="Music Tracker Online"
              subCat="Music UI Kit"
              mainCat="Graphic Templates"
              date="26 Desember 2021"
            />
            <CardBlog
              href="/"
              src="blog-1.png"
              alt="Blog3"
              title="Music Tracker Online"
              subCat="Music UI Kit"
              mainCat="Graphic Templates"
              date="26 Desember 2021"
            />
            <CardBlog
              href="/"
              src="blog-3.png"
              alt="Blog3"
              title="Music Tracker Online"
              subCat="Music UI Kit"
              mainCat="Graphic Templates"
              date="26 Desember 2021"
            />
          </div>
        </div>

        <ButtonArrow left={prev} right={next} />
      </Container>
    </section>
  );
}
