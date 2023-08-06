import {
	types,
	getParent,
	SnapshotIn,
	Instance,
	destroy,
} from 'mobx-state-tree'
import { computed } from 'mobx'

export const CartItem = types
	.model({
		name: types.string,
		price: types.number,
		qty: types.number,
	})
	.actions((self) => ({
		changePrice(newPrice: number) {
			self.price = newPrice
		},
		remove() {
			getParent<typeof Cart>(self, 2).remove(self)
		},
		incQty(amount: number = 1) {
			self.qty += amount
		},
		decQty(amount: number = 1) {
			self.qty -= amount
		},
	}))

export const Cart = types
	.model('Cart', {
		id: types.number,
		owner: types.string,
		items: types.optional(types.array(CartItem), []),
	})
	.actions((self) => ({
		addCartItem(
			cartItem: SnapshotIn<typeof CartItem> | Instance<typeof CartItem>
		) {
			self.items.push(cartItem)
		},
		remove(item: SnapshotIn<typeof CartItem>) {
			destroy(item)
		},
		clearCart() {
			self.items.length = 0
		},
	}))
	.views((self) => ({
		get totalItems() {
			return self.items.length
		},
		get totalPrice() {
			return computed(() =>
				self.items.reduce((sum, entry) => sum + entry.qty * entry.price, 0)
			).get()
		},
		get isEmpty() {
			return self.items.length === 0
		},
	}))

export const User = types.model('UserModel', {
	id: types.identifier,
	firstName: types.string,
	lastName: types.string,
	email: types.string,
	cart: types.optional(types.array(Cart), []),
})
