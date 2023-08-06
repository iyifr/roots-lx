import { Instance, onSnapshot, types } from 'mobx-state-tree'
import { createContext, useContext } from 'react'
import { Cart, Products } from './models'

const RootModel = types.model({
	cart: Cart,
	products: Products,
})

let initialState = RootModel.create({
	cart: {
		id: 5,
		owner: 'Iyimide Jo',
		items: [],
	},
	products: {
		products: [],
		state: 'pending',
	},
})

// @ts-ignore

const data = localStorage.getItem('rootState')
if (data) {
	const json = JSON.parse(data)
	if (RootModel.is(json)) {
		initialState = RootModel.create(json)
	}
}

export const rootStore = initialState

onSnapshot(rootStore, (snapshot) => {
	console.log('Snapshot: ', snapshot)
	localStorage.setItem('rootState', JSON.stringify(snapshot))
})

export type RootInstance = Instance<typeof RootModel>
const RootStoreContext = createContext<null | RootInstance>(null)

export const RootStore = RootStoreContext.Provider
export function useStore() {
	const store = useContext(RootStoreContext)
	if (store === null) {
		throw new Error('Store cannot be null, please add a context provider')
	}
	return store
}
