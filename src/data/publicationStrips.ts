import type { PublicationRecord } from "./publications";

export interface PublicationStrip {
  asset: string;
  accent: string;
  accent2: string;
  motif: string;
}

const journalArticleStripMap: Record<string, PublicationStrip> = {
  "spherical-microphone-prototype": {
    asset: "/images/publication-strips/journal-articles/01-spherical-microphone-prototype.svg",
    accent: "#FFB347",
    accent2: "#56D8FF",
    motif: "Spherical microphone capsule and multichannel wavefronts",
  },
  "variable-properties-of-auditory-image-analysis": {
    asset: "/images/publication-strips/journal-articles/02-variable-properties-auditory-image-analysis.svg",
    accent: "#12D6D6",
    accent2: "#56D8FF",
    motif: "Auditory image orbit map and analytical points",
  },
  "telemann-audio-information-streaming": {
    asset: "/images/publication-strips/journal-articles/03-telemann-audio-information-streaming.svg",
    accent: "#8B7CFF",
    accent2: "#56D8FF",
    motif: "Baroque stream curves and recorder airflow",
  },
  "variable-properties-of-auditory-scene-analysis-in-music": {
    asset: "/images/publication-strips/journal-articles/04-variable-properties-auditory-scene-analysis.svg",
    accent: "#2EA8FF",
    accent2: "#12D6D6",
    motif: "Auditory scene layers and spectral terrain",
  },
  "multivariantism-of-auditory-perceptions": {
    asset: "/images/publication-strips/journal-articles/05-multivariantism-auditory-perceptions.svg",
    accent: "#8B7CFF",
    accent2: "#B794F4",
    motif: "Branching perception variants and alternate paths",
  },
  "influence-of-music-education-and-interval-size": {
    asset: "/images/publication-strips/journal-articles/06-music-education-interval-size-ab-ab.svg",
    accent: "#34D399",
    accent2: "#56D8FF",
    motif: "AB-AB interval ladder and grouping diagram",
  },
  "virtual-musical-instruments-timbre-recognition-training": {
    asset: "/images/publication-strips/journal-articles/07-virtual-musical-instruments-timbre-recognition.svg",
    accent: "#34D399",
    accent2: "#FFB347",
    motif: "Virtual keyboard and timbre spectrum",
  },
  "digital-technologies-in-teaching-conducting": {
    asset: "/images/publication-strips/journal-articles/08-digital-technologies-teaching-conducting.svg",
    accent: "#56D8FF",
    accent2: "#8B7CFF",
    motif: "Conducting gesture traces and digital baton lines",
  },
  "digital-technology-in-sacred-buildings": {
    asset: "/images/publication-strips/journal-articles/09-digital-technology-sacred-buildings.svg",
    accent: "#FFB347",
    accent2: "#34D399",
    motif: "Sacred architecture grid and acoustic rays",
  },
  "sound-localisation-visual-impairment": {
    asset: "/images/publication-strips/journal-articles/10-sound-localisation-visual-impairment.svg",
    accent: "#2EA8FF",
    accent2: "#FFFFFF",
    motif: "Localisation radar and spatial hearing points",
  },
  "cyberculture-and-digital-creative-practices": {
    asset: "/images/publication-strips/journal-articles/11-cyberculture-digital-creative-practices.svg",
    accent: "#8B7CFF",
    accent2: "#12D6D6",
    motif: "Cyberculture network and multimedia nodes",
  },
  "computer-as-multimedia-tool-in-music-teacher-practice": {
    asset: "/images/publication-strips/journal-articles/12-computer-multimedia-tool-music-teachers.svg",
    accent: "#34D399",
    accent2: "#56D8FF",
    motif: "Computer interface and multimedia blocks",
  },
  "room-acoustics-in-sacred-spaces": {
    asset: "/images/publication-strips/journal-articles/13-room-acoustics-sacred-spaces-spaciousness.svg",
    accent: "#FFB347",
    accent2: "#56D8FF",
    motif: "Room impulse arcs and nave depth",
  },
  "sound-reinforcement-systems-for-sacred-spaces": {
    asset: "/images/publication-strips/journal-articles/14-sound-reinforcement-sacred-spaces.svg",
    accent: "#FF8A00",
    accent2: "#FFB347",
    motif: "Speaker coverage and reinforcement beams",
  },
  "music-teachers-media-education": {
    asset: "/images/publication-strips/journal-articles/15-music-teachers-media-education.svg",
    accent: "#34D399",
    accent2: "#8B7CFF",
    motif: "Media education constellation and pedagogy nodes",
  },
  "virtual-instruments-production-sound-compositions": {
    asset: "/images/publication-strips/journal-articles/16-virtual-instruments-production-sound-compositions.svg",
    accent: "#12D6D6",
    accent2: "#FFB347",
    motif: "Virtual instrument patch matrix and envelopes",
  },
  "electronic-keyboard-instruments-teaching-music": {
    asset: "/images/publication-strips/journal-articles/17-electronic-keyboard-instruments-teaching-music.svg",
    accent: "#56D8FF",
    accent2: "#34D399",
    motif: "Keyboard keys and electronic pulses",
  },
};

const genericStrips = {
  monographs: {
    asset: "/images/publication-strips/generic/strip-wave-spectrum.svg",
    accent: "#56D8FF",
    accent2: "#8B7CFF",
    motif: "Wave spectrum",
  },
  editorial: {
    asset: "/images/publication-strips/generic/strip-hex-field.svg",
    accent: "#8B7CFF",
    accent2: "#56D8FF",
    motif: "Hex field",
  },
  chapters: {
    asset: "/images/publication-strips/generic/strip-orbit-map.svg",
    accent: "#34D399",
    accent2: "#56D8FF",
    motif: "Orbit map",
  },
  fallback: {
    asset: "/images/publication-strips/generic/strip-spectral-bars.svg",
    accent: "#56D8FF",
    accent2: "#FFB347",
    motif: "Spectral bars",
  },
} satisfies Record<string, PublicationStrip>;

export function getPublicationStrip(publication: PublicationRecord): PublicationStrip {
  if (publication.category === "Journal article") {
    return journalArticleStripMap[publication.slug] ?? genericStrips.fallback;
  }

  if (publication.category === "Monograph") {
    return genericStrips.monographs;
  }

  if (publication.category === "Book series editor") {
    return genericStrips.editorial;
  }

  if (publication.category === "Book chapter") {
    return genericStrips.chapters;
  }

  return genericStrips.fallback;
}
