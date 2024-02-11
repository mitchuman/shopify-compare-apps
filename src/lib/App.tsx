'use client'

import { useAppStore } from '@/lib/store'
import { AppProvider, Banner, BlockStack, Layout, Page } from '@shopify/polaris'
import { CodeIcon } from '@shopify/polaris-icons'
import Result from '@/lib/Result'
import AppAdder from '@/lib/adder/AppAdder'
import AppList from '@/lib/AppList'
import Footer from '@/lib/Footer'
import type { Metadata } from 'next'

export default function App({ metadata }: Props) {
	const handles = useAppStore((state) => state.handles)

	return (
		<AppProvider i18n={{}}>
			<Page
				title={metadata.title as string}
				additionalMetadata={metadata.description?.replace(/\.$/, '')}
				primaryAction={{
					content: 'Shopify App Store',
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
						<Result />
					</Layout.Section>

					<Layout.Section variant="oneHalf">
						<AppAdder />
					</Layout.Section>

					<Layout.Section variant="oneHalf">
						<BlockStack gap="200">
							{handles.length > 4 && (
								<Banner
									title="Can only compare up to 4 apps at a time."
									tone="warning"
								/>
							)}

							<AppList />
						</BlockStack>
					</Layout.Section>

					<Layout.Section>
						<Footer />
					</Layout.Section>
				</Layout>
			</Page>
		</AppProvider>
	)
}

type Props = {
	metadata: Metadata
}
