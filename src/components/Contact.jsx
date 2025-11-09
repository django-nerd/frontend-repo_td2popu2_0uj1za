import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-bold text-slate-900"
        >
          Let’s create something beautiful
        </motion.h2>

        <div className="mt-10 grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <p className="text-slate-600">
              Prefer email? Reach me at <a href="mailto:hello@astraanime.dev" className="text-slate-900 font-medium underline-offset-4 hover:underline">hello@astraanime.dev</a>
            </p>
            <p className="mt-3 text-sm text-slate-500">
              I’m available for freelance projects, collaborations, and full-time roles.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://twitter.com"
                className="text-slate-600 hover:text-slate-900 text-sm"
                target="_blank" rel="noreferrer"
              >Twitter</a>
              <span className="text-slate-300">•</span>
              <a
                href="https://github.com"
                className="text-slate-600 hover:text-slate-900 text-sm"
                target="_blank" rel="noreferrer"
              >GitHub</a>
              <span className="text-slate-300">•</span>
              <a
                href="https://dribbble.com"
                className="text-slate-600 hover:text-slate-900 text-sm"
                target="_blank" rel="noreferrer"
              >Dribbble</a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              form.reset();
              alert('Thanks! Your message has been sent.');
            }}
            className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-600">Name</label>
                <input required type="text" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Email</label>
                <input required type="email" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-slate-600">Message</label>
              <textarea required rows={5} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" />
            </div>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-sky-500 text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all">
              <Send size={16} /> Send Message
            </button>
          </motion.form>
        </div>
      </div>

      <div className="absolute inset-x-0 -bottom-24 h-48 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.15),transparent_60%)]" />
      </div>
    </section>
  );
}
