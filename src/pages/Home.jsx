import About from "../ui/About";
import Hero from "../ui/Hero";
import Navbar from "../ui/Navbar";
import OurServices from "../ui/OurServices";
import Partners from "../ui/Partners";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
     <Partners/>
     <About/>
     <OurServices/>

    </>
  );
}
