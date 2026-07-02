import About from "../section/About";
import Contact from "../section/Contact";
import Hero from "../section/Hero";
import Pricing from "../section/Pricing";
import Navbar from "../component/layout/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <main   >
        <Hero />
        <About />
        <Pricing />
        <Contact />
      </main>

   
    </>
  );
}