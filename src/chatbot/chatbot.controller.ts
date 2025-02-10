import { Controller, Post, Body } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';

@Controller('ask')
export class ChatbotController {
  constructor(private readonly chatbotService: ChatbotService) {}

  @Post()
  async ask(@Body('query') query: string) {
    const response = await this.chatbotService.handleQuery(query);
    return response;
  }
}
