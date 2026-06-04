export type BiographyAccent = "cyan" | "violet" | "emerald" | "amber";
export type BiographyChapter = {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  icon: string;
  accent: BiographyAccent;
  paragraphs: string[];
  chips: string[];
  pull: string;
  links?: { label: string; href: string }[];
};
export const biographyHighlights = [
  { label: "Research field", value: "Listening and perception", detail: "auditory scene analysis, musical structure, psychoacoustics" },
  { label: "Technical practice", value: "Recording environments", detail: "stereo, multichannel sound, studio systems and spatial listening" },
  { label: "Publication profile", value: "Open scholarship", detail: "monographs, articles, chapters, edited volumes and international exchange" },
  { label: "Academic teaching", value: "Sound education", detail: "music production, studio practice, digital tools and programme development" },
];

export const biographyLenses = [
  { title: "Researcher of listening", text: "Investigates how listeners organise musical material, follow auditory layers, and construct meaning from sound structures.", icon: "Brain", accent: "cyan" },
  { title: "Studio and audio technologist", text: "Connects microphone technique, multichannel recording, acoustic space and the technological craft of sound capture.", icon: "AudioWaveform", accent: "amber" },
  { title: "Editor and open-access author", text: "Develops a publication profile shaped by monographs, edited volumes, international circulation and public access to research.", icon: "BookOpen", accent: "violet" },
  { title: "Educator in sound practice", text: "Builds teaching and curriculum work around music production, digital tools, recording practice and interdisciplinary art.", icon: "GraduationCap", accent: "emerald" },
];

export const biographyTimeline = [
  { period: "Formation", title: "Music education and doctoral studies", text: "Doctoral research on perceptual streaming in music and earlier music studies completed with distinction." },
  { period: "Research core", title: "Auditory scene analysis in music", text: "Development of research on auditory streams, multivariant musical perception, and the organisation of sound structures." },
  { period: "Studio axis", title: "Recording and sound technology", text: "Microphone techniques, multichannel systems, spatial perception, studio environments and digital audio tools." },
  { period: "Institutional work", title: "Teaching, programme development and infrastructure", text: "Academic teaching, curriculum co-development, and recording studio infrastructure work at UWM and beyond." },
  { period: "Public exchange", title: "Publications, reviewing and editorial activity", text: "Open-access dissemination, editorial initiatives, peer review, and professional networks in acoustics and sound research." },
];

