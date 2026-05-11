"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 scroll-smooth overflow-x-hidden">
      {/* --- NAVBAR --- */}
      <nav className="w-full px-4 sm:px-6 py-4 bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          <div className="flex items-center gap-3 transition-opacity hover:opacity-80">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 overflow-hidden border-2 rounded-full border-blue-600 shrink-0">
              <Image
                src="/candra.jpeg"
                alt="Foto Profil Candra"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight">
              Candra Ahmad Dani
            </span>
          </div>

          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-slate-600">
            <Link
              href="#about"
              className="hover:text-blue-600 transition-colors"
            >
              Tentang
            </Link>
            <Link
              href="#projects"
              className="hover:text-blue-600 transition-colors"
            >
              Proyek
            </Link>
            <Link
              href="#contact"
              className="hover:text-blue-600 transition-colors"
            >
              Kontak
            </Link>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section
        id="home"
        className="flex flex-col-reverse items-center justify-center max-w-5xl px-6 mx-auto min-h-[90vh] md:flex-row gap-12 md:gap-8 pt-12 md:pt-0"
      >
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 tracking-tight leading-tight"
          >
            Halo, saya <br className="hidden md:block" />
            <span className="text-blue-600">Candra Ahmad Dani</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-600 font-light max-w-lg mx-auto md:mx-0 leading-relaxed"
          >
            Mahasiswa Teknik Informatika | Front-end Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 md:justify-start"
          >
            <Link
              href="#projects"
              className="px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700 shadow-sm hover:shadow-md"
            >
              Lihat Proyek
            </Link>
            <a
              href="#contact"
              className="px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold transition-all border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100"
            >
              Hubungi Saya
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative shrink-0 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
        >
          <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-40 -z-10 animate-pulse"></div>
          <div className="relative w-full h-full overflow-hidden border-4 border-white rounded-full shadow-xl">
            <Image
              src="/candra.jpeg"
              alt="Foto Candra Ahmad Dani"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* --- TENTANG SAYA --- */}
      <section id="about" className="py-20 md:py-24 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800">Tentang Saya</h2>
          <div className="w-16 h-1 mt-3 bg-blue-600 rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          <div className="flex-1 space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed">
            <p>
              Saya adalah Candra Ahmad Dani, mahasiswa Teknik Informatika di
              Politeknik Negeri Malang yang memiliki minat dan fokus pada
              pengembangan front-end website modern dan responsif. Saya senang
              membangun antarmuka yang interaktif, user-friendly, serta
              memberikan pengalaman pengguna yang nyaman dengan memanfaatkan
              teknologi web terkini.
            </p>
            <p>
              Selain itu, saya terus mengembangkan kemampuan dalam desain UI/UX
              dan implementasi website agar dapat menghasilkan tampilan yang
              tidak hanya menarik secara visual, tetapi juga optimal dalam
              performa dan fungsionalitas.
            </p>
          </div>

          <div className="flex-1 w-full bg-white p-6 sm:p-8 border border-slate-100 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-slate-800 mb-6">
              Keahlian & Teknologi
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[
                "Next.js",
                "React",
                "Tailwind CSS",
                "Flutter",
                "Laravel",
                "Firebase",
                "Git",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- PROYEK --- */}
      <section id="projects" className="py-20 md:py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">Proyek</h2>
            <div className="w-16 h-1 mt-3 bg-blue-600 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* PROYEK 1: Agrismart */}
            <div className="flex flex-col overflow-hidden transition-all bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1">
              <a
                href="https://github.com/JihaR15/ptt-agrismart"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center h-56 transition bg-slate-100 overflow-hidden group"
              >
                <Image
                  src="/proyek1.png"
                  alt="Agrismart - IoT Plant Monitoring"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>

              <div className="flex flex-col flex-grow p-6 sm:p-8">
                <h3 className="text-xl font-bold text-slate-800">
                  Agrismart - IoT Plant
                </h3>
                <p className="flex-grow mt-3 text-sm text-slate-600 leading-relaxed">
                  Sistem sinkronisasi real-time data sensor suhu dari Realtime
                  Database ke Firestore untuk pemantauan tanaman.
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {["Firebase", "API", "Next.js", "IoT"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-semibold text-blue-700 bg-blue-50 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/JihaR15/ptt-agrismart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full px-4 py-2.5 mt-6 text-sm font-bold text-center text-blue-600 transition border-2 border-blue-600 rounded-xl hover:bg-blue-600 hover:text-white"
                >
                  Lihat Github
                </a>
              </div>
            </div>

            {/* PROYEK 2: RuangWarga RT/RW */}
            <div className="flex flex-col overflow-hidden transition-all bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1">
              <a
                href="https://github.com/pblkelompok1/ti3h_k1_jawara"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center h-56 transition bg-slate-100 overflow-hidden p-4 group"
              >
                <Image
                  src="/proyek2.png"
                  alt="RuangWarga RT/RW"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </a>

              <div className="flex flex-col flex-grow p-6 sm:p-8">
                <h3 className="text-xl font-bold text-slate-800">
                  RuangWarga RT/RW
                </h3>
                <p className="flex-grow mt-3 text-sm text-slate-600 leading-relaxed">
                  Aplikasi mobile untuk mempermudah manajemen data RT/RW,
                  memfasilitasi administrasi warga dan pelaporan menggunakan
                  Flutter.
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {["Flutter", "Dart", "Mobile", "FastAPI"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-semibold text-blue-700 bg-blue-50 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/pblkelompok1/ti3h_k1_jawara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full px-4 py-2.5 mt-6 text-sm font-bold text-center text-blue-600 transition border-2 border-blue-600 rounded-xl hover:bg-blue-600 hover:text-white"
                >
                  Lihat Github
                </a>
              </div>
            </div>

            {/* PROYEK 3: STARS */}
            <div className="flex flex-col overflow-hidden transition-all bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1">
              <a
                href="https://github.com/Noklent-Fardian/STARS"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center h-56 transition bg-slate-100 overflow-hidden group"
              >
                <Image
                  src="/proyek3.png"
                  alt="STARS"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>

              <div className="flex flex-col flex-grow p-6 sm:p-8">
                <h3 className="text-xl font-bold text-slate-800">
                  STARS System
                </h3>
                <p className="flex-grow mt-3 text-sm text-slate-600 leading-relaxed">
                  Sistem informasi berbasis web yang dirancang untuk mencatat,
                  mengelola, dan memantau rekam jejak data prestasi siswa.
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {["Web App", "Database", "Management"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-semibold text-blue-700 bg-blue-50 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/Noklent-Fardian/STARS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full px-4 py-2.5 mt-6 text-sm font-bold text-center text-blue-600 transition border-2 border-blue-600 rounded-xl hover:bg-blue-600 hover:text-white"
                >
                  Lihat Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HUBUNGI SAYA --- */}
      <section id="contact" className="py-20 md:py-24 bg-slate-50 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Kontak</h2>

          <p className="text-base sm:text-lg text-slate-600 mb-10 leading-relaxed px-4">
            Hubungi saya melalui Email atau WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <a
              href="mailto:candraahmaddani04@gmail.com"
              className="flex-1 flex items-center justify-center p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 transition-all group"
            >
              <span className="text-sm sm:text-base md:text-lg font-semibold text-slate-700 group-hover:text-blue-500 transition-colors">
                Kirim Email
              </span>
            </a>

            <a
              href="https://wa.me/6289517032681"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center p-6 bg-white border border-slate-200 rounded-2xl hover:border-green-500 hover:shadow-lg hover:-translate-y-1 transition-all group"
            >
              <span className="text-sm sm:text-base md:text-lg font-semibold text-slate-700 group-hover:text-green-500 transition-colors">
                Chat WhatsApp
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 text-center text-sm font-medium text-slate-500 bg-white border-t border-slate-200">
        <p>
          © {new Date().getFullYear()} Candra Ahmad Dani.
        </p>
      </footer>
    </main>
  );
}
