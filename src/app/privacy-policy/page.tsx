import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy | Classy Endeavors",
  description:
    "Learn how Classy Endeavors collects, uses, and protects personal information submitted through our website contact forms and related services.",
  keywords: [
    "Classy Endeavors",
    "Privacy Policy",
    "data protection",
    "contact form privacy",
  ],
};

const lastUpdated = "November 2, 2026";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy"
        description="How Classy Endeavors handles personal information collected through our website."
      />

      <section className="relative z-10 overflow-hidden pb-20">
        <div className="container mx-auto max-w-3xl px-6">
          <p className="mb-8 text-sm text-body-color dark:text-body-color-dark">
            Last updated: {lastUpdated}
          </p>

          <div className="space-y-8 text-base leading-relaxed text-body-color dark:text-body-color-dark">
            <div>
              <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
                1. Who we are
              </h2>
              <p>
                Classy Endeavors (&quot;Classy Endeavors,&quot; &quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;) is a software development and
                IT services company. We provide services such as software
                development, cloud computing, mobile development, artificial
                intelligence, UI/UX design, software security, MVP development,
                software maintenance, and related digital solutions.
              </p>
              <p className="mt-3">
                For privacy-related questions or requests, contact us at{" "}
                <a
                  href="mailto:info@classyendeavors.com"
                  className="font-medium text-primary hover:underline"
                >
                  info@classyendeavors.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
                2. Scope of this policy
              </h2>
              <p>
                This Privacy Policy describes how we collect, use, share, and
                protect personal information when you visit{" "}
                <a
                  href="https://www.classyendeavors.com"
                  className="font-medium text-primary hover:underline"
                >
                  www.classyendeavors.com
                </a>{" "}
                (the &quot;Site&quot;), submit a contact or inquiry form, or
                otherwise communicate with us about our services. It does not
                cover third-party websites or services that we do not control.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
                3. Information we collect
              </h2>
              <p className="mb-3">
                We collect information that you choose to provide and limited
                technical information that is generated when you use the Site.
              </p>
              <h3 className="mb-2 text-lg font-medium text-black dark:text-white">
                Information you submit
              </h3>
              <p className="mb-2">
                When you use our contact or inquiry forms, we may collect:
              </p>
              <ul className="mb-3 list-disc space-y-1 pl-6">
                <li>Name (including first and last name)</li>
                <li>Company or organization name</li>
                <li>Company industry</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Project budget range (when provided)</li>
                <li>Message or project description</li>
                <li>
                  Optional file attachments you choose to upload with your
                  inquiry
                </li>
              </ul>
              <h3 className="mb-2 text-lg font-medium text-black dark:text-white">
                Information collected automatically
              </h3>
              <p>
                Like many websites, our Site may collect standard technical and
                usage information such as browser type, device information,
                pages visited, referring URLs, and approximate location derived
                from IP address. We also load third-party scripts that may set
                cookies or similar technologies for site analytics and
                performance (see Section 6).
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
                4. How we use your information
              </h2>
              <p className="mb-2">We use personal information to:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>
                  Respond to inquiries and communicate about potential or
                  ongoing projects
                </li>
                <li>
                  Contact you by email, phone, SMS, or messaging apps when you
                  provide a phone number and consent to such contact
                </li>
                <li>Prepare proposals and evaluate project fit</li>
                <li>Operate, maintain, and improve the Site</li>
                <li>
                  Understand how visitors use the Site through analytics tools
                </li>
                <li>
                  Comply with legal obligations and protect our rights and users
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
                5. How we share information
              </h2>
              <p className="mb-3">
                We do not sell your personal information. We may share
                information with service providers who help us operate the Site
                and process inquiries, including:
              </p>
              <ul className="mb-3 list-disc space-y-1 pl-6">
                <li>
                  Customer relationship / form processing tools (for example,
                  HubSpot form submissions used for certain Site inquiries)
                </li>
                <li>
                  Messaging or webhook destinations used to deliver contact form
                  submissions to our team
                </li>
                <li>
                  Hosting, analytics, and infrastructure providers that support
                  the Site
                </li>
              </ul>
              <p>
                We may also disclose information if required by law, to respond
                to lawful requests, or to protect the rights, property, or safety
                of Classy Endeavors, our clients, or others.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
                6. Cookies, analytics, and similar technologies
              </h2>
              <p className="mb-3">
                The Site may use cookies, local storage (for example, to
                remember theme preferences), and third-party scripts for
                analytics and site functionality. Our Site currently loads
                third-party Hoox scripts that may collect usage data.
              </p>
              <p>
                You can control cookies through your browser settings. Disabling
                certain cookies may affect how some parts of the Site work. We
                do not currently maintain a separate cookie preference banner on
                the Site.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
                7. Data retention
              </h2>
              <p>
                We retain personal information for as long as needed to respond
                to your inquiry, manage a business relationship, meet legal or
                accounting requirements, or resolve disputes. When information is
                no longer needed, we take reasonable steps to delete or
                de-identify it.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
                8. Security
              </h2>
              <p>
                We use reasonable administrative and technical measures designed
                to protect personal information. No method of transmission or
                storage is completely secure, and we cannot guarantee absolute
                security.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
                9. International visitors
              </h2>
              <p>
                Classy Endeavors works with clients internationally. If you
                access the Site from outside the country where our systems or
                service providers operate, your information may be processed in
                other jurisdictions that may have different data-protection
                laws.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
                10. Your choices and requests
              </h2>
              <p className="mb-3">
                Depending on applicable law, you may have the right to request
                access to, correction of, or deletion of personal information we
                hold about you, or to object to or restrict certain processing.
                To make a privacy request, email{" "}
                <a
                  href="mailto:info@classyendeavors.com"
                  className="font-medium text-primary hover:underline"
                >
                  info@classyendeavors.com
                </a>
                . We may need to verify your identity before fulfilling a
                request.
              </p>
              <p>
                You may also unsubscribe from marketing emails (if any) using
                the instructions in those messages, or by contacting us at the
                email above.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
                11. Children&apos;s privacy
              </h2>
              <p>
                The Site is intended for business and professional use and is
                not directed to children. We do not knowingly collect personal
                information from children under 16. If you believe a child has
                provided us with personal information, contact us and we will
                take appropriate steps to delete it.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
                12. Changes to this policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. The
                &quot;Last updated&quot; date at the top of this page reflects
                the latest revision. Continued use of the Site after changes
                become effective constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
                13. Contact us
              </h2>
              <p>
                For privacy questions or requests, contact Classy Endeavors at{" "}
                <a
                  href="mailto:info@classyendeavors.com"
                  className="font-medium text-primary hover:underline"
                >
                  info@classyendeavors.com
                </a>
                . You can also review our{" "}
                <Link
                  href="/tos"
                  className="font-medium text-primary hover:underline"
                >
                  Terms of Service
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
