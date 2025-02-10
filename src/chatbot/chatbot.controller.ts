import { Controller, Post, Body } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ChatbotResponseDto } from './dto/chatbot-response.dto';
import { ChatbotRequestDto } from './dto/chatbot-request.dto';

@Controller('ask')
@ApiTags('chatbot')
export class ChatbotController {
  constructor(private readonly chatbotService: ChatbotService) {}

  @Post()
  @ApiOperation({ summary: 'Realizar una consulta al chatbot sobre Star Wars' })
  @ApiResponse({
    status: 200,
    description: 'Consulta procesada correctamente',
    type: ChatbotResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Error en la consulta' })
  async ask(@Body() chatbotRequest: ChatbotRequestDto) {
    const response = await this.chatbotService.handleQuery(
      chatbotRequest.query,
    );
    return response;
  }
}
