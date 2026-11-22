import { useEffect, useRef, useState } from 'react'
import { FiMail, FiMapPin, FiBriefcase } from 'react-icons/fi'

const details = [
  { icon: <FiMail />, text: 'anuragprabhu666@gmail.com', href: 'mailto:anuragprabhu666@gmail.com' },
  { icon: <FiMapPin />, text: 'Bangalore, India' },
  { icon: <FiBriefcase />, text: 'Senior Software Engineer' },
]

const inputClass =
  'w-full bg-slate-900/60 border border-slate-700 rounded-lg px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      { threshold: 0.25 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  // One handler updates whichever field changed, using its name attribute.
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault() // stop the page from reloading
    setStatus('sending')

    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )
    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1&to=anuragprabhu666@gmail.com` +
      `&su=${subject}&body=${body}`

    window.open(gmailUrl, '_blank', 'noopener,noreferrer')
    setStatus('success')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section ref={sectionRef} id="contact" className="px-10 py-24">
      <div className={`max-w-6xl mx-auto grid lg:grid-cols-2 items-start transition-[gap] duration-1000 ${
        visible ? 'gap-8' : 'gap-16'
      }`}>

        {/* Left: intro and details */}
        <div className={`transition-all duration-1000 ease-out ${
          visible ? 'translate-x-0 opacity-100' : 'translate-x-0 opacity-0 xl:-translate-x-16'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold">
            Let's <span className="text-blue-500">Connect</span>
          </h2>

          <p className="mt-6 text-xl text-gray-300 leading-relaxed">
            I'm open to conversations about engineering roles, technical collaborations, new projects and ideas.
          </p>

          <ul className="mt-10 space-y-5">
            {details.map((item) => (
              <li key={item.text} className="flex items-center gap-4 text-lg text-gray-200">
                <span className="text-2xl text-cyan-400">{item.icon}</span>
                {item.href ? (
                  <a href={item.href} className="hover:text-blue-400 transition-colors">
                    {item.text}
                  </a>
                ) : (
                  item.text
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: form card */}
        <form
          onSubmit={handleSubmit}
          className={`bg-slate-800/60 border border-slate-700 rounded-3xl p-10 space-y-6 transition-all duration-1000 ease-out ${
            visible ? 'translate-x-0 opacity-100' : 'translate-x-0 opacity-0 xl:translate-x-16'
          }`}
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className={inputClass}
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className={inputClass}
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            required
            className={`${inputClass} resize-none`}
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-4 rounded-lg font-semibold bg-linear-to-r from-blue-500 to-purple-500 hover:opacity-90 transition disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-center text-green-400">
              Your message is drafted in Gmail. Send it when you're ready, and I'll respond at the earliest.
            </p>
          )}
          {status === 'error' && (
            <p className="text-center text-red-400">
              Something went wrong. Try again, or email me directly.
            </p>
          )}
        </form>

      </div>
    </section>
  )
}

export default Contact