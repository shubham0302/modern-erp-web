import type { Metadata } from "next";
import Link from "next/link";

import { LegalShell } from "@/components/legal-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Data Deletion",
  description: `How to request deletion of your personal data from ${site.product}.`,
  alternates: { canonical: "/data-deletion" },
};

const steps = [
  {
    title: "Send us the request",
    body: (
      <>
        Email{" "}
        <a href={`mailto:${site.contactEmail}?subject=Data%20deletion%20request`}>
          {site.contactEmail}
        </a>{" "}
        with the subject line <strong>Data deletion request</strong>. You can also
        send the request over WhatsApp to {site.whatsappNumber}.
      </>
    ),
  },
  {
    title: "Tell us who you are",
    body: (
      <>
        Include the full name on the account, the email address or phone number
        registered with us, and the organisation you are associated with. We need
        these to locate your records and to confirm the request is genuinely
        yours.
      </>
    ),
  },
  {
    title: "Confirm the request",
    body: (
      <>
        We reply to verify your identity, usually within 3 working days. This step
        protects you, since it stops another person from deleting your records.
      </>
    ),
  },
  {
    title: "We delete your data",
    body: (
      <>
        Once verified, we delete or anonymise your personal data within{" "}
        <strong>30 days</strong> and send written confirmation when it is done.
      </>
    ),
  },
];

export default function DataDeletion() {
  return (
    <LegalShell
      title="Delete your data"
      summary={`You can ask us to delete the personal information ${site.company} holds about you in ${site.product} at any time. This page explains exactly how to do that, what gets removed, and what we are legally required to keep.`}
    >
      <h2>How to request deletion</h2>

      <ol className="steps flex flex-col gap-4">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="flex gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5"
          >
            <span
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
              style={{
                background: "var(--primary)",
                color: "var(--primary-foreground)",
              }}
            >
              {index + 1}
            </span>
            <span>
              <strong className="block text-[0.95rem]">{step.title}</strong>
              <span className="mt-1.5 block text-sm leading-relaxed text-[var(--muted-foreground)]">
                {step.body}
              </span>
            </span>
          </li>
        ))}
      </ol>

      <h2>What gets deleted</h2>
      <ul>
        <li>Your user account, profile details and login credentials.</li>
        <li>Your phone number and email address held for notifications.</li>
        <li>
          Your WhatsApp message history with us, including delivery records and
          any replies you sent to our business number.
        </li>
        <li>Device identifiers, session records and sign in history.</li>
        <li>
          Any file or attachment you uploaded that is not part of a required
          financial record.
        </li>
      </ul>

      <h2>What we have to keep</h2>
      <p>
        Some records cannot be deleted on request, because company, tax and
        accounting law requires us to retain them for a fixed period. These
        include completed purchase orders, invoices, dispatch notes and payment
        records.
      </p>
      <p>
        Where we must keep such a record, we remove or replace the personal
        identifiers within it wherever the law allows, so the financial entry
        survives without continuing to identify you. These records are retained
        only for the statutory period and are then deleted.
      </p>

      <h2>Stopping messages without deleting your account</h2>
      <p>
        If you only want the WhatsApp notifications to stop, you do not need a
        full deletion. Reply <strong>STOP</strong> to any message from{" "}
        {site.whatsappNumber}, or email{" "}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>. We remove
        your number from the messaging list and your account stays active.
      </p>

      <h2>How long it takes</h2>
      <p>
        We acknowledge every request within 3 working days and complete verified
        deletions within 30 days. If a request is unusually complex and needs
        longer, we will tell you why and give a revised date. Backup copies are
        overwritten on our normal backup cycle, which completes within 90 days.
      </p>

      <h2>If you are not satisfied</h2>
      <p>
        Contact us first at{" "}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> and we will
        try to put it right. You also have the right to complain to your local
        data protection authority.
      </p>

      <h2>Related</h2>
      <p>
        For the full detail of what we collect and why, read the{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>. For the terms covering
        use of the service, read the{" "}
        <Link href="/terms-of-service">Terms of Service</Link>.
      </p>
    </LegalShell>
  );
}
