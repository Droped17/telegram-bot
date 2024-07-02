// todo.resolver.ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { Todo } from './entities/todo.entity';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { ObjectId } from 'typeorm';

@Resolver(of => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(returns => [Todo])
  todos() {
    return this.todoService.findAll();
  }

  @Query(returns => Todo)
  todo(
    @Args('id', { type: () => String }) id: ObjectId,
  ) {
    return this.todoService.findOne(id);
  }

  @Mutation(returns => Todo)
  createTodo(
    @Args('createTodoInput') createTodoInput: CreateTodoInput,
  ) {
    const { title, description } = createTodoInput;
    const todo = new Todo();
    todo.title = title;
    todo.description = description;
    todo.completed = false;
    return this.todoService.create(todo);
  }

  @Mutation(returns => Todo)
  updateTodo(
    @Args('updateTodoInput') updateTodoInput: UpdateTodoInput,
  ) {
    const { id, title, description, completed } = updateTodoInput;
    const todo: Partial<Todo> = { title, description, completed };
    return this.todoService.update(id, todo);
  }

  @Mutation(returns => Boolean)
  async removeTodo(
    @Args('id', { type: () => String }) id: string,
  ) {
    await this.todoService.remove(id);
    return true;
  }
}
