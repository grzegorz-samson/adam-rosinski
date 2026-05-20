export interface MusicRelease {
  slug: string;
  title: string;
  year: string;
  type: "Release" | "Series" | "Archive" | "Research recording" | "Production";
  status: "Published" | "In preparation" | "Planned" | "Archive";
  description: string;
  roles: string[];
  formats: string[];
  tags: string[];
  href?: string;
  cover?: string;
  featured?: boolean;
}

export const musicLabelIntro = {
  title: "Adam Rosiński Music Label",
  subtitle:
    "A curated space for sound releases, research recordings, spatial listening projects, and production-oriented audio work.",
  description:
    "The label page presents sound not only as documentation, but as a designed listening situation: recorded, mixed, organised, and released in relation to acoustic space, perception, and contemporary audio technologies.",
};

export const musicReleases: MusicRelease[] = [
  {
    slug: "research-recordings",
    title: "Research Recordings",
    year: "ongoing",
    type: "Research recording",
    status: "In preparation",
    description:
      "A developing catalogue of recordings connected with listening, acoustic space, perception, and sound engineering practice.",
    roles: ["recording", "editing", "spatial listening"],
    formats: ["stereo", "multichannel", "documentation"],
    tags: ["research", "listening", "recording"],
    featured: true,
  },
  {
    slug: "spatial-sound-studies",
    title: "Spatial Sound Studies",
    year: "ongoing",
    type: "Series",
    status: "Planned",
    description:
      "A planned series focused on sound localisation, spatial impression, and the relationship between acoustic environments and recorded image.",
    roles: ["curation", "sound design", "research"],
    formats: ["audio", "notes", "visual documentation"],
    tags: ["space", "localisation", "psychoacoustics"],
    featured: true,
  },
  {
    slug: "studio-and-documentary-work",
    title: "Studio and Documentary Work",
    year: "archive",
    type: "Archive",
    status: "Archive",
    description:
      "A space for selected studio, documentary, and production-related materials, to be expanded after source verification.",
    roles: ["sound engineering", "post-production", "recording"],
    formats: ["film sound", "studio", "archive"],
    tags: ["studio", "film", "production"],
  },
];
