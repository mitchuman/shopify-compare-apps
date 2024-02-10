import { useHandleStore } from '@/lib/store'
import { CalloutCard, Link } from '@shopify/polaris'
import { ClipboardIcon } from '@shopify/polaris-icons'

const BASE_URL = 'https://apps.shopify.com/compare'

export default function Result({}: Props) {
	const handles = useHandleStore((s) => s.handles)

	const url = new URL(BASE_URL)
	url.searchParams.set('handles', handles.map((h) => h.handle).join(','))

	const finalUrl = url.toString()

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
