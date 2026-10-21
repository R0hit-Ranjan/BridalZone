import React, { useState, useMemo } from 'react';
import { PRODUCTS, STORE_INFO } from '../data/storeData';
import { ProductItem } from '../types';
import { 
  Heart, 
  Eye, 
  MessageCircle, 
  Sparkles, 
  Filter, 
  Search, 
  Calendar, 
  Check, 
  Tag
} from 'lucide-react';

interface ProductCatalogProps {
  onSelectProduct: (product: ProductItem) => void;
  onToggleWishlist: (product: ProductItem) => void;
  wishlistIds: string[];
  onOpenTrialModal: (product?: ProductItem) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectProduct,
  onToggleWishlist,
  wishlistIds,
  onOpenTrialModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedOccasion, setSelectedOccasion] = useState<string>('all');
  const [rentOnlyFilter, setRentOnlyFilter] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'rent-low' | 'rent-high' | 'buy-low'>('featured');

  const categories = [
    { id: 'all', label: 'All Collections' },
    { id: 'rental-special', label: 'Budget Rentals (₹499 - ₹999)' },
    { id: 'bridal-lehenga', label: 'Bridal Lehengas' },
    { id: 'reception-gown', label: 'Reception Gowns' },
    { id: 'saree', label: 'Banarasi Sarees' },
    { id: 'custom-suit', label: 'Custom Suits & Shararas' },
  ];

  const occasions = [
    'all',
    'Wedding Day',
    'Sangeet',
    'Mehendi',
    'Reception',
    'Engagement'
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      if (rentOnlyFilter && !item.availableForRent) {
        return false;
      }
      if (selectedOccasion !== 'all' && !item.occasion.toLowerCase().includes(selectedOccasion.toLowerCase())) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesFabric = item.fabric?.toLowerCase().includes(query);
        const matchesColor = item.color.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesFabric && !matchesColor) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'rent-low') return a.rentalPrice - b.rentalPrice;
      if (sortBy === 'rent-high') return b.rentalPrice - a.rentalPrice;
      if (sortBy === 'buy-low') return a.buyPrice - b.buyPrice;
      return 0;
    });
  }, [selectedCategory, selectedOccasion, rentOnlyFilter, searchQuery, sortBy]);

  return (
    <section id="collections" className="py-16 sm:py-20 bg-[#FAF8F5] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-800 text-xs font-semibold tracking-wide uppercase mb-3 border border-rose-200">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>Curated Bridal & Occasion Wear</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Bridal Lehengas & Rental Catalog
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Every piece is available for either direct purchase or budget rental in Patna. Includes free size alterations by our master tailors.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-stone-200 mb-8 space-y-4">
          
          {/* Top Row: Search and Sort */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search lehengas, velvet, organza, red, rani pink..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
              />
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs text-stone-500 font-medium">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-2 rounded-xl border border-stone-200 text-xs font-medium text-stone-700 bg-white focus:outline-none focus:border-rose-500"
                >
                  <option value="featured">Featured Outfits</option>
                  <option value="rent-low">Rental Price: Low to High</option>
                  <option value="rent-high">Rental Price: High to Low</option>
                  <option value="buy-low">Buy Price: Low to High</option>
                </select>
              </div>

              <label className="flex items-center gap-2 px-3 py-2 rounded-xl border border-rose-200 bg-rose-50/50 cursor-pointer text-xs font-semibold text-rose-900">
                <input
                  type="checkbox"
                  checked={rentOnlyFilter}
                  onChange={(e) => setRentOnlyFilter(e.target.checked)}
                  className="rounded text-rose-700 focus:ring-rose-600"
                />
                <span>Rentals Only</span>
              </label>
            </div>
          </div>

          {/* Category Tabs - Clean Light Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                    active
                      ? 'bg-rose-700 text-white shadow-sm'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200/80'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Occasion Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-stone-100 text-xs">
            <span className="text-stone-500 font-medium flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Occasion:
            </span>
            {occasions.map((occ) => (
              <button
                key={occ}
                onClick={() => setSelectedOccasion(occ)}
                className={`px-2.5 py-1 rounded-lg capitalize transition ${
                  selectedOccasion === occ
                    ? 'bg-amber-100 text-amber-900 font-bold border border-amber-300'
                    : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                {occ === 'all' ? 'All Occasions' : occ}
              </button>
            ))}
          </div>

        </div>

        {/* Results Count Banner */}
        <div className="flex items-center justify-between mb-6 text-xs text-stone-500">
          <span>
            Showing <strong className="text-stone-800">{filteredProducts.length}</strong> bridal & party designs
          </span>
          <span className="flex items-center gap-1 text-emerald-700 font-medium">
            <Check className="w-3.5 h-3.5" /> All pieces sanitised and dry-cleaned
          </span>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center max-w-md mx-auto border border-stone-200">
            <Tag className="w-10 h-10 text-stone-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-stone-800">No matching outfits found</h3>
            <p className="text-xs text-stone-500 mt-1 mb-4">
              Try adjusting your search filters or browse our full bridal inventory.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedOccasion('all');
                setRentOnlyFilter(false);
                setSearchQuery('');
              }}
              className="text-xs bg-rose-700 text-white px-4 py-2 rounded-xl font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              const isWishlisted = wishlistIds.includes(product.id);
              const isUnder1000Rent = product.rentalPrice <= 999;

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-stone-200/90 flex flex-col group"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 cursor-pointer" onClick={() => onSelectProduct(product)}>
                    <img
                      src={product.image}
                      alt={product.name}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80';
                      }}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay on bottom of image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProduct(product);
                        }}
                        className="w-full bg-white text-stone-900 py-2 rounded-xl text-xs font-bold hover:bg-stone-50 flex items-center justify-center gap-1.5 shadow"
                      >
                        <Eye className="w-4 h-4 text-rose-700" />
                        <span>View Fabric & Specs</span>
                      </button>
                    </div>

                    {/* Badge top-left */}
                    {product.badge && (
                      <div className="absolute top-3 left-3 bg-white/95 text-rose-900 text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-sm border border-stone-200">
                        {product.badge}
                      </div>
                    )}

                    {/* Rental Price Pill (Highlight ₹499 - ₹999) */}
                    {isUnder1000Rent && (
                      <div className="absolute bottom-3 left-3 bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                        Rent @ ₹{product.rentalPrice} / 3 Days
                      </div>
                    )}

                    {/* Wishlist Heart Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(product);
                      }}
                      className={`absolute top-3 right-3 p-2 rounded-full shadow-sm transition ${
                        isWishlisted 
                          ? 'bg-rose-50 text-rose-600' 
                          : 'bg-white/90 backdrop-blur-sm text-stone-600 hover:text-rose-600 hover:bg-white'
                      }`}
                      aria-label="Save to Wishlist"
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-600 text-rose-600' : ''}`} />
                    </button>
                  </div>

                  {/* Content Container */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Occasion / Category tag */}
                      <div className="flex items-center justify-between text-[11px] text-stone-500 mb-1.5">
                        <span className="font-semibold text-rose-800 uppercase tracking-wider">
                          {product.occasion}
                        </span>
                        <span>★ {product.rating} ({product.reviewCount})</span>
                      </div>

                      {/* Title */}
                      <h3 
                        onClick={() => onSelectProduct(product)}
                        className="font-serif text-base sm:text-lg font-bold text-stone-900 line-clamp-1 hover:text-rose-800 cursor-pointer"
                        title={product.name}
                      >
                        {product.name}
                      </h3>

                      {/* Description */}
                      <p className="text-stone-600 text-xs mt-1.5 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Fabric / Work tag */}
                      {product.fabric && (
                        <div className="mt-2 text-[11px] text-stone-600 bg-stone-100 rounded-md px-2 py-1 inline-block">
                          🧵 {product.fabric}
                        </div>
                      )}
                    </div>

                    {/* Dual Pricing Strip */}
                    <div className="mt-4 pt-3 border-t border-stone-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[10px] text-stone-400 uppercase font-semibold">Rental Price</p>
                          <p className="text-base sm:text-lg font-bold text-rose-800">
                            ₹{product.rentalPrice.toLocaleString('en-IN')}{' '}
                            <span className="text-[11px] text-stone-500 font-normal">/ 3 days</span>
                          </p>
                        </div>

                        <div className="text-right">
                          <p className="text-[10px] text-stone-400 uppercase font-semibold">Buy Price</p>
                          <p className="text-sm font-semibold text-stone-700">
                            ₹{product.buyPrice.toLocaleString('en-IN')}
                          </p>
                        </div>
                      </div>

                      {/* Quick Action Buttons */}
                      <div className="mt-3.5 grid grid-cols-2 gap-2">
                        <button
                          onClick={() => onOpenTrialModal(product)}
                          className="w-full py-2 px-2.5 rounded-xl border border-stone-300 text-stone-800 hover:bg-stone-50 text-xs font-semibold flex items-center justify-center gap-1 transition"
                        >
                          <Calendar className="w-3.5 h-3.5 text-stone-600" />
                          <span>Store Trial</span>
                        </button>

                        <a
                          href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello Bridal Zone! I want to check availability and book this outfit:\n\n*${product.name}*\nRent: ₹${product.rentalPrice} / Buy: ₹${product.buyPrice}\nProduct ID: ${product.id}\nLink: ${product.image}`)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full py-2 px-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-1 transition shadow-sm"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

