import type { Metadata } from "next";
import Link from "next/link";

import { LegalShell } from "@/components/legal-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that govern use of ${site.product}, provided by ${site.company}.`,
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfService() {
  return (
    <LegalShell
      title="Terms of Service"
      summary={`These terms govern access to and use of ${site.product}. By using the service you agree to them, so please read them carefully.`}
    >
      <h2>1. Agreement to these terms</h2>
      <p>
        These Terms of Service form an agreement between you and {site.company}{" "}
        (referred to as we, us or our). By accessing or using {site.product}, the
        associated mobile and web applications, and any messages we send as part
        of the service, you agree to be bound by these terms. If you are using the
        service on behalf of an organisation, you confirm that you are authorised
        to accept these terms for that organisation.
      </p>

      <h2>2. The service</h2>
      <p>
        {site.product} is a business management system for the tile trade covering
        ordering, inventory, dispatch, supplier management and related workflows.
        We may add, change or remove features as the product develops. Where a
        change materially reduces functionality you rely on, we will give
        reasonable notice.
      </p>

      <h2>3. Accounts and access</h2>
      <ul>
        <li>
          Accounts are issued by an administrator of your organisation. You may
          not share your credentials or let another person use your account.
        </li>
        <li>
          You are responsible for activity carried out under your account, and you
          must tell us promptly at{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> if you
          suspect unauthorised access.
        </li>
        <li>
          Access is governed by the role assigned to you. Attempting to reach data
          or functions outside that role is a breach of these terms.
        </li>
      </ul>

      <h2>4. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the service for any unlawful or fraudulent purpose.</li>
        <li>
          Upload malicious code, or interfere with the operation, integrity or
          security of the service.
        </li>
        <li>
          Attempt to gain unauthorised access to any account, system or data,
          including by probing or scanning our infrastructure.
        </li>
        <li>
          Copy, resell, reverse engineer or create a derivative product from the
          service, except where that restriction is prohibited by law.
        </li>
        <li>
          Use the messaging features to send spam, or to send anything to a person
          who has not consented to hear from you.
        </li>
      </ul>

      <h2>5. Your data</h2>
      <p>
        You, or the organisation you belong to, retain ownership of the business
        records entered into the service. We process that data to provide the
        service and as described in our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>. You are responsible for
        the accuracy of what you enter and for having the right to provide any
        third party information, such as a customer phone number, that you put
        into the system.
      </p>

      <h2>6. WhatsApp and other notifications</h2>
      <p>
        The service can send operational notifications over WhatsApp, email and in
        app alerts. By providing a phone number, you confirm you are entitled to
        receive messages at it and that any third party number you supply was
        given to you with permission to be contacted. Message delivery depends on
        Meta Platforms and on the network of the recipient, so we cannot guarantee
        delivery or timing. You can stop WhatsApp messages at any time by replying
        STOP.
      </p>

      <h2>7. Availability and support</h2>
      <p>
        We aim to keep the service available continuously, but access may be
        interrupted for maintenance, updates or events outside our control. Unless
        a separate written agreement says otherwise, the service is provided
        without a guaranteed uptime commitment.
      </p>

      <h2>8. Fees</h2>
      <p>
        Where fees apply, they are set out in a separate commercial agreement with
        your organisation. Unpaid amounts may lead to suspension of access after
        reasonable notice.
      </p>

      <h2>9. Intellectual property</h2>
      <p>
        The software, design, branding and documentation of {site.product} remain
        the property of {site.company} and its licensors. These terms grant you a
        limited, non exclusive, non transferable right to use the service for your
        internal business purposes only.
      </p>

      <h2>10. Disclaimers</h2>
      <p>
        The service is provided on an as is and as available basis. To the extent
        permitted by law we exclude all implied warranties, including
        merchantability, fitness for a particular purpose and non infringement. We
        do not warrant that the service will be error free or uninterrupted.
      </p>

      <h2>11. Limitation of liability</h2>
      <p>
        To the extent permitted by law, we are not liable for indirect,
        incidental, special or consequential loss, or for loss of profit, revenue,
        goodwill or data. Our total aggregate liability arising out of or in
        connection with the service is limited to the amount paid for the service
        in the 12 months before the event giving rise to the claim.
      </p>

      <h2>12. Suspension and termination</h2>
      <p>
        We may suspend or terminate access if these terms are breached, if
        required by law, or if continued access poses a security risk. Your
        organisation may stop using the service at any time. On termination, we
        handle stored data as described in the retention section of the{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>, and you may request
        deletion through the{" "}
        <Link href="/data-deletion">data deletion page</Link>.
      </p>

      <h2>13. Changes to these terms</h2>
      <p>
        We may revise these terms from time to time. The updated version is posted
        here with a new effective date. Continued use of the service after a
        change takes effect means you accept the revised terms.
      </p>

      <h2>14. Governing law</h2>
      <p>
        These terms are governed by the laws of the Republic of Uganda, and the
        courts of Uganda have exclusive jurisdiction over any dispute, without
        affecting any mandatory consumer protection right available to you
        locally.
      </p>

      <h2>15. Contact us</h2>
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
