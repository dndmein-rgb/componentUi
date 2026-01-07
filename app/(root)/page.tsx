import HeroSection from "@/components/landing/hero";
import Features from "@/components/landing/features";
import { ShowcaseSection } from "@/components/landing/showcase";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black/50 overflow-x-hidden">
      <div className="relative">
        {/* Background effect - contained within the main container */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 top-20 w-[1000px] h-[800px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl opacity-50" />
          <div className="absolute -right-40 bottom-20 w-[1000px] h-[800px] bg-gradient-to-l from-blue-500/10 to-teal-500/10 rounded-full blur-3xl opacity-50" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="mb-20">
            <HeroSection />
          </div>
          <div className="mb-20">
            <Features />
          </div>
          <div className="mb-20">
            <ShowcaseSection />
          </div>
        </div>
      </div>
    </main>
  );
}
