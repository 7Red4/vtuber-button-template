# VTuber 語音按鈕模板 | VTuber Voice Button Template

<p align="center">
  <img src="https://i.imgur.com/vOAsBZ3.png" alt="玖玖巴按鈕" width="200">
</p>

<p align="center">
  <a href="https://998-button.konnokai.me">線上預覽 | Live Demo</a>
</p>

本專案以「模板（Template）」形式提供，使用者可依需求自由修改與擴充。

This project is provided as a "Template", allowing users to freely modify and extend it according to their needs.

---

## 中文說明

### 快速開始

1. 點擊 GitHub 上的 **Use this template** 或 Fork 本專案
2. 依需求修改內容與樣式
3. 部署至你偏好的平台（Vercel、Netlify、GitHub Pages 等）

### 使用前聯絡（非強制）

若情況允許，建議在使用本模板前聯絡 **孤之界**，  
簡要告知將使用本模板，以及預計製作之網站對象。

此舉僅作為作者了解使用情況之參考，  
**不構成授權條件，亦不影響 Apache License 2.0 所賦予之權利。**

### 簡介

這是一個基於 **Nuxt 3** 和 **Vuetify** 製作的 VTuber 語音按鈕網站模板。用戶可以點擊按鈕播放各種預錄的語音片段，支援分類瀏覽、搜尋、分享等功能。

本專案目前作為「玖玖巴按鈕」使用，但可以輕鬆修改為其他 VTuber 或內容創作者的語音按鈕網站。

### 功能特色

- **語音播放系統**：點擊按鈕播放音效，支援播放進度顯示、暫停、循環播放、隨機播放
- **分類管理**：語音按分組整理，使用展開式面板呈現
- **即時搜尋**：快速搜尋語音內容
- **新音效標記**：7 天內新增的音效會自動標記為「新」
- **分享功能**：生成音效分享連結，可複製到剪貼簿
- **響應式設計**：適配桌面與行動裝置
- **底部控制欄**：顯示目前播放的音效，提供快速控制

### 技術棧

