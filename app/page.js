import { Hero } from "@/components";
import { VideoSection } from "@/components";
import { SizeSection } from "@/components";
import { Books } from "@/components";


export default function Home() {
  return (
    <main className="">
      <Hero />
      <VideoSection />
      <SizeSection />
      <Books />
    </main>
  );
}
