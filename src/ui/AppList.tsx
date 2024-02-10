'use client'

import { useHandleStore } from '@/lib/store'
import { useState } from 'react'
import {
	Card,
	Box,
	Link,
	ResourceList,
	Text,
	ResourceListProps,
} from '@shopify/polaris'
import AppListItem from './AppListItem'
import { DeleteIcon } from '@shopify/polaris-icons'

export default function AppList({}: Props) {
	const handles = useHandleStore((s) => s.handles)
	const removeHandles = useHandleStore((s) => s.removeHandles)

	const [$selected, set$selected] =
		useState<ResourceListProps['selectedItems']>()

	return (
		<Card padding="0">
			<ResourceList
				showHeader
				headerContent="Apps to compare"
				resourceName={{ singular: 'app', plural: 'apps' }}
				items={handles}
				idForItem={(app) => app.handle}
				selectedItems={$selected}
				onSelectionChange={set$selected}
				promotedBulkActions={[
					{
						content: 'Remove',
						icon: DeleteIcon,
						onAction: () => removeHandles($selected),
					},
				]}
				renderItem={(app) => <AppListItem app={app} />}
				emptyState={
					<Box padding="500">
						<Text as="p">
							Start by adding apps to compare. You can find the URL or slug on
							the{' '}
							<Link url="https://app.shopify.com" target="_blank">
								Shopify App Store
							</Link>
							.
						</Text>
					</Box>
				}
			></ResourceList>
		</Card>
	)
}

type Props = {}
