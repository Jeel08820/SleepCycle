import { Link } from "wouter";
import { Button } from "./button";
import { Moon, Calculator, Lightbulb, Home } from "lucide-react";

export function Navigation() {
  return (
    <nav className="bg-slate-800/80 backdrop-blur-md border-b border-purple-400/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Moon className="h-8 w-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
              <div className="absolute -inset-1 bg-purple-500/20 rounded-full blur-sm group-hover:bg-purple-500/30 transition-all"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              SleepCycle
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-purple-500/20 transition-all">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
            </Link>
            
            <Link href="/sleep-calculator">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-purple-500/20 transition-all">
                <Calculator className="mr-2 h-4 w-4" />
                Calculator
              </Button>
            </Link>
            
            <Link href="/sleep-tips">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-purple-500/20 transition-all">
                <Lightbulb className="mr-2 h-4 w-4" />
                Sleep Tips
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function FooterNavigation() {
  return (
    <footer className="bg-slate-800/50 border-t border-gray-700/50 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Moon className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                SleepCycle
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted companion for optimizing sleep cycles and achieving better rest. 
              Based on scientific research and 90-minute sleep cycle principles.
            </p>
            <div className="flex space-x-4">
              <Link href="/sleep-calculator">
                <Button size="sm" className="bg-purple-500 hover:bg-purple-600 text-white">
                  Try Calculator
                </Button>
              </Link>
              <Link href="/sleep-tips">
                <Button size="sm" variant="outline" className="border-purple-400/30 text-purple-300 hover:bg-purple-500/20">
                  Sleep Tips
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-purple-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sleep-calculator" className="text-gray-300 hover:text-purple-300 transition-colors">
                  Sleep Calculator
                </Link>
              </li>
              <li>
                <Link href="/sleep-tips" className="text-gray-300 hover:text-purple-300 transition-colors">
                  Sleep Tips
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-purple-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-purple-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-purple-300 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Sleep Science</span>
              </li>
              <li>
                <span className="text-gray-300">Circadian Rhythm</span>
              </li>
              <li>
                <span className="text-gray-300">Sleep Hygiene</span>
              </li>
              <li>
                <span className="text-gray-300">REM Sleep</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 SleepCycle. All rights reserved. This tool is for educational purposes only and should not replace professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
