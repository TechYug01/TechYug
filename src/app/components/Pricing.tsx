"use client";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 py-20 text-gray-800"
    >
      <div className="w-full max-w-4xl text-center">
        <h2 className="mb-6 text-4xl font-bold text-blue-700">
          Plans & Pricing
        </h2>
        <p className="mb-8 text-lg">
          At <strong>TECHYUG</strong>, we understand that every project is
          unique. That&rsquo;s why we don&rsquo;t believe in one-size-fits-all
          pricing. Instead, we craft custom plans based on your exact needs,
          goals, and budget.
        </p>

        <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 text-left shadow-lg">
          <h3 className="mb-4 text-2xl font-semibold text-blue-600">
            📩 How It Works?
          </h3>
          <ul className="text-md list-inside list-decimal space-y-3 text-gray-700">
            <li>Fill out the contact form with your project requirements.</li>
            <li>Our team will reach out to schedule a Google Meet call.</li>
            <li>
              We&rsquo;ll discuss your vision, goals, and budget to craft the
              perfect plan for you.
            </li>
          </ul>

          <div className="mt-8 text-xl font-medium text-blue-700">
            💡 Let&rsquo;s build something amazing — just the way you envision
            it!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
