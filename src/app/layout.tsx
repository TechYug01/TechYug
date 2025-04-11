import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TECHYUG - AN ERA OF TECH",
  description:
    "At TECHNQ, we are more than just developers—we are creators, problem-solvers, and digital architects dedicated to building high-performing websites, designing websites as per the expectation, dynamic apps, and intuitive digital experiences. With a fusion of technology and creativity, we turn visionary ideas into scalable, ROI-driven solutions that empower businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
