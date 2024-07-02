import { Resolver } from '@nestjs/graphql';
import { TelegramService } from './telegram.service';
import { Telegram } from './entities/telegram.entity';

@Resolver(() => Telegram)
export class TelegramResolver {
  constructor(private readonly telegramService: TelegramService) {}

}
 