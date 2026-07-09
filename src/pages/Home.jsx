import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Services from "../components/home/Services";
import Process from "../components/home/Process";
import Testimonials from "../components/home/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Testimonials />
    </main>
  );
}
