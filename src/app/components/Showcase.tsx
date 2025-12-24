export function Showcase() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-white">
            Enterprise-Grade Security
          </h2>
          <p className="text-gray-400">
            Monitor, detect, and respond to security threats in real-time across your entire infrastructure.
          </p>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1759661881353-5b9cc55e1cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGF1dG9tYXRpb24lMjBjb2RlfGVufDF8fHx8MTc2NjU1NTUwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Security automation and code analysis"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 text-center">
            <div className="mb-2 text-3xl text-teal-400">99.9%</div>
            <p className="text-sm text-gray-400">Threat Detection Rate</p>
          </div>
          <div className="rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 text-center">
            <div className="mb-2 text-3xl text-red-400">&lt;2s</div>
            <p className="text-sm text-gray-400">Average Scan Time</p>
          </div>
          <div className="rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 text-center">
            <div className="mb-2 text-3xl text-teal-400">24/7</div>
            <p className="text-sm text-gray-400">Continuous Monitoring</p>
          </div>
        </div>
      </div>
    </div>
  );
}