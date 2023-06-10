import { Injectable } from "@nestjs/common";
import { CurrentUserDto } from "src/auth/dto/Corrent.userDto";
import { CartRepository } from "./cart.repository";
import { createCartDto, updateCartDto } from "./cart.dto/cart.dto";

@Injectable()
export class CartService {
  constructor(private cartRepository: CartRepository) {}
  async getAll(userId: CurrentUserDto) {
    return await this.cartRepository.AllCarts(userId);
  }
  async createCart(cart: createCartDto, userId: CurrentUserDto) {
    cart["user_id"] = userId.id;
    const cartErr = await this.cartRepository.createCart(cart);
    if (cartErr.error) {
      return cartErr;
    }
    return this.getAll(userId);
  }
  async updateCart(
    cart: updateCartDto,
    cartId: { id: string },
    userId: CurrentUserDto
  ) {
    await this.cartRepository.updateCart(cart, cartId);
    return await this.getAll(userId);
  }
  async delateCart(cartId: { id: string }, userId: CurrentUserDto) {
    const data = await this.cartRepository.deleteCart(cartId);
    if (data.error) {
      return data;
    }
    return await this.getAll(userId);
  }
}
