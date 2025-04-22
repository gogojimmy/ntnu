import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";

export default function Slide3() {
  return (
    <SlideLayout currentSlide="03" courseName="AI概論與工具介紹">
      <div className="relative h-full flex flex-col justify-center">
        {/* Background Elements */}
        <div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-tech-grid-bright" />

        {/* Content */}
        <div className="relative px-16 py-8">
          <div className="space-y-8">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold text-white mb-2">
                什麼是生成式人工智慧 (Generative AI)?
              </h1>
              <h2 className="text-2xl text-tech-highlight/80">
                明確的定義與實例
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 gap-8">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="bg-[#1a1a1a] rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-tech-highlight mb-4">
                    生成式AI的定義
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg mb-4">
                    生成式AI的定義就比較明確了。
                  </p>
                  <div className="border-l-4 border-tech-highlight/60 pl-4 py-2">
                    <p className="text-xl text-white">
                      生成式AI是要機器產生複雜而有結構的物件。
                    </p>
                  </div>
                </div>

                <div className="bg-[#1a1a1a] rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-tech-highlight mb-4">
                    所謂「複雜而有結構」是指：
                  </h3>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-tech-purple/20 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-tech-purple"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <span className="text-xl text-white/90 group-hover:text-tech-highlight transition-colors">
                      複雜到沒有辦法窮舉
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                <div className="bg-[#1a1a1a] rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-tech-highlight mb-4">
                    生成式AI的實例
                  </h3>
                  <p className="text-gray-300 mb-6">
                    以下是生成式AI能夠產生的複雜且具有結構性的物件範例：
                  </p>

                  <div className="grid grid-cols-3 gap-6">
                    {/* Text Example */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="w-20 h-20 rounded-2xl bg-tech-highlight/10 border border-tech-highlight/30 flex items-center justify-center mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-tech-highlight"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-tech-purple">
                        文章
                      </h4>
                      <p className="text-sm text-gray-300">由文字組成</p>
                    </motion.div>

                    {/* Image Example */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="w-20 h-20 rounded-2xl bg-tech-highlight/10 border border-tech-highlight/30 flex items-center justify-center mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-tech-highlight"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-tech-purple">
                        影像
                      </h4>
                      <p className="text-sm text-gray-300">由像素組成</p>
                    </motion.div>

                    {/* Audio Example */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="w-20 h-20 rounded-2xl bg-tech-highlight/10 border border-tech-highlight/30 flex items-center justify-center mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-tech-highlight"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-tech-purple">
                        語音
                      </h4>
                      <p className="text-sm text-gray-300">由取樣點組成</p>
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  className="bg-[#1a1a1a] rounded-lg p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-tech-cyan/20 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-tech-cyan"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      為什麼是「複雜」？
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    這些物件的組合可能性是天文數字，遠超過人類可以窮舉的範圍。例如，即使是一篇短文章，
                    其可能的詞語組合方式也無法一一列舉。生成式AI的挑戰就在於從這些巨大的可能性空間中生成符合需求的內容。
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute -left-4 top-1/4 w-32 h-32 bg-tech-purple/20 blur-[64px] rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute -right-4 bottom-1/4 w-32 h-32 bg-tech-highlight/20 blur-[64px] rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </SlideLayout>
  );
}
