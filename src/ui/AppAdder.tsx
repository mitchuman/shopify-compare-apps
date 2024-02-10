import { useAppStore } from '@/lib/store'
import { Button, Card, Form, FormLayout, TextField } from '@shopify/polaris'
import { AppsIcon } from '@shopify/polaris-icons'
import { useState } from 'react'

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

					const handle = pathname.replace(/^\/+|\/+$/g, '')
					add({
						url: origin + pathname,
						handle,
					})
					set$value('')
					set$error(false)
				}}
			>
				<FormLayout>
					<TextField
						name="url"
						label="App URL"
						placeholder="https://apps.shopify.com/search-and-discovery"
						value={$value}
						onChange={(e) => set$value(e)}
						error={$error}
						clearButton
						onClearButtonClick={() => set$value('')}
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
