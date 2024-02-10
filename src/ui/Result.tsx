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
			illustration="https://cdn.shopify.com/shopifycloud/shopify_dev/assets/icons/48/shopify-2x-533cfc728abb341ee379217370a0c5be8d1a555e47eae85abe657675f367a37d.png"
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
