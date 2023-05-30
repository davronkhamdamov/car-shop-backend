import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto, Token } from './dto/auth.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('register')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: LoginDto,
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  async Register(@Body() user: RegisterDto) {
    return this.authService.Register(user);
  }
  @ApiResponse({
    status: 200,
    description: 'Successfully logined',
    type: Token,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post('login')
  async Login(@Body() user: LoginDto) {
    return this.authService.Login(user);
  }
}
