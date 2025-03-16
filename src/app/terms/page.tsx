import Breadcrumb from '@/components/Common/Breadcrumb'
import React from 'react'

const terms = [
  {
    header: 'INTRODUCTION',
    content: <p>These Terms and Conditions (Agreement) govern the services provided by Pay First Ltd (Agent), in relation to the handling and management of electronic money distribution (E-Money). By using the services of the Agent, the Client agrees to be bound by the terms and conditions outlined herein.</p>
  },
  {
    header: 'DEFINITIONS',
    content: <ul className='list-inside list-disc'>
            <li><span className='italic'>Agent</span> refers to Pay First Ltd, acting as an intermediary for the collection, holding, and disbursement of electronic money</li>
            <li><span className='italic'>Client</span> refers to any party engaging the services of the Agent for handling E-Money transactions.</li>
            <li><span className='italic'>E-Money</span> refers to electronically stored monetary value issued and distributed as part of financial transactions.</li>
            <li><span className='italic'>Beneficiary</span> refers to the party entitled to receive the E-Money as per the terms of the transaction.</li>
          </ul>
  },
  {
    header: 'SCOPE OF SERVICES',
    content: <ul className='list-inside list-disc'>
            <li>The Agent shall facilitate the collection, holding, and transfer of E-Money in accordance with regulatory and contractual obligations.</li>
            <li>The Agent shall process E-Money transactions as instructed by the Client, subject to applicable laws and regulations.</li>
            <li>The Agent does not provide legal, financial, or investment advice regarding E-Money transactions.</li>
          </ul>
  },
  {
    header: 'DEPOSIT AND RELEASE OF FUNDS',
    content: <ul className='list-inside list-disc'>
            <li>The Client shall deposit the E-Money in the designated account as instructed by the Agent.</li>
            <li>The Agent shall only release the E-Money upon receiving written authorization from all relevant parties, court order, or in compliance with applicable laws.</li>
            <li>Any dispute concerning the release of E-Money shall be resolved between the parties involved, and the Agent shall not be liable for any delays due to disputes.</li>
          </ul>
  },
  {
    header: 'FEES AND CHARGES',
    content: <ul className='list-inside list-disc'>
            <li>The Client agrees to pay the Agent the applicable service fee for handling the E-Money.</li>
            <li>The Agent reserves the right to deduct applicable fees from the E-Money prior to disbursement.</li>
            <li>Additional charges may apply for expedited processing or special requests.</li>
          </ul>
  },
  {
    header: 'LIABILITY & INDEMNIFICATION',
    content: <ul className='list-inside list-disc'>
            <li>The Agent shall not be liable for any loss, damage, or delay arising from force majeure events, banking failures, or regulatory changes.</li>
            <li>The Client agrees to indemnify and hold the Agent harmless against any claims, losses, or liabilities arising from the handling of E-Money, except in cases of willful misconduct or gross negligence by the Agent.</li>
          </ul>
  },
  {
    header: 'COMPLIANCE & ANTI-MONEY LAUNDERING (AML) REQUIREMENTS',
    content: <ul className='list-inside list-disc'>
            <li>The Agent shall comply with all applicable laws, including anti-money laundering regulations.</li>
            <li>The Client agrees to provide any necessary documentation to verify the legitimacy of funds as required by law.</li>
          </ul>
  },
  {
    header: 'TERMINATION',
    content: <ul className='list-inside list-disc'>
            <li>Either party may terminate this Agreement upon written notice.</li>
            <li>In the event of termination, the Agent shall ensure the proper handling of any pending E-Money transactions before ceasing services.</li>
          </ul>
  },
  {
    header: 'GOVERNING LAW & DISPUTE RESOLUTION',
    content: <ul className='list-inside list-disc'>
            <li>This Agreement shall be governed by the laws of the United Kingdom.</li>
            <li>Any disputes arising out of or relating to this Agreement shall be resolved through arbitration or in the courts of the United Kingdom.</li>
          </ul>
  },
  {
    header: 'MISCELLANEOUS',
    content: <ul className='list-inside list-disc'>
            <li>This Agreement constitutes the entire agreement between the parties and supersedes all prior understandings.</li>
            <li>No modification shall be valid unless made in writing and signed by both parties.</li>
            <li>If any provision of this Agreement is found to be unenforceable, the remaining provisions shall remain in full force and effect.</li>
          </ul>
  },
]

const Terms = () => {
  return (
    <>
    <Breadcrumb
        pageName="Terms and Conditions"
        description=""
      />
    <div className='flex justify-center'>
      <div className='my-10 max-w-5xl'>
        <ul className="mb-10 list-inside list-decimal text-body-color ">
        {terms.map((term) => {
          return (
            <>
              <li className="mt-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                <span className='font-bold'>{term.header}</span> 
              </li>
              {term.content}
            </>
          )
        })}
          
        </ul>
        <p className='mt-8'>By using the services of Pay First Ltd, the Client acknowledges and agrees to these Terms and Conditions.</p>
      </div>
    </div>
  </>
  )
}

export default Terms