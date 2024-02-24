import { Hero } from "@/components";
import { VideoSection } from "@/components";
import { SizeSection } from "@/components";
import { Books } from "@/components";
import { FunFacts } from "@/components";
import { Messages } from "@/components";
import { Sale } from "@/components";


export default function Home() {
  return (
    <main className="">
      <Hero />
      <VideoSection />
      <SizeSection />
      <Books />
      <FunFacts />
      <Messages />
      <Sale />
    </main>
  );
}
