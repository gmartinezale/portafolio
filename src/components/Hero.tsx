import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start gap-8 my-12 md:my-16">
      {/* Profile image */}
      <div className="flex-shrink-0 flex justify-center md:justify-start">
        <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-gray-700/60 shadow-xl shadow-black/40">
          <Image
            src="/images/perfil.jpeg"
            alt="Alexis González"
            className="w-full h-full object-cover"
            width={144}
            height={144}
            priority
          />
        </div>
      </div>

      {/* Bio */}
      <div className="flex-1 text-center md:text-left">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Hola, soy{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
            Alexis González
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl">
          Desarrollador Full Stack con más de{' '}
          <strong className="text-gray-200 font-semibold">12 años de experiencia</strong>.
          Especializado en Next.js, Node.js, React Native, MongoDB, PostgreSQL, AWS y Python.
        </p>

        {/* Social links */}
        <div className="mt-6 flex items-center justify-center md:justify-start gap-3">
          <a
            href="https://www.linkedin.com/in/gmartinez-ale/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de LinkedIn"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600/15 border border-blue-600/30 text-blue-400 hover:bg-blue-600/25 hover:border-blue-500/50 transition-all duration-200 text-sm font-medium"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
