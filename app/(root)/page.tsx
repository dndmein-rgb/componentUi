
import Text_01 from "@/components/codesnippetui/text/text-01";
import Text_02 from "@/components/codesnippetui/text/text-02";
import Text_03 from "@/components/codesnippetui/text/text-03";
import Text_04 from "@/components/codesnippetui/text/text-04";
import Text_05 from "@/components/codesnippetui/text/text-05";
import Text_06 from "@/components/codesnippetui/text/text-06";
import HeroSection from "@/components/landing/hero";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black/50 overflow-x-hidden">
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen px-6 lg:px-4 gap-4 sm:gap-12">
        <HeroSection />
       <Text_01 />
       <Text_02 />
       <Text_03 />
       <Text_04 />
       <Text_05 />
       <Text_06 />
       
        
      </div>
    </main>
  );
}