export const biographyChapters: BiographyChapter[] = [
  {
    id: "research-profile",
    title: "Listening, sound technology and musical perception",
    eyebrow: "Research profile",
    summary: "Adam Rosiński’s academic work brings together musical acoustics, psychoacoustics, sound technology and professional recording practice.",
    icon: "Brain",
    accent: "cyan",
    paragraphs: [
      "Dr Adam Rosiński is a Polish researcher in the field of musical arts specialising in musical acoustics, psychoacoustics, and sound technology. His scholarly activity focuses on research into music perception, auditory scene analysis, and the organisation of sound structures in the process of musical reception, as well as on the application of modern digital technologies to the recording and analysis of acoustic phenomena. In his work he combines the perspectives of music theory, psychoacoustics, cognitive science, and professional practice in sound direction.",
    ],
    chips: ["musical acoustics", "psychoacoustics", "scene analysis"],
    pull: "The central thread is the relation between how sound is structured, how it is recorded, and how it is perceived.",
    links: [
      { label: "Work areas", href: "/work-areas#work-areas-map" },
      { label: "Journal articles", href: "/publications#journal-articles" },
    ],
  },
  {
    id: "academic-formation",
    title: "Academic formation and doctoral research",
    eyebrow: "Education and degree path",
    summary: "His academic formation combines doctoral research on perceptual streaming in music with earlier studies in music education completed with distinction.",
    icon: "GraduationCap",
    accent: "violet",
    paragraphs: [
      "He was awarded the degree of Doctor of Arts in the discipline of composition and music theory at the Fryderyk Chopin University of Music in Warsaw. His doctoral dissertation addressed the phenomenon of perceptual streaming in music and examined the mechanisms by which listeners with varying levels of musical training organise sonic material. This research extends the field of auditory scene analysis in the context of musical works and the cognitive processes involved in music perception.",
      "He completed his doctoral studies within the Interfaculty Doctoral Programme at the Fryderyk Chopin University of Music, fulfilling the full four-year curriculum in an accelerated mode within eighteen months. After completing all required coursework and receiving approval from the Faculty Council, he concluded the programme ahead of schedule and proceeded to the defence of his doctoral dissertation. He is also a graduate of the Stanisław Moniuszko Academy of Music in Gdańsk, where he completed his studies at the Faculty of Choral Conducting, Music Education and Eurhythmics, obtaining the degree of Master of Arts with distinction.",
    ],
    chips: ["Doctor of Arts", "music theory", "FCUM", "perceptual streaming"],
    pull: "The doctoral work established the research foundation for later studies of musical perception and auditory organisation.",
    links: [
      { label: "CV PDF", href: "/pdfs/cv/adam-rosinski-cv.pdf" },
      { label: "Research profiles", href: "/publications#profiles-alt" },
    ],
  },
  {
    id: "auditory-perception",
    title: "Auditory streams and multivariant perception",
    eyebrow: "Music perception",
    summary: "This research area concerns perceptual streams, auditory scene analysis and the ways musical material may produce multiple perceptual organisations.",
    icon: "WavesHorizontal",
    accent: "emerald",
    paragraphs: [
      "The central focus of Dr Adam Rosiński’s research concerns the organisation of auditory perception in music, particularly the mechanisms responsible for the formation of perceptual streams (auditory streams), which enable listeners to identify sound structures within complex acoustic environments. His research develops classical psychoacoustic approaches to auditory scene analysis by extending them to the analysis of actual musical works and the context of performance practice. An important contribution to research on music perception is his concept of multivariant musical perception, according to which the same musical material may be interpreted differently by listeners depending on attentional mechanisms, musical experience, and perceptual context. His work also examines the influence of musical structure on the organisation of auditory impressions and on the identification of sound layers within a musical work. This phenomenon constitutes an important point of reference for music theory, psychoacoustics, sound direction, and research into the cognitive dimensions of music reception.",
    ],
    chips: ["streams", "ASA", "multivariant"],
    pull: "The same musical material may be heard differently depending on attention, training and perceptual context.",
    links: [
      { label: "Related publications", href: "/publications#journal-articles" },
      { label: "Work areas map", href: "/work-areas#work-areas-map" },
    ],
  },
  {
    id: "recording-technology",
    title: "Recording technology and studio environments",
    eyebrow: "Sound capture and reproduction",
    summary: "A practical and technical strand focused on stereophonic and multichannel recording, studio acoustics, sound-field control and digital music tools.",
    icon: "AudioWaveform",
    accent: "amber",
    paragraphs: [
      "Another important strand of Dr Adam Rosiński’s research concerns studio technology, particularly issues related to the recording, processing, and reproduction of sound in professional recording studio environments. Within this area he conducts research on microphone techniques used in stereophonic and multichannel systems, analysing their influence on the shaping of sonic space, the localisation of phantom sources, and the perception of the acoustic scene by listeners. A key aspect of this work is the analysis of the relationship between the acoustic properties of recording spaces and the process of sound recording and reception, including issues related to the acoustics of music rooms, sound field control, and the design of listening environments intended for studio work. His research also addresses the use of digital technologies in music production, encompassing both sound recording and editing systems and the tools used in mixing and mastering processes. An important dimension of his research activity is the application of contemporary audio technologies in artistic education, including digital music production environments, virtual instrument systems, and multimedia tools supporting the teaching of recording practice, music production, and sound technology.",
    ],
    chips: ["microphone techniques", "multichannel", "studio acoustics"],
    pull: "Recording practice is treated not as a separate craft, but as a research environment for studying space, localisation and listening.",
    links: [
      { label: "Authorial prototypes", href: "/work-areas#authorial-prototypes" },
      { label: "Audio demonstrator", href: "/audio-demonstrator#audio-demo-alt" },
    ],
  },
  {
    id: "publishing-editorial-work",
    title: "Publications, open access and editorial initiatives",
    eyebrow: "Scholarly publishing",
    summary: "This part presents monographs, articles, academic chapters, conference work, open-access dissemination and editorial initiatives.",
    icon: "BookOpen",
    accent: "cyan",
    paragraphs: [
      "The scholarly output of Dr Adam Rosiński includes four academic monographs, a number of articles published in national and international scholarly journals, several chapters in academic monographs, and numerous papers presented at national and international conferences. An important element of his academic activity is the consistent dissemination of research findings within the open access model. According to his philosophy of knowledge dissemination, scholarly publications should remain universally accessible to audiences worldwide, regardless of the financial capacities of institutions or individual researchers. For this reason, his academic works are published as widely as possible in open-access form, with the aim of supporting the global circulation of knowledge and the unrestricted development of scholarly research. Dr Adam Rosiński is the founder and scientific editor of the international publication series Perspectives of Acoustics, devoted to contemporary issues in musical acoustics, sound technology, and research on music perception. This initiative was established to create an interdisciplinary publishing platform for research combining music theory, psychoacoustics, audio technology, and the practice of sound direction. The series brings together work by researchers engaged in the broad study of sound, providing a forum for scholarly exchange and for the presentation of research findings within the international academic community.",
    ],
    chips: ["monographs", "open access", "PoA series"],
    pull: "The publication profile is shaped by a consistent commitment to the broad circulation of research on music, sound and perception.",
    links: [
      { label: "Books", href: "/publications#selected-publications" },
      { label: "Editorial publications", href: "/publications#editorial-publications" },
      { label: "Editorial roles", href: "/publications#editorial" },
    ],
  },
  {
    id: "review-service",
    title: "Peer review and scholarly service",
    eyebrow: "Academic evaluation",
    summary: "Reviewing activity is presented as part of scholarly service in musical arts, acoustics, engineering and sound technology.",
    icon: "PenLine",
    accent: "violet",
    paragraphs: [
      "A fundamental element of Dr Adam Rosiński’s academic activity is his reviewing work within the international scholarly community, comprising several dozen completed reviews. He serves as a reviewer of scholarly articles, chapters in monographs, and edited volumes prepared under the quadruple-blind review procedure, participating in the evaluation of research quality in the fields of musical arts, musical acoustics, engineering, and sound technology. His expert assessments concern, in particular, issues related to music perception, psychoacoustics, auditory scene analysis, and the application of digital technologies in music production and education. Participation in review processes constitutes an important contribution by Dr Rosiński to the development of international scholarly discourse and to the maintenance of high methodological and substantive standards in research on music, sound, and auditory perception.",
    ],
    chips: ["peer review", "quadruple-blind", "research quality"],
    pull: "Review work contributes to the methodological and substantive standards of international research on music and sound.",
    links: [
      { label: "Peer review areas", href: "/publications#editorial-review" },
      { label: "Editorial page", href: "/publications#editorial" },
    ],
  },
  {
    id: "uwm-and-infrastructure",
    title: "University teaching, programme design and studio infrastructure",
    eyebrow: "Institutional work at UWM",
    summary: "This chapter covers academic teaching, curriculum development, the Music Production and Sound Engineering programme and recording-studio infrastructure at UWM.",
    icon: "Building2",
    accent: "emerald",
    paragraphs: [
      "Between 2016 and 2026 he was affiliated with the University of Warmia and Mazury in Olsztyn, where he served as an assistant professor at the Institute of Music within the Faculty of Arts. He taught a wide range of courses, including Introduction to Musical Acoustics, Introduction to Electroacoustics, Recording Techniques Workshops, Studio Working Techniques, Studio Recording Practice, Digital Technologies in Music, Computer Music Systems, and Electronic Instruments, Computer music composition, Digital Music Arrangement. Dr Adam Rosiński was one of the initiators of the establishment of the degree programme “Music Production and Sound Engineering” at the University of Warmia and Mazury in Olsztyn. He participated in the conceptual and curricular work related to its creation, co-developing its substantive framework and the structure of the curriculum. His contribution included, in particular, the development of teaching content in the fields of sound technology, recording practice, music production, and musical acoustics. The programme was designed as a modern course of study integrating knowledge from the fields of musical arts, audio technology, and contemporary methods of sound production, responding to the needs of the rapidly developing music production and audiovisual industries. He also served as Head of the Recording Studio of the Artistic Initiatives Centre at the University of Warmia and Mazury in Olsztyn, playing a key role in the creation and development of the technological infrastructure of this unit. He was the initiator and co-author of the technological concept of the recording studio, developing original assumptions regarding the sound recording and processing system that were subsequently implemented during the design and construction of the studio. His work included designing the technological architecture of audio signal chains, selecting specialised equipment, and co-developing acoustic and technical solutions enabling advanced teaching, research, and artistic activity in the field of recording practice and music production.",
    ],
    chips: ["UWM", "MPSE programme", "recording studio", "curriculum"],
    pull: "The institutional work links academic teaching with technical infrastructure and the practical conditions of music production education.",
    links: [
      { label: "Applications matrix", href: "/work-areas#applications-matrix" },
      { label: "For students", href: "/audio-demonstrator#audio-demo-alt" },
    ],
  },
  {
    id: "interdisciplinary-teaching",
    title: "Interdisciplinary teaching and audiovisual practice",
    eyebrow: "Music, image and digital media",
    summary: "A teaching strand connected with the Academy of Fine Arts in Gdańsk and the relationship between music, visual arts, multimedia and intermedia practice.",
    icon: "Palette",
    accent: "amber",
    paragraphs: [
      "Earlier he worked at the Academy of Fine Arts in Gdańsk within the Interfaculty Institute of Art Sciences, where he taught interdisciplinary courses for first- and second-cycle students. These courses explored the relationships between musical art and the visual arts in the context of contemporary digital technologies and multimedia tools used in artistic practice. They addressed issues related to the integration of image and sound, the use of computer technologies in artistic creation, and the application of digital environments in the design and realisation of audiovisual projects. This teaching activity also encompassed contemporary forms of artistic expression in which music, image, and electronic media form coherent artistic structures characteristic of multimedia and intermedia art.",
    ],
    chips: ["visual arts", "multimedia", "intermedia"],
    pull: "The profile extends beyond musical acoustics into forms of artistic practice where sound, image and digital media operate together.",
    links: [
      { label: "Work areas", href: "/work-areas#work-areas-map" },
      { label: "Music label", href: "/music-label" },
    ],
  },
  {
    id: "sound-direction-practice",
    title: "Sound direction and production practice",
    eyebrow: "Professional recording work",
    summary: "The production strand includes recording, editing, sound processing, phonographic projects, audiovisual work and the relation between practice and theory.",
    icon: "Radio",
    accent: "cyan",
    paragraphs: [
      "Alongside his academic work, Dr Adam Rosiński is also active as a sound director and music producer, specialising in stereophonic and multichannel recording. In his professional practice he is involved in the recording, editing, and processing of sound material, collaborating on phonographic and audiovisual projects. Experience gained through practical production work constitutes an important point of reference for his scholarly research, which emerges from direct engagement with real problems of sound technology and music perception. In his approach theoretical reflection is not detached from practice but rather constitutes its extension and deepening, allowing scholarly research to remain closely connected with artistic experience and the real processes of sound creation and recording.",
    ],
    chips: ["sound direction", "music production", "multichannel"],
    pull: "Studio practice provides a concrete ground for research questions about perception, technology and the shaping of musical sound.",
    links: [
      { label: "Research to prototype", href: "/work-areas#research-to-prototype" },
      { label: "Music label", href: "/music-label" },
    ],
  },
  {
    id: "organisations",
    title: "Scientific organisations and professional networks",
    eyebrow: "Acoustics, cognition and audio engineering",
    summary: "Memberships and professional affiliations place the profile within communities concerned with acoustics, cognition, audio engineering and music theory.",
    icon: "Network",
    accent: "violet",
    paragraphs: [
      "Dr Adam Rosiński is a member of numerous national and international scholarly organisations devoted to acoustics, sound technology, and research on music perception, including the American Auditory Society, the Acoustical Society of America, the European Acoustics Association, the Society for Music Production Research, the Society for Music Theory, the Society for Music Analysis, the Society for Music Perception and Cognition, the Cognitive Science Society, the Institute of Electrical and Electronics Engineers, the Association for Computing Machinery, the Audio Engineering Society, the Polish Acoustical Society, the Federation of Scientific and Technical Associations – Supreme Technical Organisation, and the Polish Sound Engineers Association.",
    ],
    chips: ["AAS", "AES", "IEEE", "ACM", "PTA", "PSRD"],
    pull: "The network of organisations reflects the interdisciplinary scope of the work: from auditory science and acoustics to engineering and music analysis.",
    links: [
      { label: "Professional service", href: "/publications#editorial-service" },
      { label: "Editorial publications", href: "/publications#editorial-publications" },
    ],
  },
  {
    id: "synthesis",
    title: "An interdisciplinary profile in sound and music research",
    eyebrow: "Synthesis",
    summary: "The closing perspective brings together music perception, sound technology and contemporary reflection on musical works and their reception.",
    icon: "Sparkles",
    accent: "emerald",
    paragraphs: [
      "His scholarly, publishing, and artistic activity lies at the intersection of research on music perception, sound technology, and contemporary reflection on the structure and reception of the musical work. By combining the perspectives of music theory, psychoacoustics, and the practice of sound direction, he develops an interdisciplinary approach to the study of music and sound that contributes to the international academic discourse on the relationships between musical structure, its perception, and the technologies of its recording and processing.",
    ],
    chips: ["music perception", "sound technology", "recording practice"],
    pull: "Across the profile, musical structure, listening and recording technology remain parts of one research field.",
    links: [
      { label: "Work areas", href: "/work-areas" },
      { label: "Publications", href: "/publications" },
      { label: "Editorial", href: "/publications#editorial" },
    ],
  },
];
