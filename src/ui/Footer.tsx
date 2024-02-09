import { FooterHelp, Link } from '@shopify/polaris'

export default function Footer({}: Props) {
	return (
		<FooterHelp>
			Built by{' '}
			<Link url="https://github.com/mitchuman" target="_blank">
				mitchuman
			</Link>
			{' at '}
			<Link url="https://human.marketing" target="_blank">
				Human
			</Link>
		</FooterHelp>
	)
}

type Props = {}
