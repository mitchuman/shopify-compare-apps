import { useHandleStore } from '@/lib/store'
import {
	Card,
	FooterHelp,
	ResourceItem,
	ResourceList,
	Text,
} from '@shopify/polaris'

export default function AppList({}: Props) {
	const handles = useHandleStore((s) => s.handles)

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
