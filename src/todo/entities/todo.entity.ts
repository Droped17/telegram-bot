import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Todo {
  @Field(type => ID)
  @ObjectIdColumn()
  id: ObjectId;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  completed: boolean;
}
