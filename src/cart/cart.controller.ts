import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from "@nestjs/common";
import { ApiBearerAuth, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CurrentUserDto } from "src/auth/dto/Corrent.userDto";
import { AuthorizationGuard } from "src/auth/guard/Auth.guard";
import { CurrentUser } from "src/auth/guard/auth.decorator";
import { CartService } from "./cart.service";
import { createCartDto, updateCartDto } from "./cart.dto/cart.dto";

@ApiTags("Cart")
@Controller("cart")
@UseGuards(AuthorizationGuard)
@ApiBearerAuth()
export class CartController {
  constructor(private cartService: CartService) {}
  @ApiResponse({
    status: 200,
    description: "All cars will be returned",
  })
  @Get("/all")
  async AllCart(@CurrentUser() userId: CurrentUserDto) {
    return await this.cartService.getAll(userId);
  }
  @Post("create")
  async createCart(
    @Body() cart: createCartDto,
    @CurrentUser() userId: CurrentUserDto
  ) {
    return await this.cartService.createCart(cart, userId);
  }
  @Put("update/:id")
  async updateCart(
    @Body() cart: updateCartDto,
    @CurrentUser() userId: CurrentUserDto,
    @Param() cartId: { id: string }
  ) {
    return await this.cartService.updateCart(cart, cartId, userId);
  }
  @Delete("delete/:id")
  async delteCart(
    @Param() cartId: { id: string },
    @CurrentUser() userId: CurrentUserDto
  ) {
    return await this.cartService.delateCart(cartId, userId);
  }
}
