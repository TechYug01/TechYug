"use client";

const Services = () => {
  return (
    <section
      id="services"
      className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 py-20 text-gray-800"
    >
      <div className="w-full max-w-6xl text-center">
        <h2 className="mb-6 text-4xl font-bold text-blue-700">What We Offer</h2>
        <p className="mx-auto mb-10 max-w-3xl text-lg">
          At <strong>TECHYUG</strong>, we provide cutting&#45;edge digital
          solutions tailored to your business needs. Whether you&apos;re a
          startup, small business, or enterprise, we craft high&#45;quality
          digital products that are scalable, engaging, and results&#45;driven.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
            <h3 className="mb-2 text-xl font-semibold text-blue-600">
              🔹 Web Design
            </h3>
            <p>
              Transforming ideas into stunning, user&#45;friendly websites that
              captivate and convert.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
            <h3 className="mb-2 text-xl font-semibold text-blue-600">
              🔹 Web Development
            </h3>
            <p>
              Building high&#45;performance, scalable websites and web apps for
              businesses of all sizes.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
            <h3 className="mb-2 text-xl font-semibold text-blue-600">
              🔹 24/7 Free Support
            </h3>
            <p>
              Seamless customer assistance via Phone, Chat, and Email to ensure
              uninterrupted service.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
            <h3 className="mb-2 text-xl font-semibold text-blue-600">
              🔹 100% Responsive Websites
            </h3>
            <p>
              Crafting websites that adapt flawlessly across all devices for an
              enhanced user experience.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
            <h3 className="mb-2 text-xl font-semibold text-blue-600">
              🔹 Content Writing
            </h3>
            <p>
              Delivering compelling, SEO&#45;optimized content that engages,
              informs, and drives results.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
            <h3 className="mb-2 text-xl font-semibold text-blue-600">
              🔹 Logo Design & Branding
            </h3>
            <p>
              Creating memorable, impactful brand identities that resonate with
              your audience.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-xl font-medium">
            🚀 Let&apos;s build something exceptional together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
