# ポートフォリオ情報: 個人用ポータルサイト

> このドキュメントはHTMLポートフォリオ作成用の情報をまとめたものです。

---

## プロジェクト概要

### アプリケーション名
**My Personal Portal（個人用ポータルサイト）**

### 一言説明
日常的に使用する情報やツール（タスク管理、スケジュール、ブックマーク）を一箇所に集約し、AIによるルート提案機能も備えた個人用ダッシュボードアプリケーション

### 開発期間
個人開発（継続中）

### 開発形態
設計・開発・インフラ構築まで一人で担当

---

## 技術スタック

### フロントエンド
| 技術 | バージョン | 用途 |
|------|----------|------|
| **Next.js** | 15.5.7 | Reactフレームワーク（App Router採用） |
| **React** | 19.1.2 | UIライブラリ |
| **TypeScript** | 5.x | 型安全な開発 |
| **Tailwind CSS** | 4.x | ユーティリティファーストCSS |
| **NextAuth.js** | 4.24.13 | 認証ライブラリ |

### バックエンド
| 技術 | バージョン | 用途 |
|------|----------|------|
| **Django** | 5.2.7 | PythonWebフレームワーク |
| **Django REST Framework** | 3.16.1 | REST API構築 |
| **Django SimpleJWT** | 5.3.1 | JWT認証 |
| **Python** | 3.12 | サーバーサイド言語 |

### データベース
| 技術 | 用途 |
|------|------|
| **PostgreSQL 15** | リレーショナルDB |

### インフラ・DevOps
| 技術 | 用途 |
|------|------|
| **Docker / Docker Compose** | コンテナ化・開発環境構築 |
| **GitHub Actions** | CI/CD（自動テスト実行） |

### 外部API連携
| API | 用途 |
|-----|------|
| **Google OAuth 2.0** | ソーシャルログイン認証 |
| **Anthropic Claude API** | AIルート提案生成 |
| **Google Maps Directions API** | 経路情報取得 |

---

## 主要機能

### 1. Google認証によるログイン機能
- **OAuth 2.0**によるセキュアな認証
- NextAuth.js（フロント）とDjango SimpleJWT（バック）の連携
- アクセストークン/リフレッシュトークンによるセッション管理

### 2. タスク管理機能
- タスクの作成・編集・削除・完了管理
- **楽観的更新（Optimistic Update）**による高速なUI更新
- ユーザーごとのデータ分離

### 3. スケジュール管理機能
- 予定の作成・編集・削除
- カレンダーUIによる月次表示
- 日付フィルタリング・今日の予定表示

### 4. ブックマーク管理機能
- URLリンク集の管理
- 絵文字アイコン・カラータグによる分類
- サイドバーUIでの常時表示

### 5. AIルート提案機能（開発中）
- 目的地と到着時刻を入力するとAIが最適な移動ルートを提案
- **Google Maps API**で経路情報を取得
- **Claude API**で自然言語による提案を生成
- 提案の再生成・保存機能

### 6. ダークモード
- ライト/ダークモード切り替え
- localStorageによる設定永続化
- 初回ロード時のちらつき防止対応

---

## アーキテクチャ

### システム構成図（テキスト表現）

