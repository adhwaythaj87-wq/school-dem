import rootConfig from '../school.config.json';

// Type definitions for school configuration
export interface SchoolConfig {
  schoolName: { en: string };
  shortName: { en: string };
  abbreviation?: string;
  motto: { en: string };
  foundedYear: number;
  management: string;

  location: {
    en: string;
    city: string;
    subDistrict?: string;
    district: string;
    state: string;
    pinCode: string;
    streetAddress: string;
    address: string;
  };

  affiliation: {
    board: string;
    schoolCode: string;
    higherSecondaryCode: string;
    subDistrict: string;
    grades: string;
    medium: string;
  };

  statistics: {
    studentCount: string;
    staffCount: string;
    campusSize: string;
    serviceYears?: string;
  };

  contact: {
    phone: string;
    altPhone?: string;
    email: string;
    officeHours: string;
    address: string;
    whatsappNumber: string;
    whatsappUrl: string;
  };

  principal: {
    name: string;
    shortName: string;
    qualifications: string;
    designation: string;
    photo: string;
    deskTitle: string;
    messageParagraphs: string[];
  };

  about: {
    sectionTag: string;
    tagline: string;
    leadText: string;
    secondaryText: string;
    footerSnippet: string;
    gallerySubtitle: string;
  };

  admissions: {
    academicYear: string;
    badge: string;
    headline: string;
    subhead: string;
    classesOffered: string;
    counterTimings: string;
  };

  mapEmbedUrl: string;
  mapExternalUrl: string;
  theme: string;
  defaultLanguage: string;
  languages: string[];
  socialLinks: Array<{ name: string; url: string; icon: string }>;
  quickLinks: Array<{ id: string; label: { en: string }; url: string; icon: string }>;
  navigation: Array<{ label: { en: string }; path: string }>;
}

export const config: SchoolConfig = rootConfig as unknown as SchoolConfig;
export default config;
