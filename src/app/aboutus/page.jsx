// src/components/AboutUs.js
"use client";
import { useRef, useState } from 'react';
import '../../styles/aboutus.css';
import Footer from '@/components/Footer';

const AboutUs = () => {
  const services = [
    { id: "1", name: "Litigation", value: "Our litigation practice represents clients across civil, commercial, and constitutional matters before trial courts, District Courts, High Courts, and the Supreme Court of India. We handle the complete lifecycle of a dispute — from initial case assessment and drafting of plaints, written statements, and interim applications, to evidence and cross-examination during trial, and finally appeals and revisions before higher forums. Our approach combines meticulous legal research with strong courtroom advocacy, ensuring that every pleading is precise and every argument well-grounded in precedent. We regularly appear in matters involving contractual disputes, recovery suits, property and title disputes, injunctions, and writ petitions, and we place equal emphasis on strategic case management — anticipating procedural hurdles, managing timelines, and exploring settlement opportunities where they serve our clients' interests. Whether representing individuals, businesses, or institutions, our goal is to secure favourable outcomes efficiently while minimizing the disruption litigation can cause to our clients' personal and professional lives." },
    { id: "2", name: "Intellectual Property Rights", value: "We provide comprehensive, end-to-end IPR services covering trademarks, copyrights, patents, industrial designs, and trade secrets. On the protection side, our work spans trademark and patent searches, filing and prosecution, opposition and cancellation proceedings, and portfolio management to ensure our clients' creative and technical assets remain secure over time. On the commercial side, we draft and negotiate licensing agreements, franchise arrangements, and technology transfer deals that allow businesses to monetize their IP effectively. When rights are infringed, we pursue enforcement through infringement suits, passing-off actions, anti-counterfeiting measures, and takedown proceedings, both in court and before regulatory bodies. We work with a diverse client base — from startups and individual creators to established corporations — advising on IP strategy from the earliest stages of innovation through to international protection and enforcement, helping clients turn their ideas into durable, protected business value." },
    { id: "3", name: "Employment and Labour Laws", value: "Our employment and labour law practice advises both employers and employees across the full spectrum of workplace legal issues. For organizations, we draft and review employment contracts, HR policies, employee handbooks, and disciplinary frameworks, and advise on compliance with statutes such as the Industrial Disputes Act, the Prevention of Sexual Harassment (POSH) Act, and the newly consolidated labour codes on wages, social security, and industrial relations. We conduct workplace investigations with sensitivity and impartiality, and guide employers through terminations, layoffs, and restructuring in a manner that limits legal exposure. For employees, we represent individuals facing wrongful termination, unfair disciplinary action, denial of statutory benefits, or workplace harassment, pursuing remedies before labour courts, industrial tribunals, and internal complaints committees. Throughout, our objective is to help organizations build fair, compliant workplace practices while ensuring individuals are able to assert their rights effectively when those practices fall short." },
    { id: "4", name: "Corporate, Merger & Acquisition and Compliance", value: "We support businesses through every stage of the corporate lifecycle, from incorporation and structuring to ongoing governance and complex transactions. Our corporate advisory work includes entity formation, shareholder and joint venture agreements, corporate governance frameworks, and day-to-day regulatory compliance under the Companies Act, SEBI regulations, and FEMA. On the transactional side, we advise on mergers, acquisitions, demergers, and restructurings — conducting legal due diligence, structuring deals for tax and regulatory efficiency, and drafting and negotiating share purchase agreements, asset transfer agreements, and shareholder arrangements. We also assist with post-transaction integration and ongoing compliance reporting, ensuring that our clients meet their statutory obligations well beyond deal closing. Our approach is commercially minded: we work closely with management and boards to identify risk early and structure transactions that align with the client's broader business strategy, whether they are a growing startup raising capital or an established company pursuing acquisitions." },
    { id: "5", name: "Dispute Resolution & Arbitration", value: "Recognizing that litigation is not always the most efficient path to resolution, we offer a robust alternative dispute resolution practice spanning domestic and international arbitration, mediation, and conciliation. We assist clients in drafting effective arbitration and dispute resolution clauses at the contract stage to avoid ambiguity later, and represent parties before ad hoc and institutional arbitral tribunals in commercial, construction, and cross-border disputes. Our team also handles proceedings under the Arbitration and Conciliation Act, including applications for interim relief, challenges to arbitral awards, and enforcement of both domestic and foreign awards before Indian courts. Where appropriate, we guide clients through mediation and conciliation processes to reach negotiated settlements that preserve business relationships and reduce costs and delay. Our focus throughout is on securing efficient, enforceable outcomes tailored to each client's specific commercial context and risk tolerance." },
    { id: "6", name: "Matrimonial Laws", value: "Our matrimonial law practice handles sensitive family matters with the discretion, empathy, and legal rigour they demand. We advise and represent clients in divorce and judicial separation proceedings, maintenance and alimony claims, child custody and guardianship disputes, and division of matrimonial property, working under the personal laws applicable to different religious and community groups as well as the Special Marriage Act where relevant. Beyond contested litigation, we assist clients in exploring mutual consent divorce, settlement negotiations, and mediation, recognizing that many family disputes benefit from resolution outside the courtroom wherever possible. We also advise on ancillary matters such as domestic violence protection, maintenance under Section 125 CrPC/BNSS, and transfer petitions. Throughout every matter, our priority is to protect our clients' legal rights and the wellbeing of any children involved, while helping families navigate a difficult period with as much stability and dignity as possible." },
    { id: "7", name: "White Collar Crimes", value: "We defend individuals, promoters, and corporations in matters involving economic offences and regulatory violations, including fraud, cheating, money laundering, bribery and corruption, and corporate misconduct. Our practice covers investigations and proceedings under statutes such as the Prevention of Money Laundering Act (PMLA), the Prevention of Corruption Act, the Companies Act, and the Indian Penal Code/Bharatiya Nyaya Sanhita provisions on economic offences, as well as inquiries conducted by agencies including the Enforcement Directorate (ED), Serious Fraud Investigation Office (SFIO), and Central Bureau of Investigation (CBI). We assist clients from the earliest stages of an investigation — advising on responses to summons and search operations, and representing them during interrogation — through to bail applications, quashing petitions, and trial. Given the reputational and personal stakes involved in white collar matters, we combine careful strategic counsel with discreet, responsive representation aimed at protecting our clients' liberty, assets, and standing." },
    { id: "8", name: "Competition Law", value: "Our competition law practice advises businesses on compliance with the Competition Act, 2002, helping them operate confidently within India's evolving antitrust framework. We assist with merger notifications and combination filings before the Competition Commission of India (CCI), advise on agreements and business practices to avoid anti-competitive arrangements and abuse of dominant position, and conduct internal compliance audits to identify and mitigate antitrust risk before it becomes a regulatory issue. When disputes arise, we represent clients in investigations and proceedings before the CCI and in appeals before the National Company Law Appellate Tribunal (NCLAT) and higher courts. As regulatory scrutiny in India intensifies across sectors — including digital markets and e-commerce — we help businesses of all sizes understand their obligations and structure their commercial arrangements to remain compliant while pursuing legitimate growth strategies." },
    { id: "9", name: "Privacy Laws & Data Protection", value: "As India's data protection regime evolves under the Digital Personal Data Protection Act, 2023 and related rules, we help organizations build robust, compliant data governance frameworks suited to their scale and sector. Our services include drafting and reviewing privacy policies, data processing and data sharing agreements, and consent frameworks, as well as advising on cross-border data transfer requirements and sector-specific obligations such as those under RBI and SEBI guidelines. We assist clients in preparing for and responding to data breaches, including notification obligations and liaison with regulators, and conduct data protection impact assessments and compliance audits to identify gaps before they become liabilities. Whether advising a startup building its first privacy policy or a larger enterprise overhauling its data governance structure, our aim is to help clients manage personal data responsibly, build user trust, and stay ahead of a rapidly changing regulatory landscape." }
  ];

  const [selectedService, setSelectedService] = useState(services[0]);
  const descriptionRef = useRef(null);

  const handleSelectService = (service) => {
    setSelectedService(service);
    if (window.matchMedia('(max-width: 1024px)').matches) {
      descriptionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="pt-12 pb-28 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Main Heading Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
          Justice Served, Your Rights Protected
        </h2>
        <p className="mt-2 text-3xl font-medium tracking-tight text-gray-800">
          Welcome to <span className='text-4xl font-extrabold' style={{ fontFamily: "Cormorant Garamond, serif" }}>Mahamaya Law</span>
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 md:mx-auto">
          At Mahamaya Law, we provide comprehensive legal solutions tailored to your unique needs. From personal legal matters to business disputes, our expertise guides you to justice.
        </p>
      </div>

      {/* Our Services Section */}
      <div className="our-services flex flex-col md:flex-row mt-20 max-w-[1600px] mx-auto px-4 md:px-12">
        <div className="all-services-card p-10 bg-white border-1.5 text-wrap">
          <p className="text-2xl font-bold text-gray-900 pb-3" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            Our Services
          </p>
          <div className="service" >
            {services.map((service, index) => (
              <div key={index}>
                <hr />
                <div className="services py-3"
                  onClick={() => handleSelectService(service)}>
                  <span >{service.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="service-description py-12 md:py-6 ps-3 pe-3 md:ps-16 md:pe-6" ref={descriptionRef}>
          <p className='service-title pb-6 text-3xl font-extrabold' style={{ fontFamily: "Cormorant Garamond, serif" }}>{selectedService?.name}</p>
          <hr className='pb-8' />
          <div className="desc">
            {selectedService?.value}
          </div>
        </div>
        {/* <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="mt-4 text-lg text-gray-500">
              <strong>Corporate Law:</strong> Offering expert guidance on mergers, acquisitions, and legal compliance, we help businesses navigate the complexities of corporate law.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              <strong>Family Law:</strong> Handling sensitive issues with care, we provide assistance in divorce settlements, child custody, and adoption procedures.
            </p>
          </div>
          <div>
            <p className="mt-4 text-lg text-gray-500">
              <strong>Criminal Defense:</strong> From minor offenses to serious accusations, our defense team is equipped to protect your rights and seek justice.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              <strong>Property Disputes:</strong> We help resolve property-related legal matters efficiently, securing favorable outcomes for our clients.
            </p>
          </div>
        </div> */}
      </div>

      {/* Image Section */}
      {/* <div className="mt-12 flex items-center justify-center">
        <Image
          src="/images/MahamayaLawLogo.png"
          alt="Law Firm"
          className="w-full h-auto rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
        />
      </div> */}
    </div>
  );
};

export default AboutUs;
