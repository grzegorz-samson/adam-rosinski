import type { PeerReviewKind, PeerReviewRecord } from "./peerReviews";

export interface PeerReviewStrip {
  asset: string;
  accent: string;
  accent2: string;
}

const peerReviewStripAssets: Record<string, string> = {
  "online-games-for-perceptual-learning": "/images/publication-strips/peer-review/01-online-games-for-perceptual-learning.svg",
  "generating-acoustic-signals-referential-aesthetic-goals": "/images/publication-strips/peer-review/02-generating-acoustic-signals-referential-aesthetic-goals.svg",
  "www-functional-framework-awareness": "/images/publication-strips/peer-review/03-www-functional-framework-awareness.svg",
  "ability-vs-adaptability": "/images/publication-strips/peer-review/04-ability-vs-adaptability.svg",
  "salience-surface-higher-level-properties": "/images/publication-strips/peer-review/05-salience-surface-higher-level-properties.svg",
  "cognitive-pattern-language-tonal-music": "/images/publication-strips/peer-review/06-cognitive-pattern-language-tonal-music.svg",
  "from-insight-to-outsight": "/images/publication-strips/peer-review/07-from-insight-to-outsight.svg",
  "cognitive-strategies-motor-dynamics-vr-learning": "/images/publication-strips/peer-review/08-cognitive-strategies-motor-dynamics-vr-learning.svg",
  "local-global-pitch-chord-identification": "/images/publication-strips/peer-review/09-local-global-pitch-chord-identification.svg",
  "musical-keys-perception-performance": "/images/publication-strips/peer-review/10-musical-keys-perception-performance.svg",
  "tempo-asymmetries-dyadic-synchronization": "/images/publication-strips/peer-review/11-tempo-asymmetries-dyadic-synchronization.svg",
  "orchestra-pit-covering-baroque-theatres": "/images/publication-strips/peer-review/12-orchestra-pit-covering-baroque-theatres.svg",
  "piano-performance-dtw-liquid-state-networks": "/images/publication-strips/peer-review/13-piano-performance-dtw-liquid-state-networks.svg",
  "bayesian-grid-free-acoustic-source-imaging": "/images/publication-strips/peer-review/14-bayesian-grid-free-acoustic-source-imaging.svg",
  "multimodal-voice-phishing-detection": "/images/publication-strips/peer-review/15-multimodal-voice-phishing-detection.svg",
  "midi-style-evaluator": "/images/publication-strips/peer-review/16-midi-style-evaluator.svg",
  "mpfm-vc-voice-conversion": "/images/publication-strips/peer-review/17-mpfm-vc-voice-conversion.svg",
  "speech-intelligibility-virtual-avatars": "/images/publication-strips/peer-review/18-speech-intelligibility-virtual-avatars.svg",
  "erp-interval-judgment-tritone-paradox": "/images/publication-strips/peer-review/19-erp-interval-judgment-tritone-paradox.svg",
  "music-emotions-across-cultures": "/images/publication-strips/peer-review/20-music-emotions-across-cultures.svg",
  "empathy-music-preferences": "/images/publication-strips/peer-review/21-empathy-music-preferences.svg",
  "features-predict-song-similarity": "/images/publication-strips/peer-review/22-features-predict-song-similarity.svg",
  "comfort-categorization-propeller-aircraft": "/images/publication-strips/peer-review/23-comfort-categorization-propeller-aircraft.svg",
  "second-hand-effects-clocks": "/images/publication-strips/peer-review/24-second-hand-effects-clocks.svg",
  "cognitive-complexity-rule-changes": "/images/publication-strips/peer-review/25-cognitive-complexity-rule-changes.svg",
  "sensory-processing-maladaptive-music-use": "/images/publication-strips/peer-review/26-sensory-processing-maladaptive-music-use.svg",
  "word-integration-third-fourth-age-adults": "/images/publication-strips/peer-review/27-word-integration-third-fourth-age-adults.svg",
  "label-stimulus-similarity-categorization": "/images/publication-strips/peer-review/28-label-stimulus-similarity-categorization.svg",
  "mastery-motivation-singing-students": "/images/publication-strips/peer-review/29-mastery-motivation-singing-students.svg",
  "speaker-diarization-review": "/images/publication-strips/peer-review/30-speaker-diarization-review.svg",
  "acoustic-feature-excitation-aggregation-network": "/images/publication-strips/peer-review/31-acoustic-feature-excitation-aggregation-network.svg",
  "metaverse-music-education-ecosystem": "/images/publication-strips/peer-review/32-metaverse-music-education-ecosystem.svg",
  "nineteenth-century-alphorns": "/images/publication-strips/peer-review/33-nineteenth-century-alphorns.svg",
  "distributed-authorship-art-ai": "/images/publication-strips/peer-review/34-distributed-authorship-art-ai.svg",
  "laryngeal-articulation-trumpeters": "/images/publication-strips/peer-review/35-laryngeal-articulation-trumpeters.svg",
  "sustainable-digital-transformation-higher-education": "/images/publication-strips/peer-review/36-sustainable-digital-transformation-higher-education.svg",
  "digital-strategy-bibliometric-study": "/images/publication-strips/peer-review/37-digital-strategy-bibliometric-study.svg",
  "programming-teaching-learning-bibliometric-analysis": "/images/publication-strips/peer-review/38-programming-teaching-learning-bibliometric-analysis.svg",
  "ai-assisted-music-education-critical-synthesis": "/images/publication-strips/peer-review/39-ai-assisted-music-education-critical-synthesis.svg",
  "explaining-impossible-phenomena": "/images/publication-strips/peer-review/40-explaining-impossible-phenomena.svg",
  "eye-movements-informal-algorithms": "/images/publication-strips/peer-review/41-eye-movements-informal-algorithms.svg",
  "harmonic-variations-dissonance-perception": "/images/publication-strips/peer-review/42-harmonic-variations-dissonance-perception.svg",
  "mental-folding-spatial-transformation": "/images/publication-strips/peer-review/43-mental-folding-spatial-transformation.svg",
  "predisposed-mood-music-perceptual-judgement": "/images/publication-strips/peer-review/44-predisposed-mood-music-perceptual-judgement.svg",
  "cognitive-dynamics-advertising": "/images/publication-strips/peer-review/45-cognitive-dynamics-advertising.svg",
  "aurally-enhanced-media-promotion": "/images/publication-strips/peer-review/46-aurally-enhanced-media-promotion.svg",
  "leos-janacek-sarka": "/images/publication-strips/peer-review/47-leos-janacek-sarka.svg",
  "music-audiovisual-media-convergence-digitalisation": "/images/publication-strips/peer-review/48-music-audiovisual-media-convergence-digitalisation.svg",
  "nature-inspirations-andrzej-karalow": "/images/publication-strips/peer-review/49-nature-inspirations-andrzej-karalow.svg",
  "music-therapy-neonatology": "/images/publication-strips/peer-review/50-music-therapy-neonatology.svg",
  "flute-textbook-translation": "/images/publication-strips/peer-review/51-flute-textbook-translation.svg",
  "music-supporting-treatment": "/images/publication-strips/peer-review/52-music-supporting-treatment.svg",
  "music-immune-system-review": "/images/publication-strips/peer-review/53-music-immune-system-review.svg",
  "mutual-influence-art-technology": "/images/publication-strips/peer-review/54-mutual-influence-art-technology.svg",
};

const kindPalette: Record<PeerReviewKind, Pick<PeerReviewStrip, "accent" | "accent2">> = {
  "conference-paper": { accent: "#A78BFA", accent2: "#56D8FF" },
  "journal-manuscript": { accent: "#56D8FF", accent2: "#34D399" },
  "book-chapter": { accent: "#FFB347", accent2: "#34D399" },
};

export function getPeerReviewStrip(review: PeerReviewRecord): PeerReviewStrip {
  return {
    asset: peerReviewStripAssets[review.slug],
    ...kindPalette[review.kind],
  };
}
