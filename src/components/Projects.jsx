import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Interactive Portfolio',
    desc: 'This portfolio with 3D hero, smooth scrolling, and contact form.',
    tech: ['React', 'Tailwind', 'FastAPI'],
    links: { github: '#', demo: '#' },
  },
  {
    title: 'Task Manager',
    desc: 'Simple CRUD app to manage tasks with tags and filters.',
    tech: ['FastAPI', 'MongoDB', 'React'],
    links: { github: '#', demo: '#' },
  },
  {
    title: 'UI Component Kit',
    desc: 'A set of reusable components styled with Tailwind.',
    tech: ['React', 'Tailwind'],
    links: { github: '#', demo: '#' },
  },
]

function Badge({ children }) {
  return <span className="px-2 py-1 rounded-md text-xs bg-slate-900/5 dark:bg-white/5">{children}</span>
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Projects</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Some things I've built or tinkered with.</p>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur hover:shadow-lg transition-shadow">
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
