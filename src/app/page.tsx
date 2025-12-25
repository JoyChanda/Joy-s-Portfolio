import Hero from "@/components/Hero";
import Header from "@/components/Header";
import SocialBar from "@/components/SocialBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <SocialBar />
      <Hero />
    </main>
  );
}


