declare global {
	namespace App {
		type App = {
			title?: string
			url: string
			handle: string
		}

		type Category =
			| 'Shopify'
			| 'Subscriptions'
			| 'Email marketing'
			| 'Reviews'
			| 'Buy X Get Y'

		type Suggestion = {
			title: string
			handle: string
			category: Category[]
		}
	}
}

export {}
