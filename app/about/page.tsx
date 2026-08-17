'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6 relative">
      {/* უკან დაბრუნების ღილაკი ზედა მარცხენა კუთხეში */}
      <div className="absolute top-6 left-6">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl transition-all"
        >
          ←
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-slate-900/60 border border-slate-800 p-10 rounded-2xl shadow-xl max-w-lg text-center"
      >
        <h1 className="text-4xl font-bold text-white mb-6 tracking-wide">
          About Us
        </h1>
         <p className="text-slate-400 leading-relaxed mb-8"> 
          ჩვენ ვართ ტექნოლოგიური მაღაზია, სადაც გთავაზობთ მხოლოდ საუკეთესო პროდუქციას: 
          <br></br> 
          <br></br><b>iphone</b> 
          <br></br><b>samsung</b> 
          <br></br><b>MacBook</b> </p>
      </motion.div>
    </main>
  );
}