import { Shield, Zap, Code, Terminal, Lock, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Vulnerability Detection',
    description: 'Automatically scan your codebase and infrastructure for security vulnerabilities with comprehensive CVE database integration.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built with performance in mind. Scan thousands of files and dependencies in seconds, not hours.',
  },
  {
    icon: Code,
    title: 'Multi-Language Support',
    description: 'Support for JavaScript, Python, Go, Java, Ruby, and more. Works with your existing tech stack.',
  },
  {
    icon: Terminal,
    title: 'CLI & API',
    description: 'Powerful command-line interface and REST API for seamless integration into your CI/CD pipelines.',
  },
  {
    icon: Lock,
    title: 'Policy Enforcement',
    description: 'Define custom security policies and automatically enforce them across all your projects and teams.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Built by security professionals for security professionals. Contribute, customize, and collaborate.',
  },
];

export function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4">
            Everything You Need for Security Automation
          </h2>
          <p className="text-gray-600">
            Powerful features designed to streamline your security workflow and keep your applications safe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="relative flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
                  <Icon className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}