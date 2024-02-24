import { Hero } from "@/components";
import { VideoSection } from "@/components";
import { SizeSection } from "@/components";
import { Books } from "@/components";
import { FunFacts } from "@/components";
import { Messages } from "@/components";
import { Sale } from "@/components";
import { FAQ } from "@/components";
import { Comments } from "@/components";
import { Badges } from "@/components";
import { Footer } from "@/components";


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
      <FAQ />
      <Comments />
      <Badges />
      <Footer />
    </main>
  );
}
