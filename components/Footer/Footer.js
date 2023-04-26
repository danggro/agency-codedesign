import Container from "../Container";
import NavLogo from "../Navigation/NavLogo";
import ItemFooter from "./ItemFooter";
import Send from "./Send";
import Sosmed from "./Sosmed";
import Github from "./Sosmed/Github";
import Google from "./Sosmed/Google";
import Instagram from "./Sosmed/Instagram";
import Linkedin from "./Sosmed/Linkedin";
import Twitter from "./Sosmed/Twitter";
import Youtube from "./Sosmed/Youtube";

export default function Footer() {
  return (
    <footer className="bg-[#262626] text-white mt-[198px] pb-[104px]">
      <Container>
        <div className="flex absolute items-center left-0 right-0 mx-20 -top-[109px] bg-primary gap-[66px] rounded-[20px] p-[56px]">
          <div className="space-y-[23px] w-[498px] flex-shrink-0">
            <div className="bg-[#F59E0B] rounded-full px-[14px] py-[5px] font-bold text-sm w-fit">
              <p>Subscribe To Our Email</p>
            </div>
            <h2 className="font-bold text-5xl leading-[48px]">
              For Latest News & Updates
            </h2>
            <p className="font-semibold">
              There are many varations of passages of Lorem Ipsum available
            </p>
          </div>
          <div className="relative w-full ">
            <input
              type="email"
              placeholder="Enter Your Email Address ..."
              className="bg-[#F59E0B] px-20 text-xl placeholder:text-white font-medium text-white w-full rounded-full outline-none focus:outline-white py-[26px]"
            />
            <button className="absolute right-0 top-0 rounded-full  grid place-items-center bg-[#FCD34D] w-[80px] h-[80px] hover:opacity-70">
              <Send />
            </button>
          </div>
        </div>
        <div className="flex pt-[260px] justify-between">
          <div>
            <NavLogo />
            <p className="mt-3 font-medium">Copyright &copy; 2021 By Depu</p>
          </div>
          <div>
            <ItemFooter
              title="Information Guide"
              sub1="Info Inquires Product"
              sub2="info@agency.co.id"
            />
          </div>
          <div>
            <ItemFooter
              title="Want to say hi?"
              sub1="General Inquiries"
              sub2="support@agency.co.id"
            />
          </div>
          <div>
            <ItemFooter title="Find us on social media." sub1="Social Media" />
            <ul className="flex gap-[23px]">
              <Sosmed sosmed="Google" icon={<Google />} />
              <Sosmed sosmed="Github" icon={<Github />} />
              <Sosmed sosmed="Instagram" icon={<Instagram />} />
              <Sosmed sosmed="Youtube" icon={<Youtube />} />
              <Sosmed sosmed="Linkedin" icon={<Linkedin />} />
              <Sosmed sosmed="Twitter" icon={<Twitter />} />
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
