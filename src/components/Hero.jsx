import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900"
          >
            Anime-coded portfolio with a playful tech twist
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="mt-5 text-slate-600 text-lg max-w-xl"
          >
            I craft delightful interfaces, animated interactions, and immersive web experiences. Scroll to explore projects powered by modern stacks and anime vibes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 transition-shadow"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-sky-500 text-white px-6 py-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <div className="hidden md:block" />
      </div>

      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[140%] h-64 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.25),transparent_60%)]" />
      </div>
    </section>
  );
}
