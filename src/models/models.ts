import {
	types,
	getParent,
	SnapshotIn,
	Instance,
	destroy,
	flow,
} from 'mobx-state-tree'
import { computed } from 'mobx'
import { apiService } from '../common/apiService'
import { Product } from '../types/types'

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

const Product = types.model('Product', {
	id: types.number,
	name: types.string,
	price: types.string,
	desc: types.string,
	image: types.string,
	categories: types.array(types.string),
	reviews: types.array(
		types.model({
			userID: types.number,
			content: types.string,
			published: types.string,
		})
	),
})

export const Products = types
	.model('Products', {
		products: types.array(Product),
		state: types.enumeration('State', ['pending', 'done', 'error']),
	})
	.actions((self) => ({
		fetchProducts: flow(function* fetchProducts() {
			//@ts-ignore
			self.products = []
			self.state = 'pending'
			try {
				self.products = yield apiService.get<Product[]>('/products', {
					page: 1,
					limit: 20,
				})
				self.state = 'done'
			} catch (error) {
				console.error('Error fetching products:', error)
				self.state = 'error'
			}
		}),
	}))
	.views((self) => ({
		get isLoaded() {
			return self.state
		},
	}))
