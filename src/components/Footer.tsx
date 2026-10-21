import React from 'react';
import { STORE_INFO } from '../data/storeData';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ExternalLink, 
  Heart
} from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF6F0] text-stone-700 pt-16 pb-12 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-200">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-rose-400 p-0.5 border border-amber-300/60 flex items-center justify-center bg-white shadow-sm">
                <span className="font-serif font-black text-rose-800 text-lg">BZ</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-stone-900 block">
                  BRIDAL ZONE
                </span>
                <span className="text-[10px] tracking-widest uppercase text-rose-800 font-semibold block">
                  Patna, Bihar • Established 1995
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-sm">
              Patna's premier bridal wear showroom specializing in budget-friendly bridal lehengas, flexible rental options starting ₹499, bespoke master stitching, and artificial bridal jewelry.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white hover:bg-pink-600 hover:text-white text-stone-700 border border-stone-200 shadow-sm flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={STORE_INFO.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white hover:bg-blue-600 hover:text-white text-stone-700 border border-stone-200 shadow-sm flex items-center justify-center transition"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              <a
                href={STORE_INFO.justdialUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-full bg-white hover:bg-amber-50 text-amber-800 text-xs font-semibold transition flex items-center gap-1 border border-stone-200 shadow-sm"
              >
                <span>★ 4.0 Justdial</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 font-serif">
              Collections & Rentals
            </h4>
            <ul className="space-y-2 text-xs text-stone-600">
              <li>
                <a href="#rentals" className="hover:text-rose-800 transition">
                  Budget Rentals (₹499 – ₹999)
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-rose-800 transition">
                  Heavy Bridal Velvet Lehengas
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-rose-800 transition">
                  Grand Reception Trail Gowns
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-rose-800 transition">
                  Authentic Banarasi Silk Sarees
                </a>
              </li>
              <li>
                <a href="#jewelry" className="hover:text-rose-800 transition">
                  Kundan & Polki Bridal Jewelry Sets
                </a>
              </li>
              <li>
                <a href="#custom-stitching" className="hover:text-rose-800 transition">
                  Custom Blouse & Handwork Stitching
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 font-serif">
              Store & Contact
            </h4>
            
            <div className="space-y-2.5 text-xs text-stone-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-stone-700">
                  3rd Floor, White House Apartment, Flat No. 302B, Sri Niwas Path, Bandar Bagicha, near ISKCON Temple, Dak Bunglow Road, Patna, Bihar 800001
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Daily: 11:00 AM – 8:00 PM</span>
              </div>

              <div className="pt-1 space-y-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <a href="tel:+919308630422" className="hover:text-rose-800 font-semibold text-stone-800">
                    +91 93086 30422
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <a href="tel:+919341844017" className="hover:text-rose-800 font-semibold text-stone-800">
                    +91 93418 44017
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <a href="tel:+918084772001" className="hover:text-rose-800 font-semibold text-stone-800">
                    +91 80847 72001
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Bridal Zone Patna. Over 30 years of bridal excellence in Bihar.
          </p>

          <p className="flex items-center gap-1 text-[11px]">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            <span>for brides of Patna, Bihar</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
