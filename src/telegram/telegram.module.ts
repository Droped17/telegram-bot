import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { TelegramResolver } from './telegram.resolver';
import { TodoModule } from 'src/todo/todo.module';

@Module({
  imports: [TodoModule],
  providers: [TelegramResolver, TelegramService],
  exports: [TelegramService]
})
export class TelegramModule {}
