import { create } from 'zustand'
import type { ResourceListProps } from '@shopify/polaris'

type Props = {
	apps: App.App[]
	add: (handle: App.App) => void
	removeHandles: (apps: ResourceListProps['selectedItems']) => void
	reorder: (app: App.App, amount: number) => void
}

export const useAppStore = create<Props>((set, get) => ({
	apps: [],

	add: (app: App.App) =>
		set((state) => {
			const hasDupliate = state.apps.some((h) => h.handle === app.handle)

			if (hasDupliate) return state
			return { apps: [...state.apps, app] }
		}),

	removeHandles: (target: ResourceListProps['selectedItems']) =>
		set((state) => ({
			apps: state.apps.filter((h) => !target?.includes(h.handle)),
		})),

	reorder: (app: App.App, amount: number) => {
		set((state) => {
			const currentIndex = state.apps.findIndex((h) => h.handle === app.handle)
			const newIndex = currentIndex + amount

			if (newIndex < 0 || newIndex >= state.apps.length) return state

			const apps = [...state.apps]
			apps[currentIndex] = apps[newIndex]
			apps[newIndex] = app

			return { apps: apps }
		})
	},
}))

const BASE_URL = 'https://apps.shopify.com/compare'

export function getCompareUrl(apps: App.App[]) {
	const url = new URL(BASE_URL)
	url.searchParams.set('handles', apps.map((h) => h.handle).join(','))

	return url.toString()
}
