import { Github } from 'lucide-react';
import { Button } from './ui/button';
import logo from 'figma:asset/cd33725f984e3659329de82f01a1a38475693b6f.png';

export function Navigation() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="ThreatSignal" className="h-8" />
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-700 hover:text-gray-900">
              Features
            </a>
            <a href="#docs" className="text-sm text-gray-700 hover:text-gray-900">
              Documentation
            </a>
            <a href="#community" className="text-sm text-gray-700 hover:text-gray-900">
              Community
            </a>
            <a href="#pricing" className="text-sm text-gray-700 hover:text-gray-900">
              Pricing
            </a>
          </div>
          
          <Button variant="outline" size="sm" className="gap-2" asChild>
            <a href="https://github.com/iTechDMV/ThreatSignal" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}