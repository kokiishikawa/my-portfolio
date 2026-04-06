# CLAUDE.md

## 私について

- 実務経験なし、学習中のエンジニア
- コードは自分でも理解・実装したいので、全部やってしまわないこと
- 実装は 4 割程度の支援が理想

## Claude への指示

- コードを書く前に「何をするか・なぜそうするか」を必ず説明する
- 一度に全部実装しない、ステップごとに分けて提示する
- 既存コードを変更する前に必ず確認を取る
- わからないことは推測で進めず質問する
- 実装後に「ここは自分で試してみて」という箇所を示す

## コマンド

```bash
npm run dev       # 開発サーバー起動 (http://localhost:3000)
npm run build     # 本番用ビルド
npm run start     # 本番サーバー起動
npm run lint      # ESLint 実行
npx tsc --noEmit  # 型チェック
```

## アーキテクチャ

Next.js 16 App Router を使用したポートフォリオ／ブログサイト。
React 19・TypeScript 5・Tailwind CSS 4・next-mdx-remote 6 で構成。

### ページ構成

- `/` — シングルページ（プロフィール・スキル・プロジェクト）。`"use client"` 使用。
- `/blog` — 一覧ページ。`force-static` で SSG。
- `/blog/[slug]` — `generateStaticParams()` で静的生成される MDX 記事ページ。

### コンテンツ管理

ブログ記事は `/content/blog/*.md` に配置。フロントマター形式：

```yaml
title: string
date: 'YYYY-MM-DD'
description: string
tags?: string[]
```

プロジェクトデータは `/src/data/projects.ts` に静的配列として定義。

### 重要なパターン

- **スクロールオフセット**: `Header.tsx` と `page.tsx` で `getHeaderOffset()` を共有。ヘッダー高さ変更時は必ず両方を同期すること。
- **クライアント / サーバー**: `app/page.tsx` とインタラクティブなコンポーネントは `"use client"`。ブログページはサーバーコンポーネント。
- **パスエイリアス**: `@/*` → `./src/*`
- **カラースキーム**: プライマリ `#1e3a5f`、アクセント `#3b82f6`、背景 `#f8fafc`
- **ブログスタイリング**: `globals.css` の `.blog-content` クラスが MDX 記事のタイポグラフィを担当。

## やってはいけないこと

- `any` 型を使わない
- `console.log` をコミットに含めない
- `scrollRestoration` の設定を変更しない（手動管理のため）
- `getHeaderOffset()` は `Header.tsx` と `page.tsx` を必ず両方同期する
- `/content/blog/draft/` 以下をビルド対象にしない
- 下書き記事（`draft/`）を公開ディレクトリに移動しない
