export default function About() {
  return (
    <section id="about" className="relative section-pad">
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.08] bg-[radial-gradient(600px_200px_at_10%_0%,rgba(37,99,235,0.6),transparent_60%)] dark:opacity-[0.18]"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-1 reveal">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">About</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Who I am, what I value, and how I work.</p>
          </div>
          <div className="md:col-span-2 space-y-6 text-slate-700 dark:text-slate-300">
            <p className="reveal reveal-delay-1">
              I'm a Computer Engineering student who crafts interfaces that feel effortless. I obsess over micro-interactions, meaningful motion, and crisp typography. My north star is shipping experiences that are both fast and friendly.
            </p>
            <p className="reveal reveal-delay-2">
              I thrive at the intersection of engineering and design: turning ambiguous ideas into polished products. I value clarity, iteration, and collaboration.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 reveal reveal-delay-3">
              <div className="glass p-4 rounded-xl">Accessibility and performance first</div>
              <div className="glass p-4 rounded-xl">React + FastAPI for full‑stack velocity</div>
              <div className="glass p-4 rounded-xl">Systems thinking, clean abstractions</div>
              <div className="glass p-4 rounded-xl">Curiosity, humility, steady improvement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
