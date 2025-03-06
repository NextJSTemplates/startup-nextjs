"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph=""
          center
          width="665px"
        />

        {/* <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div> */}

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Lite"
            price={isMonthly ? "4.99" : "120"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Perfect for start ups, looking to keep overheads low whilst still having the best features around."
            internationalTransfer="2%"
            localTransfer="0.2%"
            cardIssueSpend="£10, 1.3%"
          >
            <OfferList text="Virtual & Physical Cards" status="active" />
            <OfferList text="GBP Wallet – dedicated IBAN" status="active" />
            <OfferList text="Local & International Payments" status="active" />
            <OfferList text="Web & App" status="active" />
            {/* <OfferList text="Lifetime Access" status="inactive" />
            <OfferList text="Free Lifetime Updates" status="inactive" /> */}
          </PricingBox>
          <PricingBox
            packageName="Classic"
            price={isMonthly ? "14.99" : "789"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Ideal for business who have an established track record and are looking to expand their operations by working with a trusted provider."
            internationalTransfer="From 1.5%"
            localTransfer="From 0.1%"
            cardIssueSpend="£10, 1.3%"
          >
            <OfferList text="Everything in Lite + Bulk payments" status="active" />
            <OfferList text="EUR Wallet" status="active" />
            <OfferList text="Increased Transaction Limits" status="active" />
            {/* <OfferList text="Email Support" status="active" />
            <OfferList text="Lifetime Access" status="active" />
            <OfferList text="Free Lifetime Updates" status="inactive" /> */}
          </PricingBox>
          <PricingBox
            packageName="Premium"
            price={isMonthly ? "Custom" : "999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Well established businesses who are looking to take their business to the next level."
            internationalTransfer="Speak to Sales"
            localTransfer="Speak to Sales"
            cardIssueSpend="Speak to Sales"
          >
            <OfferList text="Everything in Classic + High risk clients" status="active" />
            <OfferList text="Personal Account Manager" status="active" />
            <OfferList text="Tailored Transaction Limits" status="active" />
            {/* <OfferList text="Email Support" status="active" />
            <OfferList text="Lifetime Access" status="active" />
            <OfferList text="Free Lifetime Updates" status="active" /> */}
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
