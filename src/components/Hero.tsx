"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="about" className="flex flex-col items-center justify-center min-h-[90vh] px-4 text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold md:text-7xl text-slate-800 tracking-tight"
      >
        Halo, saya <span className="text-blue-600">Candra</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 text-xl text-slate-600 md:text-2xl font-light"
      >
        Mahasiswa Teknik Informatika | Full-Stack & Mobile Developer
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex gap-4 mt-10"
      >
        <a href="#projects" className="px-6 py-3 font-semibold text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-1">
          Lihat Proyek
        </a>
        <a href="mailto:emailmu@example.com" className="px-6 py-3 font-semibold transition-all border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 hover:-translate-y-1">
          Hubungi Saya
        </a>
      </motion.div>
    </section>
  );
}