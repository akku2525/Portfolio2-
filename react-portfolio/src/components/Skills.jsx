import React from 'react'
import { motion } from 'framer-motion'

export default function Skills(){
  const skills = [
    {name:'Kali Linux', pct:95},
    {name:'Python', pct:85},
    {name:'Network Scanning', pct:88},
    {name:'Web App Pentest', pct:78}
  ]
  return (
    <section id="skills" className="mt-8 grid md:grid-cols-2 gap-6">
      <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="bg-[rgba(255,255,255,0.03)] p-6 rounded-2xl">
        <h4 className="font-semibold">Technical Skills</h4>
        <div className="mt-4 space-y-4">
          {skills.map(s=>(
            <div key={s.name}>
              <div className="flex justify-between text-sm"><div>{s.name}</div><div className="text-xs text-slate-400">{s.pct}%</div></div>
              <div className="w-full h-2 bg-white/6 rounded-full mt-2 overflow-hidden">
                <motion.div initial={{width:0}} whileInView={{width: `${s.pct}%`}} transition={{duration:1.2}} className="h-full bg-gradient-to-r from-accent1 to-accent2" />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="bg-[rgba(255,255,255,0.03)] p-6 rounded-2xl">
        <h4 className="font-semibold">Tools & Platforms</h4>
        <ul className="mt-3 text-slate-300 space-y-2">
          <li>Burp Suite, Nmap, Metasploit (basics)</li>
          <li>VS Code, GitHub, Netlify</li>
          <li>Kali Linux, Docker (basic)</li>
        </ul>
      </motion.div>
    </section>
  )
}
