const AboutSectionTwo = () => (
  <section className="py-16 md:py-20 lg:py-28">
    <div className="container">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <article className="rounded-2xl border border-stroke p-7 dark:border-stroke-dark">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.18em] text-primary">01 / Understand</span>
          <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Start with the real need</h3>
          <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">We begin by understanding the challenge, the people using the solution, and the outcome that matters.</p>
        </article>
        <article className="rounded-2xl border border-stroke p-7 dark:border-stroke-dark">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.18em] text-primary">02 / Build</span>
          <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Make technology useful</h3>
          <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">We shape accessible websites, software, IT services, and learning experiences around practical goals.</p>
        </article>
        <article className="rounded-2xl border border-stroke p-7 dark:border-stroke-dark">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.18em] text-primary">03 / Improve</span>
          <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Keep learning and improving</h3>
          <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">We value clear communication, continuous learning, and solutions that can evolve with your needs.</p>
        </article>
      </div>
    </div>
  </section>
);
export default AboutSectionTwo;
