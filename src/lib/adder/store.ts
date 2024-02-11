import { create } from 'zustand'

type Props = {
	value?: string
	setValue: (value: string) => void

	error: string | false
	setError: (error: string | false) => void
}

export const useAdderStore = create<Props>((set) => ({
	setValue: (value) => set({ value }),

	error: false,
	setError: (error) => set({ error }),
}))
