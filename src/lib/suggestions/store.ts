import { create } from 'zustand'

type Catgeory =
	| 'Shopify'
	| 'Subscriptions'
	| 'Email marketing'
	| 'Reviews'
	| 'Buy X Get Y'

type Suggestion = {
	title: string
	handle: string
	category: Catgeory[]
}

type Props = {
	categories: Catgeory[]
	suggestions: Suggestion[]
	selected: Catgeory
	setSelected: (selected: Catgeory) => void
}

const suggestions: Suggestion[] = [
	{
		title: 'Search & Discovery',
		handle: 'search-and-discovery',
		category: ['Shopify'],
	},
	{
		title: 'Translate & Adapt',
		handle: 'translate-and-adapt',
		category: ['Shopify'],
	},
	{
		title: 'Shopify Email',
		handle: 'shopify-email',
		category: ['Shopify', 'Email marketing'],
	},
	{
		title: 'Buy Button channel',
		handle: 'buy-button',
		category: ['Shopify'],
	},
	{
		title: 'Shopify Subscriptions',
		handle: 'shopify-subscriptions',
		category: ['Shopify', 'Subscriptions'],
	},
	{
		title: 'Klaviyo',
		handle: 'klaviyo-email-marketing',
		category: ['Email marketing'],
	},
	{
		title: 'Mailchimp',
		handle: 'mailchimp',
		category: ['Email marketing'],
	},
	{
		title: 'Yotpo',
		handle: 'smsbump',
		category: ['Email marketing'],
	},
	{
		title: 'Judge.me',
		handle: 'judgeme',
		category: ['Reviews'],
	},
	{
		title: 'Yotpo',
		handle: 'yotpo-social-reviews',
		category: ['Reviews'],
	},
	{
		title: 'BOGO+',
		handle: 'discos-smart-bogo-cart-upsell',
		category: ['Buy X Get Y'],
	},
	{
		title: 'EasyGift',
		handle: 'gifter-cart-auto-include',
		category: ['Buy X Get Y'],
	},
	{
		title: 'BOGOS.io',
		handle: 'freegifts',
		category: ['Buy X Get Y'],
	},
]

const categories = [
	...new Set(suggestions.map((suggestion) => suggestion.category).flat()),
]

export const useSuggestionStore = create<Props>((set) => ({
	suggestions,
	categories,
	selected: 'Shopify',
	setSelected: (selected: Catgeory) => set({ selected }),
}))
