import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} Aarjan Adhikari. All rights reserved.</div>
        <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
          <a href="mailto:aarjan@example.com" className="hover:text-slate-900 dark:hover:text-white" aria-label="Email"><Mail size={18} /></a>
          <a href="https://github.com/aarjan" target="_blank" className="hover:text-slate-900 dark:hover:text-white" aria-label="GitHub" rel="noreferrer"><Github size={18} /></a>
          <a href="https://www.linkedin.com/" target="_blank" className="hover:text-slate-900 dark:hover:text-white" aria-label="LinkedIn" rel="noreferrer"><Linkedin size={18} /></a>
        </div>
      </div>
    </footer>
  )
}
