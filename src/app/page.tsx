// app/page.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100">
      {open && <Confetti recycle={false} numberOfPieces={250} />}

      <div className="relative cursor-pointer" onClick={() => setOpen(!open)}>
        {/* Envelope Wrapper */}
        <div className="relative w-72 h-48">
          {/* BACK of Envelope */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-pink-400 rounded-b-2xl shadow-xl z-0" />
          {/* LEFT Triangle */}
          <div className="absolute left-0 bottom-0 w-0 h-0 border-b-[96px] border-b-pink-400 border-l-[144px] border-l-transparent z-10" />{" "}
          */
          {/* RIGHT Triangle */}
          <div className="absolute right-0 bottom-0 w-0 h-0 border-b-[96px] border-b-pink-400 border-r-[144px] border-r-transparent z-10" />
          {/* BOTTOM Triangle */}
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
            className="absolute top-0 left-1/2 -translate-x-1/2 w-64 bg-white p-6 shadow-2xl rounded-xl text-center z-40"
          >
            <h2 className="text-2xl font-extrabold text-pink-600 mb-2">
              🎂 Happy Birthday! MENGLUUUUUUU, GrandMaaaaa
            </h2>
            <p className=" text-black text-sm">
              After working with you at{" "}
              <span className="font-semibold">Springview</span>, I truly feel
              we’ve become real best friends. You’ve been the best partner I’ve
              ever worked with here.
            </p>
            <p className="text-black text-sm  mt-2">
              What I admire most is that you’re always yourself—never changing
              because of something or someone else. I really respect and like
              that about you.
            </p>
            <p className="mt-3 font-semibold text-pink-500">
              Wishing you the happiest birthday! 🥳
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
