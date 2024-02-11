import { create } from 'zustand'

type Catgeory = 'Shopify' | 'Email marketing' | 'Buy X Get Y'

type Suggestion = {
	title: string
	url: string
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
		url: 'https://apps.shopify.com/search-and-discovery',
		category: ['Shopify'],
	},
	{
		title: 'Translate & Adapt',
		url: 'https://apps.shopify.com/translate-and-adapt',
		category: ['Shopify'],
	},
	{
		title: 'Shopify Email',
		url: 'https://apps.shopify.com/shopify-email',
		category: ['Shopify', 'Email marketing'],
	},
	{
		title: 'Buy Button channel',
		url: 'https://apps.shopify.com/buy-button',
		category: ['Shopify'],
	},
	{
		title: 'Klaviyo',
		url: 'https://apps.shopify.com/klaviyo-email-marketing',
		category: ['Email marketing'],
	},
	{
		title: 'Mailchimp',
		url: 'https://apps.shopify.com/mailchimp',
		category: ['Email marketing'],
	},
	{
		title: 'Yotpo',
		url: 'https://apps.shopify.com/smsbump',
		category: ['Email marketing'],
	},
	{
		title: 'BOGO+',
		url: 'https://apps.shopify.com/discos-smart-bogo-cart-upsell',
		category: ['Buy X Get Y'],
	},
	{
		title: 'EasyGift',
		url: 'https://apps.shopify.com/gifter-cart-auto-include',
		category: ['Buy X Get Y'],
	},
	{
		title: 'BOGOS.io',
		url: 'https://apps.shopify.com/freegifts',
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
