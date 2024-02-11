import { Banner, Link } from '@shopify/polaris'
import { MagicIcon } from '@shopify/polaris-icons'

export default function FeatureYourApp({}: Props) {
	return (
		<Banner icon={MagicIcon}>
			<p>
				<Link
					monochrome
					url={`https://github.com/mitchuman/shopify-compare-apps/issues/new?title=${encodeURI('Add my app to be featured!')}`}
					target="_blank"
				>
					Submit your app
				</Link>{' '}
				to be featured!
			</p>
		</Banner>
	)
}

type Props = {}
