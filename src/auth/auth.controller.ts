import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto, RegisterDto, Token } from "./dto/auth.dto";
import { ApiBearerAuth, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AuthorizationGuard } from "./guard/Auth.guard";
import { CurrentUser } from "./guard/auth.decorator";
import { CurrentUserDto } from "./dto/Corrent.userDto";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}
  @ApiResponse({
    status: 201,
    description: "The user has been successfully created.",
    type: RegisterDto,
  })
  @ApiResponse({
    status: 403,
    description: "Forbidden.",
  })
  @Post("register")
  async Register(@Body() user: RegisterDto) {
    return await this.authService.Register(user);
  }
  @ApiResponse({
    status: 200,
    description: "User info",
    type: RegisterDto,
  })
  @Get("/getuser")
  @ApiBearerAuth()
  @UseGuards(AuthorizationGuard)
  async getUser(@CurrentUser() userId: CurrentUserDto) {
    return await this.authService.getUser(userId);
  }
  @ApiResponse({
    status: 200,
    description: "Successfully logined",
    type: Token,
  })
  @ApiResponse({ status: 403, description: "Forbidden." })
  @Post("login")
  @HttpCode(200)
  async Login(@Body() user: LoginDto) {
    return await this.authService.Login(user);
  }
}
