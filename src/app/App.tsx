export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full"></div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Marina Xintara
            </h1>
          </div>
          <p className="text-slate-400 text-lg ml-4 font-mono">
            &lt;Computer Science Student /&gt;
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-5xl mx-auto px-6 py-12">
        {/* Photo and Bio Section */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-8 mb-8 hover:border-pink-500/30 transition-colors duration-300">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl blur-xl opacity-50"></div>
                <img
                  src="marina.jpg"
                  alt="Marina Xintara"
                  className="relative w-48 h-48 rounded-2xl object-cover border-2 border-pink-500/50"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-2xl font-semibold text-white">About Me</h2>
                <span className="text-pink-500 font-mono text-sm">_</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                I'm a second-year Computer Science student at the National and Kapodistrian University of Athens with a passion for software development and security.
                I have developed a strong foundation in both theoretical computer science and practical programming. My academic journey has equipped me with expertise in
                multiple programming languages such as Python and familiarity with tools like Git and Linux. I'm particularly interested in web development,
                data structures, AI agents and cybersecurity. I am eager to extend my knowledge and skills through internships and projects and excited to contribute to the tech community.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-8 hover:border-pink-500/30 transition-colors duration-300">
          <div className="flex items-center gap-2 mb-8">
            <h2 className="text-2xl font-semibold text-white">Technical Skills</h2>
            <span className="text-pink-500 font-mono text-sm animate-pulse">●</span>
          </div>

          {/* Programming Languages */}
          <div className="mb-8">
            <h3 className="text-sm font-mono text-pink-400 mb-4 uppercase tracking-wider">// Programming Languages</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-800/50 text-slate-100 rounded-lg border border-pink-500/20 hover:border-pink-500/50 transition-all hover:scale-105 font-mono text-sm">C</span>
              <span className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-800/50 text-slate-100 rounded-lg border border-pink-500/20 hover:border-pink-500/50 transition-all hover:scale-105 font-mono text-sm">C++</span>
              <span className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-800/50 text-slate-100 rounded-lg border border-pink-500/20 hover:border-pink-500/50 transition-all hover:scale-105 font-mono text-sm">Java</span>
              <span className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-800/50 text-slate-100 rounded-lg border border-pink-500/20 hover:border-pink-500/50 transition-all hover:scale-105 font-mono text-sm">Python</span>
            </div>
          </div>

          {/* Web Technologies */}
          <div className="mb-8">
            <h3 className="text-sm font-mono text-pink-400 mb-4 uppercase tracking-wider">// Web Technologies</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-800/50 text-slate-100 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105 font-mono text-sm">HTML</span>
              <span className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-800/50 text-slate-100 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105 font-mono text-sm">CSS</span>
            </div>
          </div>

          {/* Computer Science Fundamentals */}
          <div className="mb-8">
            <h3 className="text-sm font-mono text-pink-400 mb-4 uppercase tracking-wider">// Computer Science Fundamentals</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-800/50 text-slate-100 rounded-lg border border-pink-500/20 hover:border-pink-500/50 transition-all hover:scale-105 font-mono text-sm">Data Structures</span>
              <span className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-800/50 text-slate-100 rounded-lg border border-pink-500/20 hover:border-pink-500/50 transition-all hover:scale-105 font-mono text-sm">Algorithms</span>
              <span className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-800/50 text-slate-100 rounded-lg border border-pink-500/20 hover:border-pink-500/50 transition-all hover:scale-105 font-mono text-sm">Object-Oriented Programming</span>
              <span className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-800/50 text-slate-100 rounded-lg border border-pink-500/20 hover:border-pink-500/50 transition-all hover:scale-105 font-mono text-sm">Database Design</span>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-sm font-mono text-pink-400 mb-4 uppercase tracking-wider">// Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-800/50 text-slate-100 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105 font-mono text-sm">Git</span>
              <span className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-800/50 text-slate-100 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105 font-mono text-sm">GitHub</span>
              <span className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-800/50 text-slate-100 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105 font-mono text-sm">VS Code</span>
              <span className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-800/50 text-slate-100 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105 font-mono text-sm">Linux</span>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-8 mt-8 hover:border-pink-500/30 transition-colors duration-300">
          <div className="flex items-center gap-2 mb-8">
            <h2 className="text-2xl font-semibold text-white">My Projects</h2>
            <span className="text-pink-500 font-mono text-sm animate-pulse">●</span>
          </div>

          {/* Project Card */}
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 hover:border-pink-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Aluminium workshop website</h3>
                <p className="text-slate-400 text-sm font-mono mb-3">
                  <span className="text-purple-400">Static website</span>
                </p>
              </div>
              <a
                href="https://github.com/MarinaXintara/site"
                className="flex items-center gap-2 px-4 py-2 bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 hover:border-pink-500/50 rounded-lg transition-all text-pink-400 hover:text-pink-300 text-sm font-mono whitespace-nowrap self-start"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </div>

            <p className="text-slate-300 mb-4 leading-relaxed">
              A fully responsive website for a local aluminium workshop showcasing their custom aluminium windows and doors.
              Features include a product gallery, contact form, and service descriptions. Built with modern web technologies
              to provide an elegant and user-friendly experience for customers.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-700/50 text-slate-200 rounded-md border border-pink-500/20 text-xs font-mono">HTML</span>
              <span className="px-3 py-1 bg-slate-700/50 text-slate-200 rounded-md border border-pink-500/20 text-xs font-mono">CSS</span>
              <span className="px-3 py-1 bg-slate-700/50 text-slate-200 rounded-md border border-pink-500/20 text-xs font-mono">JavaScript</span>
              <span className="px-3 py-1 bg-slate-700/50 text-slate-200 rounded-md border border-purple-500/20 text-xs font-mono">Responsive Design</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative max-w-5xl mx-auto px-6 py-8 text-center">
        <div className="inline-block">
          <p className="text-slate-500 font-mono text-sm">
            <span className="text-pink-500">&lt;</span>
            © 2026 Marina Xintara
            <span className="text-pink-500"> /&gt;</span>
          </p>
        </div>
      </footer>
    </div>
  );
}