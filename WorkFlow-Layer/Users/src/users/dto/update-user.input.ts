import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateUserInput } from './create-user.input';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => Int, { description: 'User ID' })
  id: string;

  @Field({ nullable: true, description: 'Updated user name' })
  name?: string;

  @Field({ nullable: true, description: 'Updated user email' })
  email?: string;

  @Field(() => Int, { nullable: true, description: 'Updated user age' })
  age?: number;

  @Field({ nullable: true, description: 'Updated user address' })
  address?: string;
}
