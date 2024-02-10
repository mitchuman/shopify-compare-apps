import { create } from 'zustand'
import type { ResourceListProps } from '@shopify/polaris'

type Props = {
	handles: App.App[]
	add: (handle: App.App) => void
	removeHandles: (handles: ResourceListProps['selectedItems']) => void
	reorder: (handle: App.App, amount: number) => void
}

export const useAppStore = create<Props>((set, get) => ({
	handles: [],

	add: (app: App.App) =>
		set((state) => {
			const hasDupliate = state.handles.some((h) => h.handle === app.handle)

			if (hasDupliate) return state
			return { handles: [...state.handles, app] }
		}),

	removeHandles: (apps: ResourceListProps['selectedItems']) =>
		set((state) => {
			const handles = state.handles.filter((h) => !apps?.includes(h.handle))
			return { handles }
		}),

	reorder: (app: App.App, amount: number) => {
		set((state) => {
			const currentIndex = state.handles.findIndex(
				(h) => h.handle === app.handle,
			)
			const newIndex = currentIndex + amount

			if (newIndex < 0 || newIndex >= state.handles.length) return state

			const handles = [...state.handles]
			handles[currentIndex] = handles[newIndex]
			handles[newIndex] = app

			return { handles }
		})
	},
}))

const BASE_URL = 'https://apps.shopify.com/compare'

export function getCompareUrl(handles: App.App[]) {
	const url = new URL(BASE_URL)
	url.searchParams.set('handles', handles.map((h) => h.handle).join(','))

	return url.toString()
}
