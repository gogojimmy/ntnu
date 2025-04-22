import SlideLayout from "../../layouts/SlideLayout";
import { motion } from "motion/react";

export default function Slide2() {
  return (
    <SlideLayout currentSlide="02" courseName="AI概論與工具介紹">
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
                什麼是人工智慧 (AI)?
              </h1>
              <h2 className="text-2xl text-tech-highlight/80">
                智慧的定義與挑戰
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
                    人工智慧的基本概念
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    從字面來看，AI 是人所創造出的智慧，是機器所展現的智慧。
                    這不是人本身的智慧，而是賦予機器的智慧能力。
                  </p>
                </div>

                <div className="bg-[#1a1a1a] rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-tech-highlight mb-4">
                    人工智慧的定義問題
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded bg-tech-highlight/10 border border-tech-highlight/30 text-tech-highlight/80 font-mono text-sm mt-1">
                        ?
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-tech-purple">
                          沒有標準定義
                        </h4>
                        <p className="text-gray-300">
                          「人工智慧」這個詞沒有一個統一且標準的定義
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded bg-tech-highlight/10 border border-tech-highlight/30 text-tech-highlight/80 font-mono text-sm mt-1">
                        !
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-tech-purple">
                          主觀認知差異
                        </h4>
                        <p className="text-gray-300">
                          「智慧」的定義因人而異，取決於個人的理解
                        </p>
                      </div>
                    </div>
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
                    人們對AI的不同認知
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    不同人對什麼才算是真正的「人工智慧」有著不同的想法：
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black/30 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-tech-purple mb-2">
                        語言模型
                      </h4>
                      <p className="text-sm text-gray-300">
                        有些人認為ChatGPT等語言模型已經代表了AI
                      </p>
                    </div>
                    <div className="bg-black/30 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-tech-purple mb-2">
                        機器人
                      </h4>
                      <p className="text-sm text-gray-300">
                        有人認為AI必須要有實體，能夠行動的機器人
                      </p>
                    </div>
                    <motion.div
                      className="bg-black/30 p-4 rounded-lg col-span-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <div className="flex items-center justify-center">
                        <div className="w-16 h-16 bg-tech-highlight/20 rounded-full flex items-center justify-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-tech-highlight"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-300">
                          智慧的定義是抽象且主觀的，使得人工智慧的界定也變得模糊
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  className="bg-[#1a1a1a] rounded-lg p-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-tech-highlight">
                      智慧的光譜
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-tech-purple/20 flex items-center justify-center">
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
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="relative h-8 bg-gradient-to-r from-tech-dark via-tech-highlight to-tech-purple rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                    <div className="absolute top-full mt-2 left-0 text-xs text-gray-400">
                      簡單計算
                    </div>
                    <div className="absolute top-full mt-2 right-0 text-xs text-gray-400">
                      人類智慧
                    </div>
                  </div>
                  <p className="mt-6 text-sm text-gray-300">
                    智慧存在於連續光譜上，不同人對「真正的AI」的認知，取決於他們在這個光譜上設定的門檻。
                    這也是為何AI沒有標準定義的原因之一。
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
