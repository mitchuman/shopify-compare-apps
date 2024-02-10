import { create } from 'zustand'

type Props = {
	handles: App.Handle[]
	addHandle: (handle: App.Handle) => void
}

export const useHandleStore = create<Props>((set, get) => ({
	handles: [],
	addHandle: (handle: App.Handle) =>
		set((state) => {
			const hasDupliate = state.handles.some((h) => h.handle === handle.handle)

			if (hasDupliate) return state
			return { handles: [...state.handles, handle] }
		}),
}))
