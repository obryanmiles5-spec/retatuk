export interface PeptideProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  longDescription?: string;
  purity: string; // e.g., "99.2%"
  formulation: string; // e.g., "Lyophilised Powder"
  size: string; // e.g., "5mg"
  price: number; // in GBP
  casNumber?: string; // Chemical Abstracts Service number to show lab credibility
  researchFocus: string; // e.g., "Cellular repair pathways", "Metabolic research"
}

export interface FAQItem {
  question: string;
  answer: string;
}
