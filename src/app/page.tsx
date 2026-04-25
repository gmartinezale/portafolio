import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TechIcons from "@/components/TechIcon";
import Timeline from "@/components/Timelinex";

export const metadata: Metadata = {
  title: "Portafolio — Alexis González",
  description: "Desarrollador Full Stack con más de 12 años de experiencia en Next.js, Node.js, React Native, MongoDB, PostgreSQL, AWS y Python.",
};

export default function Home() {
  return (
    <main className="container mx-auto pt-16 px-4 sm:px-6 lg:px-8 max-w-4xl">
      <Hero />
      <Timeline />
      <TechIcons />
    </main>
  );
}

