import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Interactive Portfolio',
    desc: 'Immersive 3D hero, diagonal atmospheric background, and polished motion system.',
    tech: ['React', 'Tailwind', 'FastAPI', 'Framer Motion'],
    links: { github: '#', demo: '#' },
  },
  {
    title: 'Task Manager',
    desc: 'CRUD with optimistic UI, tag filters, and keyboard navigation.',
    tech: ['FastAPI', 'MongoDB', 'React'],
    links: { github: '#', demo: '#' },
  },
  {
    title: 'UI Component Kit',
    desc: 'Motion-first components with accessibility baked in.',
    tech: ['React', 'Tailwind'],
    links: { github: '#', demo: '#' },
  },
]

function Badge({ children }) {
  return <span className="px-2 py-1 rounded-md text-xs bg-slate-900/5 dark:bg-white/5">{children}</span>
}

export default function Projects() {
  return (
    <section id="projects" className="relative section-pad">
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.08] bg-[radial-gradient(600px_200px_at_0%_50%,rgba(37,99,235,0.6),transparent_60%)] dark:opacity-[0.18]"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white reveal">Projects</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300 reveal reveal-delay-1">Selected work highlighting craft, usability, and speed.</p>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <div key={p.title} className="group p-6 rounded-2xl glass hover:shadow-xl hover:translate-y-[-3px] transition-all duration-300 reveal" style={{animationDelay: `${idx * 90}ms`}}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <a href={p.links.github} className="hover:text-slate-900 dark:hover:text-white" aria-label="GitHub"><Github size={18} /></a>
                  <a href={p.links.demo} className="hover:text-slate-900 dark:hover:text-white" aria-label="Live Demo"><ExternalLink size={18} /></a>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (<Badge key={t}>{t}</Badge>))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
