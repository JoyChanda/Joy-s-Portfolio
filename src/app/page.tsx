import Hero from "@/components/Hero";
import Header from "@/components/Header";
import SocialBar from "@/components/SocialBar";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <SocialBar />
      <div className="w-full">
        <Hero />
        <About />
        <Projects />
      </div>
    </main>
  );
}




