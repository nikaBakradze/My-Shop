'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const products = [
  { id: 1, name: "iPhone" },
  { id: 2, name: "Samsung" },
  { id: 3, name: "MacBook" },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8 md:p-16 flex flex-col items-center justify-center relative">
      <div className="absolute top-6 left-6">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl transition-all"
        >
          ←
        </Link>
      </div>

      <div className="w-full max-w-md">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8 text-center text-white"
        >
          Products
        </motion.h1>

        <ul className="space-y-4">
          {products.map((product, index) => (
            <motion.li
              key={product.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={`/products/${product.id}`}
                className="block p-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl text-lg font-medium transition-all duration-300 text-center shadow-md hover:scale-[1.02]"
              >
                {product.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </main>
  );
}