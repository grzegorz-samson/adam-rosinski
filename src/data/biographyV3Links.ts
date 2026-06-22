export type BiographyV3LinkKind = "internal" | "external";

export interface BiographyV3LinkRule {
  paragraphIndex: number;
  phrase: string;
  href: string;
  kind: BiographyV3LinkKind;
  title: string;
  occurrence?: number | "all";
}

export interface BiographyV3TextSegment {
  text: string;
  link?: BiographyV3LinkRule;
}

/**
 * Navigation layer for /bio.
 *
 * The exact visible phrases are matched against the canonical text stored in
 * biographyOriginal.ts. No biography sentence is rewritten or normalised.
 */
export const biographyV3LinkRules: BiographyV3LinkRule[] = [
  {
    paragraphIndex: 0,
    phrase: "musical acoustics",
    href: "/work-areas#work-areas-map",
    kind: "internal",
    title: "Open the work areas map",
  },
  {
    paragraphIndex: 0,
    phrase: "psychoacoustics",
    href: "/work-areas#work-area-perception",
    kind: "internal",
    title: "Open the perception work area",
  },
  {
    paragraphIndex: 0,
    phrase: "sound technology",
    href: "/work-areas#work-areas-map",
    kind: "internal",
    title: "Open the work areas map",
  },
  {
    paragraphIndex: 0,
    phrase: "sound direction",
    href: "/work-areas#work-area-recording",
    kind: "internal",
    title: "Open the recording work area",
  },
  {
    paragraphIndex: 1,
    phrase: "Fryderyk Chopin University of Music in Warsaw",
    href: "https://chopin.edu.pl/en",
    kind: "external",
    title: "Open the official university website",
  },
  {
    paragraphIndex: 1,
    phrase: "auditory scene analysis",
    href: "/publications#publication-variable-properties-of-auditory-scene-analysis-in-music",
    kind: "internal",
    title: "Open the related publication",
  },
  {
    paragraphIndex: 2,
    phrase: "Fryderyk Chopin University of Music",
    href: "https://chopin.edu.pl/en",
    kind: "external",
    title: "Open the official university website",
  },
  {
    paragraphIndex: 2,
    phrase: "Stanisław Moniuszko Academy of Music in Gdańsk",
    href: "https://amuz.gda.pl/stanislaw-moniuszko-academy-of-music-in-gdansk%2C749",
    kind: "external",
    title: "Open the official academy website",
  },
  {
    paragraphIndex: 3,
    phrase: "perceptual streams (auditory streams)",
    href: "/publications#publication-psychoacoustic-contexts-of-auditory-stream-formation-in-music",
    kind: "internal",
    title: "Open the related monograph",
  },
  {
    paragraphIndex: 3,
    phrase: "auditory scene analysis",
    href: "/publications#publication-variable-properties-of-auditory-scene-analysis-in-music",
    kind: "internal",
    title: "Open the related publication",
  },
  {
    paragraphIndex: 3,
    phrase: "concept of multivariant musical perception",
    href: "/publications#publication-multivariantism-of-auditory-perceptions",
    kind: "internal",
    title: "Open the related publication",
  },
  {
    paragraphIndex: 4,
    phrase: "studio technology",
    href: "/work-areas#work-area-recording",
    kind: "internal",
    title: "Open the recording work area",
  },
  {
    paragraphIndex: 4,
    phrase: "microphone techniques used in stereophonic and multichannel systems",
    href: "/publications#publication-microphone-techniques-in-stereo-and-surround-recording",
    kind: "internal",
    title: "Open the related monograph",
  },
  {
    paragraphIndex: 4,
    phrase: "acoustics of music rooms",
    href: "/work-areas#work-area-space",
    kind: "internal",
    title: "Open the spatial-audio work area",
  },
  {
    paragraphIndex: 4,
    phrase: "digital technologies in music production",
    href: "/publications#publication-computer-technology-in-music-recording-and-production",
    kind: "internal",
    title: "Open the related monograph",
  },
  {
    paragraphIndex: 4,
    phrase: "virtual instrument systems",
    href: "/work-areas#work-area-education",
    kind: "internal",
    title: "Open the education work area",
  },
  {
    paragraphIndex: 5,
    phrase: "four academic monographs",
    href: "/publications#selected-publications",
    kind: "internal",
    title: "Open the monograph shelf",
  },
  {
    paragraphIndex: 5,
    phrase: "articles published in national and international scholarly journals",
    href: "/publications#journal-articles",
    kind: "internal",
    title: "Open journal articles",
  },
  {
    paragraphIndex: 5,
    phrase: "chapters in academic monographs",
    href: "/publications#book-chapters",
    kind: "internal",
    title: "Open book chapters",
  },
  {
    paragraphIndex: 5,
    phrase: "Perspectives of Acoustics",
    href: "/publications#publication-perspectives-of-acoustics-arts-2027",
    kind: "internal",
    title: "Open the Perspectives of Acoustics publication entry",
  },
  {
    paragraphIndex: 6,
    phrase: "several dozen completed reviews",
    href: "/publications#editorial-peer-review-records",
    kind: "internal",
    title: "Open documented peer-review records",
  },
  {
    paragraphIndex: 6,
    phrase: "reviewer of scholarly articles, chapters in monographs, and edited volumes",
    href: "/publications#editorial-review",
    kind: "internal",
    title: "Open reviewing and publishing support areas",
  },
  {
    paragraphIndex: 7,
    phrase: "University of Warmia and Mazury in Olsztyn",
    href: "https://uwm.edu.pl/en",
    kind: "external",
    title: "Open the official university website",
    occurrence: 0,
  },
  {
    paragraphIndex: 7,
    phrase: "Institute of Music",
    href: "https://ws.uwm.edu.pl/instytut-muzyki",
    kind: "external",
    title: "Open the official Institute of Music website",
  },
  {
    paragraphIndex: 7,
    phrase: "Faculty of Arts",
    href: "https://ws.uwm.edu.pl/",
    kind: "external",
    title: "Open the official Faculty of Arts website",
  },
  {
    paragraphIndex: 7,
    phrase: "Music Production and Sound Engineering",
    href: "https://ws.uwm.edu.pl/instytut-muzyki/kierunki-ksztalcenia/produkcja-muzyczna-i-realizacja-dzwieku",
    kind: "external",
    title: "Open the official degree programme page",
  },
  {
    paragraphIndex: 7,
    phrase: "Recording Studio of the Artistic Initiatives Centre",
    href: "https://ws.uwm.edu.pl/instytut-muzyki/studio-nagran",
    kind: "external",
    title: "Open the official recording studio page",
  },
  {
    paragraphIndex: 8,
    phrase: "Academy of Fine Arts in Gdańsk",
    href: "https://en.asp.gda.pl/",
    kind: "external",
    title: "Open the official academy website",
  },
  {
    paragraphIndex: 8,
    phrase: "audiovisual projects",
    href: "/work-areas#work-area-artistic-research",
    kind: "internal",
    title: "Open the artistic research work area",
  },
  {
    paragraphIndex: 9,
    phrase: "sound director and music producer",
    href: "/work-areas#work-area-recording",
    kind: "internal",
    title: "Open the recording work area",
  },
  {
    paragraphIndex: 9,
    phrase: "stereophonic and multichannel recording",
    href: "/publications#publication-microphone-techniques-in-stereo-and-surround-recording",
    kind: "internal",
    title: "Open the related monograph",
  },
  {
    paragraphIndex: 9,
    phrase: "phonographic and audiovisual projects",
    href: "/music-label",
    kind: "internal",
    title: "Open the music label page",
  },
  {
    paragraphIndex: 10,
    phrase: "American Auditory Society",
    href: "https://www.amauditorysoc.org/",
    kind: "external",
    title: "Open the official American Auditory Society website",
  },
  {
    paragraphIndex: 10,
    phrase: "Acoustical Society of America",
    href: "https://acousticalsociety.org/",
    kind: "external",
    title: "Open the official Acoustical Society of America website",
  },
  {
    paragraphIndex: 10,
    phrase: "European Acoustics Association",
    href: "https://euracoustics.org/",
    kind: "external",
    title: "Open the official European Acoustics Association website",
  },
  {
    paragraphIndex: 10,
    phrase: "Society for Music Production Research",
    href: "https://musicproductionresearch.org/",
    kind: "external",
    title: "Open the official Society for Music Production Research website",
  },
  {
    paragraphIndex: 10,
    phrase: "Society for Music Theory",
    href: "https://societymusictheory.org/",
    kind: "external",
    title: "Open the official Society for Music Theory website",
  },
  {
    paragraphIndex: 10,
    phrase: "Society for Music Analysis",
    href: "https://www.sma.ac.uk/",
    kind: "external",
    title: "Open the official Society for Music Analysis website",
  },
  {
    paragraphIndex: 10,
    phrase: "Society for Music Perception and Cognition",
    href: "https://www.musicperception.org/",
    kind: "external",
    title: "Open the official Society for Music Perception and Cognition website",
  },
  {
    paragraphIndex: 10,
    phrase: "Cognitive Science Society",
    href: "https://cognitivesciencesociety.org/",
    kind: "external",
    title: "Open the official Cognitive Science Society website",
  },
  {
    paragraphIndex: 10,
    phrase: "Institute of Electrical and Electronics Engineers",
    href: "https://www.ieee.org/",
    kind: "external",
    title: "Open the official IEEE website",
  },
  {
    paragraphIndex: 10,
    phrase: "Association for Computing Machinery",
    href: "https://www.acm.org/",
    kind: "external",
    title: "Open the official Association for Computing Machinery website",
  },
  {
    paragraphIndex: 10,
    phrase: "Audio Engineering Society",
    href: "https://aes.org/",
    kind: "external",
    title: "Open the official Audio Engineering Society website",
  },
  {
    paragraphIndex: 10,
    phrase: "Polish Acoustical Society",
    href: "https://acoustics.org.pl/",
    kind: "external",
    title: "Open the official Polish Acoustical Society website",
  },
  {
    paragraphIndex: 10,
    phrase: "Federation of Scientific and Technical Associations – Supreme Technical Organisation",
    href: "https://not.org.pl/",
    kind: "external",
    title: "Open the official Federation of Scientific and Technical Associations website",
  },
  {
    paragraphIndex: 10,
    phrase: "Polish Sound Engineers Association",
    href: "https://ard.edu.pl/o-akademii/polskie-stowarzyszenie-realizatorow-dzwieku/",
    kind: "external",
    title: "Open the official Polish Sound Engineers Association website",
  },
  {
    paragraphIndex: 11,
    phrase: "research on music perception",
    href: "/work-areas#work-area-perception",
    kind: "internal",
    title: "Open the perception work area",
  },
  {
    paragraphIndex: 11,
    phrase: "sound technology",
    href: "/work-areas#work-areas-map",
    kind: "internal",
    title: "Open the work areas map",
  },
  {
    paragraphIndex: 11,
    phrase: "practice of sound direction",
    href: "/work-areas#work-area-recording",
    kind: "internal",
    title: "Open the recording work area",
  },
];

