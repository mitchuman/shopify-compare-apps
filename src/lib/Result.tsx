import { getCompareUrl, useAppStore } from '@/lib/store'
import {
	Badge,
	BlockStack,
	Button,
	Card,
	InlineStack,
	Link,
	Text,
} from '@shopify/polaris'
import { ClipboardIcon } from '@shopify/polaris-icons'

export default function Result({}: Props) {
	const apps = useAppStore((state) => state.apps)
	const finalUrl = getCompareUrl(apps)

	const remainder = 4 - apps.length
	const remainderString = [
		Math.abs(remainder),
		Math.abs(remainder) === 1 ? 'slot' : 'slots',
		remainder >= 0 ? 'remaining' : 'over',
	].join(' ')

	return (
		<Card>
			<BlockStack gap="200">
				<InlineStack blockAlign="end" gap="200">
					<Text as="h1" variant="headingMd">
						Comparing {apps.length} {apps.length === 1 ? 'app' : 'apps'}
					</Text>

					<InlineStack blockAlign="end" gap="200">
						<Badge tone={remainder >= 0 ? 'success' : 'attention'}>
							{remainderString}
						</Badge>

						{apps.length < 2 && <Badge tone="critical">Minimum 2 apps</Badge>}
					</InlineStack>
				</InlineStack>

				<InlineStack blockAlign="center" gap="200">
					<Button
						icon={ClipboardIcon}
						onClick={() => navigator.clipboard.writeText(finalUrl)}
						accessibilityLabel="Copy URL to clipboard"
					/>

					<Link url={finalUrl} target="_blank">
						{finalUrl}
					</Link>
				</InlineStack>
			</BlockStack>
		</Card>
	)
}

type Props = {}
