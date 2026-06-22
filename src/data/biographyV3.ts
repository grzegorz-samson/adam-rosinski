import { originalBiographyParagraphs } from "./biographyOriginal";

export type BiographyV3Accent = "cyan" | "violet" | "emerald" | "amber";

export type BiographyV3Chapter = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  icon: string;
  accent: BiographyV3Accent;
  paragraphIndexes: readonly number[];
};

/**
 * Navigation-only structure for /bio.
 *
 * Titles and labels organise the existing biography. The chapter body always
 * comes directly from originalBiographyParagraphs and is never rewritten.
 */
export const biographyV3Chapters: BiographyV3Chapter[] = [
  {
    id: "research-profile",
    number: "01",
    eyebrow: "Research profile",
    title: "Musical arts, listening, and sound technology",
    icon: "Brain",
    accent: "cyan",
    paragraphIndexes: [0],
  },
  {
    id: "academic-formation",
    number: "02",
    eyebrow: "Academic formation",
    title: "Doctoral research and music studies",
    icon: "GraduationCap",
    accent: "violet",
    paragraphIndexes: [1, 2],
  },
  {
    id: "auditory-perception",
    number: "03",
    eyebrow: "Music perception",
    title: "Auditory streams and multivariant perception",
    icon: "WavesHorizontal",
    accent: "emerald",
    paragraphIndexes: [3],
  },
  {
    id: "studio-technology",
    number: "04",
    eyebrow: "Studio technology",
    title: "Recording, reproduction, and acoustic environments",
    icon: "AudioWaveform",
    accent: "amber",
    paragraphIndexes: [4],
  },
  {
    id: "publications-open-access",
    number: "05",
    eyebrow: "Scholarly publishing",
    title: "Publications, open access, and editorial initiatives",
    icon: "BookOpen",
    accent: "violet",
    paragraphIndexes: [5],
  },
  {
    id: "peer-review",
    number: "06",
    eyebrow: "Academic service",
    title: "Peer review and international scholarly exchange",
    icon: "PenLine",
    accent: "cyan",
    paragraphIndexes: [6],
  },
  {
    id: "teaching-institutions",
    number: "07",
    eyebrow: "Teaching and institutions",
    title: "Programme development, studio infrastructure, and interdisciplinary education",
    icon: "Building2",
    accent: "emerald",
    paragraphIndexes: [7, 8],
  },
  {
    id: "sound-direction",
    number: "08",
    eyebrow: "Professional practice",
    title: "Sound direction and music production",
    icon: "Radio",
    accent: "amber",
    paragraphIndexes: [9],
  },
  {
    id: "professional-networks",
    number: "09",
    eyebrow: "Professional networks",
    title: "Scientific organisations and affiliations",
    icon: "Network",
    accent: "violet",
    paragraphIndexes: [10],
  },
  {
    id: "interdisciplinary-synthesis",
    number: "10",
    eyebrow: "Synthesis",
    title: "Music perception, technology, and the musical work",
    icon: "Sparkles",
    accent: "emerald",
    paragraphIndexes: [11],
  },
];

export function getBiographyV3ChapterParagraphs(chapter: BiographyV3Chapter) {
  return chapter.paragraphIndexes.map((index) => originalBiographyParagraphs[index]);
}
