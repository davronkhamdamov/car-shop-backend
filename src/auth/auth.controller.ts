import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto, RegisterDto, Token } from "./dto/auth.dto";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
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
    return this.authService.Register(user);
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
    return this.authService.Login(user);
  }
}
