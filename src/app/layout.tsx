import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'koki.ishikawa | Portfolio',
	description: 'koki.ishikawaのポートフォリオサイト',

	metadataBase: new URL('https://koki-ishikawa-portfolio.vercel.app'),

	openGraph: {
		title: 'koki.ishikawa | Portfolio',
		description: 'koki.ishikawaのポートフォリオサイト',
		url: 'https://koki-ishikawa-portfolio.vercel.app',
		siteName: 'koki.ishikawa',
		locale: 'ja_JP',
		type: 'website',
	},

	twitter: {
		card: 'summary_large_image',
		title: 'koki.ishikawa | Portfolio',
		description: 'koki.ishikawaのポートフォリオサイト',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className={inter.className}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
