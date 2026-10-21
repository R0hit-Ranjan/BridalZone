import React, { useState } from 'react';
import { STORE_INFO } from '../data/storeData';
import { 
  Scissors, 
  CheckCircle2, 
  MessageCircle, 
  Clock, 
  Layers 
} from 'lucide-react';

export const CustomStitchingSection: React.FC = () => {
  const [selectedNeckline, setSelectedNeckline] = useState<string>('Deep V-Neck (Sabya Cut)');
  const [selectedBack, setSelectedBack] = useState<string>('Backless with Tassels & Latkans');
  const [needCancan, setNeedCancan] = useState<boolean>(true);
  const [garmentType, setGarmentType] = useState<string>('Bridal Blouse & Lehenga Flare');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');

  const necklines = [
    'Deep V-Neck (Sabya Cut)',
    'Classic Sweetheart Cut',
    'Royal Queen Anne Neck',
    'High Neck / Closed Collar',
    'Illusion Net Sheer Neck'
  ];

  const backStyles = [
    'Backless with Tassels & Latkans',
    'Deep U-Cut with Tie-Strings',
    'Diamond Cutout / Window Back',
    'Criss-Cross Tie Straps',
    'Full Sheer Embroidered Back'
  ];

  const handleWhatsAppInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*Bridal Zone Patna - Custom Stitching Consultation*\n` +
      `👤 Name: ${customerName || 'Interested Customer'}\n` +
      `📞 Contact: ${customerPhone || 'Not provided'}\n` +
      `👗 Garment: ${garmentType}\n` +
      `✂️ Front Neckline: ${selectedNeckline}\n` +
      `🪡 Back Style: ${selectedBack}\n` +
      `✨ Cancan Volume: ${needCancan ? 'Double Heavy Flare Cancan' : 'Standard'}\n\n` +
      `Hi Bridal Zone master ji! I would like to get my outfit custom stitched and tailored. Please share booking slot.`;

    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="custom-stitching" className="py-16 sm:py-24 bg-white border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-800 text-xs font-semibold tracking-wide uppercase mb-3 border border-rose-200">
            <Scissors className="w-3.5 h-3.5 text-rose-600" />
            <span>In-House Master Tailors Since 1995</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Customized Stitching & Handwork Suits
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            No ready-made outfit fits like a bespoke creation. Bring your own fabric or pick from our boutique swatches. Crafted to your exact measurements at Bandar Bagicha, Patna.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-stone-200/90 relative overflow-hidden group hover:border-rose-300 transition shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center mb-4 shadow-sm">
              <Scissors className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
              Celebrity Blouse Tailoring
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Deep back, Sabya-cut V, sweetheart necklines with premium cup padding that gives seamless structure without awkward bra straps.
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-stone-700">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Double stitched inner lining</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Designer latkans and doris included</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-stone-200/90 relative overflow-hidden group hover:border-amber-300 transition shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4 shadow-sm">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
              Heavy Cancan Flare Installation
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Turn any ordinary lehenga into a high-flare Bollywood masterpiece. We install multi-layered stiff net cancan for a full 360-degree round twirl.
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-stone-700">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Buckram border and double ring support</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Detachable option for easy storage</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-stone-200/90 relative overflow-hidden group hover:border-emerald-300 transition shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4 shadow-sm">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
              Express 48h Delivery
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Wedding date just around the corner? Our express tailoring service delivers perfectly fitted blouses, suits, and lehenga alterations in 48 hours.
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-stone-700">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Same-day alteration on trials</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero fitting compromise guarantee</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Interactive Custom Stitching Configurator Card */}
        <div className="bg-gradient-to-br from-[#FFFBF7] via-[#FFF8F2] to-[#FFF5ED] rounded-3xl p-6 sm:p-10 border border-amber-200/70 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-800 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                Interactive Customizer
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Design Your Custom Blouse & Suit
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Choose your favorite necklines, back cuts, and cancan preferences below. Send your design directly to our master tailors for a quick estimate and booking slot!
              </p>

              <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-2 text-xs text-stone-700 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">Selected Front:</span>
                  <span className="font-bold text-rose-800">{selectedNeckline}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">Selected Back:</span>
                  <span className="font-bold text-rose-800">{selectedBack}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">Heavy Cancan:</span>
                  <span className="font-bold text-emerald-700">{needCancan ? 'Yes (+ Flare Boost)' : 'Standard'}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-stone-200 space-y-5">
              <form onSubmit={handleWhatsAppInquiry} className="space-y-4">
                
                {/* Garment Selection */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Select Outfit Type
                  </label>
                  <select
                    value={garmentType}
                    onChange={(e) => setGarmentType(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm font-medium focus:border-rose-500"
                  >
                    <option value="Bridal Blouse & Lehenga Flare">Bridal Blouse + Heavy Cancan Lehenga</option>
                    <option value="Designer Handwork Sharara Suit">Handwork Zardozi Sharara Suit</option>
                    <option value="Bespoke Anarkali Gown">Flared Floor-Length Anarkali Gown</option>
                    <option value="Saree Blouse Express Stitching">Designer Saree Blouse (Express)</option>
                    <option value="Custom Alteration & Resizing">Alteration & Resizing of Existing Outfit</option>
                  </select>
                </div>

                {/* Necklines Pills */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Front Neckline Style
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {necklines.map((neck) => (
                      <button
                        key={neck}
                        type="button"
                        onClick={() => setSelectedNeckline(neck)}
                        className={`text-xs px-3 py-1.5 rounded-xl border transition ${
                          selectedNeckline === neck
                            ? 'bg-rose-700 text-white border-rose-700 font-semibold'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        {neck}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Back Style Pills */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Back Cut & Dori Style
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {backStyles.map((back) => (
                      <button
                        key={back}
                        type="button"
                        onClick={() => setSelectedBack(back)}
                        className={`text-xs px-3 py-1.5 rounded-xl border transition ${
                          selectedBack === back
                            ? 'bg-rose-700 text-white border-rose-700 font-semibold'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        {back}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Cancan Checkbox */}
                <div className="pt-1">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-stone-800">
                    <input
                      type="checkbox"
                      checked={needCancan}
                      onChange={(e) => setNeedCancan(e.target.checked)}
                      className="rounded text-rose-700 focus:ring-rose-600 w-4 h-4"
                    />
                    <span>Add double-layered stiff cancan for dramatic Bollywood flare (+₹499)</span>
                  </label>
                </div>

                {/* User Info inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name (e.g. Priya Roy)"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:border-rose-600"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp Number"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:border-rose-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Custom Stitching Request on WhatsApp</span>
                </button>

              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

