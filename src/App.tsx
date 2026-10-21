import React, { useState } from 'react';
import { PRODUCTS } from './data/storeData';
import { ProductItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { CustomStitchingSection } from './components/CustomStitchingSection';
import { JewelrySection } from './components/JewelrySection';
import { ServicesSection } from './components/ServicesSection';
import { RealBridesGallery } from './components/RealBridesGallery';
import { StoreLocatorAndContact } from './components/StoreLocatorAndContact';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { RentalCalculatorModal } from './components/RentalCalculatorModal';
import { BookingTrialModal } from './components/BookingTrialModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { FloatingActions } from './components/FloatingActions';
import { Tag, ArrowRight, ShieldCheck } from 'lucide-react';

export function App() {
  const [wishlistIds, setWishlistIds] = useState<string[]>(['bz-leh-01', 'bz-rent-01']);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [trialProduct, setTrialProduct] = useState<ProductItem | null>(null);
  const [isRentalCalcOpen, setIsRentalCalcOpen] = useState(false);

  const toggleWishlist = (product: ProductItem) => {
    setWishlistIds((prev) =>
      prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id]
    );
  };

  const openTrialModal = (product?: ProductItem) => {
    setTrialProduct(product || null);
    setIsTrialModalOpen(true);
  };

  const wishlistProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans selection:bg-rose-200 selection:text-rose-950 flex flex-col justify-between">
      
      {/* Navigation */}
      <Navbar
        wishlistCount={wishlistIds.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenTrialModal={() => openTrialModal()}
        onOpenRentalCalc={() => setIsRentalCalcOpen(true)}
      />

      <main className="flex-1">
        {/* Light Hero Section */}
        <Hero
          onOpenTrialModal={() => openTrialModal()}
          onOpenRentalCalc={() => setIsRentalCalcOpen(true)}
        />

        {/* Dedicated Budget Rental Banner Hook - Simple Light Gold Accent */}
        <section id="rentals" className="bg-[#FFF9EE] py-3.5 px-4 text-stone-800 text-center border-y border-amber-200/80">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
            <span className="flex items-center gap-1.5 font-semibold text-amber-950">
              <Tag className="w-4 h-4 text-amber-600" />
              <span>Budget Bridal Lehengas & Party Wear on Rent Starting at ₹499 – ₹999</span>
            </span>
            <span className="hidden sm:inline text-stone-300">•</span>
            <span className="flex items-center gap-1.5 text-stone-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Free Body Measurements & Fitting Included</span>
            </span>
            <button
              onClick={() => setIsRentalCalcOpen(true)}
              className="bg-stone-900 text-amber-200 hover:bg-stone-800 px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 transition"
            >
              <span>Calculate Savings</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

        {/* Product Catalog with Category & Occasion Filters */}
        <ProductCatalog
          onSelectProduct={(p) => setSelectedProduct(p)}
          onToggleWishlist={toggleWishlist}
          wishlistIds={wishlistIds}
          onOpenTrialModal={(p) => openTrialModal(p)}
        />

        {/* Custom Tailoring & Blouse Cuts Section */}
        <CustomStitchingSection />

        {/* Bridal Jewelry Showcase (Rent & Buy) */}
        <JewelrySection
          onOpenTrialModal={() => openTrialModal()}
        />

        {/* Full Boutique Services */}
        <ServicesSection
          onOpenTrialModal={() => openTrialModal()}
          onOpenRentalCalc={() => setIsRentalCalcOpen(true)}
        />

        {/* Real Brides, Justdial Ratings, Instagram Reels & FAQs */}
        <RealBridesGallery />

        {/* Store Location, 3 Phone Numbers & Appointment Form */}
        <StoreLocatorAndContact />
      </main>

      {/* Light Theme Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActions
        onOpenTrialModal={() => openTrialModal()}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        isWishlisted={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
        onToggleWishlist={toggleWishlist}
        onOpenTrialModal={(p) => openTrialModal(p)}
      />

      {/* Rental Calculator Modal */}
      <RentalCalculatorModal
        isOpen={isRentalCalcOpen}
        onClose={() => setIsRentalCalcOpen(false)}
        onOpenTrialModal={() => openTrialModal()}
      />

      {/* In-Store Trial Booking Modal */}
      <BookingTrialModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
        selectedProduct={trialProduct}
      />

      {/* Wishlist / Store Trial Bag Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlistProducts}
        onRemoveItem={(id) => setWishlistIds((prev) => prev.filter((item) => item !== id))}
        onOpenTrialModal={(p) => openTrialModal(p)}
      />

    </div>
  );
}

export default App;

