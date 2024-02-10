'use client'

import { useAppStore } from '@/lib/store'
import { useState } from 'react'
import {
	Card,
	Box,
	Link,
	ResourceList,
	ResourceListProps,
} from '@shopify/polaris'
import AppListItem from './AppListItem'
import { DeleteIcon } from '@shopify/polaris-icons'

export default function AppList({}: Props) {
	const handles = useAppStore((s) => s.handles)
	const removeHandles = useAppStore((s) => s.removeHandles)

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
						<p>Start by adding Shopify App URLs to compare.</p>
						<p>
							Search for apps in the{' '}
							<Link url="https://app.shopify.com" target="_blank">
								Shopify App Store
							</Link>
							.
						</p>
					</Box>
				}
			></ResourceList>
		</Card>
	)
}

type Props = {}
