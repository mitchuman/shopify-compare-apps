import type { Metadata } from 'next'
import '@shopify/polaris/build/esm/styles.css'

export const metadata: Metadata = {
	title: 'Shopify Compare Apps',
	description: '',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
