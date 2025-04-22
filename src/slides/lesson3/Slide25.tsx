import { motion } from "framer-motion";
import SlideLayout from "../../layouts/SlideLayout";
import { Title } from "../../components/Title";

export function Lesson3Slide25() {
	// Speaker Notes:
	// 我們可以將今天這些大型語言模型想像成一個在線的新人助理。
	// 它們往往具備一般人的基本知識和理解能力，但請特別強調「新人」這個詞，
	// 因為它們是第一天認識你，對你的一切都一無所知。
	// 像是你的出生年月日、身分證字號等等，這些都是它們不知道的。
	// 因此，當你有一些要求它們做不到，也許只是因為它們對你的了解太少了，
	// 所以它們的反應才會不如你的預期。

	const points = [
		'將大型語言模型想像成一個<span class="text-yellow-300">在線的新人助理</span>。',
		'具備<span class="text-green-300">一般人的基本知識</span>和理解能力。',
		'強調「<span class="text-red-400 font-bold">新人</span>」：對你的個人資訊<span class="text-red-400">一無所知</span>。',
		'初次認識你，可能因<span class="text-blue-300">了解太少</span>而無法滿足你的要求。',
	];

	return (
		<SlideLayout>
			<motion.div
				className="flex h-full w-full flex-col items-center justify-center p-8 text-white"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Title>大型語言模型如同線上新人助理</Title>

				<motion.ul
					className="mt-12 w-full max-w-4xl list-disc space-y-6 text-left text-2xl md:text-3xl pl-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2, staggerChildren: 0.2 }}
				>
					{points.map((point, index) => (
						<motion.li
							key={index}
							className="leading-relaxed"
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4 }}
							// Use dangerouslySetInnerHTML to render the spans for highlighting
							dangerouslySetInnerHTML={{ __html: point }}
						></motion.li>
					))}
				</motion.ul>
			</motion.div>
		</SlideLayout>
	);
}
