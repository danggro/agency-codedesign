import Link from "next/link";
import Button from "../Button";
import Container from "../Container";
import Image from "next/image";
import HeroPic from "@/public/hero/Pic.png";
import Frame1 from "@/public/hero/frame-1.png";
import Frame2 from "@/public/hero/frame-2.png";

export default function SectionHero() {
  return (
    <section className="mb-[197px]">
      <Container>
        <div className="flex justify-between">
          <div className="w-5/12">
            <div className="space-y-10 mt-[31px]">
              <div className="bg-primary w-fit font-bold rounded-full px-[37px] py-[9px]">
                Digital Manager
              </div>
              <h1 className="font-bold text-[60px] leading-[60px]">
                Digital Products For Business
              </h1>
              <p className="text-3xl text-justify">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="mt-[130px] flex items-center justify-between">
              <Button variant="large">Get Started</Button>
              <span className="text-2xl font-bold">OR</span>
              <Link
                href={"/"}
                className="text-2xl font-bold underline text-primary underline-offset-8 hover:text-black"
              >
                Watch Video
              </Link>
            </div>
          </div>
          <div className="relative flex justify-end w-6/12">
            <Image src={HeroPic} alt="HeroPic" className="mr-[30px]" />
            <Image
              src={Frame1}
              alt="Frame1"
              className="absolute rounded-md left-0 top-0 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1)]"
            />
            <Image
              src={Frame2}
              alt="Frame2"
              className="absolute right-0 bottom-[82px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1)]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
