export type VisualMotif = "array" | "ellipsoid" | "pipeline" | "polar";

export type Invention = {
  id: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  subtitle: string;
  status: "published" | "article-related" | "embargoed";
  publicLabel: string;
  image: string;
  imageAlt: string;
  articleHref?: string;
  relatedAreas: string[];
  tags: string[];
  innovationPoints: string[];
  applications: string[];
  visualMotif: VisualMotif;
  accent: string;
  accent2: string;
  isPublic: boolean;
};

export const inventions: Invention[] = [
  {
    id: "circular-audio-array",
    title: "Immersive Circular Audio Array",
    shortTitle: "Circular audio array",
    eyebrow: "Authorial spatial system",
    subtitle:
      "A large-scale circular audio environment for experiments in multichannel listening, spatial perception, and situated sound practice.",
    status: "article-related",
    publicLabel: "Authorial prototype",
    image: "/images/inventions/circular-audio-array.webp",
    imageAlt:
      "Large black circular multichannel audio array suspended above a seated listener.",
    relatedAreas: ["Perception", "Space", "Authorial Prototypes", "Artistic Research"],
    tags: ["immersive audio", "multichannel listening", "spatial system"],
    articleHref:
      "https://ejournals.eu/czasopismo/niepelnosprawnosc/artykul/przestrzenna-lokalizacja-dzwieku-u-osob-z-niepelnosprawnoscia-wzrokowa",
    innovationPoints: [
      "circular listening architecture",
      "speaker and microphone array visual language",
      "research scenario for spatial perception and immersive practice",
    ],
    applications: [
      "immersive listening studies",
      "spatial audio demonstrations",
      "installation-oriented sound research",
      "education in multichannel environments",
    ],
    visualMotif: "array",
    accent: "#67e8f9",
    accent2: "#34d399",
    isPublic: true,
  },
  {
    id: "spherical-microphone-prototype",
    title: "Spherical Microphone Prototype for Multichannel Recording",
    shortTitle: "Spherical microphone prototype",
    eyebrow: "Published prototype study",
    subtitle:
      "A reconfigurable microphone system connecting spatial recording, ambisonic thinking, binaural cues, and artistic sound research.",
    status: "published",
    publicLabel: "Authorial audio prototype",
    image: "/images/inventions/spherical-microphone-prototype.webp",
    imageAlt:
      "Black ellipsoid microphone prototype with multiple circular capsule openings around the enclosure.",
    articleHref:
      "https://www.cambridge.org/core/journals/organised-sound/article/spherical-microphone-prototype-for-multichannel-recording-technological-design-artistic-applications-and-compositional-implications/FC3E21558389BC87BAF12F66DB3AF0B1",
    relatedAreas: ["Recording", "Space", "Authorial Prototypes", "Artistic Research"],
    tags: ["microphone design", "multichannel recording", "spatial audio"],
    innovationPoints: [
      "ellipsoid microphone enclosure",
      "ten motorised condenser capsules",
      "real-time orientation and polar-pattern control",
    ],
    applications: [
      "multichannel recording",
      "interactive sound art",
      "live performance and installations",
      "auditory scene analysis research",
    ],
    visualMotif: "ellipsoid",
    accent: "#fbbf24",
    accent2: "#67e8f9",
    isPublic: true,
  },
  {
    id: "confidential-prototype-01",
    title: "Confidential prototype",
    shortTitle: "Confidential prototype",
    eyebrow: "Embargoed",
    subtitle:
      "A further authorial system reserved until the related article has completed review.",
    status: "embargoed",
    publicLabel: "In development",
    image: "",
    imageAlt: "",
    relatedAreas: ["Authorial Prototypes"],
    tags: ["embargoed"],
    innovationPoints: [],
    applications: [],
    visualMotif: "pipeline",
    accent: "#94a3b8",
    accent2: "#64748b",
    isPublic: false,
  },
];

export const publicInventions = inventions.filter((item) => item.isPublic);

export const researchToPrototypeFlow = [
  {
    title: "Listening research",
    text: "Auditory perception, stream segregation, and the way listeners organise complex sound scenes.",
  },
  {
    title: "Spatial model",
    text: "Translating perception into spatial relations, directionality, and capture strategies.",
  },
  {
    title: "Prototype design",
    text: "Building physical systems that expose microphone placement, movement, and spatial parameters as creative variables.",
  },
  {
    title: "Recording scenario",
    text: "Testing the device in studio, performance, installation, and field-recording contexts.",
  },
  {
    title: "Artistic research use",
    text: "Using the system as a compositional interface and as a laboratory for new listening situations.",
  },
];
