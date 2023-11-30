"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <>
      <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
        <SectionHeading>My projects</SectionHeading>
        <div>
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>

        <div className="flex justify-center items-center mt-11">
          <Link
            href="/allproject"
            className="group bg-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 text-center w-72 "
          >
            All Project
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
        </div>
      </section>
    </>
  );
}
