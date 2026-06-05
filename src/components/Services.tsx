import { portfolioData } from '../data';

export default function Services() {
  const { services } = portfolioData;

  return (
    <section id="services" className="py-24 bg-neutral-50/50 border-y border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12 text-left">
          <span className="text-[11px] font-bold uppercase tracking-widest text-secondary font-mono">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">Services I Offer</h2>
          <p className="text-sm text-neutral-500 max-w-md mt-1">
            Polished, conversion-focused full-stack and cloud delivery patterns matching quality standards.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="bg-white border border-neutral-200 p-6 flex flex-col items-start gap-4 shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <div className="w-10 h-10 bg-neutral-900 text-white flex items-center justify-center text-lg">
                {service.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-neutral-950 tracking-tight">{service.title}</h3>
                <p className="text-xs text-neutral-500 mt-2 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
