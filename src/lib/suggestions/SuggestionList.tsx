'use client'

import { useAppStore } from '../store'
import { InlineStack, Tag } from '@shopify/polaris'
import { useSuggestionStore } from './store'

export default function SuggestionList({}: Props) {
	const apps = useAppStore((s) => s.apps)
	const add = useAppStore((s) => s.add)
	const suggestions = useSuggestionStore((s) => s.suggestions)
	const $selected = useSuggestionStore((s) => s.selected)

	const filtered = suggestions.filter((suggestion) =>
		suggestion.category.includes($selected),
	)

	return (
		<InlineStack gap="100">
			{filtered.map((suggestion) => (
				<Tag
					disabled={apps.some((app) => app.handle === suggestion.handle)}
					key={suggestion.handle}
					onClick={() => {
						add({
							title: suggestion.title,
							url: 'https://apps.shopify.com/' + suggestion.handle,
							handle: suggestion.handle,
						})
					}}
				>
					{suggestion.title}
				</Tag>
			))}
		</InlineStack>
	)
}

type Props = {}
