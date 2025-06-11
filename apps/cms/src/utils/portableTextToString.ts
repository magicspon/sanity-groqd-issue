import type { PortableTextBlock } from '@portabletext/react'

export function portableTextToString(
	portableText: PortableTextBlock[],
): string {
	if (!portableText || portableText.length === 0) {
		return ''
	}

	return portableText
		.map((block) => {
			if (!block.children || block.children.length === 0) {
				return ''
			}
			// Extract text from all spans in the block
			const blockText = block.children.map((span) => span.text ?? '').join('')

			// Add list prefixes if it's a list item
			if (block.listItem) {
				const indent = '  '.repeat((block.level ?? 1) - 1)
				const prefix = block.listItem === 'bullet' ? '• ' : '1. '
				return `${indent}${prefix}${blockText}`
			}

			return blockText
		})
		.filter((text) => text.trim().length > 0) // Remove empty blocks
		.join('\n')
}
