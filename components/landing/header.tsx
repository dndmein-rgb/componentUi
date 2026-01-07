"use client";

import { Flame, Menu, Search, User, ChevronDown, Github, Twitter, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Link as ViewTransitionsLink } from "next-view-transitions";
import { ArrowUpRight } from "lucide-react";
import { PartyPopper } from "lucide-react";
import { ThemeToggle } from "../ui/theme-toggle";
import { Badge } from "../ui/badge";
import { HeaderPro } from "./header-pro";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function Header() {
  return (
    <>
      {/* Mobile Pro Banner completely separate from sticky header */}
      <div className="sm:hidden w-full p-2.5 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10">
        <Link
          href="#"
          target="_blank"
          className="flex items-center justify-center gap-2"
        >
          <span className="flex items-center gap-2">
            <PartyPopper className="w-3.5 h-3.5" />
            <span className="text-transparent bg-linear-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text font-semibold">
              Explore new components
            </span>
          </span>

          <div className="group relative inline-flex items-center gap-2 px-3 py-1 text-sm rounded-lg bg-zinc-900 dark:bg-zinc-100 transition-colors">
            <div className="absolute inset-0 rounded-lg bg-linear-to-r from-orange-500 via-amber-500 to-orange-600 opacity-40 group-hover:opacity-80 blur-sm transition-opacity duration-500" />
            <div className="relative z-10 flex items-center gap-2">
              <span className="text-white dark:text-zinc-900">
                ComponentsCafe Pro
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/90 dark:text-zinc-900/90" />
            </div>
          </div>
        </Link>
      </div>

      <div className="sticky top-0 left-0 right-0 z-50 border-b border-white/30 dark:border-white/20 bg-white/20 dark:bg-black/20 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left section - Logo and primary navigation */}
            <div className="flex items-center space-x-10">
              <Link href="/" className="flex items-center space-x-2">
                <div className="relative">
                  <Flame className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <span className="hidden sm:block text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                  ComponentsCafe
                </span>
              </Link>
              
              <nav className="hidden md:flex space-x-8">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 transition-colors">
                    <span>Components</span>
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56 bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-white/30 dark:border-white/20 shadow-xl shadow-black/10 dark:shadow-black/20">
                    <DropdownMenuItem asChild>
                      <Link href="/docs/components/button">Buttons</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/docs/components/card">Cards</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/docs/components/input">Inputs</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/docs/components/ai-input">AI Components</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/docs/components/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/docs/components/pricing">Pricing</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/docs/components/faq">FAQ</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/docs/components/alert">Alerts</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/docs/components/list">Lists</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/docs/components/text">Text</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <Link href="/docs/blocks" className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 transition-colors">
                  Blocks
                </Link>
                
                <Link href="/pricing" className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 transition-colors">
                  Pricing
                </Link>
                
                <Link href="/docs" className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 transition-colors">
                  Documentation
                </Link>
              </nav>
            </div>
            
            {/* Center search bar for larger screens */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-10">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search components, templates, guides..."
                  className="w-full pl-10 pr-4 py-2 bg-white/40 dark:bg-black/40 border border-white/40 dark:border-white/30 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-md shadow-inner shadow-white/10 dark:shadow-black/10"
                />
              </div>
            </div>
            
            {/* Right section - Actions and user menu */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2">
                <Button variant="ghost" size="icon" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10">
                  <MessageSquare className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="hidden md:flex items-center space-x-3">
                <Button variant="outline" size="sm" className="hidden md:flex bg-white/30 dark:bg-black/30 backdrop-blur-md border border-white/30 dark:border-white/20 shadow-sm">
                  Sign In
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white">
                  Get Started
                </Button>
              </div>
              
              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <div className="md:hidden">
                  <Button variant="ghost" size="icon" className="bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10">
                    <Menu className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
