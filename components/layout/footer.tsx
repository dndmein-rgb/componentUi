import React from 'react';
import Link from 'next/link';
import { Flame, Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-black border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Flame className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                ComponentsCafe
              </span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4 max-w-md">
              Beautifully crafted UI components to help you build modern, responsive websites with ease.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300 text-sm transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/docs/components" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300 text-sm transition-colors">
                  Components
                </Link>
              </li>
              <li>
                <Link href="/docs/blocks" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300 text-sm transition-colors">
                  Blocks
                </Link>
              </li>
              <li>
                <Link href="/examples" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300 text-sm transition-colors">
                  Examples
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300 text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300 text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300 text-sm transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300 text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300 text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300 text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/license" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300 text-sm transition-colors">
                  License
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300 text-sm transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-200 dark:border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            © {new Date().getFullYear()} ComponentsCafe. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center text-sm text-zinc-600 dark:text-zinc-400">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" /> for developers
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;