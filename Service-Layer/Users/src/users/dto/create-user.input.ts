import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({ description: 'User name' })
  name: string;

  @Field({ description: 'User email' })
  email: string;

  @Field(() => Int, { description: 'User age' })
  age: number;

  @Field({ description: 'User address' })
  address: string;
}
