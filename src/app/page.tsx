'use client'
import Hero from "@/components/Hero";
import TechIcons from "@/components/TechIcon";
import Timeline from "@/components/Timelinex";

export default function Home() {
  return (
    <div className="container mx-auto pt-16 px-4 sm:px-6 lg:px-8">
      <Hero />
      <Timeline />
      <TechIcons />
    </div>
  );
}
