# JBro Dev - 個人網站

一個使用 Next.js 14 和 TypeScript 建構的現代化個人網站，展示程式設計、街舞表演和桌遊愛好。

## 🌟 專案特色

- ✨ **現代化設計**: 使用 Tailwind CSS 打造的響應式暗色主題
- 🎭 **動畫效果**: 整合 Framer Motion 提供流暢的頁面動畫
- 📱 **響應式設計**: 完美適配手機、平板和桌面設備
- 🎨 **組件化架構**: 高度可重用的 UI 組件系統
- 🚀 **效能優化**: Next.js 14 App Router 和圖片優化
- 📊 **TypeScript**: 完整的型別支援確保程式碼品質

## 🏗️ 技術架構

### 前端框架

- **Next.js 14** - React 全端框架
- **TypeScript** - 型別安全的 JavaScript
- **Tailwind CSS** - 實用優先的 CSS 框架

### UI 和動畫

- **Framer Motion** - 動畫和手勢庫
- **React Icons** - 豐富的圖示庫
- **Swiper** - 觸控滑動組件
- **自訂 UI 組件** - 可重用的設計系統

### 工具和配置

- **ESLint** - 程式碼品質檢查
- **PostCSS** - CSS 後處理器
- **Autoprefixer** - 自動添加 CSS 前綴

## 📁 專案結構

```
wp1141/hw1/
├── app/                    # Next.js App Router
│   ├── about/             # 關於我頁面 (備用)
│   ├── contact/           # 聯絡方式頁面 (備用)
│   ├── interest/          # 興趣愛好頁面
│   ├── globals.css        # 全局樣式
│   ├── layout.tsx         # 根布局組件
│   └── page.tsx           # 首頁
├── components/            # React 組件
│   ├── ui/               # UI 組件庫
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── H1.tsx - H4.tsx
│   │   ├── ImageCarousel.tsx
│   │   └── ...
│   ├── Header.tsx        # 網站標頭
│   ├── Footer.tsx        # 網站頁尾
│   ├── Sidebar.tsx       # 手機側邊選單
│   ├── HomeLayout.tsx    # 首頁布局
│   ├── StandardLayout.tsx # 標準頁面布局
│   └── ...
├── constant/             # 常數配置
│   ├── externalLinks.ts  # 外部連結
│   └── navigationItem.tsx # 導航項目
├── public/              # 靜態資源
│   └── images/          # 圖片資源
└── ...配置檔案
```

## 🎨 頁面設計

### 🏠 首頁 (HomeLayout)

- **全螢幕背景**: 背景圖片占滿整個視口
- **重疊式 Header**: 透明背景的導航列
- **沉浸式體驗**: 無 Footer，專注於視覺衝擊

### 📄 內容頁面 (StandardLayout)

- **標準布局**: 清晰的 Header、內容區、Footer 分區
- **寬度限制**: 內容區最大寬度 `max-w-5xl` 提供最佳閱讀體驗
- **統一設計**: 一致的視覺風格和導航體驗
- **目前啟用**: Interest 頁面（About 和 Contact 頁面已備用但未在導航中顯示）

## 🎭 主要功能

### 🎪 街舞表演展示

- **NTUPDC'34**: 台大熱舞社教學作品
- **Bibo's Crew**: 個人舞團表演
- **各系之夜**: 系所晚會編舞作品
- **比賽紀錄**: College High、台大盃等比賽影片

### 🎲 桌遊團 Mega Crew

- **互動式輪播**: 展示桌遊團活動照片
- **Modal 詳情**: 點擊查看詳細的團聚規則說明
- **阿瓦隆專題**: 詳細介紹不同人數局的玩法

### 📄 履歷展示

- **線上履歷**: Google Drive 連結，可直接查看或下載
- **外部開啟**: 在新分頁開啟，不影響網站瀏覽體驗

## 🚀 開始使用

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000) 查看結果

### 建構專案

```bash
npm run build
```

### 啟動生產版本

```bash
npm start
```

### 程式碼檢查

```bash
npm run lint
```

## 📝 自訂配置

### 更新個人資訊

編輯 `constant/externalLinks.ts`:

```typescript
export const EMAIL_ADDRESS = "your-email@example.com";
export const PHONE_NUMBER = "+886-xxx-xxx-xxx";
export const GITHUB_URL = "https://github.com/your-username";
// ...其他連結
```

### 修改導航項目

編輯 `constant/navigationItem.tsx`:

```typescript
export const navigationItems = [
  { name: "Home", href: "/", isExternal: false, icon: <FaHome /> },
  { name: "Interest", href: "/interest", isExternal: false, icon: <FaHeart /> },
  { name: "Resume", href: RESUME_URL, isExternal: true, icon: <FaFileAlt /> },
  // 註解掉的項目可以取消註解來啟用
];
```

### 添加圖片資源

將圖片放置到 `public/images/` 對應路徑，參考 `public/images/README.md` 的說明。

## 🎨 設計系統

### 顏色主題

- **主色調**: 藍色系 (`blue-400`, `blue-600`)
- **背景**: 灰色漸層 (`gray-900` to `gray-800`)
- **文字**: 白色和灰色系
- **強調**: 漸層色彩 (`blue` → `purple` → `pink`)

### 響應式斷點

- **手機**: `< 768px`
- **平板**: `768px - 1024px`
- **桌面**: `> 1024px`

### 字體

- **主要字體**: Source Code Pro (等寬字體)
- **後備字體**: Monaco, Consolas, monospace

## 📱 響應式特性

- **手機**: 側邊選單導航、垂直堆疊布局
- **平板**: 適中的間距和字體大小
- **桌面**: 完整功能展示、水平布局

## 🔧 開發筆記

### 布局差異

- **HomeLayout**: 背景圖全螢幕，Header 重疊，無 Footer
- **StandardLayout**: 標準三段式布局，包含 Footer

### 組件設計原則

- **可重用性**: 所有 UI 組件支援 `className` 客製化
- **型別安全**: 完整的 TypeScript 介面定義
- **響應式**: 內建 Tailwind CSS 響應式類別

### 效能優化

- **圖片優化**: Next.js Image 組件自動優化
- **程式碼分割**: 頁面層級的自動分割
- **靜態生成**: 支援 `output: 'export'` 靜態部署

## 📄 授權

此專案僅供個人展示使用。

## 👤 作者

**JBro** - 台灣大學資訊工程學系 & 經濟學系雙主修

- 📧 Email: 1xingcys@gmail.com
- 🎭 NTUPDC'34 Locking 教學
- 🎲 桌遊團 Mega Crew 團長

---

_Made with ❤️ using Next.js & Tailwind CSS_
