import { Button, Card, Form, FormLayout, TextField } from '@shopify/polaris'

export default function AppAdder({}: Props) {
	return (
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
	)
}

type Props = {}
