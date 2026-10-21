import React from 'react';
import { ProductItem } from '../types';
import { STORE_INFO } from '../data/storeData';
import { 
  X, 
  Sparkles, 
  ShieldCheck, 
  MessageCircle, 
  Calendar, 
  Heart, 
  Scissors, 
  RotateCcw
} from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: ProductItem) => void;
  onOpenTrialModal: (product: ProductItem) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onOpenTrialModal
}) => {
  if (!product) return null;

  const whatsappMessage = `*Bridal Zone Patna - Outfit Inquiry*\n` +
    `Hello! I am interested in this outfit:\n` +
    `👗 *${product.name}*\n` +
    `💰 Rental Price: ₹${product.rentalPrice} / 3 Days\n` +
    `🛍️ Purchase Price: ₹${product.buyPrice}\n` +
    `🧵 Fabric: ${product.fabric || 'N/A'}\n` +
    `🎨 Color: ${product.color}\n` +
    `Product ID: ${product.id}\n\n` +
    `Please let me know if it is available for trial at your Bandar Bagicha store!`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-stone-200 overflow-hidden animate-fadeIn my-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/95 hover:bg-white text-stone-700 shadow-md border border-stone-200 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Column: Image */}
          <div className="relative bg-stone-100 aspect-[4/5] md:aspect-auto">
            <img
              src={product.image}
              alt={product.name}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80';
              }}
              className="w-full h-full object-cover object-center"
            />
            {product.badge && (
              <div className="absolute top-4 left-4 bg-white/95 text-rose-800 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm border border-stone-200">
                {product.badge}
              </div>
            )}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl text-stone-900 text-xs flex items-center justify-between border border-stone-200 shadow-sm">
              <span>Ready for In-Store Trial</span>
              <span className="text-rose-700 font-semibold">Patna Showroom</span>
            </div>
          </div>

          {/* Right Column: Details & Pricing */}
          <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            <div className="space-y-4">
              
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs text-stone-500">
                <span className="font-semibold text-rose-700 uppercase tracking-wider">
                  {product.occasion}
                </span>
                <span className="bg-amber-50 text-amber-900 border border-amber-200 px-2.5 py-0.5 rounded-md font-bold">
                  ★ {product.rating} ({product.reviewCount} Reviews)
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                {product.name}
              </h2>

              {/* Description */}
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                {product.description}
              </p>

              {/* Specifications Pills */}
              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-stone-200 space-y-2 text-xs">
                {product.fabric && (
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">Fabric & Material:</span>
                    <span className="font-semibold text-stone-800">{product.fabric}</span>
                  </div>
                )}
                {product.workType && (
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">Embroidery & Work:</span>
                    <span className="font-semibold text-stone-800">{product.workType}</span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">Color Palette:</span>
                  <span className="font-semibold text-stone-800">{product.color}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">Customization:</span>
                  <span className="font-semibold text-emerald-700">
                    {product.canBeCustomized ? 'Free Body Fitting & Alterations Included' : 'Size Alterations Available'}
                  </span>
                </div>
              </div>

              {/* Pricing Cards: Rent vs Buy */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                {/* Rent Option */}
                <div className="p-3.5 rounded-xl border border-rose-200 bg-rose-50/50">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-800 bg-rose-100 px-2 py-0.5 rounded">
                    Rental Option
                  </span>
                  <p className="text-xl sm:text-2xl font-bold text-rose-800 mt-1.5">
                    ₹{product.rentalPrice.toLocaleString('en-IN')}
                  </p>
                  <p className="text-[11px] text-stone-500">
                    For {product.rentalDurationDays} Days
                  </p>
                  <p className="text-[10px] text-stone-400 mt-1">
                    Refundable Deposit: ₹{product.rentalSecurityDeposit}
                  </p>
                </div>

                {/* Buy Option */}
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-600 bg-stone-200 px-2 py-0.5 rounded">
                    Direct Purchase
                  </span>
                  <p className="text-xl sm:text-2xl font-bold text-stone-900 mt-1.5">
                    ₹{product.buyPrice.toLocaleString('en-IN')}
                  </p>
                  <p className="text-[11px] text-stone-500">
                    Own it Forever
                  </p>
                  <p className="text-[10px] text-emerald-600 font-semibold mt-1">
                    Free Custom Stitching
                  </p>
                </div>
              </div>

              {/* Guarantee highlights */}
              <div className="grid grid-cols-2 gap-2 text-[11px] text-stone-600 pt-2">
                <div className="flex items-center gap-1.5">
                  <Scissors className="w-3.5 h-3.5 text-rose-700" />
                  <span>Custom blouse & waist fitting</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Sanitized & dry-cleaned</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <RotateCcw className="w-3.5 h-3.5 text-blue-600" />
                  <span>Instant deposit refund</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Matching jewelry available</span>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="space-y-2.5 pt-6 border-t border-stone-100 mt-6">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onOpenTrialModal(product);
                  }}
                  className="w-full py-3 px-3 rounded-xl bg-rose-700 hover:bg-rose-800 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition"
                >
                  <Calendar className="w-4 h-4 text-rose-200" />
                  <span>Book Store Trial</span>
                </button>

                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Rent on WhatsApp</span>
                </a>
              </div>

              <button
                onClick={() => onToggleWishlist(product)}
                className={`w-full py-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition ${
                  isWishlisted
                    ? 'border-rose-300 bg-rose-50 text-rose-700'
                    : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                }`}
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-600 text-rose-600' : ''}`} />
                <span>{isWishlisted ? 'Saved in Your Trial Bag' : 'Save for Store Trial'}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

