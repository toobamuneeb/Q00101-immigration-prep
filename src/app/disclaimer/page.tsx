import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import React from 'react';

export default async function DisclaimerPage() {
  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect('/auth/login');
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>
      <p className="mb-4">Last updated: December 11, 2025</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Not Legal Advice</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <p className="font-bold text-yellow-800">Important Notice</p>
          <p className="text-yellow-700">
            ImmigrationPrep is a self-help software tool. We are not a law firm and do not provide legal advice. Information and guidance provided are for educational purposes only.
          </p>
        </div>
        <p className="mb-4">
          Your use of this site and any forms or information provided does not create an attorney–client relationship. For legal advice specific to your situation, consult a licensed immigration attorney.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Accuracy and Responsibility</h2>
        <p className="mb-4">
          You are responsible for reviewing, verifying, and submitting any forms to USCIS or other agencies. We strive for accuracy but cannot guarantee outcomes, processing times, or agency decisions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Form Versions and Policies</h2>
        <p className="mb-4">
          USCIS updates forms and policies periodically. We monitor updates, but you should always confirm the latest official requirements on the USCIS website before filing.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">No Guarantee of Approval</h2>
        <p className="mb-4">
          Completing forms through ImmigrationPrep does not guarantee application approval. Decisions are made solely by USCIS and other relevant authorities.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Use of Information</h2>
        <p className="mb-4">
          Information you enter is used to help populate your forms and provide guidance. Refer to our Privacy Policy for details on data handling and security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="mb-4">
          Questions about this disclaimer? Contact us at support@immigrationprep.com.
        </p>
      </section>
    </div>
  );
}

