declare module 'openai' {
  export default class OpenAI {
    constructor(config: { apiKey: string });
    chat: {
      completions: {
        create(params: {
          model: string;
          messages: { role: string; content: string }[];
          max_tokens?: number;
          temperature?: number;
          response_format?: string;
        }): Promise<any>;
      };
    };
  }
}
