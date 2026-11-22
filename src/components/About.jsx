// Edit this array to change the bullet points.
const highlights = [
  'Co-inventor on 3 USPTO-filed patents',
  'Dell Hackathon 2026 – Local Winner',
  'Published ML research paper (AICECS 2021, IOP Journal of Physics)',
]

function About() {
  return (
    <section id="about" className="px-3 md:px-[10rem] py-24 pt-40">
      <div className="max-w-screen-2xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">

        {/* Left: text */}
        <div className="w-full max-w-[48rem]">
          <h1 className="mb-2 text-3xl md:text-5xl font-bold">
            Hi, I'm{' '}
            <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Anurag Prabhu
            </span>
          </h1>

          <p className="mb-6 text-sm md:text-base font-medium text-blue-300 leading-relaxed">
            Python Automation Engineer | SDET | Distributed Systems | Storage | Data Domain | Full Stack Developer
          </p>

          <p className="text-xl text-gray-300 leading-relaxed text-justify">
            A <span className="text-blue-400">Senior Software Engineer</span>{' '}
            with 5+ years of experience at Dell Technologies. I have worked on{' '}
            <span className="text-blue-400">Python test automation</span>,{' '}
            <span className="text-blue-400">distributed storage systems</span>, 
            large-scale test infrastructure, Kubernetes-based scale-out deduplication 
            platform. Built AI Bug Analyzer with AI-powered skills that cuts defect 
            triage time from hours to seconds. Scrum Master for 1.5 years.
          </p>

          <ul className="mt-4 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3 text-lg text-gray-300">
                <span className="text-cyan-400">▹</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/Anurag_Prabhu%20(Resume).pdf"
              download
              className="px-7 py-4 rounded-lg font-semibold bg-linear-to-r from-blue-500 to-purple-500 hover:opacity-90 hover:scale-105 transition"
            >
              Download Resume
            </a>
            <a
              href="#skills"
              className="px-7 py-4 rounded-lg font-semibold border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white hover:scale-105 transition"
            >
              View My Tech Stack
            </a>
            <a
              href="#projects"
              className="px-7 py-4 rounded-lg font-semibold border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white hover:scale-105 transition"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Right: photo */}
        <img
          src="/profile.png"
          alt="Anurag Prabhu"
          className="w-60 h-60 md:w-80 md:h-80 rounded-full object-contain bg-white border-4 border-blue-500"
        />
      </div>
    </section>
  )
}

export default About