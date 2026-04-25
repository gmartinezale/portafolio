'use client';
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { HiCalendar, HiChevronLeft, HiChevronRight, HiX } from "react-icons/hi";

/* ─── Types ─────────────────────────────────────────────── */
interface Experience {
  id: string;
  title: string;
  description: string;
  date: string;
}

interface Project extends Experience {
  images?: string[];
}

/* ─── Data ───────────────────────────────────────────────── */
const experiences: Experience[] = [
  {
    id: "booz",
    title: "Full Stack Developer en Booz.cl",
    description: "Desarrollo soluciones tecnológicas para gestión interna de la empresa. Utilizando tecnologías modernas como Next.js, Node.js, MongoDB, AWS y Python.",
    date: "2018 – Presente",
  },
  {
    id: "hs-soluciones",
    title: "Desarrollador Full Stack en HS Soluciones",
    description: "Creación de software de rendimiento para la industria de call center. Utilizando tecnologías como JS, Node.js, MySQL, MongoDB.",
    date: "2017 – 2018",
  },
  {
    id: "optimiza",
    title: "Desarrollador Web en Optimiza Chile",
    description: "Desarrollo de aplicaciones web e integraciones con software de llamados como VICIDIAL y SOFTPHONE. Tecnologías: JS, PHP, MySQL.",
    date: "2016 – 2017",
  },
  {
    id: "autocastillo",
    title: "Desarrollador Interno para AutoCastillo",
    description: "Sistema de gestión de órdenes de trabajo para talleres de reparación vehicular. Tecnologías: JS, PHP, MySQL.",
    date: "2012 – 2016",
  },
  {
    id: "oxus",
    title: "Desarrollador Web en Oxus",
    description: "Desarrollo de aplicaciones web para clientes externos como Monticello y Copa Copec. Tecnologías: JS, PHP, MySQL.",
    date: "2010 – 2012",
  },
];

const internalProjects: Project[] = [
  {
    id: "portafolio",
    title: "Portafolio Personal",
    description: "Portafolio personal para mostrar habilidades y experiencia. Construido con Next.js, HeroUI y Tailwind CSS.",
    date: "2026",
  },
  {
    id: "cotizador",
    title: "Sistema de Cotización",
    description: "Sistema de cotización a medida para una imprenta de artistas. Tecnologías: Next.js, Node.js, MongoDB.",
    date: "2024",
    images: [
      "/images/internos/cotizador/1.png",
      "/images/internos/cotizador/2.png",
      "/images/internos/cotizador/3.png",
      "/images/internos/cotizador/4.png",
      "/images/internos/cotizador/5.png",
    ],
  },
  {
    id: "rutas",
    title: "Sistema de Entrega de Pedidos",
    description: "Sistema de entrega de pedidos para empresa de despacho. Tecnologías: React, Node.js, MongoDB.",
    date: "2021",
    images: [
      "/images/internos/rutas/1.png",
      "/images/internos/rutas/2.png",
      "/images/internos/rutas/3.png",
      "/images/internos/rutas/4.png",
      "/images/internos/rutas/5.png",
    ],
  },
];

/* ─── Gallery Modal ──────────────────────────────────────── */
function GalleryModal({
  images,
  title,
  onClose,
}: {
  images: string[];
  title: string;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % images.length),
    [images.length]
  );

  // Keyboard navigation + close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Galería: ${title}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-2xl bg-gray-900 border border-gray-700/60 rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-700/50">
          <span className="text-sm font-semibold text-white">{title} — Galería</span>
          <button
            onClick={onClose}
            aria-label="Cerrar galería"
            className="text-gray-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-gray-700/60"
          >
            <HiX size={18} />
          </button>
        </div>

        {/* Image */}
        <div className="relative bg-gray-950 rounded-b-none overflow-hidden">
          <div className="flex items-center justify-center min-h-[280px] sm:min-h-[360px]">
            <Image
              key={current}
              src={images[current]}
              alt={`${title} — imagen ${current + 1} de ${images.length}`}
              width={800}
              height={500}
              className="max-h-[50vh] w-auto object-contain"
            />
          </div>

          {/* Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Imagen anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              >
                <HiChevronLeft size={22} />
              </button>
              <button
                onClick={next}
                aria-label="Imagen siguiente"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              >
                <HiChevronRight size={22} />
              </button>
            </>
          )}
        </div>

        {/* Footer: dots + counter */}
        <div className="flex flex-col items-center gap-2 px-5 py-4 border-t border-gray-700/50">
          <div className="flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ir a imagen ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === current ? "bg-white w-5" : "bg-white/25 w-1.5"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">
            {current + 1} / {images.length}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Timeline Item ──────────────────────────────────────── */
function TimelineItem({
  title,
  description,
  date,
  onGallery,
  isLast,
}: {
  title: string;
  description: string;
  date: string;
  onGallery?: () => void;
  isLast: boolean;
}) {
  return (
    <div className="relative flex gap-4 sm:gap-6">
      {/* Line + dot */}
      <div className="flex flex-col items-center flex-shrink-0 pt-1">
        <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center flex-shrink-0 z-10">
          <HiCalendar className="text-gray-400" size={14} />
        </div>
        {!isLast && <div className="w-px flex-1 mt-1 bg-gray-700/50" />}
      </div>

      {/* Content */}
      <div className={`pb-8 flex-1 min-w-0 ${isLast ? "pb-0" : ""}`}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
          <h3 className="text-sm sm:text-base font-semibold text-gray-100 leading-snug">
            {title}
          </h3>
          <span className="text-xs text-gray-500 font-mono whitespace-nowrap">{date}</span>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
        {onGallery && (
          <button
            onClick={onGallery}
            className="mt-3 text-xs text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
          >
            Ver galería →
          </button>
        )}
      </div>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────── */
export default function Timelinex() {
  const [gallery, setGallery] = useState<{ images: string[]; title: string } | null>(null);

  const handleGallery = (images: string[], title: string) => {
    setGallery({ images, title });
  };

  return (
    <section className="my-16">
      {/* Professional Experience */}
      <h2 className="text-2xl font-bold mb-2 text-white">Experiencia Profesional</h2>
      <p className="text-gray-500 text-sm mb-8">Historial de trabajo</p>
      <div className="mb-16">
        {experiences.map((exp, i) => (
          <TimelineItem
            key={exp.id}
            title={exp.title}
            description={exp.description}
            date={exp.date}
            isLast={i === experiences.length - 1}
          />
        ))}
      </div>

      {/* Internal Projects */}
      <h2 className="text-2xl font-bold mb-2 text-white">Proyectos Propios</h2>
      <p className="text-gray-500 text-sm mb-8">Proyectos personales y experimentales</p>
      <div>
        {internalProjects.map((proj, i) => (
          <TimelineItem
            key={proj.id}
            title={proj.title}
            description={proj.description}
            date={proj.date}
            onGallery={
              proj.images?.length
                ? () => handleGallery(proj.images!, proj.title)
                : undefined
            }
            isLast={i === internalProjects.length - 1}
          />
        ))}
      </div>

      {/* Gallery Modal */}
      {gallery && (
        <GalleryModal
          images={gallery.images}
          title={gallery.title}
          onClose={() => setGallery(null)}
        />
      )}
    </section>
  );
}

