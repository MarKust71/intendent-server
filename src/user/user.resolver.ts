import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { UserCreateDto } from './dto/user-create.dto';

@Resolver(() => User)
export class UserResolver {
  // eslint-disable-next-line no-unused-vars
  constructor(private userService: UserService) {}

  @Query(() => [User], { name: 'getAllUsers' })
  getAll() {
    return this.userService.getAll();
  }

  @Mutation(() => User, { name: 'addUser' })
  add(@Args('user') user: UserCreateDto) {
    return this.userService.add(user);
  }
}
