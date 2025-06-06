export const metadata = {
	title: 'CMS',
	description: 'Sanity.io powered cms',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en_GB">
			<body>{children}</body>
		</html>
	)
}
