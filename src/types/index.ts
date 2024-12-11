export interface LegalAnalysis {
  section: string;
  description: string;
  similarityScore: number;
}

export interface AnalysisResponse {
  analysis: LegalAnalysis[];
  error?: string;
}