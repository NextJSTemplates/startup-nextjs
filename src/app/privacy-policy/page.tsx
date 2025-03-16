import Breadcrumb from '@/components/Common/Breadcrumb'
import React from 'react'

const privacyPolicies = [
  {
    header: 'INTRODUCTION',
    content: <p>Pay First Ltd (Company, we, us, or our) is committed to protecting the privacy and security of our Clients’ personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard information when you use our e-money distribution services.</p>
  },
  {
    header: 'INFORMATION WE COLLECT',
    content: <ul className='list-inside list-disc'>
            <li><span className='font-bold'>Personal Information:</span> Name, address, email, phone number, government-issued identification, and other details required for verification.</li>
            <li><span className='font-bold'>Financial Information:</span> Bank account details, payment transaction history, and other financial data related to our services.</li>
            <li><span className='font-bold'>Technical Data:</span> IP address, browser type, operating system, and usage details collected through cookies and tracking technologies.</li>
            <li><span className='font-bold'>Compliance Information:</span> Any data required for regulatory compliance, including anti-money laundering (AML) and Know Your Customer (KYC) checks.</li>
          </ul>
  },
  {
    header: 'HOW WE USE YOUR INFORMATION',
    content: <div>
        <p>We use the information collected for the following purposes:</p>
        <ul className='list-inside list-disc'>
          <li>To process and facilitate e-money transactions securely</li>
          <li>To verify client identity and comply with legal and regulatory requirements.</li>
          <li>To prevent fraud, money laundering, and other financial crimes.</li>
          <li>To improve our services, website functionality, and customer experience.</li>
          <li>To communicate important service updates, promotions, or changes to policies.</li>
        </ul>
      </div>
  },
  {
    header: 'DATA SHARING AND DISCLOSURE',
    content: <div>
        <p>We do not sell or rent your personal data. However, we may share your information with:</p>
        <ul className='list-inside list-disc'>
          <li><span className='font-bold'>Regulatory Authorities:</span> To comply with legal obligations or government requests.</li>
          <li><span className='font-bold'>Service Providers:</span> Third-party partners who assist in transaction processing, security, or data storage.</li>
          <li><span className='font-bold'>Business Transfers:</span> In the event of a merger, acquisition, or asset sale, your data may be transferred to the new entity.</li>
          <li><span className='font-bold'>Legal Compliance:</span> If required by law, we may disclose information to enforce our policies, prevent fraud, or protect our rights and safety.</li>     
        </ul>
      </div>
  },
  {
    header: 'DATA SECURITY',
    content: <p>We implement strict security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. These include encryption, secure servers, and access controls.</p>
  },
  {
    header: 'DATA RETENTION',
    content: <p>We retain personal information for as long as necessary to fulfill our services, comply with legal obligations, resolve disputes, and enforce agreements. When data is no longer required, we securely delete or anonymize it.</p>
  },
  {
    header: 'YOUR RIGHTS AND CHOICES',
    content: <div>
        <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
        <ul className='list-inside list-disc'>
          <li>Access, update, or delete your personal information.</li>
          <li>Object to or restrict certain data processing activities.</li>
          <li>Withdraw consent where applicable.</li>
          <li>Request a copy of your personal data in a portable format. To exercise these rights, please contact us at [Contact Email].</li>     
        </ul>
      </div>
  },
  {
    header: 'COOKIES AND TRACKING TECHNOLOGIES',
    content: <p>We may use cookies and similar technologies to enhance user experience, analyze traffic, and improve services. You can manage cookie preferences through your browser settings.</p>

  },
  {
    header: 'THIRD-PARTY LINKS',
    content: <p>Our website or services may contain links to third-party websites. We are not responsible for the privacy practices of those sites. We encourage you to review their policies before providing personal information.</p>
  },
  {
    header: 'CHANGES TO THIS PRIVACY POLICY',
    content: <p>We may update this Privacy Policy from time to time. Any changes will be posted on our website with the updated effective date. Continued use of our services constitutes acceptance of the revised policy.</p>
  },
]

const PrivacyPolicy = () => {
  return (
    <>
    <Breadcrumb
        pageName="Terms and Conditions"
        description=""
      />
    <div className='flex justify-center'>
      <div className='my-10 max-w-5xl'>
        <ul className="mb-10 list-inside list-decimal text-body-color ">
        {privacyPolicies.map((policy) => {
          return (
            <>
              <li className="mt-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                <span className='font-bold'>{policy.header}</span> 
              </li>
              {policy.content}
            </>
          )
        })}
          
        </ul>
        <p className='mt-8'>By using our services, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and disclosure of your information as outlined above.</p>
      </div>
    </div>
  </>
  )
}

export default PrivacyPolicy