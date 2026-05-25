export type EditorialRoleKind = "Professional Organisation";

export type EditorialVisualMotif = "waves" | "rings" | "signal" | "constellation";

export interface EditorialRole {
  slug: string;
  title: string;
  kind: EditorialRoleKind;
  institution: string;
  yearOrPeriod: string;
  publicLabel: string;
  description: string;
  tags: string[];
  href?: string;
  logo?: string;
  accent: string;
  accent2?: string;
  visualMotif: EditorialVisualMotif;
  sourceNote?: string;
}

export interface EditorialReviewArea {
  slug: string;
  title: string;
  publicLabel: string;
  description: string;
  tags: string[];
  accent: string;
  accent2?: string;
  visualMotif: EditorialVisualMotif;
  icon: "journal" | "book" | "field";
}

export const editorialIntro = {
  title: "Editorial Roles & Professional Service",
  subtitle:
    "Publishing initiatives, institutional affiliations, and review-related service in acoustics, sound, and audio research.",
  description:
    "A curated editorial and institutional overview: special issues, edited volumes, professional organisations, and broader review activity connected with sound, listening, acoustics, and audio engineering.",
};

export const editorialRoles: EditorialRole[] = [
  {
    slug: "polish-acoustical-society",
    title: "Polish Acoustical Society",
    kind: "Professional Organisation",
    institution: "Polskie Towarzystwo Akustyczne",
    yearOrPeriod: "Professional community",
    publicLabel: "Professional affiliation",
    description:
      "A national acoustics community connecting research, education, and professional exchange around sound, acoustic space, and listening environments.",
    tags: ["acoustics", "research community", "professional service"],
    href: "https://acoustics.org.pl/",
    logo: "/images/organizations/pta-logo.gif",
    accent: "#56d8ff",
    accent2: "#b8f3ff",
    visualMotif: "rings",
    sourceNote:
      "Official logo downloaded from the public PTA site header asset. A higher-resolution variant from OWPTA remains stored as an alternate local asset.",
  },
  {
    slug: "polish-sound-engineers-association",
    title: "Polish Association of Sound Engineers",
    kind: "Professional Organisation",
    institution: "Polskie Stowarzyszenie Realizatorow Dzwieku",
    yearOrPeriod: "Professional community",
    publicLabel: "Honorary membership",
    description:
      "A professional sound-engineering environment focused on practice, standards, education, and the recognition of sound production work.",
    tags: ["sound engineering", "recording", "professional practice"],
    href: "https://ard.edu.pl/o-akademii/polskie-stowarzyszenie-realizatorow-dzwieku/",
    logo: "/images/organizations/psrd-placeholder.svg",
    accent: "#ffb347",
    accent2: "#ffe0a3",
    visualMotif: "signal",
    sourceNote:
      "Placeholder mark restored for the PSRD card.",
  },
  {
    slug: "audio-engineering-society",
    title: "Audio Engineering Society",
    kind: "Professional Organisation",
    institution: "AES",
    yearOrPeriod: "International network",
    publicLabel: "Audio engineering network",
    description:
      "An international professional network for audio engineering, standards, technology, conferences, and knowledge exchange.",
    tags: ["audio engineering", "standards", "international network"],
    href: "https://aes.org/",
    logo: "/images/organizations/aes-shield-white.png",
    accent: "#8fb7ff",
    accent2: "#d9e7ff",
    visualMotif: "constellation",
    sourceNote:
      "Official AES Shield Only White logo downloaded from the public AES brand asset pack and kept unchanged.",
  },
];

export const editorialReviewAreas: EditorialReviewArea[] = [
  {
    slug: "journal-manuscript-reviews",
    title: "Journal manuscript reviews",
    publicLabel: "Editorial and review service",
    description:
      "General review activity related to manuscripts in sound studies, acoustics, music technology, and listening research.",
    tags: ["manuscripts", "peer review", "journals"],
    accent: "#56d8ff",
    accent2: "#c7f7ff",
    visualMotif: "waves",
    icon: "journal",
  },
  {
    slug: "book-and-chapter-review-support",
    title: "Book and chapter review support",
    publicLabel: "Scholarly publishing support",
    description:
      "Broader support for edited volumes, book chapters, and publication workflows in areas adjacent to sound and music research.",
    tags: ["edited volumes", "chapters", "publishing"],
    accent: "#ffb347",
    accent2: "#ffe0a3",
    visualMotif: "rings",
    icon: "book",
  },
  {
    slug: "acoustics-sound-studies-audio-research",
    title: "Acoustics, sound studies, and audio research",
    publicLabel: "Research field expertise",
    description:
      "A thematic area rather than a list of named journals: acoustics, auditory perception, recording, spatial audio, and audio engineering.",
    tags: ["acoustics", "sound studies", "audio research"],
    accent: "#a78bfa",
    accent2: "#ddd6fe",
    visualMotif: "constellation",
    icon: "field",
  },
];
