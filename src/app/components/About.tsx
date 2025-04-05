"use client";

const About = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-20 text-gray-800"
    >
      <div className="max-w-5xl text-center">
        <h2 className="mb-6 text-4xl font-bold text-blue-700">
          Where Creativity Meets Technology &mdash; Building the Future, Today!
        </h2>
        <p className="mb-6 text-lg leading-relaxed">
          At <strong>TECHYUG</strong>, we are more than just developers &mdash;
          we are creators, problem-solvers, and digital architects dedicated to
          building high-performing websites, dynamic apps, and intuitive digital
          experiences.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          From college-level projects, research projects, and startups to global
          enterprises, our expertise spans across diverse industries. We help
          brands establish a strong digital presence with cutting-edge web
          development, UI/UX design, mobile app solutions, and content
          strategies.
        </p>
        <p className="mb-8 text-lg leading-relaxed">
          At <strong>TECHYUG</strong>, we don&rsquo;t just develop &mdash; we
          innovate, strategize, and engineer solutions that redefine the digital
          landscape.
        </p>

        <h3 className="mb-4 text-2xl font-semibold text-blue-600">
          💡 Why Choose Us?
        </h3>
        <ul className="mx-auto max-w-3xl list-inside list-disc space-y-3 text-left text-base sm:text-lg">
          <li>
            ✅ <strong>Expert-Led Digital Transformation</strong> &mdash; Backed
            by a skilled team of developers, designers, and strategists.
          </li>
          <li>
            ✅ <strong>Custom-Tailored Solutions</strong> &mdash; Scalable,
            high-performance websites and apps that grow with your business.
          </li>
          <li>
            ✅ <strong>Innovation-First Approach</strong> &mdash; Leveraging the
            latest technology to create seamless digital experiences.
          </li>
          <li>
            ✅ <strong>Client-Driven Success</strong> &mdash; Your goals are at
            the heart of everything we build.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
