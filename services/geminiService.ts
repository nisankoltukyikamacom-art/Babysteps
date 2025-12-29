import { BabyProfile, ChatMessage } from "../types";

// AI feature is temporarily disabled
// To enable: add @google/generative-ai package and configure VITE_GEMINI_API_KEY

export const isGeminiAvailable = (): boolean => {
  return false; // Temporarily disabled
};

export const askParentingAdvisor = async (_history: ChatMessage[], _profile: BabyProfile): Promise<string> => {
  return "AI Asistan özelliği şu an bakımda. Yakında tekrar aktif olacak! Bu arada diğer özellikleri kullanmaya devam edebilirsiniz.";
};
