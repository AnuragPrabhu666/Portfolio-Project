import { useEffect, useState } from 'react'
import { FaEye } from 'react-icons/fa'

const SESSION_COUNTED_KEY = 'portfolio-view-counted'

// Module-level promise so React StrictMode's double effect run
// in development doesn't count the same visit twice.
let viewsPromise = null

function loadViews() {
  if (!viewsPromise) {
    let alreadyCounted = false
    try {
      alreadyCounted = sessionStorage.getItem(SESSION_COUNTED_KEY) === 'true'
    } catch {
      // sessionStorage unavailable: just read the count
      alreadyCounted = true
    }

    viewsPromise = fetch('/api/views', { method: alreadyCounted ? 'GET' : 'POST' })
      .then((res) => {
        if (!res.ok) throw new Error('Request failed')
        return res.json()
      })
      .then((data) => {
        if (!alreadyCounted) {
          try {
            sessionStorage.setItem(SESSION_COUNTED_KEY, 'true')
          } catch {
            // ignore
          }
        }
        return Number(data.count)
      })
  }
  return viewsPromise
}

function Footer() {
  const [viewCount, setViewCount] = useState(null)

  useEffect(() => {
    let cancelled = false
    loadViews()
      .then((count) => {
        if (!cancelled) setViewCount(count)
      })
      .catch(() => {
        // Keep null so the badge is hidden instead of showing a wrong number
      })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <footer className="border-t border-slate-700 bg-blue-950">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-10 py-6">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Anurag Prabhu. All rights reserved.
        </p>

        {viewCount !== null && (
          <div
            className="flex items-center gap-2 rounded-full border border-cyan-400 px-4 py-2 text-sm font-medium text-slate-300"
            aria-label={`${viewCount.toLocaleString()} portfolio views`}
          >
            <FaEye className="text-cyan-400" aria-hidden="true" />
            <span>{viewCount.toLocaleString()} views</span>
          </div>
        )}
      </div>
    </footer>
  )
}

export default Footer