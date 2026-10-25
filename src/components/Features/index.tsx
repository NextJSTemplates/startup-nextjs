const services = [
  { number: "01", title: "Web & Software Development", description: "Modern, responsive websites and tailored software designed around real business and community needs." },
  { number: "02", title: "IT Support & Networking", description: "Practical troubleshooting, computer setup, network support, and reliable technology operations." },
  { number: "03", title: "Digital Solutions & Innovation", description: "Thoughtful digital tools and workflows that help organizations work smarter and serve people better." },
  { number: "04", title: "AI Solutions & Automation", description: "Useful AI-powered experiences and automation that reduce repetitive work and support better decisions." },
  { number: "05", title: "Technology Training & Education", description: "Accessible technology learning that builds confidence, practical skills, and digital capability." },
  { number: "06", title: "Business & School Management Systems", description: "Purpose-built management platforms for school administration, records, communication, and business workflows." },
];

const Features = () => (
  <section id="features" className="py-16 md:py-20 lg:py-28">
    <div className="container">
      <div className="mx-auto mb-14 max-w-[700px] text-center">
        <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-primary">What we do</span>
        <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">Technology that moves your ideas forward</h2>
        <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">From everyday IT support to custom software and learning, we help people and organizations turn technology into practical progress.</p>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.number} className="group rounded-2xl border border-stroke bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg dark:border-stroke-dark dark:bg-gray-dark">
            <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">{service.number}</div>
            <h3 className="mb-3 text-xl font-bold text-black dark:text-white">{service.title}</h3>
            <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">{service.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
