"use client";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-20 text-gray-800"
    >
      <div className="w-full max-w-6xl text-center">
        <h2 className="mb-6 text-4xl font-bold text-blue-700">Our Portfolio</h2>
        <p className="mx-auto mb-10 max-w-3xl text-lg">
          Exceptional Websites, Unmatched Designs — explore some of our past
          work that showcases our capabilities in creativity, performance, and
          innovation.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Placeholder Cards */}
          <div className="rounded-xl bg-gray-100 p-6 shadow-md transition hover:shadow-xl">
            <div className="mb-4 flex h-40 items-center justify-center rounded-md bg-blue-100 text-lg font-bold text-blue-600">
              Project 1
            </div>
            <h3 className="mb-2 text-xl font-semibold">E-commerce Website</h3>
            <p>
              Responsive online store with cart functionality and modern UI.
            </p>
          </div>

          <div className="rounded-xl bg-gray-100 p-6 shadow-md transition hover:shadow-xl">
            <div className="mb-4 flex h-40 items-center justify-center rounded-md bg-blue-100 text-lg font-bold text-blue-600">
              Project 2
            </div>
            <h3 className="mb-2 text-xl font-semibold">Portfolio Website</h3>
            <p>
              Personal portfolio designed to highlight individual skills and
              achievements.
            </p>
          </div>

          <div className="rounded-xl bg-gray-100 p-6 shadow-md transition hover:shadow-xl">
            <div className="mb-4 flex h-40 items-center justify-center rounded-md bg-blue-100 text-lg font-bold text-blue-600">
              Project 3
            </div>
            <h3 className="mb-2 text-xl font-semibold">Startup Landing Page</h3>
            <p>
              Landing page with strong branding and high conversion potential.
            </p>
          </div>
        </div>

        <p className="mt-12 text-xl font-medium text-blue-700">
          🚀 More projects coming soon!
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
