'use client';

export default function ReservationForm() {
  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-maroon/70 mb-2">First Name</label>
          <input type="text" className="w-full bg-cream/50 border border-maroon/20 rounded-xl px-4 py-3 text-maroon focus:outline-none focus:border-maroon transition-colors" placeholder="John" />
        </div>
        <div>
          <label className="block text-sm font-medium text-maroon/70 mb-2">Last Name</label>
          <input type="text" className="w-full bg-cream/50 border border-maroon/20 rounded-xl px-4 py-3 text-maroon focus:outline-none focus:border-maroon transition-colors" placeholder="Doe" />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-maroon/70 mb-2">Email Address</label>
        <input type="email" className="w-full bg-cream/50 border border-maroon/20 rounded-xl px-4 py-3 text-maroon focus:outline-none focus:border-maroon transition-colors" placeholder="john@example.com" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-maroon/70 mb-2">Date</label>
          <input type="date" className="w-full bg-cream/50 border border-maroon/20 rounded-xl px-4 py-3 text-maroon focus:outline-none focus:border-maroon transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-medium text-maroon/70 mb-2">Guests</label>
          <select className="w-full bg-cream/50 border border-maroon/20 rounded-xl px-4 py-3 text-maroon focus:outline-none focus:border-maroon transition-colors appearance-none">
            <option>1 Person</option>
            <option>2 People</option>
            <option>3 People</option>
            <option>4 People</option>
            <option>5+ People</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-maroon/70 mb-2">Special Requests (Optional)</label>
        <textarea rows={3} className="w-full bg-cream/50 border border-maroon/20 rounded-xl px-4 py-3 text-maroon focus:outline-none focus:border-maroon transition-colors" placeholder="Allergies, special occasions, etc."></textarea>
      </div>

      <button type="submit" className="w-full bg-maroon text-cream py-4 rounded-xl font-medium hover:bg-maroon/90 transition-all flex justify-center items-center gap-2 group">
        Confirm Reservation
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </button>
      <p className="text-xs text-center text-maroon/50 mt-4">This is a demo form for showcase purposes.</p>
    </form>
  );
}