```
┌─────────────────────────────────────────────────────────────┐
│                       クライアント                           │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              Next.js 15 (App Router)                │   │
│  │  ┌─────────┐ ┌──────────┐ ┌──────────────────────┐ │   │
│  │  │ React   │ │TypeScript│ │    Tailwind CSS     │ │   │
│  │  │ 19.1    │ │   5.x    │ │        4.x          │ │   │
│  │  └─────────┘ └──────────┘ └──────────────────────┘ │   │
│  │  ┌───────────────────────────────────────────────┐ │   │
│  │  │        NextAuth.js (Google OAuth 2.0)         │ │   │
│  │  └───────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────┘   │
│                            │                                 │
│                            │ REST API                        │
│                            ▼                                 │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              Django 5.2 + DRF 3.16                  │   │
│  │  ┌──────────────────────────────────────────────┐  │   │
│  │  │           Django SimpleJWT (認証)             │  │   │
│  │  └──────────────────────────────────────────────┘  │   │
│  │  ┌────────┐ ┌──────────┐ ┌────────┐ ┌─────────┐   │   │
│  │  │ tasks  │ │schedules │ │bookmarks│ │ai_route │   │   │
│  │  └────────┘ └──────────┘ └────────┘ └─────────┘   │   │
│  └─────────────────────────────────────────────────────┘   │
│                            │                                 │
│                            ▼                                 │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                  PostgreSQL 15                       │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘

                    外部API連携
    ┌─────────────────────────────────────────┐
    │  Google OAuth 2.0  │  Claude API        │
    │  Google Maps API   │  (Anthropic)       │
    └─────────────────────────────────────────┘
```

### ディレクトリ構成

```
my-personal-portal/
├── src/                          # フロントエンド
│   ├── app/                      # Next.js App Router
│   │   ├── page.tsx              # メイン画面
│   │   ├── login/                # ログイン画面
│   │   └── api/auth/             # NextAuth API
│   ├── components/               # Reactコンポーネント
│   │   ├── Header.tsx
│   │   ├── Calendar.tsx
│   │   ├── TaskList.tsx
│   │   ├── ScheduleList.tsx
│   │   ├── BookmarkSidebar.tsx
│   │   └── modals/               # モーダル群
│   ├── hooks/                    # カスタムフック（API連携）
│   │   ├── useTasks.ts
│   │   ├── useSchedule.ts
│   │   ├── useBookmark.ts
│   │   └── useAIRouteProposal.ts
│   └── types/                    # TypeScript型定義
│
├── backend/                      # バックエンド
│   ├── backend_app/              # Django設定
│   ├── tasks/                    # タスク管理API
│   ├── schedules/                # スケジュール管理API
│   ├── bookmarks/                # ブックマーク管理API
│   ├── users/                    # ユーザー認証
│   └── ai_route/                 # AIルート提案API
│
├── docker-compose.yml            # Docker構成
├── Dockerfile                    # Djangoコンテナ定義
└── .github/workflows/            # GitHub Actions
```

---

## 技術的なこだわり・工夫点

### 1. フロントエンドとバックエンドの認証連携

NextAuth.jsとDjango SimpleJWTを連携させ、以下のフローを実現：

```
1. ユーザーがGoogleログイン
2. NextAuth.jsがGoogleからIDトークンを取得
3. IDトークンをDjango APIに送信
4. DjangoがGoogleトークンを検証し、JWTアクセストークンを発行
5. 以降のAPI通信はJWTで認証
```

**ポイント**:
- フロント・バック間のトークン交換を独自実装
- リフレッシュトークンによるセッション延長対応

### 2. 楽観的更新（Optimistic Update）パターン

タスク完了時など、API応答を待たずにUIを即座に更新：

```typescript
// 例: タスク完了の楽観的更新
const toggleComplete = async (taskId: string) => {
  // 1. UIを即座に更新
  setTasks(prev => prev.map(t =>
    t.id === taskId ? {...t, done: !t.done} : t
  ));

  // 2. バックグラウンドでAPI呼び出し
  try {
    await api.updateTask(taskId, { done: !task.done });
  } catch (error) {
    // 3. 失敗時はロールバック
    setTasks(prev => prev.map(t =>
      t.id === taskId ? {...t, done: task.done} : t
    ));
  }
};
```

### 3. AIルート提案のアーキテクチャ

外部API2つを組み合わせた処理フロー：

```
ユーザー入力（目的地・到着時刻）
       ↓
Google Maps Directions API
  → 経路情報（所要時間・乗り換え情報など）
       ↓
Claude API（claude-sonnet-4-5-20250929）
  → 経路情報をもとに自然言語で提案を生成
       ↓
Markdown形式で提案を表示
```

