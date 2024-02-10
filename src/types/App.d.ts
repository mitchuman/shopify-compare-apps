declare global {
	namespace App {
		type App = {
			url: string
			handle: string
		}

		type Suggestion = {
			title: string
			url: string
		}
	}
}

export {}
