import SectionBlog from "@/components/Blog/SectionBlog";
import Footer from "@/components/Footer/Footer";
import SectionHero from "@/components/Hero/SectionHero";
import NavBar from "@/components/Navigation/NavBar";
import SectionPartner from "@/components/Partner/SectionPartner";
import SectionPricing from "@/components/Pricing/SectionPricing";
import SectionProject from "@/components/Project/SectionProject";
import SectionServices from "@/components/Services/SectionServices";
import SectionTeam from "@/components/Team/SectionTeam";
import SectionTesti from "@/components/Testi/SectionTesti";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Agency</title>
      </Head>
      <NavBar />
      <SectionHero />
      <SectionServices />
      <SectionProject />
      <SectionPricing />
      <SectionTeam />
      <SectionTesti />
      <SectionBlog />
      <SectionPartner />
      <Footer />
    </>
  );
}
