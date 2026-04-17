import { motion } from 'motion/react';
import { Compass, MapPin } from 'lucide-react';

export function Logo() {
  return (
    <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-600 via-green-500 to-green-600 rounded-lg shadow-md overflow-hidden group">
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDIwaDQwTTAgMjBoNDAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuNCIvPgo8L3N2Zz4=')] bg-center bg-no-repeat" />
      </motion.div>
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex items-center justify-center text-white"
      >
        <Compass className="w-6 h-6 absolute transition-all duration-300 group-hover:opacity-0 group-hover:scale-50" />
        <MapPin className="w-6 h-6 absolute opacity-0 scale-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 text-yellow-300" />
      </motion.div>
    </div>
  );
}
