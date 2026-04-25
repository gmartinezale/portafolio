import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiReact,
  SiExpo,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { Tooltip } from "@heroui/react";

interface Tech {
  icon: React.ElementType;
  name: string;
  color: string;
}

const techs: Tech[] = [
  { icon: SiJavascript,  name: "JavaScript",    color: "#F7DF1E" },
  { icon: SiNextdotjs,   name: "Next.js",        color: "#FFFFFF" },
  { icon: SiReact,       name: "React Native",   color: "#61DAFB" },
  { icon: SiExpo,        name: "Expo",           color: "#FFFFFF" },
  { icon: SiNodedotjs,   name: "Node.js",        color: "#339933" },
  { icon: SiPython,      name: "Python",         color: "#3776AB" },
  { icon: SiMongodb,     name: "MongoDB",        color: "#47A248" },
  { icon: SiMysql,       name: "MySQL",          color: "#4479A1" },
  { icon: SiPostgresql,  name: "PostgreSQL",     color: "#4169E1" },
  { icon: FaAws,         name: "AWS",            color: "#FF9900" },
];

export default function TechIcons() {
  return (
    <section className="my-16">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">Tecnologías que uso</h2>
        <p className="text-gray-500 text-sm mt-1">Stack de desarrollo actual</p>
      </div>

      <div className="flex flex-wrap gap-3">
        {techs.map(({ icon: Icon, name, color }) => (
          <Tooltip key={name}>
            <Tooltip.Trigger>
              <div
                className="flex flex-col items-center justify-center gap-2 w-20 h-20 rounded-2xl bg-gray-800/50 border border-gray-700/40 hover:border-gray-500/60 hover:bg-gray-700/50 transition-all duration-200 cursor-default group"
                aria-label={name}
              >
                <Icon
                  size={26}
                  style={{ color }}
                  aria-hidden="true"
                  className="flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                />
                <span className="text-[10px] text-gray-400 font-medium text-center leading-tight px-1">
                  {name}
                </span>
              </div>
            </Tooltip.Trigger>
            <Tooltip.Content>
              <span className="text-xs px-2 py-1">{name}</span>
            </Tooltip.Content>
          </Tooltip>
        ))}
      </div>
    </section>
  );
}

