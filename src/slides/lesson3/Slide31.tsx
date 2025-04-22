import { motion } from "framer-motion";
import SlideLayout from "../../layouts/SlideLayout";
import { Title } from "../../components/Title";

const novicePrompt = "幫我做個好看的中文網頁，用 Tailwind CSS。";

// Plain text prompt within template literal
const expertPrompt = `
你是一位專業的網頁設計師和前端開發專家，對現代 Web 設計趨勢和最佳實踐有深入理解，尤其擅長創造具有極高審美價值的使用者介面。你的設計作品不僅功能完備，而且在視覺上令人驚嘆，能夠給使用者帶來強烈的「Aha-moment」體驗。

請重構目前的專案，設計一個**美觀、現代、易讀**的「中文」視覺化網頁。請充分發揮你的專業判斷，選擇最能體現內容精髓的設計風格、配色方案、排版和佈局。

**設計目標：**

*   **視覺吸引力：** 創造一個在視覺上令人印象深刻的網頁，能夠立即吸引使用者的注意力，並激發他們的閱讀興趣。
*   **可讀性：** 確保內容清晰易讀，無論在桌面版還是行動版，都能提供舒適的閱讀體驗。
*   **資訊傳達：** 以一種既美觀又高效的方式呈現資訊，突顯關鍵內容，引導使用者理解核心思想。
*   **情感共鳴:** 透過設計激發與內容主題相關的情感（例如，對於勵志內容，激發積極向上的情緒；對於嚴肅內容，營造莊重、專業的氛圍）。

**設計指導（請靈活運用，而非嚴格遵循）：**

*   **整體風格：** 可以考慮雜誌風格、出版物風格，或者其他你認為合適的現代 Web 設計風格。目標是創造一個既有資訊量，又有視覺吸引力的頁面，就像一本精心設計的數位雜誌或一篇深度報導。
*   **Hero 模組（可選，但強烈建議）：** 如果你認為合適，可以設計一個引人注目的 Hero 模組。它可以包含大標題、副標題、一段引人入勝的引言，以及一張高品質的背景圖片或插圖。
*   **排版：**
    *   精心選擇字體組合（襯線和無襯線），以提升中文閱讀體驗。
    *   利用不同的字號、字重、顏色和樣式，建立清晰的視覺層次結構。
    *   可以考慮使用一些精緻的排版細節（如首字下沉、懸掛標點）來提升整體質感。
    *   Font-Awesome 中有很多圖示，選合適的點綴增加趣味性。
*   **配色方案：**
    *   選擇一套既和諧又具有視覺衝擊力的配色方案。
    *   考慮使用高對比度的顏色組合來突顯重要元素。
    *   可以探索漸層、陰影等效果來增加視覺深度。
*   **佈局：**
    *   使用基於網格的佈局系統來組織頁面元素。
    *   充分利用負空間（留白），創造視覺平衡和呼吸感。
    *   可以考慮使用卡片、分隔線、圖示等視覺元素來分隔和組織內容。
*   **調性：** 整體風格精緻，營造一種高級感。
*   **資料視覺化：**
    *   設計一個或多個資料視覺化元素，展示關鍵概念和它們之間的關係。
    *   可以考慮使用心智圖、概念關係圖、時間軸或主題分群展示等方式。
    *   確保視覺化設計既美觀又有洞察性。
    *   使用 Mermaid.js 來實作互動式圖表，允許使用者探索不同概念之間的關聯。

**技術規範：**

*   使用 HTML5、Font Awesome、Tailwind CSS 和必要的 JavaScript。
    *   Font Awesome: \`https://cdn.staticfile.org/font-awesome/6.4.0/css/all.min.css\`
    *   Tailwind CSS: \`https://cdn.staticfile.org/tailwindcss/2.2.19/tailwind.min.css\`
    *   非中文字體: \`https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap\`
    *   \`font-family: Tahoma,Arial,Roboto,"Droid Sans","Helvetica Neue","Droid Sans Fallback","Heiti SC","Hiragino Sans GB",Simsun,sans-self;\`
    *   Mermaid: \`https://cdn.jsdelivr.net/npm/mermaid@latest/dist/mermaid.min.js\`
*   實作完整的深色/淺色模式切換功能，預設跟隨系統設定，並允許使用者手動切換。
*   程式碼結構清晰、語意化，包含適當的註解。
*   實作完整的響應式，必須在所有裝置上（手機、平板、桌面）完美展示。

**額外加分項：**

*   **微交互：** 加入細微而有意義的微交互效果來提升使用者體驗（例如，按鈕懸停效果、卡片懸停效果、頁面滾動效果）。
*   **補充資訊：** 可以主動搜尋並補充其他重要資訊或模組（例如，關鍵概念的解釋、相關人物的介紹等），以增強使用者對內容的理解。
*   **延伸閱讀:** 分析文件後，提供一份「進一步閱讀」的簡短清單，推薦 5 本最佳相關書籍或論文，並提供簡要說明或連結。

請你像一位真正的設計師一樣思考，充分發揮你的專業技能和創造力，打造一個令人驚豔的網頁！
`;

export function Lesson3Slide31() {
	// Speaker Notes:
	// 來看一個實際的前端網頁生成例子。
	// 左邊是一個很常見的新手 prompt，非常簡短：「幫我做個好看的中文網頁，用 Tailwind CSS。」
	// 這樣的 prompt 雖然簡單，但缺乏細節，AI 很難知道你具體想要什麼，結果可能很隨機。
	// 右邊則是一個專家級別的 prompt。它首先定義了 AI 的角色（專業網頁設計師），然後明確了設計目標（美觀、現代、易讀），
	// 接著提供了詳細的設計指導（風格、Hero 模組、排版、配色、佈局、調性、資料視覺化），
	// 還規定了技術規範（HTML5、Tailwind、深色模式、響應式等），甚至提出了額外加分項（微交互、補充資訊、延伸閱讀）。
	// 這個詳細的 prompt 給了 AI 非常清晰的指引，雖然長，但更有可能得到高品質、符合預期的結果。
	// 這就是 Prompt Engineering 的威力：透過精心設計的輸入，引導 AI 發揮最大的潛力。

	return (
		<SlideLayout>
			<motion.div
				className="flex h-full w-full flex-col items-stretch justify-start overflow-hidden p-4 text-white md:p-8"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Title className="mb-4 flex-shrink-0 text-center">
					針對前端網頁生成的 Prompt
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
								href="https://v0.dev/chat/cMlhw73cgAw"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-400 hover:text-blue-300 hover:underline"
							>
								https://v0.dev/chat/cMlhw73cgAw
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
								href="https://v0.dev/chat/x6r9y43rcLk"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-400 hover:text-blue-300 hover:underline"
							>
								https://v0.dev/chat/x6r9y43rcLk
							</a>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</SlideLayout>
	);
}