### 4. Docker Composeによる開発環境

3つのコンテナで構成される開発環境を一発起動：

```yaml
services:
  db:       # PostgreSQL
  web:      # Django API
  frontend: # Next.js
```

**メリット**:
- 環境構築の手間を削減
- チーム開発時の環境差異を防止

### 5. GitHub ActionsによるCI/CD

プッシュ時に自動でpytestを実行し、品質を担保

---

## API設計

### RESTful API エンドポイント一覧

| リソース | メソッド | エンドポイント | 説明 |
|---------|---------|---------------|------|
| タスク | GET | `/api/tasks/` | 一覧取得 |
| タスク | POST | `/api/tasks/` | 新規作成 |
| タスク | PUT | `/api/tasks/{id}/` | 更新 |
| タスク | DELETE | `/api/tasks/{id}/` | 削除 |
| スケジュール | GET | `/api/schedules/` | 一覧取得 |
| スケジュール | POST | `/api/schedules/` | 新規作成 |
| スケジュール | PUT | `/api/schedules/{id}/` | 更新 |
| スケジュール | DELETE | `/api/schedules/{id}/` | 削除 |
| ブックマーク | GET | `/api/bookmarks/` | 一覧取得 |
| ブックマーク | POST | `/api/bookmarks/` | 新規作成 |
| ブックマーク | PUT | `/api/bookmarks/{id}/` | 更新 |
| ブックマーク | DELETE | `/api/bookmarks/{id}/` | 削除 |
| AIルート | POST | `/api/ai-route/proposal/` | 提案生成 |
| AIルート | POST | `/api/ai-route/save/` | 提案保存 |

---

## データベース設計

### ERイメージ

```
User (Django標準)
  │
  ├── UserProfile (1:1)
  │     - google_user_id
  │     - picture_url
  │
  ├── Task (1:N)
  │     - title, detail, done
  │
  ├── Schedule (1:N)
  │     - title, memo, location, date
  │
  ├── Bookmark (1:N)
  │     - name, url, iconEmoji, color
  │
  └── AiRouteSuggestion (1:N)
        - schedule_id, content
```

---

## 今後の拡張予定

- [ ] 天気情報API連携
- [ ] 複数検索エンジン対応の検索バー
- [ ] 習慣トラッカー機能
- [ ] Vercel / AWS へのデプロイ

---

## ポートフォリオ用キーワード（SEO・アピール用）

- **フルスタック開発**: フロントエンド・バックエンド・インフラまで一貫して担当
- **モダン技術スタック**: Next.js 15, React 19, Django 5, TypeScript, Tailwind CSS
- **API設計・実装**: RESTful API, JWT認証, CORS対応
- **外部API連携**: Google OAuth 2.0, Google Maps API, Claude AI API
- **コンテナ技術**: Docker, Docker Compose
- **CI/CD**: GitHub Actions, pytest
- **認証・セキュリティ**: OAuth 2.0, JWT, HTTPS

---

## スクリーンショット用の画面リスト（HTMLポートフォリオで使用）

1. **ログイン画面** - Googleログインボタン
2. **メイン画面（ライトモード）** - タスク・カレンダー・スケジュール一覧
3. **メイン画面（ダークモード）** - ダークモードの見た目
4. **タスク追加モーダル** - タスク作成UI
5. **スケジュール追加モーダル** - スケジュール作成UI
6. **ブックマークサイドバー** - リンク集UI
7. **AIルート提案画面** - Claude APIによる提案表示

---

## 連絡先・リンク（必要に応じて記載）

- **GitHub**: （リポジトリURL）
- **デモサイト**: （デプロイ後のURL）
- **開発者**: koki.ishikawa

---

> このMarkdownファイルをもとに、HTMLポートフォリオを作成してください。
> 技術スタック、機能説明、アーキテクチャ図、こだわりポイントなどを
> 視覚的に分かりやすくデザインすることをお勧めします。
