import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Neon Samurai UI Kit',
    description: 'A reactive component kit inspired by cyberpunk and anime mecha interfaces.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: 'https://github.com',
    demo: '#',
    gradient: 'from-fuchsia-500 via-purple-500 to-sky-500',
  },
  {
    title: 'Spirited Studio',
    description: 'Generative art playground with layered parallax and motion trails.',
    tags: ['Canvas', 'WebGL', 'Shaders'],
    link: 'https://github.com',
    demo: '#',
    gradient: 'from-amber-400 via-rose-400 to-violet-500',
  },
  {
    title: 'Kitsune Commerce',
    description: 'A minimal e-commerce starter with delightful micro-interactions.',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    link: 'https://github.com',
    demo: '#',
    gradient: 'from-sky-500 via-emerald-400 to-cyan-500',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-bold text-slate-900"
        >
          Featured Projects
        </motion.h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group relative rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className={`h-32 bg-gradient-to-r ${p.gradient}`} />

              <div className="p-5">
                <h3 className="text-xl font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <a href={p.demo} className="inline-flex items-center gap-1 text-sm text-slate-700 hover:text-slate-900">
                    <ExternalLink size={16} /> Demo
                  </a>
                  <a href={p.link} className="inline-flex items-center gap-1 text-sm text-slate-700 hover:text-slate-900">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 -bottom-20 h-40 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.18),transparent_60%)]" />
      </div>
    </section>
  );
}
