import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiLinkedin, FiMenu, FiX } from 'react-icons/fi'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/AnuragPrabhu666', Icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anurag-prabhu-20b928174/', Icon: FiLinkedin },
]

// Minimum empty space (px) that must remain between the groups
const MIN_GAP = 24

const LINK_GAP = 'gap-8' // gap between About, Skills, ...

function Navbar() {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState('menu') // 'full' | 'links' | 'menu'

  const rowRef = useRef(null)
  const logoMeasure = useRef(null)
  const linksMeasure = useRef(null)
  const socialsMeasure = useRef(null)

  // Pick a mode based on real widths
  useLayoutEffect(() => {
    const row = rowRef.current
    if (!row) return undefined

    const update = () => {
      const logoW = logoMeasure.current?.offsetWidth ?? 0
      const linksW = linksMeasure.current?.offsetWidth ?? 0
      const socialsW = socialsMeasure.current?.offsetWidth ?? 0

      // Content width of the row (excludes padding)
      const cs = getComputedStyle(row)
      const available =
        row.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight)

      const fullNeeded = logoW + linksW + socialsW + MIN_GAP * 2
      const linksNeeded = linksW + socialsW + MIN_GAP

      if (available >= fullNeeded) setMode('full')
      else if (available >= linksNeeded) setMode('links')
      else setMode('menu')
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(row)
    document.fonts?.ready.then(update) // re-measure once the font loads
    return () => ro.disconnect()
  }, [])

  // Close the menu when switching to the desktop layout
  useEffect(() => {
    if (mode !== 'menu') setOpen(false)
  }, [mode])

  // Close on Escape
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const isMenu = mode === 'menu'

  return (
    <nav aria-label="Primary navigation" className="fixed top-0 left-0 z-50 w-full bg-blue-950 text-white">
      <div
        ref={rowRef}
        className="relative flex items-center justify-between px-4 py-3 sm:px-6 xl:px-10"
      >
        {/* Hidden measuring copy (never visible, never focusable) */}
        <div
          aria-hidden="true"
          className="pointer-events-none invisible absolute left-0 top-0 flex whitespace-nowrap"
        >
          <span ref={logoMeasure} className="text-3xl font-bold">Anurag Prabhu</span>
          <div ref={linksMeasure} className={`flex ${LINK_GAP} text-lg font-semibold`}>
            {links.map((l) => <span key={l.href}>{l.label}</span>)}
          </div>
          <div ref={socialsMeasure} className="flex gap-6 text-3xl">
            {socials.map(({ label, Icon }) => <Icon key={label} />)}
          </div>
        </div>

        {/* Logo: hidden only in 'links' mode */}
        {mode !== 'links' && (
          <a
            href="#home"
            aria-label="Go to home"
            className={`shrink-0 whitespace-nowrap font-bold ${
              isMenu ? 'text-xl sm:text-2xl' : 'text-3xl'
            }`}
          >
            <span className="text-sky-200">Anurag Prabhu</span>
          </a>
        )}

        {/* Links + socials: 'full' and 'links' modes */}
        {!isMenu && (
          <>
            <div className={`flex flex-1 justify-center whitespace-nowrap px-4 text-lg font-semibold ${LINK_GAP}`}>
              {links.map((link) => (
                <a key={link.href} href={link.href} className="transition-colors hover:text-cyan-300">
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex shrink-0 items-center gap-6 text-3xl">
              {socials.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                   className="transition-colors hover:text-purple-400">
                  <Icon />
                </a>
              ))}
            </div>
          </>
        )}

        {/* Hamburger: 'menu' mode only */}
        {isMenu && (
          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-2xl transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        )}
      </div>

      {/* Mobile menu */}
      {isMenu && open && (
        <div
          id="mobile-menu"
          className="max-h-[calc(100dvh-4.25rem)] overflow-y-auto border-t border-slate-700 px-4 pb-6 pt-2 sm:px-6"
        >
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-lg font-semibold transition-colors hover:bg-white/10 hover:text-cyan-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-3 flex gap-3 border-t border-slate-700 pt-4">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-lg text-3xl transition-colors hover:bg-white/10 hover:text-purple-400"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar