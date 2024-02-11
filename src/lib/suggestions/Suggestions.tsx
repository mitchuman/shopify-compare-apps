'use client'

import { useSuggestionStore } from '@/lib/suggestions/store'
import { BlockStack, Select } from '@shopify/polaris'
import { InlineStack, Tag } from '@shopify/polaris'
import FeatureYourApp from './FeatureYourApp'
import { useAdderStore } from '../adder/store'

export default function Suggestions({}: Props) {
	const categories = useSuggestionStore((s) => s.categories)
	const suggestions = useSuggestionStore((s) => s.suggestions)
	const $selected = useSuggestionStore((s) => s.selected)
	const set$selected = useSuggestionStore((s) => s.setSelected)
	const set$value = useAdderStore((s) => s.setValue)

	const filtered = suggestions.filter((suggestion) =>
		suggestion.category.includes($selected),
	)

	const options = categories.map((category) => ({
		label: category,
		value: category,
	}))

	return (
		<BlockStack gap="200">
			<Select
				label="Suggestions:"
				labelInline
				options={options}
				value={$selected}
				onChange={set$selected}
			/>

			<InlineStack gap="100">
				{filtered.map((suggestion) => (
					<Tag key={suggestion.url} onClick={() => set$value(suggestion.url)}>
						{suggestion.title}
					</Tag>
				))}
			</InlineStack>

			<FeatureYourApp />
		</BlockStack>
	)
}

type Props = {}
