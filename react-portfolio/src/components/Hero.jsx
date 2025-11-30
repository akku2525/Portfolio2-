import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="mt-8 grid md:grid-cols-2 gap-8 items-center" id="hero">
      <div>
        <motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.6}} className="text-4xl font-extrabold hero-gradient">Hi, I’m Akash</motion.h1>
        <motion.p initial={{y:10, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.12}} className="mt-3 text-lg text-slate-300">I build tools and reports for web & cloud security. I use Kali Linux, Python, and automated tooling to find vulnerabilities.</motion.p>

        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.28}} className="mt-6 flex gap-3">
          <a href="#projects" className="px-5 py-3 rounded-md bg-gradient-to-r from-accent1 to-accent2 text-white shadow-lg">View Projects</a>
          <a href="mailto:akashmis2003@gmail.com" className="px-5 py-3 rounded-md border border-white/10">Contact</a>
        </motion.div>

        <div className="mt-6 flex gap-2 flex-wrap">
          <span className="px-3 py-1 text-xs bg-white/3 rounded-full">Kali Linux</span>
          <span className="px-3 py-1 text-xs bg-white/3 rounded-full">Python</span>
          <span className="px-3 py-1 text-xs bg-white/3 rounded-full">Nmap</span>
        </div>
      </div>

      <motion.div initial={{scale:0.98, rotateY:8}} whileHover={{scale:1.02, rotateY:0}} className="bg-[rgba(255,255,255,0.03)] p-6 rounded-2xl">
        <h4 className="text-lg font-semibold">Contact</h4>
        <p className="mt-2 text-slate-300">Email: <a href="mailto:akashmis2003@gmail.com" className="text-slate-100">akashmis2003@gmail.com</a></p>
        <p className="text-slate-300">Phone: 83083054732</p>
        <p className="text-slate-300">Location: D.L.W, Varanasi</p>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-[rgba(255,255,255,0.02)]">Internship: Redynox</div>
          <div className="p-3 rounded-lg bg-[rgba(255,255,255,0.02)]">Education: BCA</div>
        </div>
      </motion.div>
    </section>
  )
}
