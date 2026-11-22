import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

let scrollAnimationFrame

function handleInternalNavigation(event) {
  if (
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    !(event.target instanceof Element)
  ) {
    return
  }

  const link = event.target.closest('a[href^="#"]')
  if (!link) return

  const target = document.getElementById(link.hash.slice(1))
  if (!target) return

  event.preventDefault()

  if (window.location.hash !== link.hash) {
    window.history.pushState(null, '', link.hash)
  }

  cancelAnimationFrame(scrollAnimationFrame)

  const start = window.scrollY
  const navbarOffset = 96
  const destination = Math.max(0, start + target.getBoundingClientRect().top - navbarOffset)
  const duration = Math.min(2200, Math.max(1100, Math.abs(destination - start) * 0.75))
  const startTime = performance.now()

  function animateScroll(time) {
    const progress = Math.min((time - startTime) / duration, 1)
    const easedProgress =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2

    window.scrollTo(0, start + (destination - start) * easedProgress)

    if (progress < 1) {
      scrollAnimationFrame = requestAnimationFrame(animateScroll)
    }
  }

  scrollAnimationFrame = requestAnimationFrame(animateScroll)
}

function App() {
  return (
    <div
      id="home"
      className="min-h-screen bg-blue-950 text-white"
      onClick={handleInternalNavigation}
    >
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  )
}

export default App