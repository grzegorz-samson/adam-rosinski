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
    slug: "american-auditory-society",
    title: "American Auditory Society",
    kind: "Professional Organisation",
    institution: "AAS",
    yearOrPeriod: "United States / international",
    publicLabel: "Professional membership",
    description:
      "A hearing and auditory-science community linking listening research, perception, and clinical-academic exchange.",
    tags: ["auditory science", "hearing research", "listening"],
    href: "https://www.amauditorysoc.org/",
    logo: "/images/organizations/official/american-auditory-society.png",
    accent: "#67e8f9",
    accent2: "#a78bfa",
    visualMotif: "rings",
    sourceNote:
      "Official logo downloaded from the public AAS site header asset via the local acquisition script.",
  },
  {
    slug: "acoustical-society-of-america",
    title: "Acoustical Society of America",
    kind: "Professional Organisation",
    institution: "ASA",
    yearOrPeriod: "United States / international",
    publicLabel: "Scientific society",
    description:
      "A major acoustics society spanning sound, vibration, speech, hearing, music, and applied acoustic research.",
    tags: ["acoustics", "hearing", "sound research"],
    href: "https://acousticalsociety.org/",
    logo: "/images/organizations/official/acoustical-society-of-america.png",
    accent: "#38bdf8",
    accent2: "#22c55e",
    visualMotif: "waves",
    sourceNote:
      "Official ASA public logo image downloaded locally. The official brand-pack ZIP returned 403 and remains a manual follow-up if a production variant is needed.",
  },
  {
    slug: "european-acoustics-association",
    title: "European Acoustics Association",
    kind: "Professional Organisation",
    institution: "EAA",
    yearOrPeriod: "Europe",
    publicLabel: "European network",
    description:
      "A European scholarly network connecting acoustics communities, applied sound research, and conference exchange.",
    tags: ["acoustics", "european network", "research community"],
    href: "https://euracoustics.org/",
    logo: "/images/organizations/official/european-acoustics-association.png",
    accent: "#60a5fa",
    accent2: "#fbbf24",
    visualMotif: "constellation",
    sourceNote:
      "Official logo downloaded from the public EAA site asset via the local acquisition script.",
  },
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
  {
    slug: "society-for-music-production-research",
    title: "Society for Music Production Research",
    kind: "Professional Organisation",
    institution: "SMPR",
    yearOrPeriod: "International",
    publicLabel: "Research society",
    description:
      "A society focused on music production studies, recording cultures, creative process, and production-oriented scholarship.",
    tags: ["music production", "recording culture", "research"],
    href: "https://musicproductionresearch.org/",
    logo: "/images/organizations/memberships/society-for-music-production-research.svg",
    accent: "#f59e0b",
    accent2: "#67e8f9",
    visualMotif: "signal",
    sourceNote:
      "No separate official logo file was identified in the acquisition manifest, so the local editorial fallback remains in use.",
  },
  {
    slug: "society-for-music-theory",
    title: "Society for Music Theory",
    kind: "Professional Organisation",
    institution: "SMT",
    yearOrPeriod: "United States / international",
    publicLabel: "Scholarly society",
    description:
      "A scholarly community for music theory, analytical methods, musical structure, and interpretation.",
    tags: ["music theory", "analysis", "scholarship"],
    href: "https://societymusictheory.org/",
    logo: "/images/organizations/official/society-for-music-theory.png",
    accent: "#c084fc",
    accent2: "#67e8f9",
    visualMotif: "constellation",
    sourceNote:
      "Official SMT logo downloaded from the public site asset listed alongside the society's logo guidelines.",
  },
  {
    slug: "society-for-music-analysis",
    title: "Society for Music Analysis",
    kind: "Professional Organisation",
    institution: "SMA",
    yearOrPeriod: "United Kingdom / international",
    publicLabel: "Scholarly society",
    description:
      "A society centered on analytical study of music, critical interpretation, and theoretical approaches to musical works.",
    tags: ["music analysis", "theory", "interpretation"],
    href: "https://www.sma.ac.uk/",
    logo: "/images/organizations/official/society-for-music-analysis.jpg",
    accent: "#a78bfa",
    accent2: "#f472b6",
    visualMotif: "constellation",
    sourceNote:
      "Official SMA site image downloaded locally from the public website header asset.",
  },
  {
    slug: "society-for-music-perception-and-cognition",
    title: "Society for Music Perception and Cognition",
    kind: "Professional Organisation",
    institution: "SMPC",
    yearOrPeriod: "International",
    publicLabel: "Research society",
    description:
      "A research community around music perception, cognition, auditory organisation, and empirical listening studies.",
    tags: ["music cognition", "perception", "listening research"],
    href: "https://www.musicperception.org/",
    logo: "/images/organizations/official/society-for-music-perception-and-cognition.png",
    accent: "#2dd4bf",
    accent2: "#a78bfa",
    visualMotif: "rings",
    sourceNote:
      "Official SMPC site image downloaded locally from the public website asset.",
  },
  {
    slug: "cognitive-science-society",
    title: "Cognitive Science Society",
    kind: "Professional Organisation",
    institution: "CSS",
    yearOrPeriod: "International",
    publicLabel: "Interdisciplinary society",
    description:
      "An interdisciplinary society connecting cognition, perception, learning, mental representation, and research methods.",
    tags: ["cognitive science", "perception", "interdisciplinary"],
    href: "https://cognitivesciencesociety.org/",
    logo: "/images/organizations/official/cognitive-science-society.png",
    accent: "#34d399",
    accent2: "#60a5fa",
    visualMotif: "constellation",
    sourceNote:
      "Official Cognitive Science Society logo downloaded from the public website asset.",
  },
  {
    slug: "ieee",
    title: "Institute of Electrical and Electronics Engineers",
    kind: "Professional Organisation",
    institution: "IEEE",
    yearOrPeriod: "International",
    publicLabel: "Technical association",
    description:
      "A technical community relevant to electronics, signal processing, computing systems, and engineering standards.",
    tags: ["engineering", "signal processing", "technology"],
    href: "https://www.ieee.org/",
    logo: "/images/organizations/official/ieee.png",
    accent: "#38bdf8",
    accent2: "#818cf8",
    visualMotif: "constellation",
    sourceNote:
      "Official IEEE logo provided in docs/context/logo and saved as a local official asset for the editorial section.",
  },
  {
    slug: "association-for-computing-machinery",
    title: "Association for Computing Machinery",
    kind: "Professional Organisation",
    institution: "ACM",
    yearOrPeriod: "International",
    publicLabel: "Computing association",
    description:
      "A computing association linking digital systems, software, computational culture, and broader technical research.",
    tags: ["computing", "digital systems", "research infrastructure"],
    href: "https://www.acm.org/",
    logo: "/images/organizations/memberships/association-for-computing-machinery.svg",
    accent: "#22d3ee",
    accent2: "#f59e0b",
    visualMotif: "constellation",
    sourceNote:
      "ACM identity standards page was identified, but direct file fetch was blocked, so the local editorial fallback remains in use.",
  },
  {
    slug: "fsnt-not",
    title: "Federation of Scientific and Technical Associations - Supreme Technical Organization",
    kind: "Professional Organisation",
    institution: "FSNT-NOT",
    yearOrPeriod: "Poland",
    publicLabel: "Scientific and technical federation",
    description:
      "A national federation of technical associations supporting engineering culture, expert exchange, and public technical service.",
    tags: ["technical associations", "engineering culture", "expert exchange"],
    href: "https://not.org.pl/",
    logo: "/images/organizations/official/fsnt-not.png",
    accent: "#f97316",
    accent2: "#60a5fa",
    visualMotif: "constellation",
    sourceNote:
      "Official FSNT-NOT logo downloaded from the public site asset via the local acquisition script.",
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
