import { Github, Twitter } from 'lucide-react';
import logo from 'figma:asset/cd33725f984e3659329de82f01a1a38475693b6f.png';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <img src={logo} alt="ThreatSignal" className="h-10" />
            </div>
            <p className="text-sm text-gray-600">
              Open source security automation for modern development teams.
            </p>
          </div>
          
          <div>
            <h4 className="mb-3 text-sm">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Features</a></li>
              <li><a href="#" className="hover:text-gray-900">Documentation</a></li>
              <li><a href="#" className="hover:text-gray-900">Integrations</a></li>
              <li><a href="#" className="hover:text-gray-900">API Reference</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-3 text-sm">Community</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="https://github.com/iTechDMV/ThreatSignal" className="hover:text-gray-900">GitHub</a></li>
              <li><a href="#" className="hover:text-gray-900">Discord</a></li>
              <li><a href="#" className="hover:text-gray-900">Contributing</a></li>
              <li><a href="#" className="hover:text-gray-900">Code of Conduct</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-3 text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">About</a></li>
              <li><a href="#" className="hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © 2025 ThreatSignal. Released under the MIT License.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/iTechDMV/ThreatSignal" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}