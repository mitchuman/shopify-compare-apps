'use client'

import { useAppStore } from '@/lib/store'
import { useAdderStore } from './store'
import {
	Button,
	Card,
	Divider,
	Form,
	FormLayout,
	Text,
	TextField,
} from '@shopify/polaris'
import { AppsIcon } from '@shopify/polaris-icons'
import Suggestions from '@/lib/suggestions/Suggestions'

export default function AppAdder({}: Props) {
	const $value = useAdderStore((s) => s.value)
	const set$value = useAdderStore((s) => s.setValue)
	const $error = useAdderStore((s) => s.error)
	const set$error = useAdderStore((s) => s.setError)

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
					<Text as="h2" variant="headingMd">
						Add an app to compare
					</Text>

					<TextField
						name="url"
						label="App URL"
						value={$value}
						onChange={set$value}
						error={$error}
						clearButton
						onClearButtonClick={() => set$value('')}
						placeholder="https://apps.shopify.com/..."
						type="url"
						autoComplete="off"
						connectedRight={
							<Button
								icon={AppsIcon}
								variant="primary"
								size="large"
								disabled={!$value}
								fullWidth
								submit
							>
								Add app
							</Button>
						}
					/>

					<Divider />

					<Suggestions />
				</FormLayout>
			</Form>
		</Card>
	)
}

type Props = {}
