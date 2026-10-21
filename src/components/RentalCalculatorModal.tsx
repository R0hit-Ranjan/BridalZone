import React, { useState } from 'react';
import { PRODUCTS, JEWELRY_COLLECTION, STORE_INFO } from '../data/storeData';
import { X, Check, MessageCircle, Calendar, Tag } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RentalCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTrialModal: () => void;
}

export const RentalCalculatorModal: React.FC<RentalCalculatorModalProps> = ({
  isOpen,
  onClose,
  onOpenTrialModal
}) => {
  const [selectedOutfitId, setSelectedOutfitId] = useState<string>(PRODUCTS[0].id);
  const [selectedJewelryId, setSelectedJewelryId] = useState<string>('none');
  const [durationDays, setDurationDays] = useState<number>(3);
  const [eventDate, setEventDate] = useState<string>('');
  const [bridesmaidCount, setBridesmaidCount] = useState<number>(0);

  if (!isOpen) return null;

  const currentOutfit = PRODUCTS.find((p) => p.id === selectedOutfitId) || PRODUCTS[0];
  const currentJewelry = JEWELRY_COLLECTION.find((j) => j.id === selectedJewelryId);

  const durationMultiplier = durationDays === 3 ? 1.0 : durationDays === 5 ? 1.3 : 1.5;

  const outfitRent = Math.round(currentOutfit.rentalPrice * durationMultiplier);
  const jewelryRent = currentJewelry ? Math.round(currentJewelry.rentalPrice * durationMultiplier) : 0;
  
  const bridesmaidRent = bridesmaidCount * 699;

  const totalRentalCost = outfitRent + jewelryRent + bridesmaidRent;

  const totalBuyValue = currentOutfit.buyPrice + (currentJewelry ? currentJewelry.buyPrice : 0) + (bridesmaidCount * 12000);
  const totalSavings = Math.max(0, totalBuyValue - totalRentalCost);
  const savingsPercent = Math.round((totalSavings / totalBuyValue) * 100);

  const securityDeposit = currentOutfit.rentalSecurityDeposit + (currentJewelry ? 1000 : 0) + (bridesmaidCount * 1000);

  const handleCelebrate = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  const whatsappMessage = `*Bridal Zone Patna - Rental Package Estimate*\n` +
    `👗 Selected Outfit: ${currentOutfit.name} (Rent: ₹${outfitRent})\n` +
    (currentJewelry ? `👑 Matching Jewelry: ${currentJewelry.name} (Rent: ₹${jewelryRent})\n` : `👑 Jewelry: None\n`) +
    (bridesmaidCount > 0 ? `👯 Bridesmaid Outfits: ${bridesmaidCount} x ₹699 (Rent: ₹${bridesmaidRent})\n` : '') +
    `⏱️ Duration: ${durationDays} Days\n` +
    (eventDate ? `📅 Event Date: ${eventDate}\n` : '') +
    `💰 Total Rental Price: ₹${totalRentalCost.toLocaleString('en-IN')}\n` +
    `🛡️ Refundable Deposit: ₹${securityDeposit.toLocaleString('en-IN')}\n` +
    `🎉 Estimated Savings: ₹${totalSavings.toLocaleString('en-IN')} (${savingsPercent}%)\n\n` +
    `Please confirm outfit availability for my wedding date!`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-stone-200 overflow-hidden animate-fadeIn">
        
        {/* Header - Clean Light Cream */}
        <div className="bg-[#FAF7F2] p-6 text-stone-900 flex items-center justify-between border-b border-stone-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center">
              <Tag className="w-5 h-5 text-amber-800" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                Bridal Rental Savings Calculator
              </h3>
              <p className="text-xs text-stone-500">
                See how much you save by renting in Patna vs purchasing
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-200 text-stone-600 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Step 1: Select Main Outfit */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              1. Choose Bridal / Party Outfit
            </label>
            <select
              value={selectedOutfitId}
              onChange={(e) => setSelectedOutfitId(e.target.value)}
              className="w-full p-3 rounded-xl border border-stone-300 text-sm font-medium text-stone-800 bg-white focus:outline-none focus:ring-2 focus:ring-rose-500/30"
            >
              {PRODUCTS.filter(p => p.availableForRent).map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} — Rent: ₹{item.rentalPrice} / 3 days (Buy: ₹{item.buyPrice})
                </option>
              ))}
            </select>
          </div>

          {/* Step 2: Select Matching Artificial Jewelry */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              2. Add Matching Bridal Jewelry Ensemble (Optional)
            </label>
            <select
              value={selectedJewelryId}
              onChange={(e) => setSelectedJewelryId(e.target.value)}
              className="w-full p-3 rounded-xl border border-stone-300 text-sm font-medium text-stone-800 bg-white focus:outline-none focus:ring-2 focus:ring-rose-500/30"
            >
              <option value="none">No jewelry needed</option>
              {JEWELRY_COLLECTION.map((jewel) => (
                <option key={jewel.id} value={jewel.id}>
                  {jewel.name} — Rent: ₹{jewel.rentalPrice} / 3 days (Buy: ₹{jewel.buyPrice})
                </option>
              ))}
            </select>
          </div>

          {/* Step 3: Duration & Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                3. Rental Duration
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[3, 5, 7].map((days) => (
                  <button
                    key={days}
                    type="button"
                    onClick={() => setDurationDays(days)}
                    className={`py-2 text-xs font-semibold rounded-xl border transition ${
                      durationDays === days
                        ? 'bg-rose-700 text-white border-rose-700'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {days} Days
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                Event Date (Approx)
              </label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-stone-300 text-sm text-stone-800"
              />
            </div>
          </div>

          {/* Step 4: Add Bridesmaid Outfits */}
          <div className="bg-rose-50/50 p-4 rounded-2xl border border-rose-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-stone-800">Need Sister / Bridesmaid Lehengas?</p>
                <p className="text-[11px] text-stone-500">Add matching budget party lehengas at ₹699 each</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setBridesmaidCount(Math.max(0, bridesmaidCount - 1))}
                  className="w-8 h-8 rounded-lg bg-white border border-stone-200 font-bold text-stone-700 hover:bg-stone-100"
                >
                  -
                </button>
                <span className="w-6 text-center font-bold text-sm text-stone-800">{bridesmaidCount}</span>
                <button
                  type="button"
                  onClick={() => setBridesmaidCount(bridesmaidCount + 1)}
                  className="w-8 h-8 rounded-lg bg-white border border-stone-200 font-bold text-stone-700 hover:bg-stone-100"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50/60 p-6 rounded-2xl border border-amber-200">
            <div className="flex items-center justify-between mb-3 border-b border-amber-200/70 pb-3">
              <span className="text-xs text-stone-600">Retail Purchase Price:</span>
              <span className="text-sm font-semibold line-through text-stone-500">
                ₹{totalBuyValue.toLocaleString('en-IN')}
              </span>
            </div>

            <div className="flex items-center justify-between text-stone-900 font-serif">
              <div>
                <p className="text-xs font-sans text-rose-800 font-semibold uppercase tracking-wider">
                  Total Rental Package
                </p>
                <p className="text-2xl sm:text-3xl font-extrabold text-rose-800">
                  ₹{totalRentalCost.toLocaleString('en-IN')}
                </p>
              </div>

              <div className="text-right">
                <span className="inline-block bg-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded-full animate-bounce">
                  Save ₹{totalSavings.toLocaleString('en-IN')} ({savingsPercent}%)
                </span>
                <p className="text-[11px] text-stone-500 mt-1">
                  Refundable Security Deposit: ₹{securityDeposit.toLocaleString('en-IN')}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-amber-200/70 flex items-center gap-2 text-xs text-amber-900 font-medium">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Includes free dry-cleaning and custom master tailor fitting before pickup!</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noreferrer"
              onClick={handleCelebrate}
              className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Reserve via WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenTrialModal();
              }}
              className="py-3 px-4 rounded-xl bg-rose-700 hover:bg-rose-800 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition"
            >
              <Calendar className="w-4 h-4 text-rose-200" />
              <span>Book Store Trial Session</span>
            </button>
          </div>

          <p className="text-[11px] text-center text-stone-400">
            Visit us at White House Apartment, Bandar Bagicha, Patna (11 AM – 8 PM) for live trials.
          </p>

        </div>

      </div>
    </div>
  );
};

