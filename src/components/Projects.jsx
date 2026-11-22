import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { SiDell } from 'react-icons/si'

// Edit this array to add or change projects.
const projects = [
  {
    cardTech: [
      'Python',
      'Test Automation',
      'Test Infrastructure',
      'Regression Testing',
      'Docker',
      'Kubernetes',
      'Distributed Systems',
    ],
    details: [
      {
        title: 'Distributed Garbage Collection Test Infra',
        description:
          'Built a Python test automation framework with 60+ regression tests covering multi-cluster lifecycle, NFS ingest, mtree/snapshot operations, replication, checksum validation, and crash recovery.',
      },
      {
        title: 'Backup Management System Test Infra',
        description:
          'Built automated end-to-end tests for backup orchestration on desktop and cluster, covering etcd, manifests, checksum verification, retention policies, and recovery workflows.',
      },
    ],
    company: 'Dell Technologies',
  },
  {
    cardTech: [
      'Python',
      'AI',
      'Automation',
      'Kubernetes',
      'Log Analysis',
      'Distributed Storage',
    ],
    details: [
      {
        title: 'AI Bug Analyzer & Triage Platform',
        description:
          'Built AI Bug Analyzer with AI-powered skills that cut defect triage time from hours to seconds.',
      },
      {
        title: 'GC Trace Analysis & Reporting',
        description:
          'Automated parsing of component logs from regression runs & cluster support bundles into structured per-run reports with phase, ops, tasks, errors, stats, reducing manual triage effort.',
      },
    ],
    company: 'Dell Technologies',
  },
  {
    cardTech: [
      'Python',
      'Go',
      'Docker',
      'Kubernetes',
      'Distributed Systems',
    ],
    details: [
      {
        title: 'Distributed Fingerprint Test Bed',
        description:
          'Designed a scalable test bed using Python, Docker, Kubernetes to generate and validate millions of fingerprints across parallel pods for large-scale deduplication pipeline validation.',
      },
      {
        title: 'Distributed Job Scheduler Test Bed',
        description:
          'Implemented Kubernetes workflow with 3 task sets (generate, merge, lookup) using Quotient Filter to validate parallel intra-task-set execution and sequential inter-task-set dependencies.',
      },
    ],
    company: 'Dell Technologies',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React and Tailwind CSS.',
    image: '/portfolio.png',
    tech: ['React', 'Tailwind', 'JavaScript'],
    live: 'https://portfolio-project-kappa-ochre.vercel.app/',
    github: 'https://github.com/AnuragPrabhu666/Portfolio-Project',
  },
  {
    title: 'Spotify Clone',
    description: 'A browser-based music player with a responsive interface for browsing playlists and controlling playback.',
    image: 'https://raw.githubusercontent.com/AnuragPrabhu666/Project-Spotify-Clone/main/Output.jpg',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/AnuragPrabhu666/Project-Spotify-Clone',
  },
]

function Projects() {
  return (
    <section id="projects" className="px-10 py-24">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center">Projects</h2>
        <div className="mt-4 mx-auto w-[10.5rem] h-1 rounded-full bg-linear-to-r from-cyan-400 to-purple-500" />

        <div className="relative mt-16">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-slate-600" />
          <div className="grid gap-10 md:grid-cols-2">
            {projects.map((project) => (
              <div key={project.title || project.details?.map((detail) => detail.title).join('-')}>
                <div className="group bg-black border border-slate-700 rounded-3xl p-8 hover:bg-white hover:text-blue-900 hover:border-cyan-400 hover:scale-105 transition duration-300">

                  {project.company ? (
                    <div className="w-full h-18 flex items-center justify-center gap-3 rounded-xl border border-slate-700 bg-white">
                      <SiDell className="text-5xl text-blue-700" aria-hidden="true" />
                      <p className="text-2xl font-bold text-blue-700">
                        {project.company}{' '}
                        <span className="text-base text-blue-600">(Data Domain)</span>
                      </p>
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-48 object-contain rounded-xl border border-slate-700 bg-[#162556]"
                    />
                  )}

                  {project.title && (
                    <h3 className="mt-6 text-3xl font-semibold text-blue-400">
                      {project.title}
                    </h3>
                  )}
                  {project.subtitle && (
                    <p className="mt-2 text-lg font-semibold text-cyan-400 group-hover:text-blue-900">
                      {project.subtitle}
                    </p>
                  )}

                  {project.details ? (
                    <div className="mt-5 space-y-6">
                      {project.details.map((detail) => (
                        <div key={detail.title}>
                          <h4 className="mt-6 text-3xl font-semibold text-blue-400">
                            {detail.title}
                          </h4>
                          <p className="mt-2 text-lg font-medium text-justify">{detail.description}</p>
                        </div>
                      ))}
                      {project.cardTech && (
                        <div className="mt-4 flex flex-wrap gap-3">
                          {project.cardTech.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-1 rounded-full border border-transparent bg-white text-black text-sm font-medium group-hover:border-blue-900 group-hover:text-blue-900 transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <>
                      <p className="mt-3 text-lg font-medium text-justify">{project.description}</p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-1 rounded-full border border-transparent bg-white text-black text-sm font-medium group-hover:border-blue-900 group-hover:text-blue-900 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </>
                  )}

                  {/* Links */}
                  {(project.live || project.github) && (
                    <div className="mt-6 flex gap-6 text-lg">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
                        >
                          <FiExternalLink /> Live
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-gray-300 group-hover:text-blue-900 hover:text-blue-900 transition-colors duration-300"
                        >
                          <FiGithub /> Code
                        </a>
                      )}
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Projects