import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[96vh] pt-24 overflow-hidden">
      {/* Diagonal atmospheric background for light/dark */}
      <div className="absolute inset-0 -z-10 bg-diagonal-light dark:bg-diagonal-dark"></div>

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div className="py-20">
          <p className="text-sm uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2 reveal">Hello, I'm</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white reveal reveal-delay-1">
            Aarjan Adhikari
          </h1>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-300 reveal reveal-delay-2">
            Computer Engineering student crafting interactive, accessible, and fast web experiences. I love blending design with code to ship delightful products.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 reveal reveal-delay-3">
            <a href="#projects" className="px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 transition">View Projects</a>
            <a href="#contact" className="px-4 py-2 rounded-md bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:text-white dark:border-slate-700 dark:hover:bg-slate-800 transition">Contact Me</a>
          </div>
        </div>
      </div>

      {/* Soft top/bottom gradient to blend content */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white dark:from-slate-900/60 dark:to-slate-900"></div>
    </section>
  )
}
