"use client";
import { notFound, useParams, useRouter } from "next/navigation";
import RCE from "../../../Gallery/RCE.png";
import DG from "../../../Gallery/DG.png";
import PT from "../../../Gallery/PT.png";
import CCT from "../../../Gallery/CCT.png";
import oraculum from "../../../Gallery/oraculum.png";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { abrilFatface, josefinSlab, lato } from "@/components/Fonts";

const projects = [
  {
    slug: "oraculum",
    Img: oraculum,
    title: "Oraculum",
    desc: "Oraculum is an academic Q&A platform for schools and colleges, combining AI assistance with verified teacher responses to make learning structured, reliable, and collaborative.",
    link: "https://oraculum.manishghimire01.com.np/",
  },
  {
    slug: "random-country-explorer",
    Img: RCE,
    title: "Random Country Explorer",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque sed vero consectetur dolorum dolor esse consequuntur, optio voluptate expedita. Molestias non autem hic! Ratione, ipsa!",
    link: "https://icodethis.com/code/3102",
  },
  {
    slug: "dice-game",
    Img: DG,
    title: "Dice Game",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque sed vero consectetur dolorum dolor esse consequuntur, optio voluptate expedita. Molestias non autem hic! Ratione, ipsa!",
    link: "https://icodethis.com/code/3067",
  },
  {
    slug: "api-data-table",
    Img: PT,
    title: "API Data Table",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque sed vero consectetur dolorum dolor esse consequuntur, optio voluptate expedita. Molestias non autem hic! Ratione, ipsa!",
    link: "https://icodethis.com/code/3170",
  },
  {
    slug: "currency-converter-tool",
    Img: CCT,
    title: "Currency Converter Tool",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque sed vero consectetur dolorum dolor esse consequuntur, optio voluptate expedita. Molestias non autem hic! Ratione, ipsa!",
    link: "https://icodethis.com/3200",
  },
];

const ProjectPage = () => {
  const param = useParams();
  const router = useRouter();
  const project = projects.find((p) => p.slug === param.name);

  if (!project) return notFound();

  return (
    <section className="w-full px-4 py-10 min-h-screen flex flex-col lg:flex-row gap-10 items-center justify-center relative">
      <button
        onClick={() => {
          router.back();
        }}
        className={`${lato.className} absolute lg:left-15 md:left-15 top-30 left-5 p-2 rounded-full text-xl flex items-center gap-2 cursor-pointer`}
      >
        <ChevronLeft />
        Back
      </button>
      <div className=" lg:mt-20 md:mt-20 flex flex-col gap-10 items-center justify-center">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="border rounded-xl overflow-hidden w-full max-w-[800px]">
            <Image
              src={project.Img.src}
              width={800}
              height={500}
              alt={project.title}
              className="w-full object-cover"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-5 items-start px-2 lg:px-0">
          <h1
            className={`${abrilFatface.className} text-3xl md:text-5xl font-bold`}
          >
            {project.title}
          </h1>
          <p className="text-base md:text-lg">{project.desc}</p>
          <Link
            target="_blank"
            className={`${josefinSlab.className} tracking-wider text-lg md:text-xl rounded-3xl border border-black py-2 px-4 hover:bg-black hover:text-white transition-all`}
            href={project.link}
          >
            Project Link
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
