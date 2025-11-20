import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun, Download } from 'lucide-react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = stored ? stored === 'dark' : prefersDark
    document.documentElement.classList.toggle('dark', isDark)
    setDark(isDark)

    const onScroll = () => {
      let current = 'home'
      navItems.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = id
          }
        }
      })
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.pageYOffset - 72
    window.scrollTo({ top: y, behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/60 dark:border-slate-800/60">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo('home')} className="group inline-flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-600 ring-4 ring-blue-600/20"></span>
          <span className="font-semibold tracking-tight text-slate-800 dark:text-slate-100">Aarjan Adhikari</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-slate-900/5 dark:bg-white/5 text-slate-600 dark:text-slate-300">Student • Computer Engineering</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                active === item.id
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/resume.html"
            download="Aarjan-Adhikari-Resume.html"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <Download size={16} /> Resume
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="inline-flex items-center justify-center w-10 h-10 rounded-md text-slate-700 hover:bg-slate-900/5 dark:text-slate-300 dark:hover:bg-white/10"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-slate-700 hover:bg-slate-900/5 dark:text-slate-300 dark:hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-200/60 dark:border-slate-800/60 bg-white/90 dark:bg-slate-900/90 backdrop-blur">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  active === item.id
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="/resume.html"
              download="Aarjan-Adhikari-Resume.html"
              className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
