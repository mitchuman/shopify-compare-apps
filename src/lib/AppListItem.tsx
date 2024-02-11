import { useAppStore } from '@/lib/store'
import {
	Link,
	ResourceItem,
	Text,
	type DisableableAction,
} from '@shopify/polaris'
import { ArrowDownIcon, ArrowUpIcon } from '@shopify/polaris-icons'
import type { FunctionComponent, SVGProps } from 'react'

export default function AppListItem({ app }: Props) {
	const handles = useAppStore((s) => s.handles)
	const reorder = useAppStore((s) => s.reorder)

	const moveActions: Array<
		DisableableAction & { icon: FunctionComponent<SVGProps<SVGSVGElement>> }
	> = [
		{
			content: 'Move up',
			icon: ArrowUpIcon,
			onAction: () => reorder(app, -1),
		},
		{
			content: 'Move down',
			icon: ArrowDownIcon,
			onAction: () => reorder(app, 1),
		},
	]

	return (
		<ResourceItem
			id={app.handle}
			onClick={() => {}}
			shortcutActions={handles.length > 1 ? moveActions : []}
		>
			<Text as="h3" fontWeight="bold">
				{app.handle}
			</Text>
			<Link url={app.url} target="_blank">
				{app.url}
			</Link>
		</ResourceItem>
	)
}

type Props = {
	app: App.App
}
