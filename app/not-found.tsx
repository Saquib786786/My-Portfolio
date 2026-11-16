import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NF() {
  return (
    <main className="min-h-screen py-20 px-5 max-w-4xl mx-auto flex flex-col justify-center">
      <div className="border border-ink p-8 md:p-12 bg-paper">
        <p className="label text-cobalt font-mono uppercase">Error 404 · Resource Not Located</p>
        <h1 className="font-display text-6xl md:text-8xl mt-3">Page Not Found</h1>
        <p className="mt-4 text-base md:text-lg text-ink/80 leading-relaxed max-w-2xl">
          The link you followed may be broken, outdated, or the address may have been mistyped. All core pages on this portfolio are active, verified, and accessible through the directory below.
        </p>

        <div className="mt-8 pt-8 border-t border-ink/20 grid sm:grid-cols-2 gap-4">
          <Link
            href="/"
            className="p-4 border border-ink hover:bg-cobalt hover:text-paper transition block"
          >
            <h2 className="font-display text-xl">Homepage & Overview</h2>
            <p className="text-xs text-ink/70 mt-1">
              Return to the main page featuring live stats and core skills.
            </p>
          </Link>

          <Link
            href="/aboutus"
            className="p-4 border border-ink hover:bg-cobalt hover:text-paper transition block"
          >
            <h2 className="font-display text-xl">About Mohd Saquib</h2>
            <p className="text-xs text-ink/70 mt-1">
              Learn about engineering background, BSc IT degree, and experience.
            </p>
          </Link>

          <Link
            href="/projects"
            className="p-4 border border-ink hover:bg-cobalt hover:text-paper transition block"
          >
            <h2 className="font-display text-xl">Projects & Case Studies</h2>
            <p className="text-xs text-ink/70 mt-1">
              Review live applications, architecture breakdowns, and GitHub repositories.
            </p>
          </Link>

          <Link
            href="/contactus"
            className="p-4 border border-ink hover:bg-cobalt hover:text-paper transition block"
          >
            <h2 className="font-display text-xl">Contact & Inquiries</h2>
            <p className="text-xs text-ink/70 mt-1">
              Connect via email, LinkedIn, or GitHub for new roles and collaborations.
            </p>
          </Link>
        </div>

        <div className="mt-8 flex gap-4">
          <Link
            href="/"
            className="bg-cobalt text-paper px-6 py-3 label hover:bg-ink transition inline-block"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
