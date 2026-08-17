'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { use } from 'react';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 relative">
      <div className="absolute top-6 left-6">
        <Link 
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl transition-all"
        >
          ←
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl shadow-xl text-center max-w-sm w-full"
      >
        <h1 className="text-2xl font-bold text-white mb-2">
          Product ID: {id}
        </h1>
      </motion.div>
    </main>
  );
}
