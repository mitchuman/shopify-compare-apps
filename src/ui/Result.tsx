import { CalloutCard, Link } from '@shopify/polaris'
import { ClipboardIcon } from '@shopify/polaris-icons'

export default function Result({ url }: Props) {
	return (
		<CalloutCard
			title="Comparison URL"
			illustration="https://cdn.shopify.com/shopifycloud/shopify_dev/assets/icons/48/shopify-2x-533cfc728abb341ee379217370a0c5be8d1a555e47eae85abe657675f367a37d.png"
			primaryAction={{
				content: 'Copy URL',
				icon: ClipboardIcon,
				onAction: () => {
					navigator.clipboard.writeText(url)
				},
			}}
		>
			<Link url={url} target="_blank">
				{url}
			</Link>
		</CalloutCard>
	)
}

type Props = {
	url: string
}
