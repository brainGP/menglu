"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"cn" | "en">("cn"); // default Chinese

  const messages = {
    cn: {
      title: "🎂 生日快乐! MENGLUUUUUUU, GrandMaaaaa",
      part1:
        "自从在 Springview 和你一起工作后，我真的觉得我们已经成为真正的好朋友。你是我在这里合作过的最好的伙伴。",
      part2:
        "我最欣赏的是你总是做自己——不会因为其他人或事情而改变。我真的很尊重并喜欢你的这一点。",
      closing: "祝你生日最快乐！ 🥳",
    },
    en: {
      title: "🎂 Happy Birthday! MENGLUUUUUUU, GrandMaaaaa",
      part1:
        "After working with you at Springview, I truly feel we’ve become real best friends. You’ve been the best partner I’ve ever worked with here.",
      part2:
        "What I admire most is that you’re always yourself—never changing because of something or someone else. I really respect and like that about you.",
      closing: "Wishing you the happiest birthday! 🥳",
    },
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100">
      {/* Language buttons */}
      <div className="absolute top-4 right-4 flex gap-2 z-50">
        <button
          onClick={() => setLang("cn")}
          className={`px-2 py-1 rounded-full text-xl transition ${
            lang === "cn" ? "bg-purple-200 shadow-md" : "opacity-60"
          }`}
        >
          🇨🇳
        </button>
        <button
          onClick={() => setLang("en")}
          className={`px-2 py-1 rounded-full text-xl transition ${
            lang === "en" ? "bg-purple-200 shadow-md" : "opacity-60"
          }`}
        >
          🇺🇸
        </button>
      </div>

      {open && <Confetti recycle={false} numberOfPieces={250} />}

      <div className="relative cursor-pointer" onClick={() => setOpen(!open)}>
        {/* Envelope Wrapper */}
        <div className="relative w-72 h-48">
          {/* BACK of Envelope */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-pink-400 rounded-b-2xl shadow-xl z-0" />
          {/* LEFT Triangle */}
          <div className="absolute left-0 bottom-0 w-0 h-0 border-b-[96px] border-b-pink-400 border-l-[144px] border-l-transparent z-10" />
          {/* RIGHT Triangle */}
          <div className="absolute right-0 bottom-0 w-0 h-0 border-b-[96px] border-b-pink-400 border-r-[144px] border-r-transparent z-10" />
          {/* TOP FLAP */}
          <motion.div
            initial={{ rotateX: 0 }}
            animate={open ? { rotateX: 180 } : { rotateX: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-0 h-0 
             border-l-[144px] border-r-[144px] border-t-[120px] 
             border-l-transparent border-r-transparent border-t-pink-500 
             origin-top z-30 "
          />
        </div>

        {/* LETTER */}
        {open && (
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: -120, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-72 bg-white p-6 shadow-2xl rounded-xl text-center z-40 border-pink-400"
          >
            <h2 className="text-xl font-extrabold text-pink-600 mb-2">
              {messages[lang].title}
            </h2>
            <p className="text-black text-sm">{messages[lang].part1}</p>
            <p className="text-black text-sm mt-2">{messages[lang].part2}</p>
            <p className="mt-3 font-semibold text-pink-500">
              {messages[lang].closing}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
