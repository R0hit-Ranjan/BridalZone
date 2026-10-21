import React, { useState } from 'react';
import { STORE_INFO } from '../data/storeData';
import { ProductItem } from '../types';
import { X, Calendar, CheckCircle2, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct?: ProductItem | null;
}

export const BookingTrialModal: React.FC<BookingTrialModalProps> = ({
  isOpen,
  onClose,
  selectedProduct
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('12:00 PM – 2:00 PM');
  const [interest, setInterest] = useState(selectedProduct ? selectedProduct.name : 'Rental Lehengas');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.6 }
    });

    const msg = `*Bridal Zone Patna - Store Trial Request*\n` +
      `👤 Name: ${name}\n` +
      `📞 Phone: ${phone}\n` +
      `📅 Preferred Date: ${date}\n` +
      `⏰ Slot: ${timeSlot}\n` +
      `👗 Outfit / Interest: ${interest}\n` +
      (selectedProduct ? `🏷️ Product ID: ${selectedProduct.id}\n` : '') +
      (notes ? `📝 Note: ${notes}\n` : '') +
      `\nPlease reserve my trial room at Bandar Bagicha!`;

    setTimeout(() => {
      window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-stone-200 overflow-hidden animate-fadeIn">
        
        {/* Header - Clean Light Cream */}
        <div className="bg-[#FAF7F2] p-6 text-stone-900 flex items-center justify-between border-b border-stone-200">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-amber-800" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Book In-Store Trial
              </h3>
              <p className="text-xs text-stone-500">
                White House Apts, Bandar Bagicha, Patna
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-stone-200 text-stone-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-stone-900">
                Appointment Requested!
              </h4>
              <p className="text-xs text-stone-600">
                Opening WhatsApp now to confirm your personalized trial slot with our boutique staff.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2 rounded-xl bg-rose-700 text-white text-xs font-semibold"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {selectedProduct && (
                <div className="flex items-center gap-3 p-3 rounded-xl bg-rose-50/60 border border-rose-200">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="text-left text-xs">
                    <p className="font-bold text-stone-900 line-clamp-1">{selectedProduct.name}</p>
                    <p className="text-stone-500">Rent: ₹{selectedProduct.rentalPrice} / Buy: ₹{selectedProduct.buyPrice}</p>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Pandey"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-rose-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 93086 30422"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-rose-500/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Trial Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-stone-300 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-stone-300 text-xs"
                  >
                    <option value="11:30 AM – 1:30 PM">11:30 AM – 1:30 PM</option>
                    <option value="1:30 PM – 3:30 PM">1:30 PM – 3:30 PM</option>
                    <option value="3:30 PM – 5:30 PM">3:30 PM – 5:30 PM</option>
                    <option value="5:30 PM – 7:30 PM">5:30 PM – 7:30 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Any specific style or color request?
                </label>
                <input
                  type="text"
                  placeholder="e.g. Red bridal lehenga, or rental party gown under ₹999"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-stone-300 text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-rose-700 hover:bg-rose-800 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Trial via WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-stone-400">
                Free personal styling & no obligation to purchase/rent!
              </p>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};

