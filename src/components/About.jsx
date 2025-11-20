export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">About</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">A quick snapshot of who I am and what I care about.</p>
          </div>
          <div className="md:col-span-2 space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              I'm a Computer Engineering student who enjoys building for the web. I focus on clean UI, performance, and great UX. I'm constantly learning—from algorithms to modern frontend frameworks—and I love turning ideas into working products.
            </p>
            <p>
              Outside of coding, I enjoy design, writing notes about what I learn, and exploring developer tools. My goals: keep shipping, collaborate with awesome people, and build things that help others.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm">
              <li className="p-3 rounded-lg bg-slate-900/5 dark:bg-white/5">Focused on accessibility and performance</li>
              <li className="p-3 rounded-lg bg-slate-900/5 dark:bg-white/5">Hands-on with React, FastAPI, and Tailwind</li>
              <li className="p-3 rounded-lg bg-slate-900/5 dark:bg-white/5">Curious about systems and AI</li>
              <li className="p-3 rounded-lg bg-slate-900/5 dark:bg-white/5">Team player, quick learner</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
