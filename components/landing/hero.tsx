"use client";
import React from "react";
import { motion } from "motion/react";
import { Sparkles, Star, Zap, ArrowRight } from "lucide-react";
import TailwindCSS from "../icons/tailwind-css";
import { BrowseComponentsButton } from "../ui/browse-button";
import { BrowseBlocksButton } from "../ui/browse-blocks";
import Link from "next/link";
import Card_02 from "../codesnippetui/card/card-02";
import Card_03 from "../codesnippetui/card/card-03";
import AIInput_01 from "../codesnippetui/ai-input/ai-input-01";
import AIInput_02 from "../codesnippetui/ai-input/ai-input-02";
import AIInput_03 from "../codesnippetui/ai-input/ai-input-03";
import AIInput_04 from "../codesnippetui/ai-input/ai-input-04";
import Btn02 from "../codesnippetui/button/btn-02";
import Btn03 from "../codesnippetui/button/btn-03";
import Btn10 from "../codesnippetui/button/btn-10";
import Btn09 from "../codesnippetui/button/btn-09";
import Btn06 from "../codesnippetui/button/btn-06";
import Btn07 from "../codesnippetui/button/btn-07";
import Input_02 from "../codesnippetui/input/input-02";
import Input_03 from "../codesnippetui/input/input-03";
import Input_04 from "../codesnippetui/input/input-04";
import Input_08 from "../codesnippetui/input/input-08";
import Input_09 from "../codesnippetui/input/input-09";
import Input11 from "../codesnippetui/input/input-11";
import Card_LiquidProgress from "../codesnippetui/cardliquid";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Profile_03 from "../codesnippetui/profile/profile-03";

const HeroSection = () => {
  return (
    <div className="mx-auto w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 ">
      {/* LEFT SIDE - TITLE & CTA */}
      <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="outline" className="flex items-center gap-1 text-xs px-3 py-1.5">
            <Star className="h-3 w-3 text-yellow-500 fill-current" />
            Trusted by 5,000+ developers
          </Badge>
          <Badge variant="secondary" className="text-xs px-3 py-1.5">
            New: AI-Powered Components
          </Badge>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-100">
            Build stunning UIs with <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-600 via-pink-500 to-orange-500 dark:from-purple-400 dark:via-pink-400 dark:to-orange-400">
              zero effort
            </span>
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-zinc-700 dark:text-zinc-300 max-w-lg mx-auto lg:mx-0">
            A curated collection of <span className="font-semibold text-zinc-900 dark:text-zinc-100">100+ premium UI components</span> crafted with <span className="font-semibold text-purple-600 dark:text-purple-400">Tailwind CSS</span> and <span className="font-semibold text-fuchsia-600 dark:text-fuchsia-400">shadcn/ui</span> for modern React applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md"
        >
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              View Demo
            </Button>
          </div>
        </motion.div>
        
        <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 text-sm text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-yellow-500" />
            <span>Lightning Fast</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-blue-500" />
            <span>Fully Responsive</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-purple-500" />
            <span>Customizable</span>
          </div>
        </div>
      </div>
      
      {/* RIGHT SIDE - COMPONENTS SHOWCASE */}
      <div className="w-full lg:w-[55%] flex flex-col gap-8">
        {/* Featured Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-full">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-lg overflow-hidden h-[490px]"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Profile Card</span>
              <Badge variant="secondary" className="text-xs">New</Badge>
            </div>
            <div className="h-[420px]  flex items-center justify-center overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <Card_02 />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-lg overflow-hidden h-[420px]"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Premium Card</span>
              <Badge variant="outline" className="text-xs border-green-500 text-green-600 dark:text-green-400">
                Popular
              </Badge>
            </div>
            <div className="h-[320px] flex items-center justify-center overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <Card_03 />
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* AI Input Component */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-lg overflow-hidden"
        >
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">AI-Powered Input</span>
            <Badge className="bg-gradient-to-r from-purple-600 to-pink-500 text-xs">AI</Badge>
          </div>
          <div className="h-32 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <AIInput_04 />
            </div>
          </div>
        </motion.div>
        
        {/* Buttons and Status Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-lg overflow-hidden h-60"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Interactive Buttons</span>
            </div>
            <div className="h-40 flex flex-col gap-3 justify-center items-center overflow-hidden">
            <div className="w-full h-full flex flex-col gap-3 justify-center items-center">
              <Link href="/docs/components/button">
                <Btn02 />
              </Link>
              <Link href="/docs/components/button">
                <Btn07 />
              </Link>
            </div>
          </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-lg overflow-hidden h-[520px]"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Progress Status</span>
            </div>
            <div className="h-[460px] flex items-center justify-center overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <Card_LiquidProgress />
            </div>
          </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;