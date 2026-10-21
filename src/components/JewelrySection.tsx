import React from 'react';
import { JEWELRY_COLLECTION, STORE_INFO } from '../data/storeData';
import { JewelryItem } from '../types';
import { Crown, MessageCircle, Calendar, Check, ShieldCheck } from 'lucide-react';

interface JewelrySectionProps {
  onOpenTrialModal: () => void;
}

export const JewelrySection: React.FC<JewelrySectionProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="jewelry" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-semibold tracking-wide uppercase mb-3 border border-amber-200">
            <Crown className="w-3.5 h-3.5 text-amber-700" />
            <span>Complete Bridal Jewelry Sets</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Artificial Bridal Jewelry (Rent & Buy)
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Why spend lakhs on real gold lockers when you can rent royal Kundan, Polki, and Temple jewelry sets for just ₹499 – ₹999 in Patna?
          </p>
        </div>

        {/* Jewelry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {JEWELRY_COLLECTION.map((item: JewelryItem) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-stone-200 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[4/4] overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 text-stone-900 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm border border-stone-200">
                    Micro Gold Finish
                  </div>
                  <div className="absolute bottom-3 left-3 bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-1 rounded shadow-sm">
                    Rent: ₹{item.rentalPrice} / 3 Days
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 space-y-3">
                  <h3 className="font-serif text-base font-bold text-stone-900 group-hover:text-rose-800 transition">
                    {item.name}
                  </h3>
                  
                  <p className="text-stone-500 text-xs line-clamp-2">
                    {item.description}
                  </p>

                  {/* Included Pieces */}
                  <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-200/60">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-amber-900 mb-1.5">
                      Included in this Set:
                    </p>
                    <ul className="space-y-1 text-[11px] text-stone-700">
                      {item.piecesIncluded.map((piece, idx) => (
                        <li key={idx} className="flex items-start gap-1">
                          <Check className="w-3 h-3 text-amber-700 shrink-0 mt-0.5" />
                          <span>{piece}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="p-5 pt-0">
                <div className="flex items-center justify-between py-2 border-t border-stone-100 text-xs mb-3">
                  <span className="text-stone-500">Retail Buy Price:</span>
                  <span className="font-bold text-stone-800">₹{item.buyPrice.toLocaleString('en-IN')}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={onOpenTrialModal}
                    className="w-full py-2 rounded-xl border border-stone-300 text-stone-800 hover:bg-stone-50 text-xs font-semibold flex items-center justify-center gap-1 transition"
                  >
                    <Calendar className="w-3 h-3 text-stone-600" />
                    <span>Try On</span>
                  </button>

                  <a
                    href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello Bridal Zone! I want to check rental availability for this jewelry set:\n*${item.name}*\nRent: ₹${item.rentalPrice}\nFinish: ${item.finish}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-1 shadow-sm transition"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Jewelry trust banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-stone-900">
                Ultra-Sanitized & Anti-Allergic Gold Plating
              </p>
              <p className="text-xs text-stone-500">
                Every jewelry piece is UV-sanitized and packed in velvet presentation boxes before you pick it up in Patna.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenTrialModal}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-rose-700 text-white text-xs font-semibold hover:bg-rose-800 transition shadow-sm"
          >
            Match With Your Lehenga at Store
          </button>
        </div>

      </div>
    </section>
  );
};