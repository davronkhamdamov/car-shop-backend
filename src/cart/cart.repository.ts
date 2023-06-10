import { Inject, Injectable } from "@nestjs/common";
import { CurrentUserDto } from "src/auth/dto/Corrent.userDto";
import { KnexConfig } from "src/knex/knex.config";
import { createCartDto, updateCartDto } from "./cart.dto/cart.dto";

@Injectable()
export class CartRepository {
  @Inject()
  private readonly KnexConfig: KnexConfig;
  AllCarts(userId: CurrentUserDto) {
    const knex = this.KnexConfig.instance;
    return knex
      .select(
        "cart.count",
        "cart.id",
        "cart.car_id",
        "cars.title",
        "cart.user_id",
        "cars.baseimgurl",
        "cars.price"
      )
      .from("cart")
      .join("cars", function () {
        this.on("cars.id", "=", "cart.car_id");
      })
      .where("user_id", userId.id)
      .orderBy("title");
  }
  createCart(cart: createCartDto) {
    const knex = this.KnexConfig.instance;
    return knex("cart")
      .insert(cart)
      .then((data: any) => data)
      .catch((er: any) => {
        if (
          'insert or update on table "cart" violates foreign key constraint "cart_fk0"' ===
          er.message.split("-")[1].trim()
        ) {
          return { error: true, message: "Car not found" };
        }
        return {
          error: true,
          data: er.message.split("-")[1].trim(),
        };
      });
  }
  updateCart(cart: updateCartDto, cartId: { id: string }) {
    const knex = this.KnexConfig.instance;
    return knex("cart").update(cart).where("id", cartId.id);
  }
  deleteCart(cartId: { id: string }) {
    const knex = this.KnexConfig.instance;
    return knex("cart")
      .where("id", cartId.id)
      .del()
      .then((data: any) => data)
      .catch((er: any) => {
        return {
          error: true,
          data: er.message.split("-")[1].trim(),
        };
      });
  }
  deleteCartByCarId(id: { id: string }) {
    const knex = this.KnexConfig.instance;
    return knex("cart")
      .where("car_id", id.id)
      .del()
      .then((data: any) => data)
      .catch((er: any) => {
        return {
          error: true,
          data: er.message.split("-")[1].trim(),
        };
      });
  }
}
