'use client'

import { useAppStore } from '@/lib/store'
import { AppProvider, Box, InlineError, Layout, Page } from '@shopify/polaris'
import { CodeIcon } from '@shopify/polaris-icons'
import Result from '@/ui/Result'
import AppAdder from '@/ui/AppAdder'
import AppList from '@/ui/AppList'
import Footer from '@/ui/Footer'
import type { Metadata } from 'next'

export default function App({ metadata }: Props) {
	const handles = useAppStore((state) => state.handles)

	return (
		<AppProvider i18n={{}}>
			<Page
				title={metadata.title as string}
				additionalMetadata={metadata.description?.replace(/\.$/, '')}
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
						<Result />
					</Layout.Section>

					<Layout.Section variant="oneHalf">
						<AppAdder />
					</Layout.Section>

					<Layout.Section variant="oneHalf">
						<AppList />

						{handles.length > 4 && (
							<Box padding="200">
								<InlineError
									message="Can only compare up to 4 apps at a time."
									fieldID="url"
								/>
							</Box>
						)}
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
