export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} AstraAnime. All rights reserved.</p>
        <p className="text-sm text-slate-500">Built with love, motion, and a touch of anime magic ✨</p>
      </div>
    </footer>
  );
}
