import { Injectable, OnModuleInit } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';
import { Todo } from 'src/todo/entities/todo.entity';
import { TodoService } from 'src/todo/todo.service';

@Injectable()
export class TelegramService implements OnModuleInit {
  private bot: TelegramBot;

  constructor(private readonly todoService: TodoService) {}

  onModuleInit() {
    // this.bot = new TelegramBot('7393447947:AAE1M9T22SB47C3c-VbPIsCca-Sz0M_07p4', { polling: true });
    // this.bot.onText(/\/start/, (msg) => {
    //   this.bot.sendMessage(msg.chat.id, 'Welcome to the Todo List Bot!');
    // })

    // this.bot.onText(/\/addtodo (.+)/, async (msg, match) => {
    //   const [title,description] = match[1].split('|');
    //   const todo = new Todo();
    //   todo.title = title.trim()
    // })

    // this.bot.onText(/\/removetodo (.+)/, async (msg, match) => {
    //   const id = match[1].trim();
    //   await this.todoService.remove(id);
    //   this.bot.sendMessage(msg.chat.id, 'Todo removed successfully!');
    // });

    // this.bot.onText(/\/updatetodo (.+)/, async (msg, match) => {
    //   const [id, title, description, completed] = match[1].split('|');
    //   const todo: Partial<Todo> = { title: title.trim(), description: description.trim(), completed: completed.trim() === 'true' };
    //   await this.todoService.update(id.trim(), todo);
    //   this.bot.sendMessage(msg.chat.id, 'Todo updated successfully!');
    // });

    this.bot = new TelegramBot('7393447947:AAE1M9T22SB47C3c-VbPIsCca-Sz0M_07p4', {polling: true});

    this.bot.on('message', (msg) => {
      const chatId = msg.chat.id;
      const message = msg.text;

      if (message === '/start') {
        this.bot.sendMessage(chatId,'Hello World')
      } else if (message === '/help') {
        this.bot.sendMessage(chatId,'This is help message')
      }
      
    })

  }
}
