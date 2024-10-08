import { Carousel, Modal, Timeline } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";
import { HiCalendar } from "react-icons/hi";

export default function Timelinex() {
  const [openModal, setOpenModal] = useState(false);
  const [imagesGallery, setImagesGallery] = useState<string[]>([]);
  const experiences = [
    {
      title: "Full Stack Developer en Booz.cl",
      description: "Desarrollo soluciones tecnológicas para gestión interna de la empresa. Utilizando tecnologías modernas como Next.js, Node.js, MongoDB, AWS y Python.",
      date: "2018 - Presente",
    },
    {
      title: "Desarrollador Full Stack en HS soluciones",
      description: "Creación de software de rendimiento para la industria de call center. Utilizando tecnologías como JS, Node.js, MySQL, MongoDB.",
      date: "2017 - 2018",
    },
    {
      title: "Desarrollador Web en Optimiza chile",
      description: "Desarrollo de aplicaciones web e integraciones con software de llamados como VICIDIAL y SOFTPHONE. Ocupé tecnologías como JS, PHP, MySQL.",
      date: "2016 - 2017",
    },
    {
      title: "Desarrollador Interno para AutoCastillo",
      description: "Implementé un sistema de gestión de ordenes de trabajo para talleres de reparación de vehículos. Utilizando tecnologías como JS, PHP, MySQL.",
      date: "2012 - 2016",
    },
    {
      title: "Desarrollador Web en Oxus",
      description: "Desarrollo de aplicaciones web para clientes externos como Monticello, Copa Copec, entre otros. Utilizando tecnologías como JS, PHP, MySQL.",
      date: "2010 - 2012",
    }
  ];

  const internalProjects = [
    {
      title: "Portafolio",
      description: "Creación de un portafolio personal para mostrar mis habilidades y experiencia.",
      date: "2024",
    },
    {
      title: "Sistema de Cotización",
      description: "Sistema de cotización a medida para una imprenta de artistas. Utilizando tecnologías como Next.js, Node.js, MongoDB.",
      date: "2024",
      images: [
        "/images/internos/cotizador/1.png",
        "/images/internos/cotizador/2.png",
        "/images/internos/cotizador/3.png",
        "/images/internos/cotizador/4.png",
      ],
    },
    {
      title: "Sistema de Entrega de Pedidos",
      description: "Sistema de entrega de pedidos para una empresa de despacho. Utilizando tecnologías como React, Node.js, MongoDB.",
      date: "2021",
      images: [
        "/images/internos/rutas/1.png",
        "/images/internos/rutas/2.png",
        "/images/internos/rutas/3.png",
        "/images/internos/rutas/4.png",
        "/images/internos/rutas/5.png",
      ]
    }
  ];

  return (
    <section className="my-16">
      <h2 className="text-2xl font-bold mb-8 text-left">Experiencia Profesional</h2>
      <Timeline className="dark">
        {experiences.map((experience, index) => (
          <Timeline.Item key={index}>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Title>{experience.title}</Timeline.Title>
              <Timeline.Body>{experience.description}</Timeline.Body>
              <Timeline.Time>{experience.date}</Timeline.Time>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>

      <h2 className="text-2xl font-bold mt-16 mb-8 text-left">Proyectos Internos</h2>
      <Timeline className="dark">
        {internalProjects.map((project, index) => (
          <Timeline.Item key={index}>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Title>{project.title}</Timeline.Title>
              <Timeline.Body>
                <p>
                {project.description}
                </p>
                {project.images && project.images.length > 0 && (
                    <a href="#" className="text-blue-600 hover:underline mt-2" onClick={() => {
                      setImagesGallery(project.images);
                      setOpenModal(true);
                    }}>Ver Galería</a>
                )}
              </Timeline.Body>
              <Timeline.Time>{project.date}</Timeline.Time>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
      <Modal className="dark" size="2xl" show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Galería</Modal.Header>
        <Modal.Body>
          <div className="flex justify-center items-center h-full">
            <Carousel className="w-full dark">
              {imagesGallery.map((image, index) => {
                return (
                  <>
                    <Image key={index} src={image} alt={`Imagen ${index}`} width={600} height={500} className="max-w-full max-h-[80vh] object-contain" />
                  </>
                );
              })}
            </Carousel>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
}