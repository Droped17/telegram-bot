import { ObjectId } from 'typeorm';
import { CreateTodoInput } from './create-todo.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateTodoInput {
  @Field(type => ID)
  id: ObjectId;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  completed?: boolean;
}
