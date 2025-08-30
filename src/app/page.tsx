"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"cn" | "mn" | "en">("cn");
  const [showScrollHint, setShowScrollHint] = useState(true);
  const letterRef = useRef<HTMLDivElement>(null);

  const messages = {
    cn: {
      title: "🎂 生日快乐! MENGLUUUUUUU，我的奶奶哈哈",
      part1:
        "Hello Mengluuuu~ 祝你阅读这封信时一切安好。22岁啦，越来越像个可爱的老奶奶了哈哈。我真的很开心有你这样的朋友、伙伴、家人和奶奶。",
      part2:
        "我觉得自从我们在 Springview 一起工作以来，我们已经不只是普通朋友，而是真正的好朋友了。特别感谢把我们放在一起工作的 Jackie 和 Sonia，哈哈哈。",
      part3:
        "和你一起工作从来不会觉得无聊，总是充满欢笑和快乐，那些时光我永远不会忘记。尤其是你总爱说的“我们一起去、一起拿、一起做”，让我记得最清楚。就像你不管什么时候都会在我身边一样，让我觉得无论遇到什么都可以百分百信任你。",
      part4:
        "这三个月里我和很多人一起工作过，但和你在一起的日子永远是最棒的。谢谢你，奶奶~ 我最喜欢你的地方，就是你始终保持真实的自己。你不会为了迎合别人而改变，也不会对别人区别对待，这点真的很珍贵。",
      closing:
        "回想起我们一起大笑的那些小瞬间，我觉得认识你真是太幸运了。谢谢你成为我这三个月里最珍贵的人之一。希望在这个特别的日子里，你能被爱、喜悦和温暖包围。愿你健康快乐，永远闪闪发光！生日快乐，我亲爱的朋友！ 🥳",
    },
    mn: {
      title: "🎂 Төрсөн өдрийн мэнд! МЭНГЛҮҮҮҮҮ, Эмээ минь",
      part1:
        "Хэллөү Мэглүүүү, энэ захидлыг уншиж байгаа мэндийг хүргэе. 22 нас хүрээд улам хөгшин эмээ минь болж байгаад би баяртай байна. Найз, хамтрагч, гэр бүл, эмээ минь байгаад баярлалаа.",
      part2:
        "Миний бодлоор бид Спрингвьюд хамтран ажиллаж эхэлснээс хойш бид нэг нэгнийгээ илүү сайн ойлгож мэдэж энгийн нэг найзууд биш, үнэхээр дотно найзууд болсон гэдгийг би мэдэрсэн. Хоёуланг нь хамт ажиллуулсан Жаки болон Сониас талархжийнаа хахаха.",
      part3:
        "Хамт ажиллаад хэзээ ч уйдахгүй, үргэлж инээж, аз жаргалтай явсанд тэр мөчүүдийг би хэзээ ч мартахгүй ээ. Ялангуяа аливаа зүйлийг хийхдээ 'хамт явий, хамт авчры, хамтдаа' гэдэг үгүүд чинь надад хамгийн тод санагддаг. Яг л хэзээ ч, юу ч болсон хамт байна гэж байгаа хамгийн дотны хүн шиг, зовсон цагт дэргэд үлдээд 100% итгэж найдаж болох хүн.",
      part4:
        "Энд бүтэн 3 сар олон хүмүүстэй ажиллаж үзэхэд чамтай ажилласан өдрийн хамгийн шилдэг байсан шүү. Баярлалааа, Эмэээ. Надаа чиний үргэлж өөрийнхөөрөө байдаг зан чанар, төрх чинь хамгийн их таалагддаг. Хэзээ ч бусдад тохирох эсвэл таалагдахын тулд өөрчлөгддөггүй, чин өөрийнхөөрөө аашилж бусдад ялгаварлан ханддаггүй зан чинь шилдэг.",
      closing:
        "Энэ онцгой өдөр таныг хайр, баяр баясгалан, халуун дулаанаар хүрээлүүлсэн байх болно гэж найдаж байна. Та эрүүл энх, аз жаргалтай байж, үргэлж өөрийнхөөрөө гэрэлтэж байх болтугай. Төрсөн өдрийн мэнд хүргэе, хайрт найз минь! 🥳",
    },
    en: {
      title: "🎂 Happy Birthday! MENGLUUUUUUU, my Grandma haha",
      part1:
        "Hello Mengluuuu, just want to wish you well while you’re reading this letter. You’re turning 22 now, becoming more and more like my sweet grandma haha. I’m really thankful that you’ve been my friend, partner, family, and grandma all in one.",
      part2:
        "I think ever since we started working together at Springview, we’ve grown from just normal friends into truly close ones. Big thanks to Jackie and Sonia for putting us together, hahaha.",
      part3:
        "Working with you has never been boring. It’s always full of laughter and happiness, and I’ll never forget those times. Especially the way you always say, “let’s go together, let’s bring it together, let’s do it together” — those words stick in my mind the most. You’ve always felt like that one special person who stays no matter what happens, someone I can 100% trust.",
      part4:
        "After three full months of working with many people, I can honestly say the best days were the ones I got to work with you. Thank you, Grandma~ What I love most about you is that you always stay true to yourself. You never change just to please others, and you treat everyone fairly with your real personality. That’s what makes you the best.",
      closing:
        "When I think back on all the little moments we laughed together, I just feel so lucky to have met you. Thank you for being one of the most precious people to me in these three months. On this special day, I hope you’re surrounded by love, joy, and warmth. May you always be healthy, happy, and keep shining as yourself. Happy Birthday, my dear friend! 🥳",
    },
  };

  useEffect(() => {
    const el = letterRef.current;
    if (!el) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      setShowScrollHint(scrollTop + clientHeight < scrollHeight - 10);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [letterRef, open]);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100">
      {/* Language buttons */}
      <div className="absolute top-4 right-4 flex gap-2 z-50">
        <button
          onClick={() => setLang("cn")}
          className={`px-2 py-1 rounded-full text-xl transition ${
            lang === "cn" ? "bg-yellow-200 shadow-md" : "opacity-60"
          }`}
        >
          🇨🇳
        </button>
        <button
          onClick={() => setLang("mn")}
          className={`px-2 py-1 rounded-full text-xl transition ${
            lang === "mn" ? "bg-yellow-200 shadow-md" : "opacity-60"
          }`}
        >
          🇲🇳
        </button>
        <button
          onClick={() => setLang("en")}
          className={`px-2 py-1 rounded-full text-xl transition ${
            lang === "en" ? "bg-yellow-200 shadow-md" : "opacity-60"
          }`}
        >
          🇺🇸
        </button>
      </div>

      {open && <Confetti recycle={false} numberOfPieces={250} />}

      <div className="relative cursor-pointer" onClick={() => setOpen(!open)}>
        {/* Envelope */}
        <div className="relative w-72 h-48 sm:w-96 sm:h-60">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-b-2xl shadow-xl z-0" />
          <div className="absolute left-0 bottom-0 w-0 h-0 border-b-[96px] sm:border-b-[120px] border-b-yellow-400 border-l-[144px] sm:border-l-[192px] border-l-transparent z-10" />
          <div className="absolute right-0 bottom-0 w-0 h-0 border-b-[96px] sm:border-b-[120px] border-b-yellow-400 border-r-[144px] sm:border-r-[192px] border-r-transparent z-10" />
          <motion.div
            initial={{ rotateX: 0 }}
            animate={open ? { rotateX: 180 } : { rotateX: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-0 h-0 border-l-[144px] sm:border-l-[192px] border-r-[144px] sm:border-r-[192px] border-t-[120px] sm:border-t-[150px] border-l-transparent border-r-transparent border-t-yellow-500 origin-top z-30"
          />
        </div>

        {/* Letter */}
        {open && (
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: -140, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-[500px] bg-white p-6 sm:p-8 shadow-2xl rounded-xl text-center z-40 border border-yellow-300 relative"
          >
            <div
              ref={letterRef}
              className="overflow-y-auto h-full pr-2 scrollbar-thin scrollbar-thumb-pink-300 scrollbar-track-transparent"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-pink-600 mb-3">
                {messages[lang].title}
              </h2>
              <p className="text-gray-800 text-sm sm:text-base mb-2">
                {messages[lang].part1}
              </p>
              <p className="text-gray-800 text-sm sm:text-base mb-2">
                {messages[lang].part2}
              </p>
              <p className="text-gray-800 text-sm sm:text-base mb-2">
                {messages[lang].part3}
              </p>
              <p className="text-gray-800 text-sm sm:text-base mb-4">
                {messages[lang].part4}
              </p>
              <p className="mt-3 font-semibold text-pink-500">
                {messages[lang].closing}
              </p>
            </div>

            {/* Gradient Fade at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />

            {/* Scroll hint */}
            {showScrollHint && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-pink-400 animate-bounce">
                ↓ scroll
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
