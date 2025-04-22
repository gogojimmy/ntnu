import { motion } from "framer-motion";
import SlideLayout from "../../layouts/SlideLayout";
import { Title } from "../../components/Title";

const novicePrompt = "幫我做一個 Instagram 的網頁，用 Tailwind。";

// Plain text prompt within template literal
const expertPrompt = `
## 🧠 AI 人設
你是一位世界級的資深 UX/UI 設計師與前端架構師，擅長現代網頁設計原則、使用者體驗最佳實踐、轉換率優化與前端技術。你對美感敏銳，懂得設計對用戶心理的影響，並能將現有產品改造成卓越、現代的數位體驗。

---

## 🎯 任務說明
請你打造一個 **Instagram 仿製的網頁版前端 UI**，具備以下特性：

- 現代化視覺風格
- 出色的使用體驗與可讀性
- 響應式設計與高效能架構
- 模組化、可擴展的 UI 元件結構

僅需前端（靜態頁面即可），聚焦在 **HTML + Tailwind CSS + JavaScript**。所有內容以 **繁體中文** 呈現，模擬真實社群平台使用情境。

---

## 🎨 設計目標

### ✨ 現代美學
- 使用符合潮流的極簡社群風格（Minimal Social UI）
- 採用大面積留白、品牌色點綴、明確分隔

### 👓 提升可用性與可讀性
- 遵循 Mobile-first 原則
- 資訊層級清楚、內容排版具可掃描性

### 🧱 資訊架構優化
- 模仿 IG 的 Feed、Profile、搜尋與發文邏輯
- 清楚分區與模組劃分（例如：動態牆卡片、限時動態列）

### ❤️ 傳達情感
- 呈現輕鬆、有趣、年輕的品牌氛圍
- 鼓勵探索與互動的 UI 設計

### ⚡ 效能與最佳實踐
- 精簡設計與資源載入（避免大圖、過多 JS）
- 使用 Tailwind 工具類別，保持結構清晰

---

## 🧱 設計與開發規範

| 項目 | 規範 |
|------|------|
| CSS 框架 | 使用 [Tailwind CSS](https://cdn.tailwindcss.com) 最新版本 |
| 字體建議 | [Inter](https://fonts.google.com/specimen/Inter)、Poppins 或 Noto Sans TC |
| 字體引入方式 | Google Fonts + Tailwind 設定 |
| Icon 套件 | 使用 [Font Awesome 6.4.0](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css) |
| 主色建議 | 白底＋灰字＋Instagram 藍 (#3897f0) 作為互動主色 |
| 響應式設計 | 完整支援手機、平板與桌面裝置 |
| 暗／亮模式 | 使用 \`prefers-color-scheme\` 為預設，並提供切換按鈕 |
| 微互動建議 | Hover、按鈕回饋、焦點邊框、動畫進場等 |
| JS 應用 | 僅限必要互動：暗／亮主題切換、下拉選單、Modal 彈窗等 |
| HTML 結構 | 使用語意化標籤，結構清楚，命名易懂 |

---

## 📄 建議 UI 模組（優先製作順序）
1. 登入／註冊頁
2. 動態牆（含貼文卡片、限時動態列）
3. 搜尋／探索頁（Grid 圖牆）
4. 個人頁（頭像、貼文分類、追蹤按鈕）
5. 發文表單模擬
6. 導覽列（底部手機版、側邊桌機版）

---

## 🌗 暗／亮模式設計規範

- 預設遵循系統主題 (\`media query prefers-color-scheme\`)
- 提供切換按鈕，並使用 localStorage 記住偏好
- 使用 \`dark:\` 前綴切換 Tailwind 顏色系統

---

## 📦 最終交付內容
- 使用 Tailwind CSS 撰寫的完整 HTML 結構
- 必要的 JavaScript 功能（含主題切換）
- 註解清楚說明版型設計與交互行為
- 可自由擴充的元件設計
- **若發現資訊設計上有改善建議，請加註「建議改善：」** 說明如何讓資訊呈現更佳（例如探索頁可以加上篩選器）

---

## 📝 備註
若你希望我直接開始產出頁面範本（例如登入頁、動態牆頁），請指定你要我先做哪一頁，我會用符合上述規範的 HTML + Tailwind 實作給你。
`;

export function Lesson3Slide32() {
	return (
		<SlideLayout slide={32}>
			<motion.div
				className="flex h-full w-full flex-col items-stretch justify-start overflow-hidden p-4 text-white md:p-8"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Title className="mb-4 flex-shrink-0 text-center">
					Instagram Clone Prompt
				</Title>

				<div className="grid flex-grow grid-cols-1 gap-4 overflow-hidden md:grid-cols-2 md:gap-6">
					{/* Novice Prompt */}
					<motion.div
						className="flex flex-col overflow-hidden rounded-lg border border-gray-700 bg-gray-800/50 p-4"
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2, duration: 0.5 }}
					>
						<h3 className="mb-3 flex-shrink-0 text-center text-xl font-semibold text-red-400 md:text-2xl">
							新手 Prompt
						</h3>
						<div className="flex-grow overflow-y-auto rounded bg-black/20 p-3 text-base leading-relaxed">
							<pre className="whitespace-pre-wrap font-sans">
								{novicePrompt}
							</pre>
						</div>
						<div className="mt-2 flex-shrink-0 text-center text-xs">
							<a
								href="https://v0.dev/chat/aTedYfgpZSI"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-400 hover:text-blue-300 hover:underline"
							>
								https://v0.dev/chat/aTedYfgpZSI
							</a>
						</div>
					</motion.div>

					{/* Expert Prompt */}
					<motion.div
						className="flex flex-col overflow-hidden rounded-lg border border-gray-700 bg-gray-800/50 p-4"
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4, duration: 0.5 }}
					>
						<h3 className="mb-3 flex-shrink-0 text-center text-xl font-semibold text-green-400 md:text-2xl">
							專家 Prompt
						</h3>
						<div className="flex-grow overflow-y-auto rounded bg-black/20 p-3 text-xs leading-relaxed md:text-sm">
							<pre className="whitespace-pre-wrap font-sans">
								{expertPrompt}
							</pre>
						</div>
						<div className="mt-2 flex-shrink-0 text-center text-xs">
							<a
								href="https://v0.dev/chat/X8sEzo2kAIu"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-400 hover:text-blue-300 hover:underline"
							>
								https://v0.dev/chat/X8sEzo2kAIu
							</a>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</SlideLayout>
	);
}
