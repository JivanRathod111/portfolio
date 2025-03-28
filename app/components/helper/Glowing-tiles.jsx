"use client";
import { motion } from "framer-motion";

export default function GlowingTiles() {
  const gridSize = 5; // Adjust grid size (5x5 tiles)

  return (
    <div className="relative flex items-center justify-center h-screen w-screen bg-black overflow-hidden">
      <div className="grid grid-cols-5 gap-2">
        {[...Array(gridSize * gridSize)].map((_, i) => (
          <motion.div
            key={i}
            className="w-20 h-20 border border-gray-800 bg-transparent transition duration-300"
            whileHover={{
              boxShadow: "0px 0px 15px #16f2b3",
              backgroundColor: "rgba(22, 242, 179, 0.1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
