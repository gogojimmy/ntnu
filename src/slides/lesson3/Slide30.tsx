import { motion } from "framer-motion";
import SlideLayout from "../../layouts/SlideLayout";
import { Title } from "../../components/Title";

const frameworks = [
	{
		name: "APE",
		components: [
			{ key: "Action (行動)", value: "為新推出的智慧手錶撰寫產品描述" },
			{ key: "Purpose (目的)", value: "在電商平台吸引潛在買家並提升產品銷量" },
			{
				key: "Execution (執行)",
				value:
					"生成三段不同風格的產品描述，分別突顯手錶的健康監測、便捷支付和時尚外觀功能",
			},
		],
	},
	{
		name: "ERA",
		components: [
			{
				key: "Expectation (期望)",
				value: "生成一篇能提高社群媒體互動的產品宣傳文案",
			},
			{ key: "Role (角色)", value: "擔任社群媒體行銷專家" },
			{
				key: "Action (行動)",
				value:
					"撰寫一篇突顯產品優勢並包含行動呼籲的簡短文案，附帶產品連結和互動問題",
			},
		],
	},
	{
		name: "RTF",
		components: [
			{ key: "Role (角色)", value: "資深行業分析師" },
			{ key: "Task (任務)", value: "解析新能源汽車市場趨勢" },
			{
				key: "Format (格式)",
				value: "包含數據視覺化圖表與SWOT分析矩陣的PPT大綱",
			},
		],
	},
	{
		name: "TAG",
		components: [
			{ key: "Task (任務)", value: "提升長尾關鍵字排名" },
			{ key: "Action (行動)", value: "優化TDK標籤" },
			{ key: "Goal (目標)", value: "3週內自然流量增長20%" },
		],
	},
	{
		name: "CIDI",
		components: [
			{
				key: "Context (上下文)",
				value: "你是一位金融分析師，需要對某科技公司的季度財報進行分析",
			},
			{
				key: "Instructions (指令)",
				value: "分析公司的收入增長、利潤率、現金流和主要業務部門表現",
			},
			{
				key: "Details (細節)",
				value: "報告需包含數據視覺化，長度限制在3頁內，重點關注同比變化",
			},
			{
				key: "Input (輸入)",
				value: "提供最近4個季度的財務報表數據、行業平均水平和主要競爭對手數據",
			},
		],
	},
	{
		name: "CARE",
		components: [
			{
				key: "Context (上下文)",
				value: "一家新開的咖啡店需要提升社群媒體知名度",
			},
			{
				key: "Action (行動)",
				value:
					"策劃為期一個月的社群媒體行銷活動，包括每日圖文更新、互動活動和影響者合作",
			},
			{
				key: "Result (結果)",
				value: "粉絲數增長50%，每日互動率提升30%，帶來線下客流增長20%",
			},
			{
				key: "Example (範例)",
				value:
					"參考星巴克的「#PSL季節」社群活動，通過話題引導和用戶原創內容帶動參與度",
			},
		],
	},
	{
		name: "RASE",
		components: [
			{ key: "Role (角色)", value: "擔任一位經驗豐富的旅行顧問" },
			{
				key: "Action (行動)",
				value: "為一位計劃前往日本旅行兩週的客戶制定行程計劃",
			},
			{
				key: "Result (結果)",
				value:
					"生成一份包含每日行程、交通方式、住宿建議和餐飲推薦的詳細旅行計劃",
			},
			{ key: "Example (範例)", value: "客戶偏好文化體驗和自然風光，預算中等" },
		],
	},
	{
		name: "COAST",
		components: [
			{
				key: "Context (上下文)",
				value: "一家電子商務公司過去一年客戶留存率持續下降",
			},
			{ key: "Objective (目標)", value: "在下個季度將客戶留存率提升10%" },
			{
				key: "Actions (行動)",
				value: "實施客戶忠誠度計劃，改進客戶服務流程，進行客戶溝通個人化",
			},
			{
				key: "Scenario (場景)",
				value:
					"客戶反饋表明服務響應速度慢，缺乏個人化關懷，且現有會員體系缺乏吸引力",
			},
			{
				key: "Task (任務)",
				value:
					"分析客戶流失原因，設計新的客戶忠誠度計劃，優化客服培訓內容，並制定個人化溝通方案",
			},
		],
	},
];

export function Lesson3Slide30() {
	// Speaker Notes:
	// 雖然直接和 AI 聊天很方便，但對於比較複雜、需要精確輸出的任務，使用一些「Prompt 框架」會很有幫助。
	// 這些框架不是死的規定，而是輔助我們思考的工具，幫助我們結構化地組織想法，確保涵蓋所有必要的資訊。
	// 這裡列出了一些常見的框架，像是 APE、ERA、RTF 等等，每個框架都有不同的側重點，適用於不同的情境。
	// 例如 APE 強調行動、目的、執行；CIDI 強調上下文、指令、細節、輸入；COAST 則考慮了目標、場景和任務。
	// 了解這些框架可以降低我們撰寫高品質 Prompt 的難度，更容易獲得滿意的結果。
	// 不用死記，重點是理解它們背後的思考邏輯：如何把任務拆解清楚，提供足夠的資訊給 AI。

	return (
		<SlideLayout>
			<motion.div
				className="flex h-full w-full flex-col items-center justify-start overflow-y-auto p-8 text-white"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Title>Prompt 框架</Title>
				<motion.p
					className="mb-6 max-w-4xl text-center text-lg text-gray-300 md:text-xl"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.5 }}
				>
					一般任務來說可以直接與 AI 對話聊天即可，
					<br className="hidden md:block" />
					但是複雜的任務輸出建議使用框架，主要是輔助思考，
					<br className="hidden md:block" />
					降低寫作難度來獲得更好的輸出。
				</motion.p>

				<motion.div
					className="w-full max-w-6xl space-y-4 text-sm"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.5 }}
				>
					{frameworks.map((framework, index) => (
						<motion.div
							key={framework.name}
							className="grid grid-cols-1 gap-2 rounded-lg border border-gray-700 bg-gray-800/50 p-3 md:grid-cols-3 md:gap-4"
							initial={{ opacity: 0, y: 15 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 + index * 0.1 }}
						>
							<div className="font-bold text-teal-300 md:text-base">
								{framework.name}
							</div>
							<div className="md:col-span-2">
								<dl>
									{framework.components.map((comp) => (
										<div key={comp.key} className="mb-1 md:flex">
											<dt className="w-full flex-shrink-0 font-semibold text-gray-400 md:w-32">
												{comp.key}:
											</dt>
											<dd className="text-gray-200">{comp.value}</dd>
										</div>
									))}
								</dl>
							</div>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</SlideLayout>
	);
}
