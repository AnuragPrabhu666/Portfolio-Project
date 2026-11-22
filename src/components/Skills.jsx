import {
  FaBrain,
  FaBug,
  FaCodeBranch,
  FaCss3Alt,
  FaDesktop,
  FaFlask,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNetworkWired,
  FaProjectDiagram,
  FaPython,
  FaReact,
  FaServer,
  FaUsers,
} from 'react-icons/fa'
import {
  SiC,
  SiDjango,
  SiDocker,
  SiGo,
  SiGithubcopilot,
  SiKubernetes,
  SiLinux,
  SiMysql,
} from 'react-icons/si'

// All the data lives here. Edit this to change your skills.
const skillGroups = [
  {
    title: 'Programming Languages',
    items: [
      { name: 'Python', icon: <FaPython className="text-blue-400" /> },
      { name: 'C', icon: <SiC className="text-blue-400" /> },
      { name: 'Go (Golang)', icon: <SiGo className="text-cyan-400" /> },
      { name: 'Data Structures & Algorithms', icon: <FaProjectDiagram className="text-purple-400" /> },
    ],
  },
  {
    title: 'Test Automation & SDET',
    items: [
      { name: 'Python Automation', icon: <FaPython className="text-blue-400" /> },
      { name: 'Test Automation Framework', icon: <FaFlask className="text-yellow-400" /> },
      { name: 'Regression Testing', icon: <FaBug className="text-red-400" /> },
      { name: 'Test Infrastructure', icon: <FaServer className="text-cyan-400" /> },
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      { name: 'Docker', icon: <SiDocker className="text-blue-400" /> },
      { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-400" /> },
      { name: 'Linux', icon: <SiLinux className="text-yellow-300" /> },
      { name: 'CI/CD Pipelines', icon: <FaCodeBranch className="text-green-400" /> },
    ],
  },
  {
    title: 'Systems & Storage Engineering',
    items: [
      { name: 'Distributed Systems / Storage', icon: <FaServer className="text-cyan-400" /> },
      { name: 'Networking', icon: <FaNetworkWired className="text-sky-400" /> },
      { name: 'Operating Systems', icon: <FaDesktop className="text-slate-300" /> },
    ],
  },
  {
    title: 'AI/ML & Productivity Tools',
    items: [
      { name: 'AI / ML', icon: <FaBrain className="text-purple-400" /> },
      {
        name: 'Copilot / Devin / ChatGPT / Claude',
        icon: <SiGithubcopilot className="text-green-400" />,
      },
      { name: 'Scrum / JIRA', icon: <FaUsers className="text-blue-400" /> },
      { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
      { name: 'GitHub', icon: <FaGithub className="text-white group-hover:text-blue-900" /> },
    ],
  },
  {
    title: 'Full Stack',
    items: [
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'React', icon: <FaReact className="text-cyan-400" /> },
      { name: 'Django', icon: <SiDjango className="text-green-500" /> },
      { name: 'MySQL', icon: <SiMysql className="text-sky-500" /> },
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="px-10 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl font-bold">Skills</h2>
          <div className="mt-4 mx-auto w-[6.75rem] h-1 rounded-full bg-linear-to-r from-cyan-400 to-purple-500" />
        </div>

        {/* Cards */}
        <div className="mt-16 mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group bg-black border border-slate-600 rounded-2xl p-8 min-h-80 hover:bg-white hover:text-blue-900 hover:border-cyan-400 hover:-translate-y-1 hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-400">
                {group.title}
              </h3>

              <ul className="mt-6 space-y-4">
                {group.items.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-3 text-lg font-medium hover:translate-x-2 transition-transform duration-300">
                    {skill.icon && <span className="flex items-center gap-1 text-2xl">{skill.icon}</span>}
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills