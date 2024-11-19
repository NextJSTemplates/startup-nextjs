import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-3/5">
              <SectionTitle
                title="How We Deliver Excellence"
                paragraph="From ideation to execution, we ensure every step of your project is handled with precision and care."
                mb="44px"
              />

              <div className="mb-12 max-w-full lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="flex w-full flex-col gap-6 px-3">
                    <div className="flex flex-col items-center gap-2 md:grid md:grid-cols-2">
                      <List text="Consultation" />
                      <span className="flex w-full ">
                        Understanding your goals and defining requirements.
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-2 md:grid md:grid-cols-2">
                      <List text="Strategy" />
                      <span className="flex w-full ">
                        Tailoring a custom plan for maximum ROI
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-2 md:grid md:grid-cols-2">
                      <List text="Design" />
                      <span className="flex w-full ">
                        Creating a stunning visual identity
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-2 md:grid md:grid-cols-2">
                      <List text="Development" />
                      <span className="flex w-full ">
                        Building a robust, scalable solution
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-2 md:grid md:grid-cols-2">
                      <List text="Testing" />
                      <span className="flex w-full ">
                        Ensuring quality and performance
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-2 md:grid md:grid-cols-2">
                      <List text="Deployment & Support" />
                      <span className="flex w-full ">
                        Launching and maintaining your project
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-2/5">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
