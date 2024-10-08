import { SiJavascript, SiNextdotjs, SiNodedotjs, SiMongodb, SiMysql, SiPostgresql, SiAwsamplify, SiPython } from "react-icons/si";
import { Tooltip } from "flowbite-react";
export default function TechIcons() {
  return (
    <section className="my-16">
      <h2 className="text-2xl font-bold text-center">Tecnologías que uso</h2>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-8">
        <Tooltip className="dark" content="JavaScript">
          <SiJavascript size={50} title="JavaScript" />
        </Tooltip>
        <Tooltip content="Next.js"> 
          <SiNextdotjs size={50} title="Next.js" />
        </Tooltip>
        <Tooltip content="Node.js">
          <SiNodedotjs size={50} title="Node.js" />
        </Tooltip>
        <Tooltip content="MongoDB">
          <SiMongodb size={50} title="MongoDB" />
        </Tooltip>
        <Tooltip content="MySQL">
          <SiMysql size={50} title="MySQL" />
        </Tooltip>
        <Tooltip content="PostgreSQL">
          <SiPostgresql size={50} title="PostgreSQL" />
        </Tooltip>
        <Tooltip content="AWS">
          <SiAwsamplify size={50} title="AWS" />
        </Tooltip>
        <Tooltip content="Python">
          <SiPython size={50} title="Python" />
        </Tooltip>
      </div>
    </section>
  );
}