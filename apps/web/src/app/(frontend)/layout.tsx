import { VisualEditing } from 'next-sanity'
import { draftMode } from 'next/headers'
// import { SanityLive } from '@spon/cms/lib/live'
import { Provider } from './provider'

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const draft = await draftMode()

	return (
		<html lang="en_GB">
			<body>
				<Provider>
					{draft.isEnabled && (
						<a
							className="fixed bottom-0 right-0 m-4 bg-blue-500 p-4 text-white z-1000"
							href="/api/draft/disable"
						>
							Disable preview mode
						</a>
					)}
					<div className="bg-black" data-testid="root">
						{children}
					</div>

					{/* <SanityLive /> */}
					{draft.isEnabled && <VisualEditing />}
				</Provider>
			</body>
		</html>
	)
}
