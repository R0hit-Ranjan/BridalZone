import React, { useState } from 'react';
import { STORE_INFO } from '../data/storeData';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Calendar, 
  CheckCircle2, 
  MessageCircle, 
  Building2
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const StoreLocatorAndContact: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('12:00 PM – 2:00 PM');
  const [serviceType, setServiceType] = useState('Rental Lehengas & Gowns');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const msg = `*Bridal Zone Patna - Store Trial Booking*\n` +
      `👤 Name: ${name}\n` +
      `📞 Phone: ${phone}\n` +
      `📅 Date: ${date}\n` +
      `⏰ Time Slot: ${timeSlot}\n` +
      `✨ Interest: ${serviceType}\n` +
      (notes ? `📝 Notes: ${notes}\n` : '') +
      `\nPlease confirm my VIP trial appointment at your Bandar Bagicha store!`;

    setTimeout(() => {
      window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    }, 600);
  };

  return (
    <section id="visit-store" className="py-16 sm:py-24 bg-white border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-800 text-xs font-semibold tracking-wide uppercase mb-3 border border-rose-200">
            <Building2 className="w-3.5 h-3.5 text-rose-600" />
            <span>Visit Our Patna Showroom</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Find Us in Bandar Bagicha, Patna
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Centrally located near ISKCON Temple and Dak Bunglow Road. Open all 7 days with spacious trial rooms and personal bridal stylists.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Landmark Guide */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Address Card */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-amber-200/80 shadow-sm space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-stone-900">
                    Store Address & Landmark
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-700 font-medium mt-1 leading-relaxed">
                    {STORE_INFO.address}
                  </p>
                  <div className="mt-2 text-xs text-rose-800 font-semibold bg-white px-3 py-1.5 rounded-lg inline-block border border-rose-200">
                    📍 Landmark: Near ISKCON Temple & Dak Bunglow Road
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-amber-200/60 flex flex-wrap gap-3">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(STORE_INFO.name + ' ' + STORE_INFO.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-rose-700 text-white text-xs font-semibold hover:bg-rose-800 transition shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving Directions</span>
                </a>

                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Bridal Zone! Please send me your store location on WhatsApp.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Send Location on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Phone Numbers Card */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-rose-700" />
                <h3 className="font-serif text-base font-bold text-stone-900">
                  Call Our Bridal Experts Directly
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {STORE_INFO.phoneNumbers.map((p, idx) => (
                  <a
                    key={idx}
                    href={`tel:${p.raw}`}
                    className="p-3 rounded-xl border border-stone-200 hover:border-rose-300 bg-stone-50 hover:bg-rose-50/40 transition group flex flex-col justify-between"
                  >
                    <span className="text-[10px] text-stone-500 font-medium block">
                      {p.label}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-rose-700 mt-1 block">
                      {p.number}
                    </span>
                    <span className="text-[10px] text-emerald-700 font-semibold mt-1 block">
                      Tap to Call 📞
                    </span>
                  </a>
                ))}
              </div>

              {/* Working Hours */}
              <div className="pt-2 border-t border-stone-100 flex items-center gap-3 text-xs text-stone-600">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>
                  <strong>Store Hours:</strong> Open Daily (Monday to Sunday) from <strong>11:00 AM to 8:00 PM</strong>
                </span>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm aspect-[16/9] w-full bg-stone-100">
              <iframe
                title="Bridal Zone Patna Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.940669288151!2d85.1325!3d25.6062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58525b306b9b%3A0x7d6786a345bf9236!2sWhite%20House%20Apartment%2C%20Bandar%20Bagicha%2C%20Patna%2C%20Bihar%20800001!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Column: In-Store Trial Appointment Form */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#FFFDF9] via-[#FAF6F0] to-[#F5EFEB] rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
            <div className="space-y-2 mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-rose-800 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                Complimentary Service
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Book a Free In-Store Trial Session
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                Reserve your dedicated trial room and personal styling assistant. Try multiple bridal lehengas with jewelry matching.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center bg-white rounded-2xl border border-emerald-200 space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-lg font-bold text-stone-900">
                  Trial Request Initiated!
                </h4>
                <p className="text-xs text-stone-600 max-w-sm mx-auto">
                  We are opening WhatsApp so our bridal desk can instantly confirm your slot and prepare your dressing room.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-bold text-rose-700 underline"
                >
                  Book another slot
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Swati Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Preferred Trial Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Time Slot
                    </label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                    >
                      <option value="11:30 AM – 1:30 PM">11:30 AM – 1:30 PM (Morning)</option>
                      <option value="1:30 PM – 3:30 PM">1:30 PM – 3:30 PM (Afternoon)</option>
                      <option value="3:30 PM – 5:30 PM">3:30 PM – 5:30 PM (Evening)</option>
                      <option value="5:30 PM – 7:30 PM">5:30 PM – 7:30 PM (Night Slot)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    What are you looking for?
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                  >
                    <option value="Budget Rental Lehengas (₹499 - ₹2,999)">Budget Rental Lehengas (₹499 - ₹2,999)</option>
                    <option value="Heavy Bridal Lehenga Purchase">Heavy Bridal Lehenga Purchase</option>
                    <option value="Reception Trail Gown Rental">Reception Trail Gown Rental</option>
                    <option value="Custom Stitching & Master Blouse Tailoring">Custom Stitching & Master Blouse Tailoring</option>
                    <option value="Artificial Bridal Jewelry Combo (Rent/Buy)">Artificial Bridal Jewelry Combo (Rent/Buy)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Special Requests or Event Details (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Wedding date 15th Dec, want deep red velvet with heavy zardozi"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-rose-700 hover:bg-rose-800 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow transition"
                >
                  <Calendar className="w-4 h-4 text-rose-200" />
                  <span>Confirm Free Trial & Connect on WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-stone-400">
                  🔒 No advance payment required for in-store trial appointments.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

