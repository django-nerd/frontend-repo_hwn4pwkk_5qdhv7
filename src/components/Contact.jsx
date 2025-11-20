import { useState } from 'react'
import { Mail, Send } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message')
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (data.ok) {
        setStatus({ ok: true, msg: 'Thanks! Your message has been sent.' })
        e.currentTarget.reset()
      } else {
        setStatus({ ok: false, msg: 'Something went wrong. Please try again later.' })
      }
    } catch (err) {
      setStatus({ ok: false, msg: 'Network error. Please try again later.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative section-pad">
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.08] bg-[radial-gradient(600px_200px_at_100%_60%,rgba(37,99,235,0.6),transparent_60%)] dark:opacity-[0.18]"></div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 reveal">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Contact</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Have a question, idea, or opportunity? Let's talk.</p>
        </div>

        <form onSubmit={onSubmit} className="p-6 rounded-2xl glass">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="reveal">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
              <input required name="name" type="text" className="mt-1 w-full rounded-md border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div className="reveal reveal-delay-1">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
              <input required name="email" type="email" className="mt-1 w-full rounded-md border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </div>
          <div className="mt-4 reveal reveal-delay-2">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
            <textarea required name="message" rows="5" className="mt-1 w-full rounded-md border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
          </div>
          <div className="mt-6 flex items-center justify-between gap-4 reveal reveal-delay-3">
            <div className="text-sm text-slate-600 dark:text-slate-400 inline-flex items-center gap-2"><Mail size={16} /> Prefer email? aarjan@example.com</div>
            <button disabled={loading} className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60">
              <Send size={16} /> {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          {status && (
            <div className={`mt-4 text-sm font-medium ${status.ok ? 'text-green-600' : 'text-rose-600'}`}>
              {status.msg}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
