import React, { useState } from 'react';
import { REVIEWS, FAQS, STORE_INFO } from '../data/storeData';
import { 
  Star, 
  Quote, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  Heart
} from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const RealBridesGallery: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="real-brides" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-800 text-xs font-semibold tracking-wide uppercase mb-3 border border-rose-200">
            <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
            <span>Real Stories from Patna Weddings</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            18,000+ Happy Brides & Families
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Trusted by generations across Patna and Bihar since 1995. Rated 4.0/5 on Justdial with 330+ verified customer reviews.
          </p>

          {/* Justdial & Social Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <a
              href={STORE_INFO.justdialUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-stone-200 hover:border-amber-400 transition"
            >
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-left text-xs">
                <span className="font-bold text-stone-800">Justdial Verified</span>
                <span className="text-stone-400 ml-1">(332 Ratings)</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
            </a>

            <a
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 text-white px-4 py-2 rounded-xl shadow-sm hover:opacity-90 transition text-xs font-semibold"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow @bridalzone_ on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Real Brides Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 flex flex-col justify-between hover:shadow-md transition"
            >
              <div>
                {/* Rating stars & Source */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                    {review.source}
                  </span>
                </div>

                <Quote className="w-6 h-6 text-rose-300 mb-2" />

                <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed">
                  "{review.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-3">
                {review.brideImage && (
                  <img
                    src={review.brideImage}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover border border-amber-300 shadow-sm"
                  />
                )}
                <div>
                  <p className="text-xs font-bold text-stone-900">{review.name}</p>
                  <p className="text-[11px] text-stone-500">{review.location} • {review.event}</p>
                  <p className="text-[10px] text-rose-700 font-semibold mt-0.5">
                    {review.outfitRentedOrBought}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Instagram Reels / Video Teaser Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <InstagramIcon className="w-5 h-5 text-pink-600" />
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                  Featured on Instagram Reels @bridalzone_
                </h3>
              </div>
              <p className="text-xs text-stone-500 mt-1">
                Watch our real brides twirl in their rented & customized lehengas in Patna
              </p>
            </div>

            <a
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-rose-700 hover:text-rose-800 flex items-center gap-1.5 underline"
            >
              <span>View All Reels on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                title: "Royal Velvet Red Twirl",
                views: "42.5K Views",
                img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Under ₹999 Sangeet Special",
                views: "31.8K Views",
                img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Bridal Kundan Set Unboxing",
                views: "24.2K Views",
                img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Grand Trail Reception Gown",
                views: "58.1K Views",
                img: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80"
              }
            ].map((reel, idx) => (
              <a
                key={idx}
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="relative rounded-2xl overflow-hidden aspect-[9/16] group cursor-pointer shadow border border-stone-200 block"
              >
                <img
                  src={reel.img}
                  alt={reel.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 flex flex-col justify-between p-3 text-white">
                  <div className="flex items-center justify-between">
                    <span className="bg-pink-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                      <InstagramIcon className="w-2.5 h-2.5" /> Reel
                    </span>
                    <span className="text-[10px] text-white/90">{reel.views}</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold line-clamp-1">{reel.title}</p>
                    <p className="text-[10px] text-amber-300">Tap to watch on IG ↗</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-800">
              Frequently Asked Questions
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
              Have Questions About Renting or Buying?
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm transition"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif text-sm sm:text-base font-bold text-stone-900 hover:text-rose-800"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-rose-700 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-0 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 mt-1">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};