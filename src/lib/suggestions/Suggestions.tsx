'use client'

import { useSuggestionStore } from '@/lib/suggestions/store'
import { BlockStack, Select } from '@shopify/polaris'
import SuggestionList from './SuggestionList'
import FeatureYourApp from './FeatureYourApp'

export default function Suggestions({}: Props) {
	const categories = useSuggestionStore((s) => s.categories)
	const $selected = useSuggestionStore((s) => s.selected)
	const set$selected = useSuggestionStore((s) => s.setSelected)

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

			<SuggestionList />

			<FeatureYourApp />
		</BlockStack>
	)
}

type Props = {}