function getRuleOccurrences(text: string, rule: BiographyV3LinkRule) {
  const occurrences: number[] = [];
  let searchFrom = 0;

  while (searchFrom <= text.length) {
    const index = text.indexOf(rule.phrase, searchFrom);
    if (index === -1) break;
    occurrences.push(index);
    searchFrom = index + rule.phrase.length;
  }

  if (rule.occurrence === "all") return occurrences;

  const occurrenceIndex = typeof rule.occurrence === "number" ? rule.occurrence : 0;
  const selected = occurrences[occurrenceIndex];
  return selected === undefined ? [] : [selected];
}

export function linkBiographyV3Paragraph(
  paragraph: string,
  paragraphIndex: number,
): BiographyV3TextSegment[] {
  const candidates = biographyV3LinkRules
    .filter((rule) => rule.paragraphIndex === paragraphIndex)
    .flatMap((rule) =>
      getRuleOccurrences(paragraph, rule).map((start) => ({
        start,
        end: start + rule.phrase.length,
        rule,
      })),
    )
    .sort((a, b) => a.start - b.start || b.rule.phrase.length - a.rule.phrase.length);

  const selected: typeof candidates = [];
  let occupiedUntil = 0;

  for (const candidate of candidates) {
    if (candidate.start < occupiedUntil) continue;
    selected.push(candidate);
    occupiedUntil = candidate.end;
  }

  if (selected.length === 0) return [{ text: paragraph }];

  const segments: BiographyV3TextSegment[] = [];
  let cursor = 0;

  for (const candidate of selected) {
    if (candidate.start > cursor) {
      segments.push({ text: paragraph.slice(cursor, candidate.start) });
    }

    segments.push({
      text: paragraph.slice(candidate.start, candidate.end),
      link: candidate.rule,
    });
    cursor = candidate.end;
  }

  if (cursor < paragraph.length) {
    segments.push({ text: paragraph.slice(cursor) });
  }

  return segments;
}
