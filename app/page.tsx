import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";

export default async function Home() {

  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Projects />
      <Projects />
      {/* <Skills /> */}
      <About />
      {/* <Experience /> */}
      <Contact />
    </main>
  );
}

