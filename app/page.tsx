'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 md:p-12">
      {/* Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent mb-4">
          Welcome to our store
        </h1>
      </motion.div>

      {/* Navigation Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
        
        {/* Products Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          whileHover={{ scale: 1.03 }}
        >
          <Link
            href="/products"
            className="flex flex-col justify-between p-6 bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-purple-500/50 rounded-2xl shadow-xl transition-all h-full group"
          >
            <div>
              <h2 className="text-xl text-center font-bold text-white group-hover:text-purple-300 transition-colors">Products</h2>
            </div>
          </Link>
        </motion.div>

        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
        >
          <Link
            href="/about"
            className="flex flex-col justify-between p-6 bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-pink-500/50 rounded-2xl shadow-xl transition-all h-full group"
          >
            <div>
              <h2 className="text-xl text-center font-bold text-white group-hover:text-pink-300 transition-colors">About Us</h2>
            </div>
          </Link>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
        >
          <Link
            href="/contact"
            className="flex flex-col justify-between p-6 bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-2xl shadow-xl transition-all h-full group"
          >
            <div>              
              <h2 className="text-center text-xl font-bold text-white group-hover:text-blue-300 transition-colors">Contact Us</h2>
            </div>
            <span className="mt-8 text-sm text-slate-400 flex items-center gap-1 group-hover:text-white transition-colors">
            </span>
          </Link>
        </motion.div>

      </div>
    </main>
  );
}