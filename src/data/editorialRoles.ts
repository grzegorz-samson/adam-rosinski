export type EditorialRoleKind =
  | "Guest Editor"
  | "Edited Volume"
  | "Professional Organisation"
  | "Peer Review"
  | "Publishing Profile";

export interface EditorialRole {
  slug: string;
  title: string;
  kind: EditorialRoleKind;
  institution: string;
  yearOrPeriod: string;
  status: "Publicly verified" | "To be confirmed" | "Profile information";
  description: string;
  tags: string[];
  href?: string;
  featured?: boolean;
}

export const editorialIntro = {
  title: "Editorial Roles & Professional Service",
  subtitle:
    "Guest editing, publishing initiatives, professional organisations, and peer-review activity.",
  description:
    "This page gathers Adam Rosiński's editorial and publishing-related activity: special issues, edited volumes, professional affiliations, and reviewer roles. Publicly verified items are separated from entries that should be confirmed from CV or private documentation before publication.",
};

export const editorialRoles: EditorialRole[] = [
  {
    slug: "sound-space-creativity-performing-arts",
    title: "Sound, Space, and Creativity in Performing Arts",
    kind: "Guest Editor",
    institution: "Arts / MDPI",
    yearOrPeriod: "2025",
    status: "Publicly verified",
    description:
      "Special Issue in Arts devoted to sound, sonic space, and creative practices in contemporary performing arts.",
    tags: ["special issue", "sound", "space", "performing arts"],
    href: "https://www.mdpi.com/journal/arts/special_issues/WQA3DYR5IQ",
    featured: true,
  },
  {
    slug: "perspectives-of-acoustics",
    title: "Perspectives of Acoustics",
    kind: "Guest Editor",
    institution: "Arts / MDPI",
    yearOrPeriod: "2027",
    status: "Publicly verified",
    description:
      "Special Issue in Arts focused on acoustics, sound, technology, listening, and artistic research.",
    tags: ["special issue", "acoustics", "arts", "sound"],
    href: "https://www.mdpi.com/journal/arts/special_issues/3U4U17WCQE",
    featured: true,
  },
  {
    slug: "professional-acoustics-2",
    title: "Przestrzenie akustyki. Professional Acoustics 2",
    kind: "Edited Volume",
    institution: "University of Warmia and Mazury Press",
    yearOrPeriod: "2023",
    status: "Publicly verified",
    description:
      "Edited volume in the Professional Acoustics series, published by the University of Warmia and Mazury Press.",
    tags: ["edited volume", "acoustics", "publishing"],
    href: "https://open.icm.edu.pl/items/61c00c56-539f-4176-9b70-02f244a0b0e3f7a64c6f96da8",
    featured: true,
  },
  {
    slug: "professional-acoustics",
    title: "Przestrzenie akustyki. Professional Acoustics",
    kind: "Edited Volume",
    institution: "University of Warmia and Mazury Press",
    yearOrPeriod: "2021",
    status: "Publicly verified",
    description:
      "Earlier edited volume in the Professional Acoustics series.",
    tags: ["edited volume", "acoustics", "research"],
    href: "https://open.icm.edu.pl/server/api/core/bitstreams/a660cb48-c089-4863-98a2-b9b0e51f5aaa/content",
  },
  {
    slug: "polish-acoustical-society",
    title: "Polish Acoustical Society",
    kind: "Professional Organisation",
    institution: "Polskie Towarzystwo Akustyczne",
    yearOrPeriod: "profile information",
    status: "Profile information",
    description:
      "Professional affiliation listed in public biographical profiles.",
    tags: ["organisation", "acoustics"],
  },
  {
    slug: "polish-sound-engineers-association",
    title: "Polish Association of Sound Engineers",
    kind: "Professional Organisation",
    institution: "Polskie Stowarzyszenie Realizatorów Dźwięku",
    yearOrPeriod: "profile information",
    status: "Profile information",
    description:
      "Honorary membership listed in public biographical profiles.",
    tags: ["organisation", "sound engineering"],
  },
  {
    slug: "audio-engineering-society",
    title: "Audio Engineering Society",
    kind: "Professional Organisation",
    institution: "AES",
    yearOrPeriod: "profile information",
    status: "Profile information",
    description:
      "Professional affiliation listed in public biographical profiles.",
    tags: ["organisation", "audio engineering"],
  },
  {
    slug: "peer-review-activity",
    title: "Peer Review Activity",
    kind: "Peer Review",
    institution: "Journals and publishers",
    yearOrPeriod: "to be confirmed",
    status: "To be confirmed",
    description:
      "Use this entry as a placeholder for confirmed reviewer activity. Do not list specific journals until Adam Rosiński confirms them or a public source is available.",
    tags: ["peer review", "journals", "verification needed"],
  },
];
