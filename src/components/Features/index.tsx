import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto mb-14 max-w-4xl rounded-2xl border border-stroke bg-gray-1/60 p-8 text-center shadow-sm dark:border-strokedark dark:bg-white/5 md:p-10">
            <h2 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
              Giving Mock Tests Isn't Enough.
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
              <p>You see your score.</p>
              <p>You check rank.</p>
              <p>Then you move on.</p>
              <p className="pt-2 font-semibold text-black dark:text-white">But:</p>
            </div>

            <div className="mx-auto mt-6 max-w-3xl space-y-4 text-left text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
              <p>Which chapters are consistently hurting your percentile?</p>
              <p>Are you losing marks due to weak concepts or silly mistakes?</p>
              <p>What should you revise first to maximize improvement?</p>
            </div>

            <p className="mt-8 text-lg font-medium text-black dark:text-white sm:text-xl">
              Most students guess.
            </p>
            <p className="mt-2 text-2xl font-bold text-primary sm:text-3xl">
              CETify shows you.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
