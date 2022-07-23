import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserCreateDto {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  nickName: string;

  @Field()
  email: string;
}
