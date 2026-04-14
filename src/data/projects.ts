export const projects = [
	{
		title: 'Tsum Calculator',
		badge: 'Frontend',
		images: [
			{ src: '/tsum-calculator-main.png', alt: 'Tsum Calculator メイン画面' },
			{
				src: '/tsum-calculator-running.png',
				alt: 'Tsum Calculator タイマー動作中',
			},
			{ src: '/tsum-calculator-stats.png', alt: 'Tsum Calculator 統計・履歴' },
			{
				src: '/tsum-calculator-session.png',
				alt: 'Tsum Calculator セッション詳細',
			},
		],
		techStack: [
			'TypeScript',
			'React 19',
			'Next.js 16',
			'Tailwind CSS',
			'shadcn/ui',
			'Vercel',
		],
		description: [
			{
				title: '概要',
				content:
					'LINE:ディズニー ツムツムのコイン稼ぎ効率をリアルタイムで計算するWebアプリ。30分カウントダウンタイマーとプレイ記録を一画面で管理し、効率を自動計算します。バックエンド不要のフロントエンド完結型アプリとして設計しました。',
			},
			{
				title: '主な機能',
				items: [
					'30分カウントダウンタイマー（バックグラウンドでも正確に計測）',
					'プレイ記録管理（素コイン入力、個別・一括削除）',
					'効率計算（+Coin倍率・アイテムコストを考慮）',
					'セッション保存・過去データ閲覧',
					'共有機能（Web Share API / LINE共有）',
				],
			},
			{
				title: '技術的なこだわり',
				items: [
					'Page Visibility API + タイムスタンプベースでバックグラウンド対応タイマーを実装',
					'SSR対応のlocalStorageフック（ハイドレーションエラー回避）',
					'4つのカスタムフック（useTimer / useCalculator / useLocalStorage / useSessions）による責務分離',
					'TypeScriptで全データ構造を型定義し、型安全な開発を実現',
				],
			},
			{
				title: '学んだこと',
				items: [
					'Next.js App RouterでのSSR対応とクライアントサイドAPIの適切な扱い方',
					'ブラウザのバックグラウンド制限への対処法',
					'カスタムフックによる責務分離の重要性',
				],
			},
		],
		links: {
			github: 'https://github.com/kokiishikawa/tsum-calculator.git',
			demo: 'https://tsum-calculator.vercel.app/',
		},
	},
	{
		title: 'My Personal Portal',
		badge: 'Full Stack',
		images: [
			{
				src: '/portal-dashboard.png',
				alt: 'My Personal Portal ダッシュボード',
			},
			{ src: '/portal-schedule.png', alt: 'My Personal Portal 予定追加' },
			{ src: '/portal-bookmark.png', alt: 'My Personal Portal ブックマーク' },
			{ src: '/portal-darkmode.png', alt: 'My Personal Portal ダークモード' },
			{
				src: '/portal-ai-loading.png',
				alt: 'My Personal Portal AIルート生成中',
			},
			{ src: '/portal-ai-route.png', alt: 'My Personal Portal AIルート提案' },
		],
		techStack: [
			'TypeScript',
			'React 19',
			'Next.js 15',
			'Python',
			'Django 5',
			'DRF',
			'PostgreSQL',
			'Docker',
			'Vercel',
			'GitHub Actions',
		],
		description: [
			{
				title: '概要',
				content:
					'日常的に使用する情報やツール（タスク管理、スケジュール、ブックマーク）を一箇所に集約した個人用ダッシュボードアプリ。AIによる予定先までのルート提案機能も備え、開発・インフラ構築まで一人で担当しています。',
			},
			{
				title: '主な機能',
				items: [
					'Google OAuth 2.0によるセキュアな認証',
					'タスク管理（楽観的更新による高速UI）',
					'カレンダーUIによるスケジュール管理',
					'絵文字アイコン・カラータグ付きブックマーク',
					'AIルート提案（Google Maps API + Claude API）',
					'ダークモード対応',
				],
			},
			{
				title: '技術的なこだわり',
				items: [
					'NextAuth.js × Django SimpleJWTによる認証連携（IDトークン検証→JWT発行）',
					'楽観的更新パターンでAPI応答を待たずにUIを即座に更新、失敗時はロールバック',
					'Google Maps APIで経路取得 → Claude APIで自然言語の提案を生成',
					'Docker Composeで3コンテナ（DB/API/Frontend）を一発起動',
					'GitHub ActionsでCI/CD（pytest自動実行）',
					'AWSでインフラ構築（EC2/RDS/Route53）',
				],
			},
			{
				title: '学んだこと',
				items: [
					'フロントエンド・バックエンド間のトークン交換の設計と実装',
					'RESTful API設計（認証、CORS対応）',
					'Djangoによるアプリケーション開発',
					'外部API（Google/Claude）の組み合わせ方',
					'AWSでインフラ構築を含めたフルスタック開発',
				],
			},
		],
		links: {
			github: 'https://github.com/kokiishikawa/my-personal-portal.git',
			demo: 'https://my-personal-portal.vercel.app/',
		},
	},
	{
		title: 'LINE Article Digest',
		badge: 'Serverless',
		images: [
			{
				src: '/line-article-digest-architecture.png',
				alt: 'LINE Article Digest アーキテクチャ図',
			},
			{
				src: '/line-article-digest-demo-1.png',
				alt: 'LINE Article Digest 動作デモ1',
			},
			{
				src: '/line-article-digest-demo-2.png',
				alt: 'LINE Article Digest 動作デモ2',
			},
		],
		techStack: [
			'Python',
			'AWS Lambda',
			'Amazon API Gateway',
			'Amazon Bedrock',
			'Amazon DynamoDB',
			'LINE Messaging API',
			'GitHub Actions',
		],
		description: [
			{
				title: '概要',
				content:
					'LINE に記事の URL を送ると、AWS Bedrock（Claude Haiku 4.5）が本文を要約して返信するサーバーレスアプリ。DynamoDB でユーザーごとの日次利用回数を管理し、上限超過時は案内メッセージを返す。',
			},
			{
				title: '主な機能',
				items: [
					'LINE に URL を送るだけで記事を3〜5行に要約',
					'BeautifulSoup で本文のみをスクレイピング（script/style/nav を除去）',
					'Bedrock Converse API で日本語要約を生成',
					'DynamoDB でユーザーごとの1日100回利用制限を管理',
					'GitHub Actions で develop ブランチへの push 時に Lambda へ自動デプロイ',
				],
			},
			{
				title: '技術的なこだわり',
				items: [
					'Lambda の warm start を活かすためモジュールレベルで Bedrock クライアントを初期化',
					'サーバーレス構成でインフラ管理コストをゼロに',
					'JP cross-region inference profile ARN を使用し、Bedrock の on-demand 制限を回避',
				],
			},
			{
				title: '学んだこと',
				items: [
					'Bedrock Converse API の使い方と inference profile の仕組み',
					'DynamoDB の UpdateExpression を使った原子的カウンタ更新',
					'LINE Webhook のリクエスト署名検証とイベント処理フロー',
				],
			},
		],
		links: {
			github: 'https://github.com/kokiishikawa/LINE-Article-Digest',
			demo: '',
		},
	},
	{
		title: 'AWS Cost Notify',
		badge: 'Serverless',
		images: [
			{ src: '/aws-cost-notify-march-2026.png', alt: '今月のAWSコスト通知' },
			{
				src: '/aws-cost-notify-march-early-2026.png',
				alt: '今月のAWSコスト通知（月初）',
			},
			{ src: '/aws-cost-notify-february-2026.png', alt: '先月のAWSコスト通知' },
			{ src: '/aws-cost-notify-january-2026.png', alt: '1月のAWSコスト通知' },
		],
		techStack: [
			'Python',
			'AWS Lambda',
			'Amazon EventBridge',
			'Amazon API Gateway',
			'LINE Messaging API',
			'GitHub Actions',
		],
		description: [
			{
				title: '概要',
				content:
					'個人で利用しているAWSのコストをLINEで管理するサーバーレスアプリケーション。定期通知とチャットボット形式での期間指定照会に対応。',
			},
			{
				title: '主な機能',
				items: [
					'EventBridgeによる月次コストの自動通知',
					'LINEチャットボットで任意の月のコストを照会',
					'サービス別の内訳をドル・円換算で表示',
				],
			},
			{
				title: '技術的なこだわり',
				items: [
					'サーバーレス構成でインフラ管理コストをゼロに',
					'GitHub ActionsとOIDCを使った安全な自動デプロイ（アクセスキー不要）',
				],
			},
			{
				title: '学んだこと',
				items: [
					'AWS LambdaとAPI Gatewayを組み合わせたサーバーレス開発',
					'Amazon EventBridgeによるスケジューリング',
					'LINE Messaging APIとLambdaの連携',
					'GitHub ActionsとOIDCを使ったCI/CDパイプラインの構築',
				],
			},
		],
		links: {
			github: 'https://github.com/kokiishikawa/aws-cost-notify',
			demo: '',
		},
	},
];
