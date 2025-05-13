import { links } from "./data";
import { StaticImageData } from "next/image";

export type SectionName = (typeof links)[number]["name"];

export interface Project {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData;
  liveUrl: string;
  github_Front?: string;
  github_Back?: string;
}
