import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071029] to-[#071826] text-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-accent1 to-accent3 font-bold text-white">AM</div>
            <div>
              <div className="text-sm font-medium">Akash Mishra</div>
              <div className="text-xs text-slate-400">Aspiring Penetration Tester • BCA • Redynox Intern</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </header>

        <main>
          <Hero />
          <section id="about" className="mt-12 bg-[rgba(255,255,255,0.03)] p-8 rounded-2xl">
            <h3 className="text-xl font-semibold">About me</h3>
            <p className="mt-3 text-slate-300">I am Akash Mishra, a BCA student practicing penetration testing on Kali Linux. I automate scanning and recon using Python scripts, and I completed an internship at Redynox where I worked on web and network security assessments.</p>
          </section>

          <Skills />

          <Projects />

          <section id="contact" className="mt-10 bg-[rgba(255,255,255,0.03)] p-8 rounded-2xl">
            <h3 className="text-xl font-semibold">Contact</h3>
            <p className="mt-3 text-slate-300">Open to internships, freelance work, and project collaboration. Reach me at:</p>
            <ul className="mt-3 text-slate-300">
              <li>Email: <a href="mailto:akashmis2003@gmail.com" className="text-slate-100">akashmis2003@gmail.com</a></li>
              <li>Phone: 83083054732</li>
              <li>Location: D.L.W, Varanasi, India</li>
            </ul>
          </section>

        </main>

        <footer className="mt-12 text-center text-slate-400">© {new Date().getFullYear()} Akash Mishra • Built with React, Tailwind & Framer Motion</footer>
      </div>
    </div>
  )
}
