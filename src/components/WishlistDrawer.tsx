import React from 'react';
import { ProductItem } from '../types';
import { STORE_INFO } from '../data/storeData';
import { X, Trash2, MessageCircle, Calendar, Heart } from 'lucide-react';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistItems: ProductItem[];
  onRemoveItem: (id: string) => void;
  onOpenTrialModal: (product?: ProductItem) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistItems,
  onRemoveItem,
  onOpenTrialModal
}) => {
  if (!isOpen) return null;

  const totalRental = wishlistItems.reduce((acc, curr) => acc + curr.rentalPrice, 0);
  const totalBuy = wishlistItems.reduce((acc, curr) => acc + curr.buyPrice, 0);

  const handleSendWishlist = () => {
    let msg = `*Bridal Zone Patna - My In-Store Trial Wishlist*\n` +
      `Hello! I saved these ${wishlistItems.length} outfit(s) for trial at your Bandar Bagicha store:\n\n`;

    wishlistItems.forEach((item, index) => {
      msg += `${index + 1}. *${item.name}*\n   Rent: ₹${item.rentalPrice} | Buy: ₹${item.buyPrice} | ID: ${item.id}\n`;
    });

    msg += `\n💰 Total Rental Est.: ₹${totalRental.toLocaleString('en-IN')}\n` +
      `Please let me know when these outfits are available for a trial fitting!`;

    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-sm flex justify-end">
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-slideLeft">
        
        {/* Drawer Header - Clean Light Cream */}
        <div className="p-5 border-b border-stone-200 bg-[#FAF7F2] text-stone-900 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Heart className="w-5 h-5 text-rose-600 fill-rose-600" />
            <div>
              <h3 className="font-serif text-lg font-bold">
                My Store Trial Bag ({wishlistItems.length})
              </h3>
              <p className="text-[11px] text-stone-500">
                Outfits saved to try at Bandar Bagicha store
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-stone-200 text-stone-600 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Outfits List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {wishlistItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16 text-stone-400">
              <Heart className="w-12 h-12 text-stone-200 stroke-1 mb-3" />
              <p className="text-sm font-bold text-stone-700">Your Trial Bag is Empty</p>
              <p className="text-xs text-stone-500 max-w-xs mt-1">
                Click the heart icon on any bridal lehenga, gown, or jewelry set to save it for your visit.
              </p>
            </div>
          ) : (
            wishlistItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-3.5 p-3 rounded-2xl border border-stone-200 bg-stone-50/50 hover:bg-white transition shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-18 h-24 sm:w-20 sm:h-24 object-cover rounded-xl shrink-0"
                />

                <div className="flex-1 flex flex-col justify-between text-xs">
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-serif font-bold text-stone-900 line-clamp-1">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-stone-400 hover:text-rose-600 p-1"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-stone-500 text-[11px] mt-0.5">{item.occasion}</p>
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-stone-100">
                    <div>
                      <span className="text-[10px] text-stone-400 block">Rent</span>
                      <span className="font-bold text-rose-800">₹{item.rentalPrice}</span>
                    </div>

                    <div>
                      <span className="text-[10px] text-stone-400 block">Buy</span>
                      <span className="font-semibold text-stone-700">₹{item.buyPrice}</span>
                    </div>

                    <button
                      onClick={() => {
                        onClose();
                        onOpenTrialModal(item);
                      }}
                      className="px-2.5 py-1 rounded-lg bg-rose-700 text-white text-[11px] font-semibold hover:bg-rose-800"
                    >
                      Book Trial
                    </button>
                  </div>

                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {wishlistItems.length > 0 && (
          <div className="p-5 border-t border-stone-200 bg-stone-50 space-y-3">
            <div className="flex items-center justify-between text-xs text-stone-600">
              <span>Total Est. Rental Value:</span>
              <span className="font-bold text-base text-rose-800">
                ₹{totalRental.toLocaleString('en-IN')}
              </span>
            </div>

            <button
              onClick={handleSendWishlist}
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Wishlist to Boutique on WhatsApp</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenTrialModal();
              }}
              className="w-full py-2.5 rounded-xl border border-stone-300 text-stone-700 hover:bg-white text-xs font-semibold flex items-center justify-center gap-2 transition"
            >
              <Calendar className="w-4 h-4 text-stone-700" />
              <span>Schedule In-Store Visit for All</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

