import { motion } from 'motion/react';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <motion.a
      href="#home"
      className={`flex items-center gap-2.5 ${className} cursor-pointer group`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative w-9 h-9 flex items-center justify-center">
        {/* Subtle glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-500 to-cyan-400 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
        
        {/* Logo image with background removed */}
        <img
          src="/logo.png"
          alt="Sitara Logo"
          className="relative w-full h-full object-contain transition-all duration-300 group-hover:drop-shadow-lg"
          style={{
            mixBlendMode: 'multiply',
          }}
        />
      </div>
      
      <span className="text-xl tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
        Sitara
      </span>
    </motion.a>
  );
}
