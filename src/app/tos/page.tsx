import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms of Service | Classy Endeavors",
  description:
    "Terms of Service for the Classy Endeavors website, including acceptable use, inquiries, and limitations of liability.",
  keywords: [
    "Classy Endeavors",
    "Terms of Service",
    "website terms",
    "IT services",
  ],
};

const lastUpdated = "November 2, 2026";

const TermsOfServicePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Terms of Service"
        description="The terms that govern your use of the Classy Endeavors website."
      />

      <section className="relative z-10 overflow-hidden pb-20">
        <div className="container mx-auto max-w-3xl px-6">
          <p className="mb-8 text-sm text-body-color dark:text-body-color-dark">
            Last updated: {lastUpdated}
          </p>

          <div className="space-y-8 text-base leading-relaxed text-body-color dark:text-body-color-dark">
            <div>
              <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
                1. Agreement to these terms
              </h2>
              <p>
                These Terms of Service (&quot;Terms&quot;) govern your access to
                and use of the website operated by Classy Endeavors at{" "}
                <a
                  href="https://www.classyendeavors.com"
                  className="font-medium text-primary hover:underline"
                >
                  www.classyendeavors.com
                </a>{" "}
                (the &quot;Site&quot;). By accessing or using the Site, you
                agree to these Terms. If you do not agree, do not use the Site.
              </p>
              <p className="mt-3">
                Classy Endeavors is a software development and IT services
                company offering services such as software development, cloud
                computing, mobile development, artificial intelligence, UI/UX
                design, software security, MVP development, software
                maintenance, and related digital solutions.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
                2. Informational nature of the Site
              </h2>
              <p>
                The Site provides general information about our company,
                services, case studies, and ways to contact us. Content on the
                Site is for informational purposes and does not create a
                client–vendor relationship, partnership, or employment
                relationship unless we enter into a separate written agreement
                with you.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
                3. Inquiries and contact forms
              </h2>
              <p className="mb-3">
                You may submit inquiries through contact forms on the Site. When
                you do, you agree to provide accurate information and understand
                that we may use the details you submit—such as name, company,
                email, phone number, project budget, message, and any optional
                attachments—to respond to your request. Submissions may be
                processed through tools such as HubSpot and internal messaging
                or webhook integrations used by our team.
              </p>
              <p>
                Submitting a form does not obligate Classy Endeavors to provide
                services, quote pricing, or enter into a contract. Any
                engagement for professional services will be governed by a
                separate written agreement.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
                4. Acceptable use
              </h2>
              <p className="mb-2">You agree not to:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>
                  Use the Site in any way that violates applicable law or
                  regulation
                </li>
                <li>
                  Attempt to gain unauthorized access to the Site, related
                  systems, or data
                </li>
                <li>
                  Interfere with or disrupt the Site&apos;s operation, security,
                  or integrity
                </li>
                <li>
                  Submit false, misleading, abusive, or unlawful content through
                  forms or other communication channels
                </li>
                <li>
                  Scrape, harvest, or systematically collect information from
                  the Site without our prior written consent
                </li>
                <li>
                  Use the Site to transmit malware, spam, or other harmful
                  material
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
                5. Intellectual property
              </h2>
              <p>
                The Site and its contents—including text, graphics, logos,
                images, design, and software—are owned by Classy Endeavors or
                its licensors and are protected by intellectual property laws.
                You may view and temporarily download materials for personal,
                non-commercial use related to evaluating our services. You may
                not copy, modify, distribute, sell, or create derivative works
                from Site content without our prior written permission, except
                as allowed by law.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
                6. Third-party links and tools
              </h2>
              <p>
                The Site may link to third-party websites or load third-party
                tools (including analytics scripts). We are not responsible for
                the content, privacy practices, or availability of third-party
                sites or services. Your use of third-party resources is at your
                own risk and subject to their terms.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
                7. Privacy
              </h2>
              <p>
                Our collection and use of personal information through the Site
                is described in our{" "}
                <Link
                  href="/privacy-policy"
                  className="font-medium text-primary hover:underline"
                >
                  Privacy Policy
                </Link>
                . By using the Site, you acknowledge that policy.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
                8. Disclaimers
              </h2>
              <p>
                THE SITE AND ITS CONTENT ARE PROVIDED &quot;AS IS&quot; AND
                &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER
                EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE
                UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS, OR
                THAT CONTENT WILL BE COMPLETE, ACCURATE, OR UP TO DATE.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
                9. Limitation of liability
              </h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, CLASSY ENDEAVORS AND ITS
                DIRECTORS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY
                INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
                DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM
                OR RELATED TO YOUR USE OF (OR INABILITY TO USE) THE SITE. OUR
                TOTAL LIABILITY FOR CLAIMS ARISING OUT OF THESE TERMS OR THE SITE
                WILL NOT EXCEED ONE HUNDRED U.S. DOLLARS (USD $100) OR THE
                EQUIVALENT IN LOCAL CURRENCY, EXCEPT WHERE LIABILITY CANNOT BE
                LIMITED UNDER APPLICABLE LAW.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
                10. Indemnification
              </h2>
              <p>
                You agree to indemnify and hold harmless Classy Endeavors and
                its directors, employees, and agents from claims, damages,
                losses, and expenses (including reasonable attorneys&apos; fees)
                arising out of your misuse of the Site, your violation of these
                Terms, or your infringement of any rights of another party.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
                11. Professional services
              </h2>
              <p>
                Statements on the Site about services, timelines, technologies,
                or outcomes are general descriptions and not guarantees.
                Deliverables, fees, timelines, warranties, and intellectual
                property terms for paid work are defined only in a signed
                statement of work, master services agreement, or other written
                contract between you and Classy Endeavors.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
                12. Changes to the Site or Terms
              </h2>
              <p>
                We may update the Site or these Terms at any time. The
                &quot;Last updated&quot; date at the top of this page indicates
                when these Terms were last revised. Continued use of the Site
                after changes take effect constitutes acceptance of the updated
                Terms.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
                13. Termination
              </h2>
              <p>
                We may suspend or terminate access to the Site at any time,
                without notice, if we believe you have violated these Terms or
                if we discontinue the Site. Provisions that by their nature
                should survive termination (including intellectual property,
                disclaimers, limitation of liability, and indemnification) will
                survive.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
                14. Governing law
              </h2>
              <p>
                These Terms are governed by the laws applicable to Classy
                Endeavors&apos; principal place of business, without regard to
                conflict-of-law principles, except where mandatory consumer
                protection laws of your jurisdiction require otherwise. Courts
                with jurisdiction over disputes related to these Terms will be
                those competent to hear such matters where Classy Endeavors
                principally conducts business, unless applicable law provides
                otherwise.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
                15. Contact
              </h2>
              <p>
                Questions about these Terms may be sent to{" "}
                <a
                  href="mailto:info@classyendeavors.com"
                  className="font-medium text-primary hover:underline"
                >
                  info@classyendeavors.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfServicePage;
