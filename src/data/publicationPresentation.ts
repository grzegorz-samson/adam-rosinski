import type { PublicationRecord } from "./publications";

const polishTitleOverrides: Record<string, string> = {
  "melody-and-rhythm-auditory-percepts":
    "Wpływ melodyki i rytmiki na tworzenie wielowariantowości odbioru wrażeń słuchowych",
  "psychoacoustic-contexts-of-auditory-stream-formation-in-music":
    "Psychoakustyczne konteksty strumieniowania percepcyjnego w muzyce",
  "computer-technology-in-music-recording-and-production": "Wykorzystanie komputera w realizacji nagrań muzycznych",
  "digital-technology-in-sacred-buildings": "Zastosowanie technologii cyfrowej w przestrzeni fizycznej budynków sakralnych",
  "sound-localisation-visual-impairment": "Lokalizacja dźwięku u osób z dysfunkcją wzroku",
  "cyberculture-and-digital-creative-practices":
    "Cyberkultura i cyfrowe praktyki twórcze jako trendy społeczeństwa multimedialnego",
  "computer-as-multimedia-tool-in-music-teacher-practice":
    "Komputer jako narzędzie multimedialne w praktyce dydaktycznej nauczycieli muzyki",
  "room-acoustics-in-sacred-spaces": "Akustyka pomieszczeń sakralnych a percepcja przestrzenności",
  "sound-reinforcement-systems-for-sacred-spaces": "Dobór systemów nagłośnieniowych do obiektów sakralnych",
  "training-of-music-teachers-in-media-education": "Kształcenie nauczycieli muzyki w zakresie edukacji medialnej",
  "virtual-instruments-production-sound-design-compositions":
    "Wykorzystanie wirtualnych instrumentów muzycznych w tworzeniu brzmienia kompozycji i aranżacji",
  "electronic-keyboard-instruments-teaching-music":
    "Elektroniczne instrumenty klawiszowe jako narzędzia wspomagające nauczanie muzyki",
  "computer-applications-popular-music-composers":
    "Zastosowania komputerowe w twórczości i dydaktyce kompozytorów muzyki rozrywkowej",
  "musical-training-grouping-galloping-rhythm":
    "Wpływ wykształcenia muzycznego na percepcyjne grupowanie sekwencji dźwięków ABA-ABA w rytm galopu",
  "perception-of-sound-via-auditory-image-analysis":
    "Percepcja dźwięku za pośrednictwem analizy obrazu słuchowego w kontekście filozofii muzyki",
  "interactive-systems-contemporary-music-education": "Zastosowanie systemów interaktywnych we współczesnej edukacji muzycznej",
  "virtual-sound-sources-binaural-recordings": "Lokalizacja wirtualnych źródeł dźwięku w nagraniach binauralnych",
  "virtual-instruments-timbre-perception": "Rola instrumentów wirtualnych w rozwoju percepcji barwy dźwięku",
  "mastering-art-of-shaping-timbre": "Mastering jako sztuka kształtowania barwy dzieł muzycznych",
  "vocal-improvisation-jazz-arrangements":
    "Improwizacja wokalna w opracowaniach jazzowych jako forma praktyki twórczej w szkołach muzycznych",
  "acoustics-of-sacred-spaces-speech-intelligibility": "Akustyka przestrzeni sakralnych a zrozumiałość mowy",
};

export function getDisplayTitle(publication: PublicationRecord): string {
  return publication.title;
}

export function getSecondaryTitle(publication: PublicationRecord): string | null {
  if (publication.language === "Polish" && polishTitleOverrides[publication.slug]) {
    return polishTitleOverrides[publication.slug];
  }

  return null;
}
