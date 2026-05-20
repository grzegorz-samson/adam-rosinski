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
    "Selected releases, research recordings, spatial listening projects, and archival studio work.",
  description:
    "A curated catalogue of recordings, sound studies, and production work developed across research, studio practice, and listening-oriented projects.",
};

export const musicReleases: MusicRelease[] = [
  {
    slug: "research-recordings",
    title: "Research Recordings",
    year: "ongoing",
    type: "Research recording",
    status: "In preparation",
    description:
      "A developing body of recordings connected with listening research, acoustic space, and sound engineering practice.",
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
      "Selected studio, documentary, and production-oriented material gathered as an expandable archive of past and ongoing work.",
    roles: ["sound engineering", "post-production", "recording"],
    formats: ["film sound", "studio", "archive"],
    tags: ["studio", "film", "production"],
  },
];
