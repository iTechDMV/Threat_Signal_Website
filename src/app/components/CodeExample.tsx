import { Terminal, Check, Code } from "lucide-react";

export function CodeExample() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4">Get Started in Seconds</h2>
          <p className="text-gray-600">
            Simple installation and configuration. Start
            automating your security in minutes.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Terminal Example */}
            <div className="rounded-lg border border-gray-300 bg-gray-900 p-6 shadow-lg">
              <div className="mb-4 flex items-center gap-2">
                <Terminal className="h-5 w-5 text-green-400" />
                <span className="text-sm text-gray-400">
                  Installation
                </span>
              </div>
              <div className="font-mono text-sm">
                <div className="mb-2 text-gray-400">
                  <span className="text-green-400">$</span> git
                  clone
                  https://github.com/iTechDMV/ThreatSignal.git
                </div>
                <div className="mb-2 text-gray-400">
                  <span className="text-green-400">$</span> cd
                  ThreatSignal
                </div>
                <div className="mb-2 text-gray-400">
                  <span className="text-green-400">$</span> npm
                  install
                </div>
                <div className="text-gray-400">
                  <span className="text-green-400">$</span> npm
                  run scan
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="rounded-lg border border-gray-300 bg-white p-6 shadow-lg">
              <div className="mb-4">
                <span className="text-sm text-gray-600">
                  Scan Results
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-sm">
                    Dependencies scanned: 342
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-sm">
                    Security policies: Passing
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-sm">
                    Vulnerabilities: 0 critical
                  </span>
                </div>
                <div className="mt-4 rounded bg-green-50 p-3">
                  <p className="text-sm text-green-800">
                    ✓ All security checks passed!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Config Example */}
          <div className="mt-8 rounded-lg border border-gray-300 bg-gray-900 p-6 shadow-lg">
            <div className="mb-4 flex items-center gap-2">
              <Code className="h-5 w-5 text-teal-400" />
              <span className="text-sm text-gray-400">
                threatsignal.config.yml
              </span>
            </div>
            <pre className="font-mono text-sm text-gray-300 overflow-x-auto">
              {`version: "2.0"
scan:
  - dependencies
  - containers
  - secrets
policies:
  critical: block
  high: warn
  medium: info
integrations:
  - github
  - slack
  - jira`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}