import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";
import BusinessSectors from "@/components/BusinessSectors";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Yacob Tech | Startup",
  description: "Explore web and software development, IT support and networking, digital innovation, AI automation, technology training, and management systems.",
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb
        pageName="Our Services"
        description="Explore practical technology services for businesses, schools, communities, and growing digital teams."
      />
      <Features />
      <BusinessSectors />
    </>
  );
}
