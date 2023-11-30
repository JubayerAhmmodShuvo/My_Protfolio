"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { allProjectsData, projectsData } from "@/lib/data";

import { useSectionInView } from "@/lib/hooks";
import AllProject from "./allproject";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function AllProjects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <>
      <div className="flex justify-center fixed top-4  left-1/2 transform -translate-x-1/2 z-50 ">
        <Link
          href="/#projects"
          className="group bg-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack text-black text-center"
        >
          Home
          <FaHome className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
      </div>
      <section ref={ref} id="projects" className="scroll-mt-28 mb-28 mt-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4   mt-24">
          {allProjectsData.map((project, index) => (
            <React.Fragment key={index}>
              <AllProject {...project} />
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
}
