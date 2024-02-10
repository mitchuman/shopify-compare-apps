import { getCompareUrl, useAppStore } from '@/lib/store'
import { CalloutCard, Link } from '@shopify/polaris'
import { ClipboardIcon } from '@shopify/polaris-icons'

export default function Result({}: Props) {
	const handles = useAppStore((state) => state.handles)
	const finalUrl = getCompareUrl(handles)

	return (
		<CalloutCard
			title="Comparison URL"
			illustration="/pixel-shopify.png"
			primaryAction={{
				content: 'Copy URL',
				icon: ClipboardIcon,
				onAction: () => navigator.clipboard.writeText(finalUrl),
			}}
		>
			<Link url={finalUrl} target="_blank">
				{finalUrl}
			</Link>
		</CalloutCard>
	)
}

type Props = {}
