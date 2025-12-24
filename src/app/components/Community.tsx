import { Github, Star, Users } from 'lucide-react';
import { Button } from './ui/button';

export function Community() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="mb-4">Join Our Growing Community</h2>
            <p className="mb-6 text-gray-600">
              ThreatSignal is built and maintained by a global community of security professionals, 
              developers, and DevOps engineers. Contribute code, report issues, or help improve documentation.
            </p>
            
            <div className="mb-8 grid grid-cols-3 gap-6">
              <div>
                <div className="mb-1 flex items-center gap-2 text-teal-600">
                  <Star className="h-5 w-5" />
                  <span className="text-2xl">Growing</span>
                </div>
                <p className="text-sm text-gray-600">GitHub Stars</p>
              </div>
              <div>
                <div className="mb-1 flex items-center gap-2 text-red-500">
                  <Github className="h-5 w-5" />
                  <span className="text-2xl">Open</span>
                </div>
                <p className="text-sm text-gray-600">Contributors</p>
              </div>
              <div>
                <div className="mb-1 flex items-center gap-2 text-teal-600">
                  <Users className="h-5 w-5" />
                  <span className="text-2xl">Active</span>
                </div>
                <p className="text-sm text-gray-600">Community</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button className="gap-2 bg-teal-600 hover:bg-teal-700" asChild>
                <a href="https://github.com/iTechDMV/ThreatSignal" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  Contribute on GitHub
                </a>
              </Button>
              <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                View Documentation
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1705147293087-9e183bf149ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VjdXJpdHklMjBtb25pdG9yaW5nfGVufDF8fHx8MTc2NjU1NTUwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Network security monitoring and threat detection"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}