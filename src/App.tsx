import React from 'react';
import { motion } from 'motion/react';
import { Heart, ShieldCheck, DollarSign, Lock, Sun, Zap, CheckCircle2, Share2, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function App() {
  const costs = [
    { item: 'Solar panels', cost: 1150 },
    { item: 'Inverter system', cost: 850 },
    { item: 'Battery storage', cost: 650 },
    { item: 'Installation & wiring', cost: 250 },
    { item: 'Delivery & setup', cost: 100 },
  ];
  const totalCost = costs.reduce((acc, curr) => acc + curr.cost, 0);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/png_logo.png" alt="Trustskep Global Logo" className="h-10 object-contain" onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }} />
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl tracking-tight text-slate-900">
                Trustskep <span className="text-blue-600">Global</span>
              </span>
            </div>
          </div>
          <div>
            <a 
              href="https://www.zeffy.com/en-US/donation-form/trustskep-global-solar-panels-for-tech-center" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-sm"
            >
              Donate Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="flex flex-col gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-6">
              <Sun className="w-4 h-4 text-amber-500" />
              Tech Center Solar Initiative
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Help power African talent with <span className="text-blue-600">clean, reliable energy.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Trustskep Global is building a future where talented African professionals can compete globally—without being held back by unreliable infrastructure.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We are a technology solutions and talent development company focused on creating real opportunities for African developers, designers, data specialists, and interns. Our tech center serves as a collaborative workspace where teams learn, build, and deliver projects for clients around the world.
            </p>
            
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" /> The Challenge
              </h3>
              <p className="text-slate-700 leading-relaxed">
                However, one major challenge continues to slow progress: <strong>unstable electricity supply</strong>. Frequent power outages interrupt work, reduce productivity, damage equipment, and limit the growth of talented professionals who are ready to contribute to the global tech ecosystem.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-video mb-12">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/VRuE9bneOhU?si=rOOQBxILXTDxjEy4&cc_load_policy=1" 
                title="Trustskep Global Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>

            {/* Zeffy Thermometer */}
            <div className="w-full mb-8">
              <iframe
                title="Donation thermometer powered by Zeffy"
                style={{ position: 'relative', border: 0, width: '100%', height: '120px' }}
                src="https://www.zeffy.com/en-US/embed/thermometer/trustskep-global-solar-panels-for-tech-center"
                allowtransparency="true"
              ></iframe>
            </div>

            {/* Donation Card */}
            <div 
              id="donate"
              className="w-full bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-blue-600 z-10"></div>
              <iframe
                title="Donation form powered by Zeffy"
                style={{ position: 'relative', border: 0, width: '100%', height: '650px' }}
                src="https://www.zeffy.com/en-US/embed/donation-form/trustskep-global-solar-panels-for-tech-center"
                allowpaymentrequest="true"
                allowtransparency="true"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Why Solar */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why solar panels?</h2>
              <p className="text-slate-600 mb-8 text-lg">Installing solar panels at our tech center will:</p>
              <ul className="space-y-5 mb-8">
                {[
                  "Provide consistent, uninterrupted power for daily operations",
                  "Enable employees and interns to work, learn, and collaborate efficiently",
                  "Protect sensitive tech equipment",
                  "Reduce long-term energy costs",
                  "Support clean, sustainable energy solutions in Africa"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
                <p className="text-lg font-medium text-blue-800">
                  This is not just about electricity—it’s about access, opportunity, and sustainability.
                </p>
              </div>
            </div>

            {/* Impact & Cost */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">What will your support do?</h2>
              <p className="text-slate-600 mb-6 text-lg">Funds raised will be used for solar panels, installation, setup, and power infrastructure upgrades for the tech center.</p>
              
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 mb-10">
                <h3 className="font-bold text-slate-900 mb-4 text-lg">Estimated Costs</h3>
                <div className="space-y-3">
                  {costs.map((cost, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-slate-200 last:border-0">
                      <span className="text-slate-600">{cost.item}</span>
                      <span className="font-semibold text-slate-900">${cost.cost.toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-3 mt-1 border-t-2 border-slate-200 font-bold text-lg">
                    <span>Total Goal</span>
                    <span className="text-blue-600">${totalCost.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-5">When you support this project, you are:</h3>
                <ul className="space-y-4 inline-block text-left">
                  {[
                    "Empowering skilled professionals with the tools they need to succeed",
                    "Supporting job creation and skill development",
                    "Investing in sustainable infrastructure",
                    "Helping African talent deliver world-class tech solutions"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Heart className="w-6 h-6 text-rose-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action / Share */}
      <section className="py-24 bg-slate-900 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Our goal is simple: remove barriers and unlock potential.</h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Thank you for believing in innovation, sustainability, and the power of global collaboration. Together, we can power talent—and change lives.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://www.zeffy.com/en-US/donation-form/trustskep-global-solar-panels-for-tech-center" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-colors"
            >
              Donate Now
            </a>
            <button 
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Power African Talent',
                    text: 'Help Trustskep Global power African talent with clean, reliable energy!',
                    url: window.location.href,
                  });
                } else {
                  alert('Share this link: ' + window.location.href);
                }
              }}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-slate-700 rounded-full hover:bg-slate-800 transition-colors"
            >
              <Share2 className="w-5 h-5 mr-2" /> Share Campaign
            </button>
          </div>
          
          <div className="mt-12 flex flex-col items-center justify-center gap-4">
            <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Follow Us</span>
            <div className="flex items-center gap-6">
              <a href="https://www.facebook.com/people/TrustSkep-Global/61587047357852/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/trustskepglobal/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/trustskep-global/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <p className="mt-12 text-slate-500 text-sm">If you’re unable to donate, sharing this campaign also makes a huge difference.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-white">
            <img src="/png_logo.png" alt="Trustskep Global Logo" className="h-6 object-contain brightness-0 invert" onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }} />
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight">
                Trustskep Global
              </span>
            </div>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Trustskep Global Team. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-slate-500">Email:</span>
              <a href="mailto:trustskepglobal@solution.org" className="hover:text-white transition-colors">trustskepglobal@solution.org</a>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-slate-500">Phone:</span>
              <a href="tel:+13855397196" className="hover:text-white transition-colors">+1 385-539-7196</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
