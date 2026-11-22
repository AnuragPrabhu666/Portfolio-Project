import { FiExternalLink } from 'react-icons/fi'

// Edit this array with your own education, newest first.
const education = [
  {
    level: 'Master of Technology',
    course: 'M.Tech – Computer Science',
    institute: 'Manipal Institute of Technology, Manipal',
    score: 'CGPA 9.1 / 10',
    years: '2020 – 2022',
    website: 'https://manipal.edu/mit.html',
  },
  {
    level: 'Bachelor Degree',
    course: 'B.E. – Computer Science',
    institute: 'Canara Engineering College, Mangalore',
    score: 'CGPA 8.5 / 10',
    years: '2016 – 2020',
    website: 'https://canaraengineering.in',
  },
]

function Education() {
  return (
    <section id="education" className="px-10 py-24">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl font-bold">Education</h2>
          <div className="mt-4 mx-auto w-[13.5rem] h-1 rounded-full bg-linear-to-r from-cyan-400 to-purple-500" />
        </div>

        <div className="mt-16">
          {education.map((item, index) => (
            <div key={item.level}>

              {/* Card */}
              <div className="group bg-black border border-slate-600 rounded-2xl px-6 py-6 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 hover:bg-white hover:border-cyan-400 hover:text-blue-900 transition-colors duration-300">
                <div>
                  <h3 className="text-2xl font-semibold uppercase text-blue-400">
                    {item.level}
                  </h3>
                  <p className="mt-2 text-lg font-medium text-gray-300 group-hover:text-blue-900">{item.course}</p>
                  <p className="mt-1 font-medium text-gray-400 group-hover:text-blue-900">{item.institute}</p>
                  <p className="mt-1 font-medium text-gray-400 group-hover:text-blue-900">{item.score}</p>

                  {/* College website link */}
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 px-4 py-1 rounded-full border border-transparent text-cyan-400 font-semibold hover:border-cyan-400 hover:underline transition-colors duration-300"
                  >
                    Visit Website <FiExternalLink />
                  </a>
                </div>

                <p className="text-lg font-medium text-gray-300 group-hover:text-blue-900">{item.years}</p>
              </div>

              {/* Connector line between cards (not after the last one) */}
              {index !== education.length - 1 && (
                <div className="mx-auto w-px h-16 bg-slate-600" />
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Education