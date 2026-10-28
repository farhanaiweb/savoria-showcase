"use client";

import { useState } from "react";
import ReservationForm from "./ReservationForm";
import { ArrowRight, Menu as MenuIcon, Star, X } from "lucide-react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen font-sans bg-cream text-maroon">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-maroon/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-serif text-2xl font-bold tracking-tight">
            Savoria<span className="text-gold">.</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-maroon/80">
            <a href="#home" className="hover:text-maroon transition-colors">Home</a>
            <a href="#menu" className="hover:text-maroon transition-colors">Our Menu</a>
            <a href="#about" className="hover:text-maroon transition-colors">About Us</a>
            <a href="#gallery" className="hover:text-maroon transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-maroon transition-colors">Contact</a>
          </div>

          <button className="hidden md:flex items-center gap-2 bg-maroon text-cream px-6 py-2.5 rounded-full text-sm font-medium hover:bg-maroon/90 transition-all">
            Reserve a Table
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-maroon z-50 relative" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-cream border-b border-maroon/10 shadow-lg py-4 px-6 flex flex-col gap-4">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-maroon font-medium pb-2 border-b border-maroon/5">Home</a>
            <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="text-maroon font-medium pb-2 border-b border-maroon/5">Our Menu</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-maroon font-medium pb-2 border-b border-maroon/5">About Us</a>
            <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-maroon font-medium pb-2 border-b border-maroon/5">Gallery</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-maroon font-medium pb-2 border-b border-maroon/5">Contact</a>
            <button className="bg-maroon text-cream px-6 py-3 rounded-full text-sm font-medium mt-2">
              Reserve a Table
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 border border-maroon/20 rounded-full px-4 py-1.5 text-xs font-medium text-maroon/70 mb-6 bg-white/50">
            <Star size={12} className="fill-gold text-gold" />
            Crafted with Passion, Served with Elegance
          </span>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight mb-8">
            Experience the Art of <br className="hidden md:block"/> Modern Gastronomy
          </h1>
          
          <p className="text-maroon/70 max-w-xl text-lg mb-10">
            A culinary journey where timeless recipes meet contemporary innovation. Discover flavors that tell a story.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-maroon text-cream px-8 py-4 rounded-full text-sm font-medium hover:bg-maroon/90 transition-all group">
              Explore Our Menu
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-2 border border-maroon/20 px-8 py-4 rounded-full text-sm font-medium hover:bg-white/50 transition-all">
              Book an Experience
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-16">
          <div className="md:col-span-2 relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
              alt="Fine dining restaurant interior" 
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="relative h-[200px] md:h-[238px] rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" 
                alt="Gourmet dish plating" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="bg-maroon rounded-3xl p-6 md:p-8 flex flex-col justify-center text-cream h-[200px] md:h-[238px]">
              <span className="text-gold text-sm font-medium mb-2">Our Promise</span>
              <h3 className="font-serif text-2xl md:text-3xl leading-tight mb-4">Fresh ingredients, extraordinary flavors.</h3>
              <a href="#about" className="text-sm underline underline-offset-4 hover:text-gold transition-colors">Learn our story</a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-cream py-24 border-t border-maroon/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-medium border border-maroon/20 rounded-full px-4 py-1.5 inline-block mb-6">Know About Us</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
              Blending tradition & innovation to create unforgettable experiences
            </h2>
            <p className="text-maroon/70 mb-8 text-lg">
              At Savoria, we believe that dining is more than just eating. It is an experience that engages all the senses. Our chefs carefully curate each dish to bring you the perfect harmony of heritage and modern techniques.
            </p>
            <button className="bg-maroon text-cream px-8 py-3 rounded-full text-sm font-medium hover:bg-maroon/90 transition-all">
              Read Our Story
            </button>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
              alt="Our chefs at work" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-24 bg-maroon text-cream rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-sm font-medium mb-4 block">Discover Our Menu</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Your next favorite meal awaits</h2>
            <p className="text-cream/60">Explore our seasonal favorites, crafted to perfection.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Soups & Salads", desc: "Light, healthy, and packed with flavor", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop" },
              { title: "Main Course", desc: "Bold flavors and perfect portions", img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop" },
              { title: "Beverages & Drinks", desc: "Sip, savor, and refresh your senses", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 rounded-3xl overflow-hidden group">
                <div className="h-64 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl mb-2">{item.title}</h3>
                  <p className="text-cream/60 mb-6">{item.desc}</p>
                  <a href="#" className="text-sm text-gold hover:underline underline-offset-4">View Menu →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-maroon text-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-sm font-medium mb-4 block">A Feast for the Eyes</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Taste the vibes through our gallery</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {/* Polaroid Style Images */}
            <div className="bg-white p-2 md:p-3 pb-8 md:pb-10 rounded-sm transform -rotate-3 hover:rotate-0 transition-transform duration-300 shadow-xl w-64 md:w-72">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop" alt="Fine dining" className="w-full h-48 md:h-56 object-cover mb-4" />
              <p className="text-maroon font-serif text-center text-lg">Perfect Ambiance</p>
            </div>
            
            <div className="bg-white p-2 md:p-3 pb-8 md:pb-10 rounded-sm transform rotate-2 hover:rotate-0 transition-transform duration-300 shadow-xl w-64 md:w-72 mt-8">
              <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800&auto=format&fit=crop" alt="Food plating" className="w-full h-48 md:h-56 object-cover mb-4" />
              <p className="text-maroon font-serif text-center text-lg">Art on a Plate</p>
            </div>
            
            <div className="bg-white p-2 md:p-3 pb-8 md:pb-10 rounded-sm transform -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xl w-64 md:w-72">
              <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop" alt="Happy customers" className="w-full h-48 md:h-56 object-cover mb-4" />
              <p className="text-maroon font-serif text-center text-lg">Unforgettable Moments</p>
            </div>
            
            <div className="bg-white p-2 md:p-3 pb-8 md:pb-10 rounded-sm transform rotate-3 hover:rotate-0 transition-transform duration-300 shadow-xl w-64 md:w-72 mt-6">
              <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop" alt="Craft drinks" className="w-full h-48 md:h-56 object-cover mb-4" />
              <p className="text-maroon font-serif text-center text-lg">Crafted Beverages</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-xs font-medium border border-maroon/20 rounded-full px-4 py-1.5 inline-block mb-6">Customer Reviews</span>
              <h2 className="font-serif text-4xl md:text-5xl">Where every visit becomes a great memory</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { text: "Every bite was a burst of flavor! The ambiance, service, and presentation were flawless. Definitely one of the best dining experiences.", name: "Daniel Johnson", location: "California, USA" },
              { text: "The staff was incredibly welcoming, and the dishes were beautifully prepared. You can tell they use the freshest ingredients.", name: "Sophia Lee", location: "New York, USA" },
              { text: "We celebrated our anniversary here, and it was perfect. From the decor to the desserts, it was an unforgettable evening.", name: "Emily Carter", location: "Texas, USA" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-maroon/10 flex flex-col justify-between shadow-sm">
                <p className="text-maroon/80 italic mb-6">"{item.text}"</p>
                <div>
                  <div className="flex gap-1 mb-4 text-gold">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
                  </div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-maroon/50">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVATION / CONTACT */}
      <section id="contact" className="py-24 bg-cream relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col lg:flex-row border border-maroon/10">
            
            {/* Left Side: Text & Info */}
            <div className="lg:w-1/2 p-12 lg:p-16 bg-maroon text-cream flex flex-col justify-center relative overflow-hidden">
              {/* Decorative circle */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
              
              <span className="text-gold text-sm font-medium mb-4 block relative z-10">Reserve Your Table</span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6 relative z-10">
                Book your spot for an unforgettable evening.
              </h2>
              <p className="text-cream/70 mb-10 relative z-10">
                Whether it's a romantic dinner or a celebration with friends, we promise an experience that will linger in your memory long after the last bite.
              </p>
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gold">📍</div>
                  <span className="text-cream/80">123 Culinary Ave, New York, NY</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gold">📞</div>
                  <span className="text-cream/80">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:w-1/2 p-12 lg:p-16 bg-white">
              <ReservationForm />
            </div>
            
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-maroon text-cream py-16 mt-12 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h2 className="font-serif text-4xl mb-6">Savoria<span className="text-gold">.</span></h2>
            <p className="text-cream/60 max-w-sm mb-6">
              Elevating the dining experience through passion, precision, and the finest ingredients.
            </p>
            <div className="flex gap-4 text-sm text-cream/60">
              <a href="#" className="hover:text-gold transition-colors">Instagram</a>
              <a href="#" className="hover:text-gold transition-colors">Facebook</a>
              <a href="#" className="hover:text-gold transition-colors">Twitter</a>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-gold">Contact</h4>
            <ul className="space-y-2 text-cream/60 text-sm">
              <li>hello@savoria.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Culinary Ave, NY</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-gold">Opening Hours</h4>
            <ul className="space-y-2 text-cream/60 text-sm">
              <li>Mon - Fri: 5pm - 11pm</li>
              <li>Sat - Sun: 12pm - 12am</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-cream/10 text-center text-cream/40 text-sm">
          © 2024 Savoria. All rights reserved. Designed for portfolio showcase.
        </div>
      </footer>
    </main>
  );
}