import {
	IMSTArray,
	IModelType,
	ISimpleType,
	_NotCustomized,
	IStateTreeNode,
	IAnyType,
} from 'mobx-state-tree'
import { NonEmptyObject } from 'mobx-state-tree/dist/types/complex-types/model'

export type CartItems = {
	items: IMSTArray<
		IModelType<
			{
				name: ISimpleType<string>
				price: ISimpleType<number>
				qty: ISimpleType<number>
			},
			{
				changePrice(newPrice: number): void
				remove(): void
				incQty(amount?: number | undefined): void
				decQty(amount: number): void
			},
			_NotCustomized,
			_NotCustomized
		>
	> &
		IStateTreeNode<IAnyType>
}

export type CartItem = {
	item: {
		name: string
		price: number
		qty: number
	} & NonEmptyObject & {
			changePrice(newPrice: number): void
			remove(): void
			incQty(amount?: number | undefined): void
			decQty(amount: number): void
		} & IStateTreeNode<IAnyType>
}

export type Cart = {
	cart: {
		id: number
		owner: string
		items: IMSTArray<
			IModelType<
				{
					name: ISimpleType<string>
					price: ISimpleType<number>
					qty: ISimpleType<number>
				},
				{
					changePrice(newPrice: number): void
					remove(): void
					incQty(amount?: number | undefined): void
					decQty(amount?: number): void
				},
				_NotCustomized,
				_NotCustomized
			>
		> &
			IStateTreeNode<IAnyType>
	}
}

export interface Product {
	id: number
	name: string
	price: string
	desc: string
	image: string
	categories: string[]
	reviews: Review[]
}

export interface Review {
	userId: number
	content: string
}
