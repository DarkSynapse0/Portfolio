import React from "react";
import RCE from "../../Gallery/RCE.png";
import DG from "../../Gallery/DG.png";
import PT from "../../Gallery/PT.png";
import CCT from "../../Gallery/CCT.png";
import oraculum from "../../../Gallery/oraculum.png";
import ProjectCard from "../../components/ProjectCard";
import { abrilFatface } from "@/components/Fonts";

// Project data object
const projects = [
  {
    Img: oraculum,
    title: "Oraculum",
    desc: "Oraculum is an academic Q&A platform for schools and colleges, combining AI assistance with verified teacher responses to make learning structured, reliable, and collaborative.",
    href: "/projects/oraculum",
  },
  {
    Img: RCE,
    title: "Random Country Explorer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis illum quibusdam quos et distinctio eius iure nisi officia pariatur, eveniet non omnis, quod dolorem molestias.",
    href: "/projects/random-country-explorer",
  },
  {
    Img: DG,
    title: "Dice Game",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis illum quibusdam quos et distinctio eius iure nisi officia pariatur, eveniet non omnis, quod dolorem molestias.",
    href: "/projects/dice-game",
  },
  {
    Img: PT,
    title: "API Data Table",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque sed vero consectetur dolorum dolor esse consequuntur, optio voluptate expedita. Molestias non autem hic! Ratione, ipsa!",
    href: "/projects/api-data-table",
  },
  {
    Img: CCT,
    title: "Currency Converter Tool",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque sed vero consectetur dolorum dolor esse consequuntur, optio voluptate expedita. Molestias non autem hic! Ratione, ipsa!",
    href: "/projects/currency-converter-tool",
  },
];

const page = () => {
  return (
    <section className="w-full p-10 min-h-screen flex items-center justify-center">
      <div className="mt-20 flex items-center justify-center flex-col gap-10">
        <h1 className={`${abrilFatface.className} text-5xl`}>My works</h1>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default page;
