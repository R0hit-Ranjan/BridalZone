import React from 'react';
import { STORE_INFO } from '../data/storeData';
import { 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  MessageCircle, 
  Scissors, 
  Award, 
  CheckCircle2, 
  Star 
} from 'lucide-react';

interface HeroProps {
  onOpenTrialModal: () => void;
  onOpenRentalCalc: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrialModal, onOpenRentalCalc }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EE] to-[#F5EFEB] text-stone-900 border-b border-stone-200/60">
      
      {/* Gentle Soft Light Glow Orbs */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-amber-200/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-rose-200/30 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill - Light & Soft */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-amber-300/80 text-amber-900 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Patna's #1 Bridal Wear & Rental Boutique • Since 1995</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-stone-900">
              Wear Your Dream <br />
              <span className="text-rose-800 italic">Bridal Lehenga</span> <br />
              Buy or Rent from{' '}
              <span className="relative inline-block whitespace-nowrap text-stone-900">
                <span className="relative z-10">₹499</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-amber-500 pointer-events-none overflow-visible"
                  viewBox="0 0 100 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8.5C26 3 74 3 98 8"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-stone-600 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Step into royalty without the royal price tag. Explore Patna’s largest bridal showroom for budget-friendly wedding lehengas, flexible 3-day rentals, master tailor fittings, and handcrafted artificial bridal jewelry sets.
            </p>

            {/* Value checklist - Light Theme */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-stone-700">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                </div>
                <span>Budget rentals starting ₹499 to ₹2,999</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                </div>
                <span>Free bespoke fitting before pickup</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                </div>
                <span>Full artificial Kundan & Polki jewelry sets</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                </div>
                <span>White House Apts, Bandar Bagicha (Near ISKCON)</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <a
                href="#rentals"
                className="inline-flex items-center gap-2 bg-rose-700 hover:bg-rose-800 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 text-sm"
              >
                <span>Browse Rental Collection</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenTrialModal}
                className="inline-flex items-center gap-2 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 px-5 py-3.5 rounded-xl font-semibold text-sm transition shadow-sm"
              >
                <Calendar className="w-4 h-4 text-amber-600" />
                <span>Book In-Store Trial</span>
              </button>

              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent("Namaste Bridal Zone! I want to enquire about wedding lehengas and rental prices.")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3.5 rounded-xl font-semibold text-sm transition shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">WhatsApp Us</span>
              </a>
            </div>

            {/* Quick helper note */}
            <p className="text-[12px] text-stone-500 pt-1">
              ✨ Need immediate help? Call our bridal desk at{' '}
              <a href="tel:+919308630422" className="underline font-semibold text-stone-800 hover:text-rose-700">
                +91 93086 30422
              </a>
            </p>

          </div>

          {/* Right Visual Card Showcase - Light Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Main Card with Image */}
              <div className="relative rounded-3xl overflow-hidden border border-stone-200/90 shadow-xl bg-white p-2.5">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
                    alt="Bridal Zone Patna Velvet Lehenga"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />

                  {/* Overlaid Badges */}
                  <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md text-stone-900 px-3 py-1 rounded-xl border border-stone-200 text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    <span>30+ Years in Patna</span>
                  </div>

                  <div className="absolute top-3.5 right-3.5 bg-emerald-600 text-white px-2.5 py-1 rounded-lg text-xs font-bold shadow-sm">
                    Rentals ₹499+
                  </div>

                  {/* Bottom Overlaid Details - Light Card */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-md">
                    <div className="flex items-center justify-between text-xs font-bold text-stone-900 mb-1">
                      <span>Maharani Heritage Velvet Lehenga</span>
                      <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded text-[11px] font-bold">
                        Rent: ₹2,499
                      </span>
                    </div>
                    <p className="text-stone-600 text-[11px] line-clamp-1">
                      Includes matching jewelry, cancan flare & free tailor fitting.
                    </p>

                    <div className="mt-2.5 flex items-center justify-between gap-2 border-t border-stone-100 pt-2">
                      <button
                        onClick={onOpenRentalCalc}
                        className="text-[11px] text-rose-700 underline font-medium hover:text-rose-900"
                      >
                        Calculate Savings
                      </button>
                      <button
                        onClick={onOpenTrialModal}
                        className="text-[11px] bg-stone-900 hover:bg-stone-800 text-white px-3 py-1 rounded-lg font-medium shadow-sm transition"
                      >
                        Try at Store
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Pill: Tailoring & Stitching */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white text-stone-900 p-3 rounded-2xl shadow-lg border border-stone-200 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center font-bold">
                  <Scissors className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900">Custom Stitching & Fitting</p>
                  <p className="text-[10px] text-stone-500">In-house master tailors • 48h Express</p>
                </div>
              </div>

              {/* Floating Pill: Ratings */}
              <div className="absolute -top-3.5 -right-2 sm:-right-4 bg-white text-stone-900 px-3.5 py-2 rounded-2xl shadow-lg border border-stone-200 flex items-center gap-2">
                <div className="flex text-amber-500 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-stone-900">4.0 Justdial</p>
                  <p className="text-[10px] text-stone-500">332+ reviews</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Strip - Light Theme */}
        <div className="mt-14 pt-8 border-t border-stone-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif">1995</p>
            <p className="text-xs text-stone-500 uppercase tracking-wider font-medium">Established in Patna</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif">₹499 - ₹2999</p>
            <p className="text-xs text-stone-500 uppercase tracking-wider font-medium">Budget Rental Range</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif">18,000+</p>
            <p className="text-xs text-stone-500 uppercase tracking-wider font-medium">Bihar Brides Styled</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif">100% Free</p>
            <p className="text-xs text-stone-500 uppercase tracking-wider font-medium">Bespoke Size Fitting</p>
          </div>
        </div>

      </div>
    </div>
  );
};

