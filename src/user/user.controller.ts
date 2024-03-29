import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from "./user.service";
import { CreateUserDTO } from "./dto/create.user.dto";

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) {}

  @Post()
  public createUser(@Body() createUserDto: CreateUserDTO) {
    return this.userService.createUser(createUserDto);
  }

}
