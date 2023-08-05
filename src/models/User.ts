import {
	types,
	getParent,
	SnapshotIn,
	Instance,
	destroy,
} from 'mobx-state-tree'

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
		incQty(amount?: number) {
			amount ? (self.qty += amount) : (self.qty += 1)
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
		changeName(name: string) {
			self.owner = name
		},
	}))
	.views((self) => ({
		get totalItems() {
			return self.items.length
		},
		get totalPrice() {
			return self.items.reduce((sum, entry) => sum + entry.price * entry.qty, 0)
		},
	}))

export const User = types.model('UserModel', {
	id: types.identifier,
	firstName: types.string,
	lastName: types.string,
	email: types.string,
	cart: types.optional(types.array(Cart), []),
})
