import { Code, Cpu, Sparkles, Database, Rocket } from 'lucide-react'

const skills = [
  { title: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'], icon: Code },
  { title: 'Backend', items: ['FastAPI', 'Node basics', 'REST APIs'], icon: Cpu },
  { title: 'Databases', items: ['MongoDB', 'SQLite', 'Mongoose basics'], icon: Database },
  { title: 'Other', items: ['Git & GitHub', 'Linux', 'UI/UX'], icon: Rocket },
]

export default function Skills() {
  return (
    <section id="skills" className="relative section-pad">
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.08] bg-[radial-gradient(600px_200px_at_90%_0%,rgba(37,99,235,0.6),transparent_60%)] dark:opacity-[0.18]"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white reveal">Skills</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300 reveal reveal-delay-1">The tools I use to build fast, delightful products.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ title, items, icon: Icon }, idx) => (
            <div key={title} className="p-6 rounded-2xl glass hover:translate-y-[-2px] transition-all duration-300 reveal" style={{animationDelay: `${idx * 80}ms`}}>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600/10 text-blue-600 dark:text-blue-400"><Icon size={20} /></span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Sparkles size={14} className="text-blue-500" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
