import type { Metadata } from "next";
import Link from "next/link";

import { LegalShell } from "@/components/legal-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.company} collects, uses and protects information in ${site.product}.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <LegalShell
      title="Privacy Policy"
      summary={`This policy explains what information ${site.company} collects through ${site.product}, why we collect it, who we share it with, and the choices you have.`}
    >
      <h2>1. Who we are</h2>
      <p>
        {site.company} (referred to as we, us or our) operates {site.product}, a
        business management system used by our staff, suppliers and customers to
        handle orders, inventory, dispatch and related operations. We are the
        controller of the personal information described in this policy.
      </p>
      <p>
        For any privacy question, contact us at{" "}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
      </p>

      <h2>2. Information we collect</h2>

      <h3>2.1 Account information</h3>
      <p>
        When an account is created for you, we collect your name, email address,
        phone number, role, and the organisation you belong to. Passwords are
        stored only as salted hashes and are never visible to us in plain text.
      </p>

      <h3>2.2 Business and transaction records</h3>
      <p>
        The system stores the records you create while working: purchase orders,
        material requests, quotations, dispatch orders, receipts, supplier and
        customer details, and the audit trail of who changed what and when.
      </p>

      <h3>2.3 WhatsApp messaging data</h3>
      <p>
        Where you have given us your WhatsApp number, we send business
        notifications through the WhatsApp Business Platform provided by Meta. We
        store the phone number the message was addressed to, the message content
        and template used, the delivery status returned by Meta, and any reply you
        send back to our business number. See section 4 for detail.
      </p>

      <h3>2.4 Technical information</h3>
      <p>
        We record IP address, device identifier, browser or app version, and
        timestamps of sign in activity. This is used for security, abuse
        prevention and troubleshooting.
      </p>

      <h2>3. How we use information</h2>
      <ul>
        <li>To provide, operate and secure {site.product}.</li>
        <li>
          To send transactional notifications you have asked for, such as an order
          confirmation, a proforma invoice or a dispatch update.
        </li>
        <li>To authenticate users and enforce role based access control.</li>
        <li>
          To keep an audit trail, which we need for accounting accuracy and for
          resolving disputes.
        </li>
        <li>To meet tax, accounting and other legal obligations.</li>
        <li>To detect, investigate and prevent fraud or misuse.</li>
      </ul>
      <p>
        <strong>We do not sell personal information</strong>, and we do not use
        your data for advertising or profiling.
      </p>

      <h2>4. WhatsApp business messaging</h2>
      <p>
        We use the WhatsApp Business Platform to deliver operational messages to
        the number you provide. Messages are sent from our registered business
        number {site.whatsappNumber}.
      </p>
      <ul>
        <li>
          <strong>What we send:</strong> transactional and utility messages only,
          for example a proforma invoice, an order status change, or a dispatch
          notification. We do not send marketing messages without separate
          consent.
        </li>
        <li>
          <strong>Consent:</strong> we message you only where you have provided
          your number for this purpose, or where you have started a conversation
          with us.
        </li>
        <li>
          <strong>Meta processing:</strong> message delivery is carried out by
          Meta Platforms. Meta processes the phone number and message content in
          order to deliver it, under the Meta privacy terms.
        </li>
        <li>
          <strong>Opting out:</strong> reply STOP to any message, or email{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>, and we
          will stop sending WhatsApp messages to that number.
        </li>
      </ul>

      <h2>5. Legal bases for processing</h2>
      <p>
        Where data protection law requires a legal basis, we rely on: performance
        of a contract with you or your organisation, our legitimate interest in
        running and securing the business, your consent for optional messaging,
        and compliance with a legal obligation for financial records.
      </p>

      <h2>6. Sharing and disclosure</h2>
      <p>We share information only in these circumstances:</p>
      <ul>
        <li>
          <strong>Service providers</strong> who host or support the system, such
          as our cloud hosting and storage providers, acting on our instructions.
        </li>
        <li>
          <strong>Meta Platforms</strong>, strictly to deliver the WhatsApp
          messages described in section 4.
        </li>
        <li>
          <strong>Your own organisation</strong>, since colleagues with the
          appropriate role can see the records you create in the system.
        </li>
        <li>
          <strong>Authorities</strong>, where we are legally required to disclose
          information.
        </li>
      </ul>

      <h2>7. Data retention</h2>
      <p>
        Account records are kept for as long as the account is active. Business and
        financial records are retained for the period required by applicable tax
        and company law, after which they are deleted or anonymised. WhatsApp
        message logs are retained for up to 24 months for delivery auditing, then
        removed.
      </p>

      <h2>8. Security</h2>
      <p>
        Access is restricted by role, traffic is encrypted in transit using TLS,
        passwords are hashed, and administrative access to production systems is
        limited and logged. No system can be guaranteed perfectly secure, but we
        review these controls regularly.
      </p>

      <h2>9. Your rights</h2>
      <p>
        Subject to local law, you may request access to the personal information
        we hold about you, correction of anything inaccurate, deletion of your
        data, restriction of processing, a copy of your data in a portable format,
        or you may object to processing based on legitimate interest.
      </p>
      <p>
        To exercise any of these, email{" "}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>. We respond
        within 30 days.
      </p>

      <h2>10. Deleting your data</h2>
      <p>
        Full instructions, including what is removed and what we are obliged to
        keep, are on the{" "}
        <Link href="/data-deletion">data deletion page</Link>.
      </p>

      <h2>11. International transfers</h2>
      <p>
        Our infrastructure and some of our providers operate outside your country
        of residence. Where information is transferred across borders, we rely on
        appropriate safeguards offered by those providers.
      </p>

      <h2>12. Children</h2>
      <p>
        {site.product} is a business tool and is not directed at anyone under 18.
        We do not knowingly collect information from children.
      </p>

      <h2>13. Changes to this policy</h2>
      <p>
        We may update this policy as the service changes. The revised version is
        posted on this page with a new effective date, and material changes are
        communicated to account holders directly.
      </p>

      <h2>14. Contact us</h2>
      <p>
        {site.company}
        <br />
        Email: <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
        <br />
        WhatsApp: {site.whatsappNumber}
      </p>
    </LegalShell>
  );
}
