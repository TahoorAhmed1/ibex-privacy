import React from "react";

export const metadata = {
  title: "Privacy Policy - IBEX Ride & IBEX Global",
  description: "Privacy Policy including Location Tracking and Data Protection Requirements",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-200 space-y-6 leading-relaxed text-sm sm:text-base">
        
        {/* =========================================================================
            GOOGLE PLAY CONSOLE COMPLIANCE SECTION: LOCATION DATA & DISCLOSURE
        ========================================================================= */}
        <section className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg space-y-3">
          <h2 className="text-lg font-bold text-amber-950">
            Special Notice for IBEX Ride Mobile App Users (Location Data & Background Tracking)
          </h2>
          <p className="text-amber-900 text-sm leading-relaxed">
            For users of the <strong>IBEX Ride</strong> mobile application (Package ID: <code>com.elon.ibex</code>), the following specific location tracking and data privacy practices apply in addition to our overarching privacy statement below:
          </p>

          <div className="space-y-2 text-sm text-amber-900">
            <div>
              <strong className="text-amber-950">1. Location Data Collection:</strong>
              <ul className="list-disc list-inside ml-2 mt-1 space-y-1">
                <li>
                  <strong>Foreground Location:</strong> Collected while the application is open to show nearby drivers/riders, set pickup and drop-off locations, calculate route distances, and estimate fares.
                </li>
                <li>
                  <strong>Background Location (<code>ACCESS_BACKGROUND_LOCATION</code>):</strong> IBEX Ride collects location data <strong>even when the app is closed or running in the background</strong> during active trip sessions. Background tracking begins automatically when a ride request is accepted/started and terminates immediately upon trip completion or cancellation.
                </li>
              </ul>
            </div>

            <div>
              <strong className="text-amber-950">2. Purpose of Background Location Access:</strong>
              <p className="ml-2 mt-1">
                Background location data is used strictly to provide uninterrupted turn-by-turn navigation for drivers, display real-time arrival ETAs to passengers, ensure passenger and driver safety during active transit, and maintain accurate trip logging.
              </p>
            </div>

            <div>
              <strong className="text-amber-950">3. Data Sharing & Retention:</strong>
              <p className="ml-2 mt-1">
                Location data is shared solely between the matched rider and driver during an active ride. We do not sell or rent location logs to third-party advertisers. Location logs are retained only as long as necessary to complete service requirements and perform safety audits.
              </p>
            </div>

            <div>
              <strong className="text-amber-950">4. Account & Data Deletion Rights:</strong>
              <p className="ml-2 mt-1">
                Users can request permanent deletion of their account and historical location data directly inside the IBEX Ride app settings via the <code>Delete Account</code> menu, or by emailing our privacy team at <a href="mailto:elontech060@gmail.com" className="underline font-semibold text-amber-950">elontech060@gmail.com</a>. Personal data and location logs will be purged within 30 days of confirmation.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-slate-200 my-8" />

        {/* =========================================================================
            ORIGINAL PRIVACY POLICY TEXT (UNMODIFIED)
        ========================================================================= */}
        <section className="space-y-6 text-slate-700">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Data Privacy is Important to Us</h2>
            <p>
              Please be assured that your privacy is of utmost importance to us. We comply with all applicable data privacy laws including the General Data Protection Regulation, the UK Data Protection Act 2018 and the Swiss Federal Act on Data Protection regarding personal data collected and processed concerning residents of the European Union and European Economic Area, the United Kingdom and Switzerland (the “Data Privacy Requirements”).
            </p>
            <p className="mt-3">
              The specific practices outlined in this privacy statement apply to privacy practices and procedures maintained by or on behalf of IBEX Global Solutions, Inc. and its affiliates (the Company). Some of our web pages contain links to web sites outside the Company. Please be aware that when you follow a link to another site, you are then subject to the privacy policies of the new site
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">What Personal Data We Collect and Process</h2>
            <p>
              The Company collects business contact and financial information from our business customers and vendors. We collect personal contact information, purchase information, and customer experience information from individuals who purchase products and services from our business customers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">How and Why We Process Personal Data</h2>
            <p className="mb-3">The Company processes personal information for the following purposes:</p>
            <ul className="list-disc list-inside space-y-3 pl-2">
              <li>
                <strong>Providing products and services to our business customers.</strong> The Company collects and processes the business contact information of the individuals working for our business customers so that we can enter into and perform contracts with our business customers to provide our products and services.
              </li>
              <li>
                <strong>Working with our vendors.</strong> The Company collects and processes the business contact information of the individuals working for our vendors so that we can enter into and perform contracts with our vendors.
              </li>
              <li>
                <strong>Generating customers for our business customers.</strong> The Company collects and processes the personal contact information and business contact information of individuals through Company created websites, display banners, chat boxes, social media platforms, telephone calls, and interviews. Personal information is also collected through forms completed by individuals to register for events and subscribe to publications. This personal information is shared with our business customers to assist them in their customer acquisition efforts.
              </li>
              <li>
                <strong>Enhancing the customer experience for the benefit of our business customers.</strong> The Company collects and processes personal contact information and business contact information about individuals who purchase products and services from our business customers as well as their impressions of their purchase experience and experience with the products and service. We collect this personal information through surveys, telephone calls and interviews. This personal information is shared with our business customers to assist them in their customer relations efforts.
              </li>
              <li>
                <strong>Making our websites more useful.</strong> For each HTTP (which is what your web browser generates when you request a page or part of a page from a web site) request received, the Company automatically collects and stores only the following information: the date and time, the originating IP address, the type of browser and operating system used (if provided by the browser), the URL of the referring page (if provided by the browser), and the object requested completion status of the request pages visited. We use the information that we collect to measure the number of visitors to the different areas of our sites, and to help us make our sites more useful to visitors. This includes analyzing these logs periodically to determine the traffic through our servers, the number of pages served, and the level of demand for pages and topics of interest.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Interaction with Children</h2>
            <p>
              We do not collect personal data of and our websites do not target or provide content to children under the age of 16.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Cookies</h2>
            <p className="mb-3">
              Cookies are small files that web servers place on a user’s hard drive. The Company does not use “persistent cookies” or any other persistent tracking methods to collect personal information about visitors to its websites. Cookies serve several functions:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>They allow the website to identify you as a previous visitor each time you access a site;</li>
              <li>They track what information you view at a site (important to commercial sites trying to determine your buying preferences);</li>
              <li>In more advanced cases, they track your movements through many websites but not the whole Web;</li>
              <li>Businesses use them for customer convenience to allow them to produce a list of items to buy and pay for them all at one time and to garner information about what individuals are buying at their sites;</li>
              <li>Advertisers use them to determine the effectiveness of their marketing and offer insights into consumer preferences and tastes by collecting data from many websites.</li>
              <li>They are used to help a website tailor screens for each customer’s preference.</li>
            </ul>
            <p className="mt-3">
              To protect your privacy, be sure to close your browser completely after you have finished conducting business with a website that does use cookies. If you are concerned about the potential use of the information gathered from your computer or mobile device by cookies, you can set your browser to prompt you before it accepts a cookie. Most Internet browsers have settings that let you identify and/or reject cookies. Before collecting personally identifiable information, we will prominently disclose why we are requesting the information; how it will be used; how long it may be retained; under what conditions, and with whom, it may be shared.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">We Also Collect and Use Non-Personal Data</h2>
            <p>
              In addition to personal information, we collect and store non-personal (such as search engine queries and anonymous survey responses) to help us better understand and meet the needs of our visitors. We may share non-personal information with others, including the public, in aggregated form (for instance, in a list of our most popular search engine queries), in partial or edited form (such as in a report summarizing responses to a questionnaire), or verbatim (for example, in a complete listing of survey responses).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Data Subject Rights of EU, EEA, Swiss and UK Residents</h2>
            <p className="mb-3">EU, EEA, Swiss and UK residents have the following rights regarding their personal data:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><strong>Right of Access:</strong> You have the right to obtain confirmation from the Company as to whether or not personal data concerning you is being processed and how, what when, why and for how long your personal data is processed and to whom it is disclosed.</li>
              <li><strong>Right to Rectification:</strong> You have the right to request the Company to correct inaccurate personal data and to complete incomplete personal data.</li>
              <li><strong>Right to Erasure (Right to be Forgotten):</strong> You have the right to request the Company to erase personal data concerning you where your personal data is no longer needed for the purposes for which it was collected or processed or has otherwise been improperly processed.</li>
              <li><strong>Right to Object:</strong> You have the right to object to the processing of your personal data if the processing is based upon the Company’s legitimate interest or for the performance of a task carried out in the public interest, including any profiling based on such processing, or if the processing is for direct marketing.</li>
              <li><strong>Right to Restrict Processing:</strong> You have the right to request the Company to restrict the processing of your personal data while your data subject rights requests are being investigated and answered.</li>
              <li><strong>Right to Portability:</strong> You have the right to receive personal data that you have provided to the Company and transmit such personal data to another entity where the processing of such personal data is based on consent and is processed by automated means. Additionally, you have the right to require the Company to transmit such personal data directly to another entity, where technically feasible.</li>
              <li><strong>Right not to be Subject to Automated Decision-Making, Including Profiling:</strong> You have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning you or significantly affects you.</li>
            </ul>
            <p className="mt-3">
              To make a subject access request, you should send the request to James Ferrato, Chief Information Officer, <a href="mailto:jim.ferrato@ibex.co" className="text-blue-600 underline">jim.ferrato@ibex.co</a>. In some cases, the Company may need to ask for proof of identification before the request can be processed. The Company will inform you if it needs to verify your identity and the documents it requires. The Company normally will respond to a request within a period of one month from the date it is received. In some cases, such as where the Company processes large amounts of an individual’s personal data, it may respond within three months of the date the request is received. The Company will write to you within one month of receiving the original request to tell you if this is the case.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">EU-U.S. Privacy Shield and the Swiss –EU Privacy Shield</h2>
            <p className="mb-3">
              The Company has certified that it complies with the EU-U.S. Privacy Shield and the Swiss-U.S. Privacy Shield Frameworks (Privacy Shield) as set forth by the U.S. Department of Commerce regarding the collection, use, and retention of Personal Data transferred to the U.S. from the EU, United Kingdom and Switzerland, respectively. This certification covers the following Company entities:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
              <li>IBEX Global Solutions, Inc. f/k/a – TRG Customer Solutions, Inc.</li>
              <li>Digital Globe Services, LLC. f/k/a – Digital Globe Services, Inc.</li>
              <li>iSKY, Inc.</li>
            </ul>
            <p>
              IBEX Global Solutions, Inc. has certified to the Department of Commerce that it adheres to the Privacy Shield Principles with respect to such Personal Data. If there is any conflict between the terms of this policy and the Privacy Shield Principles, the Privacy Shield Principles shall govern. To learn more about the EU-U.S. and Swiss-U.S. Privacy Shield programs, please visit{" "}
              <a href="http://www.privacyshield.gov" target="_blank" rel="noreferrer" className="text-blue-600 underline">http://www.privacyshield.gov</a>.
            </p>
            <p className="mt-2">
              To view the Company’s certification under Privacy Shield, please visit{" "}
              <a href="http://www.privacyshield.gov/list" target="_blank" rel="noreferrer" className="text-blue-600 underline">http://www.privacyshield.gov/list</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">International Transfers</h2>
            <p>
              With effect from 16 July 2020, as a result of a decision of the Court of Justice of the European Union, where the Company transfers Employee Personal Data to other recipients outside of the EU, UK or EEA, the Company has entered into EU Commission-approved Model Contractual Clauses with the recipient, which require the recipient to treat the Personal Data in accordance with all applicable Data Privacy Requirements. The Company does not currently rely on EU-US or Swiss-US Privacy Shield certification for cross-border transfers of Personal Data.
            </p>
            <p className="mt-3 mb-2">
              In addition to the protections provided under other sections of this Data Privacy Policy, the Company will provide the following protections for personal data transferred from the EU, UK or Switzerland to the U.S.:
            </p>

            <div className="space-y-4 pl-2">
              <div>
                <strong className="text-slate-900 block mb-1">Choice</strong>
                <p>
                  You will be offered a clear, conspicuous, and readily available mechanism to choose (opt out) whether your personal information is (1) to be disclosed to a third party (other than a third party acting as an agent to perform tasks on behalf of and under the instruction of the Company or (2) to be used for a purpose that is materially different than or incompatible with the purpose for which it was originally utilized or subsequently authorized by the individual.
                </p>
                <p className="mt-2">
                  Additionally, you will be offered a similar choice mechanism to give affirmative or explicit (opt in) choice whether your sensitive personal information is to be disclosed to a third party or used for a purpose other than the purposes for which it was originally collected or subsequently authorized by the individual by opt-in choice. However, explicit (opt in) choice is not required when the disclosure of the sensitive personal information is (1) in the vital interests of the individual or another person; (2) necessary for the establishment of legal claims or defenses; (3) required to provide medical care or diagnosis; (4) necessary to carry out the organization’s obligations in the field of employment law, or (5) related to personal information that is manifestly made public by the individual.
                </p>
              </div>

              <div>
                <strong className="text-slate-900 block mb-1">Transfer of Personal Data from the EU, UK, EEA or Switzerland to Processors in the U.S.</strong>
                <p>
                  The Company’s EU, UK and Swiss entities may transfer personal information to a processor in the United States solely for processing purposes. A “processor” is a third party who processes personal information on behalf of and in accordance with the instructions of the Company’s EU, UK and/or Swiss entities. When personal information is transferred from the EU, UK and/or Switzerland to the United States solely for processing purposes, the Company’s EU, UK and/or Swiss entities will comply with the applicable data protection laws including the EU General Data Protection Regulation (GDPR) and the Swiss Federal Act on Data Protection (FADP) and UK Data Protection Act 2018 (UKDPA), respectively and enter into a contract with the processor to ensure that the processor (1) acts only on instructions of the Company’s EU, UK and/or Swiss entities; (2) provides appropriate technical and organizational measures to protect the personal information against unlawful destruction or accidental loss, alteration, unauthorized disclosure or access; and understands whether onward transfers are allowed; and (3) assists the Company’s EU, UK and/or Swiss entities in responding to individuals exercising their rights under the Privacy Shield principles, taking into account the nature of the processing.
                </p>
              </div>

              <div>
                <strong className="text-slate-900 block mb-1">Onward Transfers to Third Party Agents</strong>
                <p>
                  After personal information is transferred from the EU, EEA, UK and/or Switzerland to Company entities in the United States, the Company may thereafter transfer the personal information to third parties acting as controllers. A “controller” is a person or organization which, alone or jointly with others, determines the purposes and means of the processing of personal information. Examples of third party controllers may include banks and healthcare providers, or management personnel in other Company offices outside of the U.S. When the Company makes such onward transfers to third party controllers, the Company will comply with the Privacy Shield notice and choice principles and enter into a contract with the third party controller that provides that (1) such personal information may be processed only for limited and specified purposes consistent with the consent provided by the individual; (2) the third party controller will provide the same level of protections as the Privacy Shield principles; (3) the third party controller will notify the Company if the third party can no longer meet its obligation to provide the same level of protection for the personal information as required by the Privacy Shield principles; and (4) upon such notice by the third party controller, the third party controller will cease processing the personal information and/or take reasonable and appropriate steps to remediate any unauthorized processing.
                </p>
              </div>

              <div>
                <strong className="text-slate-900 block mb-1">Onward Transfers to Public Authorities</strong>
                <p>
                  The Company may be required to disclose Personal Data in response to lawful requests by public authorities to comply with national security or law enforcement requirements.
                </p>
              </div>

              <div>
                <strong className="text-slate-900 block mb-1">Verification</strong>
                <p className="mb-2">
                  The Company has verified and will verify annually through self-assessment that the attestations and assertions made about its Privacy Shield privacy practices are true and that those privacy practices have been implemented as represented and in accordance with the Privacy Shield principles. This verification has been and will be signed by an officer of the Company or other authorized representative of the Company at least once a year and is available upon request by individuals or in the context of an investigation or a complaint about non-compliance. The verification includes the following:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>That the Policy is accurate, comprehensive, prominently displayed, completely implemented and accessible;</li>
                  <li>That the Policy conforms to the Privacy Shield Principles;</li>
                  <li>That individuals are informed of any in-house arrangements for handling complaints and of the independent mechanisms through which they may pursue complaints;</li>
                  <li>That it has in place procedures for training employees in the implementation of this Policy and disciplining them for failure to follow it;</li>
                  <li>That it has in place internal procedures for periodically conducting objective reviews of compliance with the above.</li>
                </ul>
              </div>

              <div>
                <strong className="text-slate-900 block mb-1">Recourse Mechanisms For Personal Data Transferred Under Privacy Shield</strong>
                <p>
                  Inquiries or complaints regarding transfers of personal data from the EU, UK or Switzerland to the U.S. pursuant to Privacy Shield should be directed to our Director of Security and Compliance by e-mail at <a href="mailto:security@ibex.co" className="text-blue-600 underline">security@ibex.co</a>.
                </p>
                <p className="mt-2">
                  If a complaint remains unresolved, EU residents should contact the state or national data protection authority in the jurisdiction where they reside for resolution. A listing of the EU Data Protection Authorities (DPAs) is located at:{" "}
                  <a href="http://ec.europa.eu/justice/data-protection/article-29/structure/data-protection-authorities/index_en.htm" target="_blank" rel="noreferrer" className="text-blue-600 underline break-all">http://ec.europa.eu/justice/data-protection/article-29/structure/data-protection-authorities/index_en.htm</a>.
                </p>
                <p className="mt-2">
                  Individuals in Switzerland should contact the Swiss Federal Data Protection and Information Commissioner (the Commissioner) for resolution. Information regarding the Commissioner is located at:{" "}
                  <a href="https://www.edoeb.admin.ch/?lang=en" target="_blank" rel="noreferrer" className="text-blue-600 underline">https://www.edoeb.admin.ch/?lang=en</a>.
                </p>
                <p className="mt-2">
                  Individuals in the UK should contact the UK’s Information Commissioner’s Office (the ICO). Information about the ICO is located at{" "}
                  <a href="https://www.ico.org.uk" target="_blank" rel="noreferrer" className="text-blue-600 underline">www.ico.org.uk</a>.
                </p>
                <p className="mt-2">
                  The Company will cooperate with the DPAs, the ICO and/or the Commissioner and comply with the advice of the DPAs, the ICO and/or Commissioner. In the event that the DPAs, the ICO and/or the Commissioner determines that the Company did not comply with this Policy or Privacy Shield principles, the Company will take appropriate steps to address any adverse effects and to promote future compliance, comply with any advice given by the DPAs, the ICO and/or the Commissioner with regard to data transferred from the EU, UK and/or Switzerland where the DPAs, the ICO and/or the Commissioner has determined that the Company needs to take specific remedial or compensatory measures for the benefit of individuals affected by any non-compliance with this Policy or the Privacy Shield principles, and provide the DPAs, the ICO and/or the Commissioner with written confirmation that such action has be taken.
                </p>
                <p className="mt-2">
                  Under certain conditions specified by the Privacy Shield Privacy Principles, you may also be able to invoke binding arbitration to resolve your complaints.
                </p>
              </div>

              <div>
                <strong className="text-slate-900 block mb-1">Enforcement</strong>
                <p>
                  The Company is also subject to the investigatory and enforcement powers of the United States Federal Trade Commission.
                </p>
              </div>

              <div>
                <strong className="text-slate-900 block mb-1">Liability</strong>
                <p>
                  In the context of an onward transfer of personal information, the Company has responsibility for the processing of personal information it receives under the Privacy Shield and subsequently transfers to a third party agent. The Company will remain liable under the Privacy Shield principles if its third party agent processes such personal information in a manner inconsistent with the Privacy Shield principles, unless the Company proves that it is not responsible for the event giving rise to the damage.
                </p>
              </div>

              <div>
                <strong className="text-slate-900 block mb-1">Training</strong>
                <p>
                  All employees who handle personal data transferred from the EU, UK or Switzerland to the U.S. will receive training regarding the data privacy principles and procedures under Privacy Shield Principles and this Policy.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Privacy Rights of California Residents</h2>
            <p>
              Pursuant to Californian Civil Code Section 1798.83, California residents have the right to request certain information regarding our disclosure of personal information to third parties for their direct marketing purposes. To make such a request, please send an email to our Director of Security and Compliance by e-mail at <a href="mailto:security@ibex.co" className="text-blue-600 underline">security@ibex.co</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Data Security</h2>
            <p className="mb-3">
              The Company takes the security of personal data seriously. The Company has internal policies and technical measures in place to protect personal data against loss, accidental destruction, misuse or disclosure. Such internal policies and technical measures include:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
              <li>The use of pseudonymization and encryption of personal data where appropriate;</li>
              <li>Procedures and controls to ensure the ongoing confidentiality, integrity, availability and resilience of processing systems and services;</li>
              <li>Procedures and controls to restore the availability and access to personal data in a timely manner in the event of a physical or technical incident;</li>
              <li>Procedures for regularly testing, assessing and evaluating the effectiveness of technical and organizational measures for ensuring the security of the processing; and</li>
              <li>Procedures to ensure that data is not accessed, except by employees in the proper performance of their duties.</li>
            </ul>
            <p>
              For site security purposes and to ensure that this service remains available to all users, this computer system employs software programs to monitor network traffic to identify unauthorized attempts to upload or change information, or otherwise cause damage to the information on our websites. Unauthorized attempts to upload information or change information on this service are strictly prohibited and may be punishable under the Computer Fraud and Abuse Act of 1986.
            </p>
            <p className="mt-3">
              The Company retains personal information only for the period of time necessary to meet the purposes for which it was collected, to fulfil the legitimate business interests of the Company, and to comply with any data retention laws or legal requirements. For example,
            </p>
            <p className="mt-2">
              When the Company engages third parties to process personal data on its behalf, such third parties are required by contract to process the personal data based on the Company’s written instructions, are under a duty of confidentiality, and are required to implement appropriate technical and organizational measures to ensure the security of the personal data.
            </p>
            <p className="mt-2">
              When the Company shares personal information of EU, EEA, UK or Swiss residents with affiliated companies, vendors, and business customers located outside of the EU, EEA, UK or Switzerland, such as the U.S., the Company uses appropriate safeguards such as standard contract clauses to protect the personal information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Changes to Our Privacy Policy</h2>
            <p>
              It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we handle personal information, we will provide notice of the changes on the website home page.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Questions and Concerns</h2>
            <p>
              Any questions or concerns regarding how the Company processes personal information should be directed to our Director of Security and Compliance by e-mail at <a href="mailto:security@ibex.co" className="text-blue-600 underline">security@ibex.co</a>. Dispute resolution: If for some reason you believe this site has not adhered to these principles, please notify James Ferrato, Chief Information Officer, at <a href="mailto:jim.ferrato@ibex.co" className="text-blue-600 underline">jim.ferrato@ibex.co</a>. If our web pages are not fully in compliance with our stated policies, they will be corrected.
            </p>
            <p className="mt-3">
              For your convenience, you may contact our European Local Representative as required under GDPR Article 27 at:{" "}
              <a href="https://verasafe.com/public-resources/contact-data-protection-representative" target="_blank" rel="noreferrer" className="text-blue-600 underline break-all">https://verasafe.com/public-resources/contact-data-protection-representative</a>
            </p>
            <p className="mt-2">
              or at the following address: VeraSafe Netherlands BV, Keizersgracht 391 A, 1016 EJ Amsterdam, The Netherlands.
            </p>
            <p className="mt-2">
              Our Local Representative in the United Kingdom can be reached at:{" "}
              <a href="https://verasafe.com/public-resources/contact-data-protection-representative" target="_blank" rel="noreferrer" className="text-blue-600 underline break-all">https://verasafe.com/public-resources/contact-data-protection-representative</a>
            </p>
            <p className="mt-2">
              or at the following address: VeraSafe United Kingdom Ltd., 37 Albert Embankment, London SE1 7TL, United Kingdom.
            </p>
            <p className="mt-3">
              EU, EEA, UK and Swiss residents also have the right to lodge a complaint with the local or national data protection authority in the jurisdiction where they reside. A listing of the EU Data Protection Authorities (“DPAs”) is located at:{" "}
              <a href="http://ec.europa.eu/justice/data-protection/article-29/structure/data-protection-authorities/index_en.htm" target="_blank" rel="noreferrer" className="text-blue-600 underline break-all">http://ec.europa.eu/justice/data-protection/article-29/structure/data-protection-authorities/index_en.htm</a>.
            </p>
            <p className="mt-2">
              Individuals in Switzerland should contact the Swiss Federal Data Protection and Information Commissioner (the Commissioner) for resolution. Information regarding the Commissioner is located at:{" "}
              <a href="https://www.edoeb.admin.ch/?lang=en" target="_blank" rel="noreferrer" className="text-blue-600 underline">https://www.edoeb.admin.ch/?lang=en</a>.
            </p>
            <p className="mt-2">
              Individuals in the UK should contact the UK’s Information Commissioner’s Office (the ICO). Information about the ICO is located at{" "}
              <a href="https://www.ico.org.uk" target="_blank" rel="noreferrer" className="text-blue-600 underline">www.ico.org.uk</a>.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}