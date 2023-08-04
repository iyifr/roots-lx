import { Instance, onSnapshot, types } from 'mobx-state-tree'
import { createContext, useContext } from 'react'
import { Cart } from './User'
import { persist } from 'mst-persist'

const RootModel = types.model({
	cart: Cart,
})

let initialState = RootModel.create({
	cart: {
		id: 1,
		owner: 'Iyimide Jo',
		items: [],
	},
})

persist('root', initialState, {
	storage: localStorage, // or AsyncStorage in react-native.
	// default: localStorage
	jsonify: false, // if you use AsyncStorage, this shoud be true
	// default: true
	whitelist: ['name'], // only these keys will be persisted
}).then(() => console.log('Root Store has been hydrated'))

export const rootStore = initialState

onSnapshot(rootStore, (snapshot) => {
	console.log('Snapshot: ', snapshot)
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
