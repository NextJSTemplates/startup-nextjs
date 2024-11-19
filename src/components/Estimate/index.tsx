import SectionTitle from "../Common/SectionTitle";
import { ProjectEstimator } from "./components/Estimator";

export const CostEstimate = () => {
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Project Cost & Time Estimator"
          paragraph="Get an instant estimate for your project’s budget and timeline. Our intelligent estimator helps you calculate the cost and delivery time for your IT project based on your requirements. Simply input your project details, and let us provide you with an accurate estimate tailored to your needs."
          center={false}
        />
        <ProjectEstimator />
      </div>
    </section>
  );
};
