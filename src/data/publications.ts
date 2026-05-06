export interface PublicationRecord {
  slug: string;
  title: string;
  year: number;
  category: "Monograph" | "Journal article" | "Book series editor" | "Book chapter";
  type: string;
  language: "English" | "Polish";
  summary: string;
  tags: string[];
  relatedAreas: string[];
  href: string;
  sourceNote?: string;
  publisher?: string;
  place?: string;
  pages?: string;
  isbn?: string;
  eisbnPdf?: string;
  doi?: string;
  journal?: string;
  volume?: string;
  issue?: string;
  articleNumber?: string;
  issn?: string;
  eissn?: string;
  book?: string;
  citation?: string;
  featured: boolean;
  cover?: string | null;
  sourceVerified: boolean;
}

export const publications: PublicationRecord[] = [
  {
    "slug": "melody-and-rhythm-auditory-percepts",
    "title": "Melody and Rhythm in Shaping Multiple Auditory Percepts: Auditory Stream Organisation in Selected Musical Works",
    "year": 2024,
    "category": "Monograph",
    "type": "Monograph",
    "language": "Polish",
    "sourceNote": "Published in Polish",
    "publisher": "University of Warsaw Press",
    "place": "Warszawa",
    "pages": "382",
    "isbn": "978-83-235-6267-2",
    "eisbnPdf": "978-83-235-6275-7",
    "doi": "10.31338/uw.9788323562757",
    "href": "https://doi.org/10.31338/uw.9788323562757",
    "summary": "A monograph on perceptual streaming in musical works, focusing on how melody and rhythm can shape multiple auditory interpretations.",
    "tags": [
      "auditory streaming",
      "music perception",
      "perception"
    ],
    "relatedAreas": [
      "perception"
    ],
    "featured": true,
    "cover": "/images/covers/melody-and-rhythm.jpg",
    "citation": "Rosiński, Adam. 2024. \"Melody and Rhythm in Shaping Multiple Auditory Percepts: Auditory Stream Organisation in Selected Musical Works.\" University of Warsaw Press. https://doi.org/10.31338/uw.9788323562757.",
    "sourceVerified": true
  },
  {
    "slug": "microphone-techniques-in-stereo-and-surround-recording",
    "title": "Microphone Techniques in Stereo and Surround Recording",
    "year": 2022,
    "category": "Monograph",
    "type": "Monograph",
    "language": "English",
    "publisher": "Jagiellonian University Press",
    "place": "Kraków",
    "pages": "252",
    "isbn": "978-83-233-5132-0",
    "eisbnPdf": "978-83-233-7385-8",
    "doi": "10.4467/K7385.29/e/22.22.16204",
    "href": "https://doi.org/10.4467/K7385.29/e/22.22.16204",
    "summary": "A monograph on stereo and surround microphone techniques, linking recording practice with musical, acoustic and listening perspectives.",
    "tags": [
      "microphones",
      "stereo",
      "surround"
    ],
    "relatedAreas": [
      "recording",
      "spatial-audio"
    ],
    "featured": true,
    "cover": "/images/covers/microphone-techniques.jpg",
    "citation": "Rosiński, Adam. 2022. \"Microphone Techniques in Stereo and Surround Recording.\" Jagiellonian University Press. https://doi.org/10.4467/K7385.29/e/22.22.16204.",
    "sourceVerified": true
  },
  {
    "slug": "psychoacoustic-contexts-of-auditory-stream-formation-in-music",
    "title": "Psychoacoustic Contexts of Auditory Stream Formation in Music",
    "year": 2018,
    "category": "Monograph",
    "type": "Monograph",
    "language": "Polish",
    "sourceNote": "Published in Polish",
    "publisher": "University of Warmia and Mazury Press",
    "place": "Olsztyn",
    "pages": "140",
    "isbn": "978-83-8100-119-9",
    "href": "https://adamrosinski.com/publications/",
    "summary": "A Polish-language monograph on psychoacoustic contexts of auditory stream formation in music.",
    "tags": [
      "psychoacoustics",
      "auditory streams",
      "music"
    ],
    "relatedAreas": [
      "perception"
    ],
    "featured": false,
    "cover": "/images/covers/psychoacoustic-contexts.jpg",
    "citation": "Rosiński, Adam. 2018. \"Psychoacoustic Contexts of Auditory Stream Formation in Music.\" University of Warmia and Mazury Press.",
    "sourceVerified": false
  },
  {
    "slug": "computer-technology-in-music-recording-and-production",
    "title": "The Use of Computer Technology in Music Recording and Production",
    "year": 2013,
    "category": "Monograph",
    "type": "Monograph",
    "language": "Polish",
    "sourceNote": "Published in Polish",
    "publisher": "Kazimierz Wielki University Press",
    "place": "Bydgoszcz",
    "pages": "221",
    "isbn": "978-83-7096-933-2",
    "href": "https://adamrosinski.com/publications/",
    "summary": "A Polish-language monograph on computer technologies in music recording, production and music-teacher practice.",
    "tags": [
      "music technology",
      "recording",
      "production"
    ],
    "relatedAreas": [
      "recording",
      "education"
    ],
    "featured": false,
    "cover": "/images/covers/computer-technology.jpg",
    "citation": "Rosiński, Adam. 2013. \"The Use of Computer Technology in Music Recording and Production.\" Kazimierz Wielki University Press.",
    "sourceVerified": false
  },
  {
    "slug": "spherical-microphone-prototype",
    "title": "A spherical microphone prototype for multichannel recording: Technological design, artistic applications and compositional implications",
    "year": 2026,
    "category": "Journal article",
    "type": "Article / prototype study",
    "language": "English",
    "journal": "Organised Sound",
    "pages": "1–10",
    "issn": "1355-7718",
    "eissn": "1469-8153",
    "doi": "10.1017/S1355771825101039",
    "href": "https://doi.org/10.1017/S1355771825101039",
    "summary": "A study of a spherical microphone prototype for multichannel recording, combining technological design with artistic and compositional applications.",
    "tags": [
      "prototype",
      "multichannel",
      "spatial audio"
    ],
    "relatedAreas": [
      "recording",
      "spatial-audio"
    ],
    "featured": true,
    "cover": "/images/covers/spherical-microphone.jpg",
    "citation": "Rosiński, Adam. 2026. \"A spherical microphone prototype for multichannel recording: Technological design, artistic applications and compositional implications.\" Organised Sound. https://doi.org/10.1017/S1355771825101039.",
    "sourceVerified": true
  },
  {
    "slug": "variable-properties-of-auditory-image-analysis",
    "title": "Variable Properties of Auditory Image Analysis: A Case Study of Selected Musical Works",
    "year": 2025,
    "category": "Journal article",
    "type": "Conference proceedings article",
    "language": "English",
    "journal": "Proceedings of the Annual Meeting of the Cognitive Science Society",
    "volume": "47",
    "pages": "3057–3065",
    "eissn": "1069-7977",
    "href": "https://escholarship.org/uc/item/8bj6r5dn",
    "summary": "A case-study publication on auditory image analysis in selected musical works.",
    "tags": [
      "auditory image",
      "cognitive science",
      "music analysis"
    ],
    "relatedAreas": [
      "perception"
    ],
    "featured": false,
    "cover": "/images/covers/variable-properties.jpg",
    "citation": "Rosiński, Adam. 2025. \"Variable Properties of Auditory Image Analysis: A Case Study of Selected Musical Works.\" Proceedings of the Annual Meeting of the Cognitive Science Society.",
    "sourceVerified": true
  },
  {
    "slug": "telemann-audio-information-streaming",
    "title": "An Analysis of Audio Information Streaming in Georg Philipp Telemann’s Sonata in C Major for Recorder and Basso Continuo, Allegro (TWV 41:C2)",
    "year": 2025,
    "category": "Journal article",
    "type": "Journal article",
    "language": "English",
    "journal": "Arts",
    "volume": "14",
    "issue": "4",
    "articleNumber": "76",
    "pages": "1–13",
    "issn": "2076-0752",
    "doi": "10.3390/arts14040076",
    "href": "https://doi.org/10.3390/arts14040076",
    "summary": "An analysis of perceptual streams and audio information streaming in Telemann’s Sonata in C Major.",
    "tags": [
      "Telemann",
      "auditory streams",
      "music analysis"
    ],
    "relatedAreas": [
      "perception"
    ],
    "featured": true,
    "cover": "/images/covers/variable-properties.jpg",
    "citation": "Rosiński, Adam. 2025. \"An Analysis of Audio Information Streaming in Georg Philipp Telemann’s Sonata in C Major for Recorder and Basso Continuo, Allegro (TWV 41:C2).\" Arts. https://doi.org/10.3390/arts14040076.",
    "sourceVerified": true
  },
  {
    "slug": "variable-properties-of-auditory-scene-analysis-in-music",
    "title": "Variable Properties of Auditory Scene Analysis in Music",
    "year": 2025,
    "category": "Journal article",
    "type": "Journal article",
    "language": "English",
    "journal": "Arts",
    "volume": "14",
    "issue": "1",
    "articleNumber": "19",
    "pages": "1–21",
    "issn": "2076-0752",
    "doi": "10.3390/arts14010019",
    "href": "https://doi.org/10.3390/arts14010019",
    "summary": "An article on variable properties of auditory scene analysis in music and the perceptual organisation of sonic material.",
    "tags": [
      "auditory scene analysis",
      "music",
      "perception"
    ],
    "relatedAreas": [
      "perception"
    ],
    "featured": true,
    "cover": "/images/covers/variable-properties.jpg",
    "citation": "Rosiński, Adam. 2025. \"Variable Properties of Auditory Scene Analysis in Music.\" Arts. https://doi.org/10.3390/arts14010019.",
    "sourceVerified": true
  },
  {
    "slug": "multivariantism-of-auditory-perceptions",
    "title": "Multivariantism of Auditory Perceptions as a Significant Element of the Auditory Scene Analysis Concept",
    "year": 2024,
    "category": "Journal article",
    "type": "Journal article",
    "language": "English",
    "journal": "Arts",
    "volume": "13",
    "issue": "6",
    "articleNumber": "180",
    "pages": "1–18",
    "issn": "2076-0752",
    "doi": "10.3390/arts13060180",
    "href": "https://doi.org/10.3390/arts13060180",
    "summary": "A text developing the idea of multivariant auditory perception as an element of auditory scene analysis.",
    "tags": [
      "auditory perception",
      "multivariantism",
      "analysis"
    ],
    "relatedAreas": [
      "perception",
      "education"
    ],
    "featured": true,
    "cover": "/images/covers/multivariantism.jpg",
    "citation": "Rosiński, Adam. 2024. \"Multivariantism of Auditory Perceptions as a Significant Element of the Auditory Scene Analysis Concept.\" Arts. https://doi.org/10.3390/arts13060180.",
    "sourceVerified": true
  },
  {
    "slug": "influence-of-music-education-and-interval-size",
    "title": "Influence of Music Education and Interval Size on Grouping of the AB-AB Sequence Sounds",
    "year": 2024,
    "category": "Journal article",
    "type": "Conference proceedings article",
    "language": "English",
    "journal": "Proceedings of the Annual Meeting of the Cognitive Science Society",
    "volume": "46",
    "pages": "1531–1537",
    "eissn": "1069-7977",
    "href": "https://escholarship.org/uc/item/6db683ch",
    "summary": "A study on how music education and interval size influence the grouping of AB-AB sound sequences.",
    "tags": [
      "music education",
      "auditory grouping",
      "intervals"
    ],
    "relatedAreas": [
      "perception",
      "education"
    ],
    "featured": false,
    "cover": "/images/covers/variable-properties.jpg",
    "citation": "Rosiński, Adam. 2024. \"Influence of Music Education and Interval Size on Grouping of the AB-AB Sequence Sounds.\" Proceedings of the Annual Meeting of the Cognitive Science Society.",
    "sourceVerified": true
  },
  {
    "slug": "virtual-musical-instruments-timbre-recognition-training",
    "title": "The Use of Virtual Musical Instruments in Timbre Recognition Training",
    "year": 2023,
    "category": "Journal article",
    "type": "Journal article",
    "language": "English",
    "journal": "International Journal of Learning and Teaching",
    "volume": "9",
    "issue": "3",
    "pages": "256–260",
    "issn": "2377-2891",
    "eissn": "2377-2905",
    "doi": "10.18178/ijlt.9.3.256-260",
    "href": "https://doi.org/10.18178/ijlt.9.3.256-260",
    "summary": "An article on virtual musical instruments as tools in timbre-recognition training.",
    "tags": [
      "virtual instruments",
      "timbre",
      "education"
    ],
    "relatedAreas": [
      "education",
      "perception"
    ],
    "featured": false,
    "cover": "/images/placeholder-studio.svg",
    "citation": "Rosiński, Adam. 2023. \"The Use of Virtual Musical Instruments in Timbre Recognition Training.\" International Journal of Learning and Teaching. https://doi.org/10.18178/ijlt.9.3.256-260.",
    "sourceVerified": true
  },
  {
    "slug": "digital-technologies-in-teaching-conducting",
    "title": "Digital technologies in teaching conducting",
    "year": 2023,
    "category": "Journal article",
    "type": "Journal article",
    "language": "English",
    "journal": "PUPIL: International Journal of Teaching, Education and Learning",
    "volume": "6",
    "issue": "3",
    "pages": "57–67",
    "issn": "2457-0648",
    "doi": "10.20319/pijtel.2023.63.5767",
    "href": "https://doi.org/10.20319/pijtel.2023.63.5767",
    "summary": "A publication on the role of digital technologies in teaching conducting.",
    "tags": [
      "conducting",
      "digital tools",
      "teaching"
    ],
    "relatedAreas": [
      "education"
    ],
    "featured": false,
    "cover": "/images/placeholder-studio.svg",
    "citation": "Rosiński, Adam. 2023. \"Digital technologies in teaching conducting.\" PUPIL: International Journal of Teaching, Education and Learning. https://doi.org/10.20319/pijtel.2023.63.5767.",
    "sourceVerified": true
  },
  {
    "slug": "digital-technology-in-sacred-buildings",
    "title": "The Application of Digital Technology in the Physical Space of Sacred Buildings",
    "year": 2018,
    "category": "Journal article",
    "type": "Journal article",
    "language": "Polish",
    "sourceNote": "Published in Polish",
    "journal": "Liturgia Sacra",
    "issue": "51",
    "pages": "255–266",
    "issn": "1234-4214",
    "eissn": "2391-9353",
    "doi": "10.25167/LitS/24(2018)1/255-266",
    "href": "https://doi.org/10.25167/LitS/24(2018)1/255-266",
    "summary": "A Polish-language article on the application of digital technology in sacred architectural spaces.",
    "tags": [
      "sacred spaces",
      "digital technology",
      "acoustics"
    ],
    "relatedAreas": [
      "spatial-audio",
      "education"
    ],
    "featured": false,
    "cover": "/images/placeholder-studio.svg",
    "citation": "Rosiński, Adam. 2018. \"The Application of Digital Technology in the Physical Space of Sacred Buildings.\" Liturgia Sacra. https://doi.org/10.25167/LitS/24(2018)1/255-266.",
    "sourceVerified": true
  },
  {
    "slug": "sound-localisation-visual-impairment",
    "title": "Sound Localisation in Individuals with Visual Impairment",
    "year": 2017,
    "category": "Journal article",
    "type": "Journal article",
    "language": "Polish",
    "sourceNote": "Published in Polish",
    "journal": "Niepełnosprawność. Dyskursy pedagogiki specjalnej",
    "issue": "26",
    "pages": "209–219",
    "issn": "2080-9476",
    "eissn": "2544-0519",
    "doi": "10.4467/25439561.NP.17.028.8104",
    "href": "https://doi.org/10.4467/25439561.NP.17.028.8104",
    "summary": "A Polish-language article on sound localisation in people with visual impairment.",
    "tags": [
      "localisation",
      "visual impairment",
      "spatial hearing"
    ],
    "relatedAreas": [
      "perception",
      "spatial-audio"
    ],
    "featured": false,
    "cover": "/images/placeholder-studio.svg",
    "citation": "Rosiński, Adam. 2017. \"Sound Localisation in Individuals with Visual Impairment.\" Niepełnosprawność. Dyskursy pedagogiki specjalnej. https://doi.org/10.4467/25439561.NP.17.028.8104.",
    "sourceVerified": true
  },
  {
    "slug": "cyberculture-and-digital-creative-practices",
    "title": "Cyberculture and Digital Creative Practices as Trends in a Multimedia Society",
    "year": 2016,
    "category": "Journal article",
    "type": "Journal article",
    "language": "Polish",
    "sourceNote": "Published in Polish",
    "journal": "Muzyka. Historia. Teoria. Edukacja",
    "issue": "6",
    "pages": "74–90",
    "href": "https://adamrosinski.com/publications/",
    "summary": "A Polish-language publication related to digital culture, multimedia.",
    "tags": [
      "digital culture",
      "multimedia",
      "creative practice"
    ],
    "relatedAreas": [
      "education"
    ],
    "featured": false,
    "cover": "/images/placeholder-studio.svg",
    "citation": "Rosiński, Adam. 2016. \"Cyberculture and Digital Creative Practices as Trends in a Multimedia Society.\" Muzyka. Historia. Teoria. Edukacja.",
    "sourceVerified": false
  },
  {
    "slug": "computer-as-multimedia-tool-in-music-teacher-practice",
    "title": "The Computer as a Multimedia Tool in the Teaching Practice of Music Teachers in General and Primary-Level Music Education",
    "year": 2015,
    "category": "Journal article",
    "type": "Journal article",
    "language": "Polish",
    "sourceNote": "Published in Polish",
    "journal": "Muzyka. Historia. Teoria. Edukacja",
    "issue": "5",
    "pages": "84–113",
    "href": "https://adamrosinski.com/publications/",
    "summary": "A Polish-language publication related to computer music, music teaching.",
    "tags": [
      "computer music",
      "music teaching",
      "multimedia"
    ],
    "relatedAreas": [
      "education"
    ],
    "featured": false,
    "cover": "/images/placeholder-studio.svg",
    "citation": "Rosiński, Adam. 2015. \"The Computer as a Multimedia Tool in the Teaching Practice of Music Teachers in General and Primary-Level Music Education.\" Muzyka. Historia. Teoria. Edukacja.",
    "sourceVerified": false
  },
  {
    "slug": "room-acoustics-in-sacred-spaces",
    "title": "Room Acoustics in Sacred Spaces and the Perception of Spaciousness",
    "year": 2013,
    "category": "Journal article",
    "type": "Journal article",
    "language": "Polish",
    "sourceNote": "Published in Polish",
    "journal": "Przegląd Religioznawczy",
    "issue": "4(250)",
    "pages": "99–108",
    "href": "https://adamrosinski.com/publications/",
    "summary": "A Polish-language publication related to room acoustics, sacred spaces.",
    "tags": [
      "room acoustics",
      "sacred spaces",
      "spaciousness"
    ],
    "relatedAreas": [
      "spatial-audio"
    ],
    "featured": false,
    "cover": "/images/placeholder-studio.svg",
    "citation": "Rosiński, Adam. 2013. \"Room Acoustics in Sacred Spaces and the Perception of Spaciousness.\" Przegląd Religioznawczy.",
    "sourceVerified": false
  },
  {
    "slug": "sound-reinforcement-systems-for-sacred-spaces",
    "title": "The Selection of Sound Reinforcement Systems for Sacred Spaces",
    "year": 2013,
    "category": "Journal article",
    "type": "Journal article",
    "language": "Polish",
    "sourceNote": "Published in Polish",
    "journal": "Colloquia Theologica Ottoniana",
    "issue": "2",
    "pages": "165–183",
    "href": "https://adamrosinski.com/publications/",
    "summary": "A Polish-language publication related to sound reinforcement, sacred spaces.",
    "tags": [
      "sound reinforcement",
      "sacred spaces",
      "acoustics"
    ],
    "relatedAreas": [
      "recording",
      "spatial-audio"
    ],
    "featured": false,
    "cover": "/images/placeholder-studio.svg",
    "citation": "Rosiński, Adam. 2013. \"The Selection of Sound Reinforcement Systems for Sacred Spaces.\" Colloquia Theologica Ottoniana.",
    "sourceVerified": false
  },
  {
    "slug": "training-of-music-teachers-in-media-education",
    "title": "The Training of Music Teachers in Media Education",
    "year": 2013,
    "category": "Journal article",
    "type": "Journal article",
    "language": "Polish",
    "sourceNote": "Published in Polish",
    "journal": "Neodidagmata",
    "issue": "35",
    "pages": "83–101",
    "href": "https://adamrosinski.com/publications/",
    "summary": "A Polish-language publication related to media education, music teachers.",
    "tags": [
      "media education",
      "music teachers",
      "teaching"
    ],
    "relatedAreas": [
      "education"
    ],
    "featured": false,
    "cover": "/images/placeholder-studio.svg",
    "citation": "Rosiński, Adam. 2013. \"The Training of Music Teachers in Media Education.\" Neodidagmata.",
    "sourceVerified": false
  },
  {
    "slug": "virtual-instruments-production-sound-design-compositions",
    "title": "The Use of Virtual Musical Instruments in the Production of Sound for Musical Compositions and Arrangements",
    "year": 2012,
    "category": "Journal article",
    "type": "Journal article",
    "language": "Polish",
    "sourceNote": "Published in Polish",
    "journal": "Muzyka. Historia. Teoria. Edukacja",
    "issue": "2",
    "pages": "100–113",
    "href": "https://adamrosinski.com/publications/",
    "summary": "A Polish-language publication related to virtual instruments, sound design.",
    "tags": [
      "virtual instruments",
      "sound design",
      "composition"
    ],
    "relatedAreas": [
      "education",
      "recording"
    ],
    "featured": false,
    "cover": "/images/placeholder-studio.svg",
    "citation": "Rosiński, Adam. 2012. \"The Use of Virtual Musical Instruments in the Production of Sound for Musical Compositions and Arrangements.\" Muzyka. Historia. Teoria. Edukacja.",
    "sourceVerified": false
  },
  {
    "slug": "electronic-keyboard-instruments-teaching-music",
    "title": "Electronic Keyboard Instruments as Tools Supporting the Teaching of Music",
    "year": 2012,
    "category": "Journal article",
    "type": "Journal article",
    "language": "Polish",
    "sourceNote": "Published in Polish",
    "journal": "Kultura i Wychowanie. Międzynarodowe elektroniczne czasopismo naukowe",
    "issue": "4(2)",
    "pages": "160–175",
    "href": "https://adamrosinski.com/publications/",
    "summary": "A Polish-language publication related to keyboard instruments, music teaching.",
    "tags": [
      "keyboard instruments",
      "music teaching",
      "education"
    ],
    "relatedAreas": [
      "education"
    ],
    "featured": false,
    "cover": "/images/placeholder-studio.svg",
    "citation": "Rosiński, Adam. 2012. \"Electronic Keyboard Instruments as Tools Supporting the Teaching of Music.\" Kultura i Wychowanie. Międzynarodowe elektroniczne czasopismo naukowe.",
    "sourceVerified": false
  },
  {
    "slug": "perspectives-of-acoustics-arts-2027",
    "title": "Perspectives of Acoustics. Arts",
    "year": 2027,
    "category": "Book series editor",
    "type": "Edited special issue / series",
    "language": "English",
    "issn": "2076-0752",
    "href": "https://www.mdpi.com/journal/arts/special_issues/3U4U17WCQE",
    "summary": "An edited international publication initiative devoted to contemporary issues in acoustics, sound, creativity and the arts.",
    "tags": [
      "acoustics",
      "special issue",
      "editorial work"
    ],
    "relatedAreas": [
      "spatial-audio",
      "recording",
      "perception"
    ],
    "featured": false,
    "cover": "/images/placeholder-studio.svg",
    "citation": "Rosiński, Adam. 2027. \"Perspectives of Acoustics. Arts.\" Book series editor.",
    "sourceVerified": true
  },
  {
    "slug": "sound-space-creativity-performing-arts-2025",
    "title": "Sound, Space, and Creativity in Performing Arts. Arts",
    "year": 2025,
    "category": "Book series editor",
    "type": "Edited special issue / series",
    "language": "English",
    "issn": "2076-0752",
    "href": "https://www.mdpi.com/journal/arts/special_issues",
    "summary": "An edited publication context connecting sound, space, creativity and performing arts.",
    "tags": [
      "sound",
      "space",
      "performing arts"
    ],
    "relatedAreas": [
      "spatial-audio",
      "practice"
    ],
    "featured": false,
    "cover": "/images/placeholder-studio.svg",
    "citation": "Rosiński, Adam. 2025. \"Sound, Space, and Creativity in Performing Arts. Arts.\" Book series editor.",
    "sourceVerified": true
  },
  {
    "slug": "przestrzenie-akustyki-professional-acoustics-2",
    "title": "Przestrzenie akustyki. Professional Acoustics. 2",
    "year": 2023,
    "category": "Book series editor",
    "type": "Edited volume",
    "language": "Polish / English",
    "publisher": "University of Warmia and Mazury Press",
    "place": "Olsztyn",
    "pages": "191",
    "isbn": "978-83-8100-364-3",
    "href": "https://adamrosinski.com/publications/",
    "summary": "An edited volume in the Professional Acoustics series.",
    "tags": [
      "acoustics",
      "edited volume",
      "sound studies"
    ],
    "relatedAreas": [
      "spatial-audio",
      "recording"
    ],
    "featured": false,
    "cover": "/images/placeholder-studio.svg",
    "citation": "Rosiński, Adam. 2023. \"Przestrzenie akustyki. Professional Acoustics. 2.\" University of Warmia and Mazury Press.",
    "sourceVerified": false
  },
  {
    "slug": "przestrzenie-akustyki-professional-acoustics",
    "title": "Przestrzenie akustyki. Professional Acoustics",
    "year": 2021,
    "category": "Book series editor",
    "type": "Edited volume",
    "language": "Polish / English",
    "publisher": "University of Warmia and Mazury Press",
    "place": "Olsztyn",
    "pages": "171",
    "isbn": "978-83-8100-258-5",
    "href": "https://adamrosinski.com/publications/",
    "summary": "The first edited volume in the Professional Acoustics series.",
    "tags": [
      "acoustics",
      "edited volume",
      "sound studies"
    ],
    "relatedAreas": [
      "spatial-audio",
      "recording"
    ],
    "featured": false,
    "cover": "/images/placeholder-studio.svg",
    "citation": "Rosiński, Adam. 2021. \"Przestrzenie akustyki. Professional Acoustics.\" University of Warmia and Mazury Press.",
    "sourceVerified": false
  },
  {
    "slug": "pitch-based-stream-segregation",
    "title": "Pitch-based stream segregation of tone sequences: A comparative study of musicians and non-musicians",
    "year": 2024,
    "category": "Book chapter",
    "type": "Book chapter",
    "language": "English",
    "sourceNote": null,
    "book": "Sonic Art, Sound Perception, and Audio Engineering",
    "pages": "59–74",
    "isbn": "978-83-65990-63-1",
    "href": "https://adamrosinski.com/publications/",
    "summary": "A book chapter focused on auditory stream, musicians.",
    "tags": [
      "auditory stream",
      "musicians",
      "comparative study"
    ],
    "relatedAreas": [
      "perception"
    ],
    "featured": false,
    "cover": "/images/placeholder-studio.svg",
    "citation": "Rosiński, Adam. 2024. \"Pitch-based stream segregation of tone sequences: A comparative study of musicians and non-musicians.\" Sonic Art, Sound Perception, and Audio Engineering.",
    "sourceVerified": false
  },
  {
    "slug": "keyboard-as-a-stimulator-in-timbre-recognition-training",
    "title": "Keyboard as a Stimulator in Timbre Recognition Training",
    "year": 2023,
    "category": "Book chapter",
    "type": "Book chapter",
    "language": "English",
    "sourceNote": null,
    "book": "20th International Conference on Cognition and Exploratory Learning in the Digital Age (CELDA 2023) Proceedings",
    "pages": "321–328",
    "isbn": "978-989-8704-52-8",
    "href": "https://adamrosinski.com/publications/",
    "summary": "A book chapter focused on keyboard, timbre.",
    "tags": [
      "keyboard",
      "timbre",
      "training"
    ],
    "relatedAreas": [
      "education",
      "perception"
    ],
    "featured": false,
    "cover": "/images/placeholder-studio.svg",
    "citation": "Rosiński, Adam. 2023. \"Keyboard as a Stimulator in Timbre Recognition Training.\" 20th International Conference on Cognition and Exploratory Learning in the Digital Age (CELDA 2023) Proceedings.",
    "sourceVerified": false
  },
  {
    "slug": "influence-of-music-education-and-pitch-scales",
    "title": "Influence of Music Education and Pitch Scales on the Grouping of the AB-AB Sequence Sounds",
    "year": 2023,
    "category": "Book chapter",
    "type": "Book chapter",
    "language": "Polish",
    "sourceNote": "Published in Polish",
    "book": "Przestrzenie akustyki 2. Professional Acoustics. 2",
    "pages": "113–134",
    "isbn": "978-83-8100-364-3",
    "href": "https://adamrosinski.com/publications/",
    "summary": "A book chapter focused on music education, pitch scales.",
    "tags": [
      "music education",
      "pitch scales",
      "auditory grouping"
    ],
    "relatedAreas": [
      "perception",
      "education"
    ],
    "featured": false,
    "cover": "/images/placeholder-studio.svg",
    "citation": "Rosiński, Adam. 2023. \"Influence of Music Education and Pitch Scales on the Grouping of the AB-AB Sequence Sounds.\" Przestrzenie akustyki 2. Professional Acoustics. 2.",
    "sourceVerified": false
  },
  {
    "slug": "computer-applications-popular-music-composers",
    "title": "Computer Applications for Popular Music Composers in Creative Work and Teaching",
    "year": 2023,
    "category": "Book chapter",
    "type": "Book chapter",
    "language": "Polish",
    "sourceNote": "Published in Polish",
    "book": "Przestrzenie akustyki 2. Professional Acoustics. 2",
    "pages": "53–73",
    "isbn": "978-83-8100-364-3",
    "href": "https://adamrosinski.com/publications/",
    "summary": "A book chapter focused on computer applications, popular music.",
    "tags": [
      "computer applications",
      "popular music",
      "teaching"
    ],
    "relatedAreas": [
      "education",
      "practice"
    ],
    "featured": false,
    "cover": "/images/placeholder-studio.svg",
    "citation": "Waśkiewicz, M., and Adam Rosiński. 2023. \"Computer Applications for Popular Music Composers in Creative Work and Teaching.\" Przestrzenie akustyki 2. Professional Acoustics. 2.",
    "sourceVerified": false
  },
  {
    "slug": "musical-training-grouping-galloping-rhythm",
    "title": "The Influence of Musical Training on the Perceptual Grouping of ABA–ABA Sound Sequences into a Galloping Rhythm",
    "year": 2021,
    "category": "Book chapter",
    "type": "Book chapter",
    "language": "Polish",
    "sourceNote": "Published in Polish",
    "book": "Przestrzenie akustyki. Professional Acoustics",
    "pages": "53–70",
    "isbn": "978-83-8100-258-5",
    "href": "https://adamrosinski.com/publications/",
    "summary": "A book chapter focused on musical training, perceptual grouping.",
    "tags": [
      "musical training",
      "perceptual grouping",
      "rhythm"
    ],
    "relatedAreas": [
      "perception",
      "education"
    ],
    "featured": false,
    "cover": "/images/placeholder-studio.svg",
    "citation": "Rosiński, Adam. 2021. \"The Influence of Musical Training on the Perceptual Grouping of ABA–ABA Sound Sequences into a Galloping Rhythm.\" Przestrzenie akustyki. Professional Acoustics.",
    "sourceVerified": false
  },
  {
    "slug": "perception-of-sound-via-auditory-image-analysis",
    "title": "Perception of Sound via Auditory Image Analysis, made in the Conceptual Context of the Philosophy of Music",
    "year": 2020,
    "category": "Book chapter",
    "type": "Book chapter",
    "language": "English",
    "sourceNote": null,
    "book": "Humanitarian Corpus, Issue 35, Vol. 2",
    "pages": "101–107",
    "isbn": "978-966-949-567-9",
    "href": "https://adamrosinski.com/publications/",
    "summary": "A book chapter focused on auditory image, philosophy of music.",
    "tags": [
      "auditory image",
      "philosophy of music",
      "perception"
    ],
    "relatedAreas": [
      "perception"
    ],
    "featured": false,
    "cover": "/images/placeholder-studio.svg",
    "citation": "Rosiński, Adam. 2020. \"Perception of Sound via Auditory Image Analysis, made in the Conceptual Context of the Philosophy of Music.\" Humanitarian Corpus, Issue 35, Vol. 2.",
    "sourceVerified": false
  },
  {
    "slug": "architectural-acoustics-sonic-identity-of-churches",
    "title": "The Role of Architectural Acoustics in Shaping the Sonic Identity of Churches",
    "year": 2018,
    "category": "Book chapter",
    "type": "Book chapter",
    "language": "Polish",
    "sourceNote": "Published in Polish",
    "book": "II Sobór Watykański (1962-1965) i jego wpływ na Kościół katolicki. Perspektywa tradycjonalistyczna",
    "pages": "86–101",
    "isbn": "978-83-65982-11-7",
    "href": "https://adamrosinski.com/publications/",
    "summary": "A book chapter focused on architectural acoustics, churches.",
    "tags": [
      "architectural acoustics",
      "churches",
      "sonic identity"
    ],
    "relatedAreas": [
      "spatial-audio"
    ],
    "featured": false,
    "cover": "/images/placeholder-studio.svg",
    "citation": "Rosiński, Adam. 2018. \"The Role of Architectural Acoustics in Shaping the Sonic Identity of Churches.\" II Sobór Watykański (1962-1965) i jego wpływ na Kościół katolicki. Perspektywa tradycjonalistyczna.",
    "sourceVerified": false
  },
  {
    "slug": "interactive-systems-contemporary-music-education",
    "title": "The Application of Interactive Systems in Contemporary Music Education",
    "year": 2017,
    "category": "Book chapter",
    "type": "Book chapter",
    "language": "Polish",
    "sourceNote": "Published in Polish",
    "book": "Problematyka kształcenia muzycznego na poziomie studiów wyższych w zmieniającym się obrazie zjawisk kulturowych",
    "pages": "131–140",
    "isbn": "978-83-946827-0-5",
    "href": "https://adamrosinski.com/publications/",
    "summary": "A book chapter focused on interactive systems, music education.",
    "tags": [
      "interactive systems",
      "music education",
      "digital tools"
    ],
    "relatedAreas": [
      "education"
    ],
    "featured": false,
    "cover": "/images/placeholder-studio.svg",
    "citation": "Rosiński, Adam. 2017. \"The Application of Interactive Systems in Contemporary Music Education.\" Problematyka kształcenia muzycznego na poziomie studiów wyższych w zmieniającym się obrazie zjawisk kulturowych.",
    "sourceVerified": false
  },
  {
    "slug": "virtual-sound-sources-binaural-recordings",
    "title": "Localisation of Virtual Sound Sources in Binaural Recordings",
    "year": 2013,
    "category": "Book chapter",
    "type": "Book chapter",
    "language": "Polish",
    "sourceNote": "Published in Polish",
    "book": "Nowe trendy w naukach inżynieryjnych 4, t. II",
    "pages": "9–18",
    "isbn": "978-83-63058-30-2",
    "href": "https://adamrosinski.com/publications/",
    "summary": "A book chapter focused on binaural, virtual sources.",
    "tags": [
      "binaural",
      "virtual sources",
      "localisation"
    ],
    "relatedAreas": [
      "spatial-audio",
      "perception"
    ],
    "featured": false,
    "cover": "/images/placeholder-studio.svg",
    "citation": "Rosiński, Adam. 2013. \"Localisation of Virtual Sound Sources in Binaural Recordings.\" Nowe trendy w naukach inżynieryjnych 4, t. II.",
    "sourceVerified": false
  },
  {
    "slug": "virtual-instruments-timbre-perception",
    "title": "The Role of Virtual Instruments in the Development of Timbre Perception",
    "year": 2013,
    "category": "Book chapter",
    "type": "Book chapter",
    "language": "Polish",
    "sourceNote": "Published in Polish",
    "book": "Nowe trendy w naukach humanistycznych i społeczno-ekonomicznych 4, t. I",
    "pages": "9–21",
    "isbn": "978-83-63058-32-6",
    "href": "https://adamrosinski.com/publications/",
    "summary": "A book chapter focused on virtual instruments, timbre.",
    "tags": [
      "virtual instruments",
      "timbre",
      "perception"
    ],
    "relatedAreas": [
      "education",
      "perception"
    ],
    "featured": false,
    "cover": "/images/placeholder-studio.svg",
    "citation": "Rosiński, Adam. 2013. \"The Role of Virtual Instruments in the Development of Timbre Perception.\" Nowe trendy w naukach humanistycznych i społeczno-ekonomicznych 4, t. I.",
    "sourceVerified": false
  },
  {
    "slug": "mastering-art-of-shaping-timbre",
    "title": "Mastering as the Art of Shaping the Timbre of Musical Works",
    "year": 2013,
    "category": "Book chapter",
    "type": "Book chapter",
    "language": "Polish",
    "sourceNote": "Published in Polish",
    "book": "Młodzi naukowcy dla polskiej nauki. Cz. X: Nauki inżynieryjne, t. I",
    "pages": "11–17",
    "isbn": "978-83-63058-27-2",
    "href": "https://adamrosinski.com/publications/",
    "summary": "A book chapter focused on mastering, timbre.",
    "tags": [
      "mastering",
      "timbre",
      "sound production"
    ],
    "relatedAreas": [
      "recording",
      "practice"
    ],
    "featured": false,
    "cover": "/images/placeholder-studio.svg",
    "citation": "Rosiński, Adam. 2013. \"Mastering as the Art of Shaping the Timbre of Musical Works.\" Młodzi naukowcy dla polskiej nauki. Cz. X: Nauki inżynieryjne, t. I.",
    "sourceVerified": false
  },
  {
    "slug": "vocal-improvisation-jazz-arrangements",
    "title": "Vocal Improvisation in Jazz Arrangements as a Form of Creative Practice in Music Schools",
    "year": 2013,
    "category": "Book chapter",
    "type": "Book chapter",
    "language": "Polish",
    "sourceNote": "Published in Polish",
    "book": "Młodzi naukowcy dla polskiej nauki. Cz. XII: Nauki humanistyczne i społeczno-ekonomiczne, t. I",
    "pages": "9–16",
    "isbn": "978-83-63058-29-6",
    "href": "https://adamrosinski.com/publications/",
    "summary": "A book chapter focused on jazz, vocal improvisation.",
    "tags": [
      "jazz",
      "vocal improvisation",
      "music schools"
    ],
    "relatedAreas": [
      "education",
      "practice"
    ],
    "featured": false,
    "cover": "/images/placeholder-studio.svg",
    "citation": "Rosiński, Adam. 2013. \"Vocal Improvisation in Jazz Arrangements as a Form of Creative Practice in Music Schools.\" Młodzi naukowcy dla polskiej nauki. Cz. XII: Nauki humanistyczne i społeczno-ekonomiczne, t. I.",
    "sourceVerified": false
  },
  {
    "slug": "acoustics-of-sacred-spaces-speech-intelligibility",
    "title": "The Acoustics of Sacred Spaces and Speech Intelligibility",
    "year": 2012,
    "category": "Book chapter",
    "type": "Book chapter",
    "language": "Polish",
    "sourceNote": "Published in Polish",
    "book": "Muzyka sakralna w europejskim przekazie kulturowym. Historia – kryteria – współczesność",
    "pages": "85–103",
    "isbn": "978-83-936400-2-7",
    "href": "https://adamrosinski.com/publications/",
    "summary": "A book chapter focused on sacred spaces, speech intelligibility.",
    "tags": [
      "sacred spaces",
      "speech intelligibility",
      "acoustics"
    ],
    "relatedAreas": [
      "spatial-audio"
    ],
    "featured": false,
    "cover": "/images/placeholder-studio.svg",
    "citation": "Rosiński, Adam. 2012. \"The Acoustics of Sacred Spaces and Speech Intelligibility.\" Muzyka sakralna w europejskim przekazie kulturowym. Historia – kryteria – współczesność.",
    "sourceVerified": false
  }
];

export const selectedPublications = publications
  .filter((publication) => publication.category === "Monograph")
  .sort((a, b) => b.year - a.year);

export const publicationsByCategory = {
  monographs: publications.filter((publication) => publication.category === "Monograph").sort((a, b) => b.year - a.year),
  journalArticles: publications.filter((publication) => publication.category === "Journal article").sort((a, b) => b.year - a.year),
  editorialWork: publications.filter((publication) => publication.category === "Book series editor").sort((a, b) => b.year - a.year),
  bookChapters: publications.filter((publication) => publication.category === "Book chapter").sort((a, b) => b.year - a.year),
};
