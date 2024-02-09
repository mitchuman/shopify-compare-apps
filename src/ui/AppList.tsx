import { Card, FooterHelp } from '@shopify/polaris'

export default function AppList({}: Props) {
	return (
		<Card>
			<FooterHelp>
				Start by adding apps to compare. You can find the URL or slug on the
				Shopify App Store.
			</FooterHelp>
		</Card>
	)
}

type Props = {}
