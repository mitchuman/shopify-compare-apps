import { useHandleStore } from '@/lib/store'
import {
	Card,
	FooterHelp,
	ResourceItem,
	ResourceList,
	Text,
} from '@shopify/polaris'
import { useState } from 'react'

export default function AppList({}: Props) {
	const handles = useHandleStore((s) => s.handles)
	const removeHandles = useHandleStore((s) => s.removeHandles)

	const [$selected, set$selected] = useState<App.Handle[]>([])

	return (
		<Card>
			{handles?.length ? (
				<ResourceList
					items={handles}
					renderItem={({ handle }) => (
						<ResourceItem id={handle} onClick={() => {}}>
							<Text as="h3">{handle}</Text>
						</ResourceItem>
					)}
					selectedItems={$selected}
					onSelectionChange={set$selected}
					bulkActions={[
						{
							content: 'Remove',
							onAction: () => {
								removeHandles($selected)
							},
						},
					]}
				/>
			) : (
				<FooterHelp>
					Start by adding apps to compare. You can find the URL or slug on the
					Shopify App Store.
				</FooterHelp>
			)}
		</Card>
	)
}

type Props = {}
