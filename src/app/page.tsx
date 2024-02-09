'use client'

import {
	AppProvider,
	Button,
	CalloutCard,
	Card,
	FooterHelp,
	Form,
	FormLayout,
	Layout,
	Link,
	Page,
	TextField,
} from '@shopify/polaris'
import { ClipboardIcon } from '@shopify/polaris-icons'

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
			>
				<Layout>
					<Layout.Section>
						<CalloutCard
							title="Comparison URL"
							illustration="https://cdn.shopify.com/shopifycloud/shopify_dev/assets/icons/48/shopify-2x-533cfc728abb341ee379217370a0c5be8d1a555e47eae85abe657675f367a37d.png"
							primaryAction={{
								content: 'Copy URL',
								icon: ClipboardIcon,
								onAction: () => {},
							}}
						>
							<Link url={url} target="_blank">
								{url}
							</Link>
						</CalloutCard>
					</Layout.Section>

					<Layout.Section>
						<Card>
							<Form onSubmit={() => {}}>
								<FormLayout>
									<TextField
										label="App URL or slug"
										placeholder="https://apps.shopify.com/search-and-discovery"
										autoComplete="off"
									/>
									<Button submit>Add</Button>
								</FormLayout>
							</Form>
						</Card>
					</Layout.Section>

					<Layout.Section>
						<FooterHelp>
							Built by{' '}
							<Link url="https://github.com/mitchuman" target="_blank">
								mitchuman
							</Link>
							{' at '}
							<Link url="https://human.marketing" target="_blank">
								Human
							</Link>
						</FooterHelp>
					</Layout.Section>
				</Layout>
			</Page>
		</AppProvider>
	)
}
