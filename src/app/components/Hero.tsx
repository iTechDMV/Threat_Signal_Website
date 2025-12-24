import { Github, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-teal-950 to-slate-900 py-20 sm:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1731846584223-81977e156b2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJlYXQlMjBkZXRlY3Rpb24lMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzY2NTU1NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Security Dashboard"
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-teal-500/20 border border-teal-400/30 px-4 py-2 text-sm text-teal-200 backdrop-blur-sm">
            <span>⚡</span>
            <span>Open Source Security Automation</span>
          </div>
          
          <h1 className="mb-6 text-white">
            Detect Threats. Signal Alerts. <br />
            <span className="text-teal-400">Automate Security.</span>
          </h1>
          
          <p className="mb-8 text-gray-300">
            ThreatSignal is an open-source platform that automates security workflows, detects vulnerabilities,
            and enforces compliance policies across your entire infrastructure—all from a single command.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="gap-2 bg-teal-600 hover:bg-teal-700 text-white" asChild>
              <a href="https://github.com/iTechDMV/ThreatSignal" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                View on GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 border-teal-400 text-teal-400 hover:bg-teal-400/10">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-teal-400"></div>
              <span>MIT Licensed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-red-400"></div>
              <span>Active Development</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-teal-300"></div>
              <span>Community Driven</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}