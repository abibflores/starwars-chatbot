export interface OpenAIChatCompletionResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: OpenAIChoice[];
  usage: OpenAIUsage;
  service_tier: string;
  system_fingerprint: string;
}

export interface OpenAIChoice {
  index: number;
  message: OpenAIMessage;
  logprobs: any;
  finish_reason: string;
}

export interface OpenAIMessage {
  role: 'assistant' | 'user' | 'system';
  content: string;
  refusal: string | null;
}

export interface OpenAIUsage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
  prompt_tokens_details: OpenAITokenDetails;
  completion_tokens_details: OpenAICompletionTokenDetails;
}

export interface OpenAITokenDetails {
  cached_tokens: number;
  audio_tokens: number;
}

export interface OpenAICompletionTokenDetails {
  reasoning_tokens: number;
  audio_tokens: number;
  accepted_prediction_tokens: number;
  rejected_prediction_tokens: number;
}
