import CardSection from "@/components/CardSection";
import Footer from "@/components/Footer";
import HeaderMain from "@/components/HeaderMain";
import HeaderTop from "@/components/HeaderTop";
import HeroComp from "@/components/HeroComp";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <HeaderTop />
  <HeaderMain />
  <Navbar />
  <HeroComp />
  <CardSection />
  <Footer />
  </>
  );
}
