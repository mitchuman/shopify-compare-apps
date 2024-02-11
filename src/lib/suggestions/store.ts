import { create } from 'zustand'

type Props = {
	categories: App.Category[]
	suggestions: App.Suggestion[]
	selected: App.Category
	setSelected: (selected: App.Category) => void
}

const suggestions: App.Suggestion[] = [
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
		title: 'Recharge Subscriptions',
		handle: 'subscription-payments',
		category: ['Subscriptions'],
	},
	{
		title: 'Appstle℠',
		handle: 'subscriptions-by-appstle',
		category: ['Subscriptions'],
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
	setSelected: (selected: App.Category) => set({ selected }),
}))
