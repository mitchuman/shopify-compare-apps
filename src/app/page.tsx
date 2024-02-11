import App from '@/lib/App'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Shopify App Comparer',
	description: 'A tool to compare Shopify apps.',
}

export default function page() {
	return <App metadata={metadata} />
}
