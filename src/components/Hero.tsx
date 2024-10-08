import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row my-16">
      <div className="flex justify-center mb-4 md:mb-0 md:mr-8">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-600">
          <Image 
            src="/images/perfil.jpeg"
            alt="Tu nombre"
            className="w-full h-full object-cover"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="text-left md:text-cente justify-items-startr">
        <h1 className="text-4xl font-bold text-white">Hola, soy Alexis González</h1>
        <p className="mt-4 text-lg  text-gray-300">
          Tengo más de 12 años de experiencia en desarrollo web, especializado en tecnologías modernas como JS, Next.js, Node, MongoDB, MySQL, PostgreSQL, AWS y Python.
        </p>

        {/* Ícono de LinkedIn con efecto hover */}
        <div className="mt-8">
          <a 
            href="https://www.linkedin.com/in/gmartinez-ale/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block text-blue-700 hover:text-blue-900 transition-colors duration-300"
          >
            <FaLinkedin size={40} className="hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}