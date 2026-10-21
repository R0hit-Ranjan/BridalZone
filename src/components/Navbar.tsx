import React, { useState } from 'react';
import { STORE_INFO } from '../data/storeData';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Sparkles, 
  Heart, 
  Menu, 
  X, 
  Calendar,
  MessageCircle,
  Tag
} from 'lucide-react';

interface NavbarProps {
  wishlistCount: number;
  onOpenWishlist: () => void;
  onOpenTrialModal: () => void;
  onOpenRentalCalc: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  wishlistCount,
  onOpenWishlist,
  onOpenTrialModal,
  onOpenRentalCalc,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-stone-200">
      {/* Top Announcement Bar - Clean Light */}
      <div className="bg-[#FAF7F2] text-stone-700 text-xs py-2 px-4 border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-xs font-medium truncate">
            <span className="flex items-center gap-1.5 shrink-0 text-stone-800">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>Daily: 11:00 AM – 8:00 PM</span>
            </span>
            <span className="hidden md:inline-block text-stone-300">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-stone-600 truncate">
              <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span className="truncate">
                White House Apts, Bandar Bagicha (Near ISKCON), Patna
              </span>
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden lg:inline-flex items-center gap-1 bg-amber-50 text-amber-900 px-2 py-0.5 rounded-full text-[11px] border border-amber-200">
              <Sparkles className="w-3 h-3 text-amber-600" />
              Est. 1995 • 30+ Years
            </span>
            <a 
              href={`tel:${STORE_INFO.phoneNumbers[0].raw}`}
              className="flex items-center gap-1.5 font-bold text-stone-800 hover:text-rose-700 transition"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>{STORE_INFO.phoneNumbers[0].number}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Perfectly Aligned Single Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-2">
          
          {/* Logo - Compact & Perfectly Aligned */}
          <a href="#" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-rose-400 p-0.5 shadow-sm group-hover:scale-105 transition-transform shrink-0">
              <div className="w-full h-full rounded-full border border-amber-200 flex items-center justify-center bg-white">
                <span className="font-serif font-black text-rose-800 text-base">BZ</span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-serif text-xl font-extrabold tracking-tight text-stone-900 group-hover:text-rose-800 transition whitespace-nowrap">
                  Bridal Zone
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-50 text-rose-800 px-1.5 py-0.5 rounded border border-rose-200">
                  Patna
                </span>
              </div>
              <p className="text-[10px] tracking-wider uppercase text-stone-500 font-medium mt-0.5 whitespace-nowrap">
                Est. 1995
              </p>
            </div>
          </a>

          {/* Desktop Nav Links - Strictly ONE WORD each */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-stone-700">
            <a 
              href="#collections" 
              className="hover:text-rose-700 transition whitespace-nowrap py-1"
            >
              Collection
            </a>
            <a 
              href="#rentals" 
              className="hover:text-rose-700 transition whitespace-nowrap py-1 flex items-center gap-1"
            >
              <span>Rentals</span>
              <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-1.5 py-0.2 rounded-full border border-amber-300">
                ₹499+
              </span>
            </a>
            <a 
              href="#custom-stitching" 
              className="hover:text-rose-700 transition whitespace-nowrap py-1"
            >
              Stitching
            </a>
            <a 
              href="#jewelry" 
              className="hover:text-rose-700 transition whitespace-nowrap py-1"
            >
              Jewelry
            </a>
            <a 
              href="#services" 
              className="hover:text-rose-700 transition whitespace-nowrap py-1"
            >
              Services
            </a>
            <a 
              href="#real-brides" 
              className="hover:text-rose-700 transition whitespace-nowrap py-1"
            >
              Reviews
            </a>
            <a 
              href="#visit-store" 
              className="hover:text-rose-700 transition whitespace-nowrap py-1"
            >
              Store
            </a>
          </nav>

          {/* Action CTAs - Compact & Vertically Centered */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            {/* Calculator Trigger */}
            <button
              onClick={onOpenRentalCalc}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200/80 border border-stone-200 transition whitespace-nowrap"
              title="Estimate your bridal rent"
            >
              <Tag className="w-3.5 h-3.5 text-stone-600" />
              <span>Calculator</span>
            </button>

            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2 rounded-xl text-stone-600 hover:text-rose-700 hover:bg-rose-50 border border-stone-200 transition"
              aria-label="View trial wishlist"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-rose-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Book Trial Button */}
            <button
              onClick={onOpenTrialModal}
              className="inline-flex items-center gap-1.5 bg-rose-700 hover:bg-rose-800 text-white font-semibold px-3.5 py-2 rounded-xl text-xs tracking-wide shadow-sm hover:shadow transition whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-rose-200" />
              <span>Book Trial</span>
            </button>
          </div>

          {/* Mobile menu toggle & Wishlist badge */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenWishlist}
              className="relative p-2 rounded-lg text-stone-700 border border-stone-200"
              aria-label="Wishlist"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-100 border border-stone-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown - One Word Links */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-1.5 text-stone-800 font-semibold text-sm">
            <a 
              href="#collections" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50"
            >
              Collection
            </a>
            <a 
              href="#rentals" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50 flex items-center justify-between"
            >
              <span>Rentals</span>
              <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2 py-0.5 rounded-full">
                ₹499+
              </span>
            </a>
            <a 
              href="#custom-stitching" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50"
            >
              Stitching
            </a>
            <a 
              href="#jewelry" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50"
            >
              Jewelry
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50"
            >
              Services
            </a>
            <a 
              href="#real-brides" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50"
            >
              Reviews
            </a>
            <a 
              href="#visit-store" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50"
            >
              Store
            </a>
          </nav>

          <div className="pt-2 flex flex-col gap-2 border-t border-stone-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRentalCalc();
              }}
              className="w-full py-2.5 rounded-xl border border-stone-200 text-stone-800 font-semibold text-xs flex items-center justify-center gap-2 bg-stone-50"
            >
              <Tag className="w-4 h-4 text-stone-600" />
              <span>Calculator</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrialModal();
              }}
              className="w-full py-2.5 rounded-xl bg-rose-700 text-white font-semibold text-xs tracking-wide flex items-center justify-center gap-2 shadow"
            >
              <Calendar className="w-4 h-4 text-rose-200" />
              <span>Book Trial</span>
            </button>

            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Bridal Zone Patna! I would like to enquire about bridal outfits and rentals.")}`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
