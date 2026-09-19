export interface HistoricalPerson {
  name: string;
  role: string;
  shortBio?: string;
  imageUrl?: string;
  description?: string;
  links?: { title: string; url: string }[];
}

export interface HistoricalEvent {
  title: string;
  year: string;
  description: string;
  imageUrl?: string;
  links?: { title: string; url: string }[];
}

export interface HistoricalLocation {
  name: string;
  type: string;
  significance: string;
  imageUrl?: string;
  mapLink?: string;
  description?: string;
  links?: { title: string; url: string }[];
}

export interface HistoricalEra {
  eraName: string;
  yearRange: string;
  summary: string;
  visualPrompt: string;
  people: HistoricalPerson[];
  events: HistoricalEvent[];
  locations: HistoricalLocation[];
}

export interface HistoricalSitesData {
  text: string;
  links: { title: string; uri: string; lat?: number; lng?: number }[];
}

export interface TimelineData {
  location: string;
  eras: HistoricalEra[];
  historicalSites?: HistoricalSitesData;
  eraImages?: Record<string, string | null>;
  globalVideoUrl?: string;
}

export interface DetailModalData {
  title: string;
  description?: string;
  imageUrl?: string;
  mapLink?: string;
  links?: { title: string; url: string }[];
}
