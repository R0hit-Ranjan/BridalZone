import React from 'react';
import { SERVICES, STORE_INFO } from '../data/storeData';
import { 
  Sparkles, 
  Tag, 
  Scissors, 
  Crown, 
  Camera, 
  ArrowRight, 
  Check, 
  MessageCircle 
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenTrialModal: () => void;
  onOpenRentalCalc: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenTrialModal,
  onOpenRentalCalc
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Tag': return <Tag className="w-5 h-5 text-rose-700" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-rose-700" />;
      case 'Scissors': return <Scissors className="w-5 h-5 text-rose-700" />;
      case 'Crown': return <Crown className="w-5 h-5 text-rose-700" />;
      case 'Camera': return <Camera className="w-5 h-5 text-rose-700" />;
      default: return <Sparkles className="w-5 h-5 text-rose-700" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-800 text-xs font-semibold tracking-wide uppercase mb-3 border border-rose-200">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>Complete Wedding Solutions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Services by Bridal Zone Patna
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            From budget rentals and bespoke master tailoring to MUA tie-ups and photography coordination — everything under one roof.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-12">
          {SERVICES.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual / Image */}
                <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md border-2 border-white">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-stone-900 text-xs font-semibold px-3 py-1 rounded-lg border border-stone-200 shadow-sm">
                      {service.priceNote}
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className={`lg:col-span-7 space-y-4 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0 shadow-sm">
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                        {service.title}
                      </h3>
                      <p className="text-xs text-rose-700 font-semibold">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-stone-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-stone-200">
                    {service.id === 'srv-rental' ? (
                      <button
                        onClick={onOpenRentalCalc}
                        className="px-5 py-2.5 rounded-xl bg-rose-700 text-white text-xs font-semibold hover:bg-rose-800 transition shadow-sm flex items-center gap-1.5"
                      >
                        <Tag className="w-4 h-4 text-rose-200" />
                        <span>Calculate Rental Savings</span>
                      </button>
                    ) : (
                      <button
                        onClick={onOpenTrialModal}
                        className="px-5 py-2.5 rounded-xl bg-rose-700 text-white text-xs font-semibold hover:bg-rose-800 transition shadow-sm flex items-center gap-1.5"
                      >
                        <span>Book Service Trial</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}

                    <a
                      href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello Bridal Zone Patna! I am inquiring about your service: *${service.title}*`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Inquire via WhatsApp</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

