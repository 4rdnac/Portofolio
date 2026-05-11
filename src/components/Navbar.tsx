import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-white border-b border-slate-200">
      <div className="flex items-center justify-between max-w-5xl mx-auto">
        
        <Link href="/" className="text-xl font-bold text-slate-800">
          Candra
        </Link>
        
        <div className="flex gap-6 text-sm font-medium text-slate-600">
          <Link href="#about" className="hover:text-blue-600">Tentang</Link>
          <Link href="#projects" className="hover:text-blue-600">Proyek</Link>
        </div>

      </div>
    </nav>
  );
}