| 類別 | 技術 |
|------|------|
| 框架 | [Nuxt 3](https://nuxt.com/) + [Vue 3](https://vuejs.org/) |
| UI 組件庫 | [Vuetify 3](https://vuetifyjs.com/) |
| CSS 框架 | [Tailwind CSS](https://tailwindcss.com/) |
| 套件管理 | [Bun](https://bun.sh/) |
| 語言 | TypeScript |
| 其他 | VueUse、Day.js、Twemoji |

### 目錄結構

```
├── assets/
│   ├── css/              # 樣式檔案
│   ├── locales/          # 網站設定 (site.json)
│   ├── links.ts          # 外部連結設定
│   └── voices.json       # 語音資料設定
├── pages/
│   ├── index.vue         # 首頁（主要按鈕頁面）
│   └── about.vue         # 關於頁面
├── public/
│   └── voices/           # 音效檔案存放目錄
├── app.vue               # 根組件
├── nuxt.config.ts        # Nuxt 設定
├── theme.json            # 主題顏色設定
└── vuetify.config.ts     # Vuetify 設定
```

### 安裝與使用

#### 環境需求

- [Node.js](https://nodejs.org/) 18+
- [Bun](https://bun.sh/)（推薦）或其他套件管理工具

#### 安裝依賴

```bash
bun install
```

#### 開發模式

啟動開發伺服器於 `http://localhost:3333`：

```bash
bun run dev
```

#### 生產環境建置

```bash
bun run build
```

#### 預覽生產版本

```bash
bun run preview
```

#### 生成靜態網站

```bash
bun run generate
```

### 自訂設定

#### 修改網站資訊

編輯 `assets/locales/site.json`：

```json
{
  "title": "【你的按鈕網站名稱】",
  "description": "網站描述",
  "url": "https://your-domain.com",
  "theme_color": "#f18465"
}
```

#### 新增語音

編輯 `assets/voices.json`，並將音效檔案放入 `public/voices/` 對應的資料夾：

```json
{
  "groups": [
    {
      "name": "group_name",
      "description": { "zh": "分組名稱" },
      "sounds": [
        {
          "name": "sound_id",
          "path": "group_name/filename.mp3",
          "description": { "zh": "語音描述" },
          "updated_at": 1700000000
        }
      ]
    }
  ]
}
```

#### 修改主題顏色

編輯 `theme.json` 來自訂網站配色。

### 作者與歸屬

本專案由以下成員共同設計、開發並維護：

- [孤之界](https://konnokai.me)
- [紅柿](https://twitter.com/7Red4)
- [九条夏目](https://github.com/kujyonatsume)

相關歸屬資訊請參閱 [`NOTICE`](./NOTICE)。

### 授權說明

本專案採用 **Apache License 2.0** 授權。

你可以：
- 使用本專案（包含商業用途）
- 修改原始碼
- 再散布原始碼或修改後版本

但你**必須遵守以下事項**：
- **必須保留原作者署名**
- **必須保留 `LICENSE` 與 `NOTICE` 檔案**
- 若有修改，需清楚標示修改內容
- 不得暗示原作者為你的修改版本背書

詳細條款請參閱 [`LICENSE`](./LICENSE)。

### 第三方套件

本專案可能包含第三方開源套件，  
各套件均依其各自之授權條款使用。  
相關授權資訊請參閱相依套件之官方文件或原始碼中的授權聲明。

### 免責聲明

本專案為愛好者作品，與相關 VTuber 本人沒有直接關聯。  
本專案以「現狀」提供，不附帶任何明示或默示之保證。  
使用本專案所產生的任何風險，須由使用者自行承擔。

---

## English

### Quick Start

1. Click **Use this template** on GitHub or Fork this project
2. Modify the content and styles according to your needs
3. Deploy to your preferred platform (Vercel, Netlify, GitHub Pages, etc.)

### Pre-Use Contact (Optional)

If possible, please consider contacting **孤之界 (Kon no Kai)** before using this template,  
briefly informing them of your intention to use it and the target subject for your website.

This is solely for the author's reference to understand usage,  
**and does not constitute a licensing requirement, nor does it affect the rights granted under the Apache License 2.0.**

### Introduction

This is a VTuber voice button website template built with **Nuxt 3** and **Vuetify**. Users can click buttons to play pre-recorded voice clips, with support for categorized browsing, searching, and sharing.

This project is currently used as "998 Button" (玖玖巴按鈕), but can be easily customized for other VTubers or content creators.

### Features

- **Audio Playback System**: Click to play sounds with progress display, pause, loop, and random play
- **Category Management**: Voice clips organized in collapsible panels by groups
- **Real-time Search**: Quickly search through voice content
- **New Sound Indicator**: Sounds added within 7 days are automatically marked as "New"
- **Share Function**: Generate shareable links for specific sounds
- **Responsive Design**: Works on desktop and mobile devices
- **Bottom Control Bar**: Shows currently playing sound with quick controls

### Tech Stack

| Category | Technology |
|----------|------------|
| Framework | [Nuxt 3](https://nuxt.com/) + [Vue 3](https://vuejs.org/) |
| UI Library | [Vuetify 3](https://vuetifyjs.com/) |
| CSS Framework | [Tailwind CSS](https://tailwindcss.com/) |
| Package Manager | [Bun](https://bun.sh/) |
| Language | TypeScript |
| Others | VueUse, Day.js, Twemoji |

### Project Structure

```
├── assets/
│   ├── css/              # Stylesheets
│   ├── locales/          # Site configuration (site.json)
│   ├── links.ts          # External links configuration
│   └── voices.json       # Voice data configuration
├── pages/
│   ├── index.vue         # Home page (main button page)
│   └── about.vue         # About page
├── public/
│   └── voices/           # Audio files directory
├── app.vue               # Root component
├── nuxt.config.ts        # Nuxt configuration
├── theme.json            # Theme color configuration
└── vuetify.config.ts     # Vuetify configuration
```

### Installation & Usage

#### Requirements

- [Node.js](https://nodejs.org/) 18+
- [Bun](https://bun.sh/) (recommended) or other package managers

#### Install Dependencies

```bash
bun install
```

#### Development Mode

Start the development server at `http://localhost:3333`:

```bash
bun run dev
```

#### Production Build

```bash
bun run build
```

#### Preview Production Build

```bash
bun run preview
```

#### Generate Static Site

```bash
bun run generate
```

### Customization

#### Modify Site Information

Edit `assets/locales/site.json`:

```json
{
  "title": "【Your Button Site Name】",
  "description": "Site description",
  "url": "https://your-domain.com",
  "theme_color": "#f18465"
}
```

#### Add Voice Clips

Edit `assets/voices.json` and place audio files in the corresponding folder under `public/voices/`:

```json
{
  "groups": [
    {
      "name": "group_name",
      "description": { "zh": "Group Name" },
      "sounds": [
        {
          "name": "sound_id",
          "path": "group_name/filename.mp3",
          "description": { "zh": "Voice description" },
          "updated_at": 1700000000
        }
      ]
    }
  ]
}
```

#### Customize Theme Colors

Edit `theme.json` to customize the site color scheme.

### Credits

This project was designed, developed, and maintained by the following members:

- [孤之界 (Kon no Kai)](https://konnokai.me)
- [紅柿 (7Red4)](https://twitter.com/7Red4)
- [九条夏目 (Kujyo Natsume)](https://github.com/kujyonatsume)

For attribution information, please see [`NOTICE`](./NOTICE).

### License

This project is licensed under the **Apache License 2.0**.

You may:
- Use this project (including for commercial purposes)
- Modify the source code
- Redistribute the original or modified versions

However, you **must comply with the following**:
- **You must retain the original author attribution**
- **You must retain the `LICENSE` and `NOTICE` files**
- If modified, you must clearly indicate the changes
- You may not imply that the original authors endorse your modified version

For full terms, see [`LICENSE`](./LICENSE).

### Third-Party Packages

This project may include third-party open-source packages,  
each used under their respective licenses.  
For licensing information, please refer to the official documentation or license declarations in the source code of each dependency.

### Disclaimer

This project is a fan-made work and is not directly affiliated with the VTuber.  
This project is provided "as is", without any express or implied warranties.  
Any risks arising from the use of this project are borne by the user.

---

For more information about Nuxt deployment, check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment).
