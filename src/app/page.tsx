'use client'

import { AppProvider, Layout, Page } from '@shopify/polaris'
import { CodeIcon } from '@shopify/polaris-icons'
import Result from '@/ui/Result'
import AppAdder from '@/ui/AppAdder'
import AppList from '@/ui/AppList'
import Footer from '@/ui/Footer'

export default function page() {
	const url = 'https://apps.shopify.com/compare?handles='

	return (
		<AppProvider i18n={{}}>
			<Page
				title="Shopify Compare Apps"
				primaryAction={{
					content: 'Visit the Shopify App Store',
					url: 'https://app.shopify.com',
					target: '_blank',
				}}
				secondaryActions={[
					{
						content: 'GitHub',
						icon: CodeIcon,
						url: 'https://github.com/mitchuman/shopify-compare-apps',
						target: '_blank',
					},
					// {
					// 	content: 'Buy me a coffee',
					// },
				]}
			>
				<Layout>
					<Layout.Section>
						<Result url={url} />
					</Layout.Section>

					<Layout.Section variant="oneHalf">
						<AppAdder />
					</Layout.Section>

					<Layout.Section variant="oneHalf">
						<AppList />
					</Layout.Section>

					<Layout.Section>
						<Footer />
					</Layout.Section>
				</Layout>
			</Page>
		</AppProvider>
	)
}
