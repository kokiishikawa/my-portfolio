import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { OpeningAnimation } from '@/components/OpeningAnimation';

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

// 描画前に .dark を付与してちらつきを防ぐ(localStorage の保存値 > OS 設定の順で判定)
// body の先頭に置くことで、コンテンツの描画より先に必ず実行される
const themeInitScript = `
try {
	const saved = localStorage.getItem("theme");
	const dark = saved ? saved === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
	document.documentElement.classList.toggle("dark", dark);
} catch (e) {}
`;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		// suppressHydrationWarning: .dark はサーバー出力に含まれないクラスなので警告を抑制
		<html lang="ja" suppressHydrationWarning>
			<body className={inter.className}>
				<script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
				<OpeningAnimation />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
