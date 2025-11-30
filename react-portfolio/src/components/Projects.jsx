import React from 'react'
import { motion } from 'framer-motion'

const card = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: {duration:0.5, ease: 'easeOut'} }
}

export default function Projects(){
  const items = [
    {title:'Cloud Pentest Toolkit', desc:'Automation scripts for cloud misconfigurations.'},
    {title:'OSINT Recon Tool', desc:'Collect public footprint data for scoping.'},
    {title:'Internship Reports', desc:'Redacted findings from Redynox.'},
    {title:'CTF Writeups', desc:'Selected challenge writeups.'}
  ]
  return (
    <section id="projects" className="mt-10">
      <h3 className="text-xl font-semibold text-slate-100">Projects</h3>
      <div className="mt-4 grid md:grid-cols-2 gap-6">
        {items.map((it, idx)=>(
          <motion.article key={it.title} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.15}} variants={card} className="bg-[rgba(255,255,255,0.03)] p-5 rounded-xl">
            <h5 className="font-semibold">{it.title}</h5>
            <p className="mt-2 text-slate-300">{it.desc}</p>
            <div className="mt-3"><a className="text-sm text-slate-100" href="#">View code</a></div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
