import { useAppStore } from '@/lib/store'
import {
	Button,
	Card,
	Form,
	FormLayout,
	InlineStack,
	Tag,
	TextField,
} from '@shopify/polaris'
import { AppsIcon } from '@shopify/polaris-icons'
import { useState } from 'react'

const suggestions: App.Suggestion[] = [
	{
		title: 'Search & Discovery',
		url: 'https://apps.shopify.com/search-and-discovery',
	},
	{
		title: 'Klaviyo',
		url: 'https://apps.shopify.com/klaviyo-email-marketing',
	},
	{
		title: 'Mailchimp',
		url: 'https://apps.shopify.com/mailchimp',
	},
]

export default function AppAdder({}: Props) {
	const [$value, set$value] = useState<string | undefined>()
	const [$error, set$error] = useState<string | false>(false)
	const add = useAppStore((s) => s.add)

	return (
		<Card>
			<Form
				onSubmit={(e) => {
					if (!(e.target instanceof HTMLFormElement)) return

					const formData = new FormData(e.target)
					const { pathname, host, origin } = new URL(
						formData.get('url') as string,
					)

					if (!pathname) {
						set$error('')
						return
					}

					if (host !== 'apps.shopify.com') {
						set$error('Not a Shopify App Store URL')
						return
					}

					add({
						url: origin + pathname,
						handle: pathname.replace(/^\/+|\/+$/g, ''),
					})
					set$value('')
					set$error(false)
				}}
			>
				<FormLayout>
					<TextField
						name="url"
						label="App URL"
						verticalContent={
							<InlineStack gap="100">
								{suggestions.map((suggestion) => (
									<Tag
										key={suggestion.url}
										onClick={() => set$value(suggestion.url)}
									>
										{suggestion.title}
									</Tag>
								))}
							</InlineStack>
						}
						value={$value}
						onChange={(e) => set$value(e)}
						error={$error}
						clearButton
						onClearButtonClick={() => set$value('')}
						placeholder="https://apps.shopify.com/..."
						type="url"
						autoComplete="off"
					/>

					<Button icon={AppsIcon} disabled={!$value} submit fullWidth>
						Add
					</Button>
				</FormLayout>
			</Form>
		</Card>
	)
}

type Props = {}
