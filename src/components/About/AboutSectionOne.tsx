import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import SocialButton from "../SocialSignIn";
import FormComponent from "../Form";
import Link from "next/link";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
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
          <div className="flex gap-10 flex-col justify-center">
            <div className="w-full px-4">
              <SectionTitle
                center
                title="Sign up today for latest updates"
                paragraph="Sign up for get latest update and start boost up your business from today."
                mb="44px"
              />

              <div
                className="mb-12 lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="flex">
                  <div className="w-full justif-center flex flex-col items-end px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="fast service" />
                    <List text="Reliable Price" />
                    <List text="Quality work" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="free Hosting" />
                    <List text="Domain" />
                    <List text="User experience" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded bg-white w-full md:w-1/2 mx-auto shadow-three p-4 dark:bg-dark">
              <SocialButton></SocialButton>
              <div className="mb-8 flex items-center justify-center">
                <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color/50 sm:block"></span>
                <p className="w-full px-5 text-center text-base font-medium text-body-color">
                  Or, register with your email
                </p>
                <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color/50 sm:block"></span>
              </div>
              <FormComponent></FormComponent>
              <p className="text-center text-base font-medium text-body-color">
                Already using Startup?{" "}
                <Link href="/signin" className="text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
