import { useHandleStore } from '@/lib/store'
import {
	Button,
	Card,
	Form,
	FormLayout,
	InlineError,
	TextField,
} from '@shopify/polaris'
import { useState } from 'react'

export default function AppAdder({}: Props) {
	const [$value, set$value] = useState('https://apps.shopify.com/zipifypages')
	const [$error, set$error] = useState<string | false>(false)
	const addHandle = useHandleStore((s) => s.addHandle)

	return (
		<Card>
			<Form
				onSubmit={(e) => {
					if (!(e.target instanceof HTMLFormElement)) return

					const formData = new FormData(e.target)
					const { pathname, host } = new URL(formData.get('url') as string)

					if (!pathname) {
						set$error('')
						return
					}

					if (host !== 'apps.shopify.com') {
						set$error('Not a Shopify App Store URL')
						return
					}

					const handle = pathname.replace(/^\/+|\/+$/g, '')
					addHandle({
						url: formData.get('url') as string,
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
						type="url"
						autoComplete="off"
					/>

					{!!$error && <InlineError message={$error} fieldID="url" />}

					<Button disabled={!$value} submit>
						Add
					</Button>
				</FormLayout>
			</Form>
		</Card>
	)
}

type Props = {}
