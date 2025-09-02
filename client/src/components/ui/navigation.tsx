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
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            <Link href="/terms-of-service" className="text-purple-400 hover:text-purple-300 transition-colors mr-4">
              Terms
            </Link>
            and
            <Link href="/privacy-policy" className="text-purple-400 hover:text-purple-300 transition-colors ml-4">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
