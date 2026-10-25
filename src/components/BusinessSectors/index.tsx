const sectors = [
  { title: "Education", description: "School websites, learning platforms, and student or staff management tools." },
  { title: "Small & Growing Businesses", description: "Digital presence, workflow tools, and practical software for daily operations." },
  { title: "Community & Organizations", description: "Accessible digital services that improve communication and information sharing." },
  { title: "Technology & Startups", description: "Web products, prototypes, automation, and support for new digital ideas." },
];

const BusinessSectors = () => (
  <section id="sectors" className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-24">
    <div className="container">
      <div className="mx-auto mb-12 max-w-[700px] text-center">
        <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-primary">Who we help</span>
        <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">Digital support for different needs</h2>
        <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">Our services are designed to be adaptable for schools, businesses, community organizations, and technology-focused teams.</p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {sectors.map((sector) => (
          <article key={sector.title} className="rounded-2xl border border-stroke bg-white p-6 dark:border-stroke-dark dark:bg-gray-dark">
            <h3 className="mb-3 text-lg font-bold text-black dark:text-white">{sector.title}</h3>
            <p className="text-sm leading-relaxed text-body-color dark:text-body-color-dark">{sector.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
export default BusinessSectors;
